// Mr Mallorca Golf Control Panel Server
// Run: node control-panel-server.js
// Open: http://localhost:3010/control-panel

const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// ── Auto-load .env file (no dotenv package needed) ─────────────────────────
(function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if (eq < 1) return;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val; // don't override shell env
  });
  console.log('  .env loaded');
})();

const app = express();
const PORT = 3010;

// ── In-memory response cache ───────────────────────────────────────────────
const _cache = {};
function withCache(key, ttlMs, fn) {
  const hit = _cache[key];
  if (hit && Date.now() - hit.ts < ttlMs) return Promise.resolve(hit.data);
  return Promise.resolve(fn()).then(data => { _cache[key] = { data, ts: Date.now() }; return data; });
}

// ── OAuth client — redirect URI matches what is registered in Google Cloud ──
// Registered: http://localhost:3010/control-panel
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID,
  process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  'http://localhost:3010/control-panel'
);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function loadTokens() {
  const p = path.join(__dirname, 'token.json');
  if (!fs.existsSync(p)) return null;
  try {
    const tokens = JSON.parse(fs.readFileSync(p));
    oauth2Client.setCredentials(tokens);
    return tokens;
  } catch { return null; }
}

// ── 1. Kick off OAuth ──────────────────────────────────────────────────────
app.get('/auth/google', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/drive.readonly',
      'https://www.googleapis.com/auth/analytics.readonly',
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/tasks'
    ],
    prompt: 'consent'
  });
  res.redirect(url);
});

// ── 2. Control Panel — handles BOTH OAuth callback AND normal page load ────
app.get('/control-panel', async (req, res) => {
  // Google redirects back here with ?code= after login
  if (req.query.code) {
    try {
      const { tokens } = await oauth2Client.getToken(req.query.code);
      oauth2Client.setCredentials(tokens);
      fs.writeFileSync(path.join(__dirname, 'token.json'), JSON.stringify(tokens, null, 2));
    } catch (err) {
      console.error('OAuth token exchange failed:', err.message);
    }
    // Always redirect to clean URL after handling code
    return res.redirect('/control-panel');
  }
  // Normal page load
  const htmlPath = path.join(__dirname, 'control-panel-frontend.html');
  if (fs.existsSync(htmlPath)) {
    res.sendFile(htmlPath);
  } else {
    res.status(404).send('control-panel-frontend.html not found in repo root.');
  }
});

// ── 3. Auth check endpoint ─────────────────────────────────────────────────
app.get('/api/auth-status', (req, res) => {
  const tokens = loadTokens();
  res.json({ authenticated: !!tokens });
});

// ── 4. Logos — served from /public (no login needed) ──────────────────────
app.get('/api/logos', (req, res) => {
  const logoFiles = [
    { name: 'MMG_Logo_Green_Transparent.png',  label: 'Green Transparent' },
    { name: 'MMG_Logo_Green.png',               label: 'Green Solid' },
    { name: 'MMG_Logo_White_Transparent.png',  label: 'White Transparent' },
    { name: 'MMG_Logo_White.png',               label: 'White Solid' },
    { name: 'MMG_Logo_Black_Transparent.png',  label: 'Black Transparent' },
    { name: 'MMG_Logo_Black.png',               label: 'Black Solid' },
    { name: 'MMG_Logo_Grey_Transparent.png',   label: 'Grey Transparent' },
    { name: 'MMG_Logo_Grey.png',                label: 'Grey Solid' },
  ];

  const logos = logoFiles
    .filter(l => fs.existsSync(path.join(__dirname, 'public', l.name)))
    .map(l => ({
      name: l.name,
      label: l.label,
      url: '/' + l.name   // served by express.static from /public
    }));

  res.json({ logos, source: 'local' });
});

// ── 4b. Site health ────────────────────────────────────────────────────────
app.get('/api/site-health', async (req, res) => {
  const https = require('https');
  const start = Date.now();
  // Ping www. directly — mrmallorcagolf.com redirects there (Vercel config)
  // https.get does NOT follow redirects, so we'd get a false 301 "up" — use canonical
  try {
    await new Promise((resolve, reject) => {
      const r = https.get('https://www.mrmallorcagolf.com', { timeout: 8000 }, (res) => {
        // Any HTTP response (200, 301, 404…) means the server is reachable
        resolve(res.statusCode);
      });
      r.on('error', reject);
      r.on('timeout', () => { r.destroy(); reject(new Error('Timeout after 8s')); });
    });
    res.json({ status: 'up', responseTime: Date.now() - start });
  } catch (err) {
    res.json({ status: 'down', error: err.message, responseTime: Date.now() - start });
  }
});

// ── 4c. Vercel deployments ─────────────────────────────────────────────────
const VERCEL_PROJECT_ID = 'prj_jKsBp5Tq71xLnxnG8Bzw9tOlNFPn';
const VERCEL_TEAM_ID    = 'team_sg1zwtjioDoguQG4YJXBd6n6';

app.get('/api/vercel', async (req, res) => {
  const token = process.env.VERCEL_TOKEN;
  if (!token) return res.json({ error: 'VERCEL_TOKEN not set', hint: 'Add VERCEL_TOKEN=your_token to a .env file or set it in your shell before starting the server.' });
  try {
    const https = require('https');
    const data = await new Promise((resolve, reject) => {
      const opts = {
        hostname: 'api.vercel.com',
        path: `/v6/deployments?projectId=${VERCEL_PROJECT_ID}&teamId=${VERCEL_TEAM_ID}&limit=5`,
        headers: { Authorization: `Bearer ${token}` }
      };
      https.get(opts, r => {
        let body = '';
        r.on('data', c => body += c);
        r.on('end', () => resolve(JSON.parse(body)));
      }).on('error', reject);
    });
    const deploys = (data.deployments || []).map(d => ({
      uid:       d.uid,
      state:     d.state,       // READY | ERROR | BUILDING | QUEUED | CANCELED
      created:   d.createdAt,
      url:       d.url ? 'https://' + d.url : null,
      meta:      d.meta?.githubCommitMessage || d.meta?.gitlabCommitMessage || null
    }));
    res.json({ deploys, hookReady: !!process.env.VERCEL_DEPLOY_HOOK });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/vercel/deploy', async (req, res) => {
  const hook = process.env.VERCEL_DEPLOY_HOOK;
  if (!hook) return res.status(400).json({ error: 'VERCEL_DEPLOY_HOOK not set', hint: 'Create a deploy hook in Vercel → Project Settings → Git → Deploy Hooks, then add VERCEL_DEPLOY_HOOK=https://... to your env.' });
  try {
    const https = require('https');
    const url   = new URL(hook);
    await new Promise((resolve, reject) => {
      const r = https.request({ hostname: url.hostname, path: url.pathname + url.search, method: 'POST' }, resolve);
      r.on('error', reject);
      r.end();
    });
    res.json({ triggered: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── 5. GA4 ─────────────────────────────────────────────────────────────────
app.get('/api/ga4', async (req, res) => {
  if (!loadTokens()) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const days = parseInt(req.query.days) || 7;
    const cached = _cache['ga4-' + days];
    if (cached && Date.now() - cached.ts < 60*60*1000) {
      return res.json({ ...cached.data, fromCache: true });
    }
    const prevStart = days * 2;
    const analyticsdata = google.analyticsdata({ version: 'v1beta', auth: oauth2Client });
    const PROP = 'properties/529404785';

    const metrics = [
      { name: 'activeUsers' },
      { name: 'sessions' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' }
    ];

    const [curRes, prevRes, pagesRes, countryRes] = await Promise.all([
      analyticsdata.properties.runReport({
        property: PROP,
        requestBody: { dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }], metrics }
      }),
      analyticsdata.properties.runReport({
        property: PROP,
        requestBody: { dateRanges: [{ startDate: `${prevStart}daysAgo`, endDate: `${days+1}daysAgo` }], metrics }
      }),
      analyticsdata.properties.runReport({
        property: PROP,
        requestBody: {
          dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
          dimensions: [{ name: 'pagePath' }],
          metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }, { name: 'bounceRate' }],
          orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
          limit: 10
        }
      }),
      analyticsdata.properties.runReport({
        property: PROP,
        requestBody: {
          dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
          dimensions: [{ name: 'country' }],
          metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
          orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
          limit: 10
        }
      })
    ]);

    const cur  = curRes.data.rows?.[0]?.metricValues  || [];
    const prev = prevRes.data.rows?.[0]?.metricValues || [];

    const chg = (c, p) => {
      const cv = parseFloat(c?.value || 0), pv = parseFloat(p?.value || 0);
      if (pv === 0) return null;
      return parseFloat(((cv - pv) / pv * 100).toFixed(1));
    };

    const topPages = (pagesRes.data.rows || []).map(r => ({
      path:      r.dimensionValues[0].value,
      views:     parseInt(r.metricValues[0].value || 0),
      users:     parseInt(r.metricValues[1].value || 0),
      bounceRate: parseFloat(r.metricValues[2].value || 0).toFixed(0)
    }));

    const topCountries = (countryRes.data.rows || []).map(r => ({
      country:  r.dimensionValues[0].value,
      users:    parseInt(r.metricValues[0].value || 0),
      sessions: parseInt(r.metricValues[1].value || 0)
    }));

    const payload = {
      days,
      users:            parseInt(cur[0]?.value  || 0),
      usersChange:      chg(cur[0], prev[0]),
      sessions:         parseInt(cur[1]?.value  || 0),
      sessionsChange:   chg(cur[1], prev[1]),
      bounceRate:       parseFloat(cur[2]?.value || 0).toFixed(1),
      bounceRateChange: chg(cur[2], prev[2]),
      duration:         parseFloat(cur[3]?.value || 0).toFixed(0),
      durationChange:   chg(cur[3], prev[3]),
      topPages,
      topCountries,
      lastUpdated:      new Date().toISOString()
    };
    _cache['ga4-' + days] = { data: payload, ts: Date.now() };
    res.json(payload);
  } catch (err) {
    console.error('GA4:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── 5b. MailerLite ─────────────────────────────────────────────────────────
app.get('/api/mailerlite', async (req, res) => {
  const key = process.env.MAILERLITE_API_KEY;
  if (!key) return res.json({ error: 'MAILERLITE_API_KEY not set', hint: 'Add MAILERLITE_API_KEY to your .env file. Get it at MailerLite → Integrations → API.' });
  const cached = _cache['mailerlite'];
  if (cached && Date.now() - cached.ts < 60*60*1000) return res.json({ ...cached.data, fromCache: true });
  try {
    const https = require('https');
    const data = await new Promise((resolve, reject) => {
      const opts = {
        hostname: 'connect.mailerlite.com',
        path: '/api/subscribers?page=1&limit=1',
        headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json', 'Accept': 'application/json' }
      };
      https.get(opts, r => {
        let body = '';
        r.on('data', c => body += c);
        r.on('end', () => { try { resolve(JSON.parse(body)); } catch(e) { reject(e); } });
      }).on('error', reject);
    });
    const payload = {
      subscribers: data.meta?.total ?? data.total ?? data.subscribers_count ?? null,
      error: data.message || data.error?.message || (data.errors ? JSON.stringify(data.errors) : null) || null,
      _debug: process.env.NODE_ENV !== 'production' ? { keys: Object.keys(data), metaKeys: data.meta ? Object.keys(data.meta) : null } : undefined
    };
    _cache['mailerlite'] = { data: payload, ts: Date.now() };
    res.json(payload);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// ── 6a. Search Console — list verified sites (diagnostic) ─────────────────
app.get('/api/search-console-sites', async (req, res) => {
  if (!loadTokens()) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const sc = google.webmasters({ version: 'v3', auth: oauth2Client });
    const r  = await sc.sites.list();
    res.json({ sites: (r.data.siteEntry || []).map(s => ({ url: s.siteUrl, level: s.permissionLevel })) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── 6. Search Console ──────────────────────────────────────────────────────
app.get('/api/search-console', async (req, res) => {
  if (!loadTokens()) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const sc = google.webmasters({ version: 'v3', auth: oauth2Client });
    const days      = parseInt(req.query.days) || 28;
    const scCached  = _cache['sc-' + days];
    if (scCached && Date.now() - scCached.ts < 60*60*1000) return res.json({ ...scCached.data, fromCache: true });
    const today     = new Date();
    // SC data has a 2-3 day lag — using 'today' returns incomplete rows; use 3daysAgo as endDate
    const endDate   = new Date(+today - 3*24*60*60*1000).toISOString().split('T')[0];
    const startDate = new Date(+today - (days + 3)*24*60*60*1000).toISOString().split('T')[0];

    // Two clean calls — no orderBy (not supported in v3), no empty dimensions array
    const [queryRes, pageRes] = await Promise.all([
      sc.searchanalytics.query({
        siteUrl: 'sc-domain:mrmallorcagolf.com',
        requestBody: { startDate, endDate, dimensions: ['query'], rowLimit: 100 }
      }),
      sc.searchanalytics.query({
        siteUrl: 'sc-domain:mrmallorcagolf.com',
        requestBody: { startDate, endDate, dimensions: ['page'], rowLimit: 25 }
      })
    ]);

    const qRows = queryRes.data.rows || [];
    const pRows = pageRes.data.rows  || [];

    // Aggregate totals from query rows (most accurate)
    let impressions = 0, clicks = 0, posSum = 0;
    qRows.forEach(r => {
      impressions += r.impressions || 0;
      clicks      += r.clicks      || 0;
      posSum      += r.position    || 0;
    });
    const avgPos = qRows.length ? (posSum / qRows.length).toFixed(1) : '0.0';
    const ctr    = impressions   ? ((clicks / impressions) * 100).toFixed(1) : '0.0';

    // Sort client-side by clicks desc
    const topQueries = qRows
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
      .map(r => ({
        query: r.keys[0], clicks: r.clicks, impressions: r.impressions,
        position: r.position?.toFixed(1),
        ctr: r.impressions ? ((r.clicks / r.impressions) * 100).toFixed(1) : '0.0'
      }));

    // Keyword opportunities: positions 5-15 with 50+ impressions — easy wins
    const opportunities = qRows
      .filter(r => r.position >= 5 && r.position <= 15 && r.impressions >= 50)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 10)
      .map(r => ({
        query: r.keys[0], position: r.position?.toFixed(1),
        impressions: r.impressions, clicks: r.clicks,
        ctr: r.impressions ? ((r.clicks / r.impressions) * 100).toFixed(1) : '0.0'
      }));

    const topPages = pRows
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
      .map(r => ({ page: r.keys[0].replace('https://mrmallorcagolf.com', '') || '/', clicks: r.clicks, impressions: r.impressions }));

    const scPayload = { days, impressions, clicks, ctr, position: avgPos, topQueries, opportunities, topPages, lastUpdated: new Date().toISOString() };
    _cache['sc-' + days] = { data: scPayload, ts: Date.now() };
    res.json(scPayload);
  } catch (err) {
    console.error('SearchConsole:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── 7. Tasks — Google Tasks API ───────────────────────────────────────────
app.get('/api/tasks', async (req, res) => {
  if (!loadTokens()) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const t = google.tasks({ version: 'v1', auth: oauth2Client });
    const r = await t.tasks.list({ tasklist: '@default', showCompleted: true, maxResults: 100 });
    const tasks = (r.data.items || []).map(t => ({
      id: t.id, title: t.title, status: t.status, notes: t.notes || '', due: t.due || null
    }));
    res.json({ tasks });
  } catch (err) {
    console.error('Tasks GET:', err.message);
    res.status(500).json({ error: err.message, tasks: [] });
  }
});

app.post('/api/tasks/add', async (req, res) => {
  if (!loadTokens()) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const t = google.tasks({ version: 'v1', auth: oauth2Client });
    const r = await t.tasks.insert({
      tasklist: '@default',
      requestBody: { title: req.body.title, notes: req.body.notes || '' }
    });
    res.json({ task: { id: r.data.id, title: r.data.title, status: r.data.status, notes: r.data.notes || '' } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/tasks/:id/complete', async (req, res) => {
  if (!loadTokens()) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const t = google.tasks({ version: 'v1', auth: oauth2Client });
    const current = await t.tasks.get({ tasklist: '@default', task: req.params.id });
    const newStatus = current.data.status === 'completed' ? 'needsAction' : 'completed';
    await t.tasks.update({ tasklist: '@default', task: req.params.id, requestBody: { ...current.data, status: newStatus } });
    res.json({ status: newStatus });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  if (!loadTokens()) return res.status(401).json({ error: 'Not authenticated' });
  try {
    const t = google.tasks({ version: 'v1', auth: oauth2Client });
    await t.tasks.delete({ tasklist: '@default', task: req.params.id });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── 9. Panel config (quick links + scripts) ───────────────────────────────
const PANEL_CONFIG_PATH = path.join(__dirname, 'control-panel-config.json');

app.get('/api/panel-config', (req, res) => {
  try { res.json(JSON.parse(fs.readFileSync(PANEL_CONFIG_PATH, 'utf8'))); }
  catch(e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/panel-config', (req, res) => {
  try {
    fs.writeFileSync(PANEL_CONFIG_PATH, JSON.stringify(req.body, null, 2), 'utf8');
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// ── 10. Backup ──────────────────────────────────────────────────────────────
const BACKUP_CONFIG_PATH = 'C:\\Users\\andyg\\Desktop\\cursor\\mmg-tools\\scripts\\backup-config.json';
const BACKUP_REPO_PATH   = 'C:\\Users\\andyg\\Desktop\\cursor\\claude-config-backup';
const BACKUP_SCRIPT_PATH = 'C:\\Users\\andyg\\Desktop\\cursor\\mmg-tools\\scripts\\Run-ClaudeBackup.ps1';

app.get('/api/backup/config', (req, res) => {
  try {
    const config = JSON.parse(fs.readFileSync(BACKUP_CONFIG_PATH, 'utf8'));
    res.json(config);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/backup/config', (req, res) => {
  try {
    fs.writeFileSync(BACKUP_CONFIG_PATH, JSON.stringify(req.body, null, 2), 'utf8');
    res.json({ ok: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/backup/status', (req, res) => {
  try {
    const { spawnSync } = require('child_process');
    // Use PowerShell + forward-slash path to avoid cmd.exe pipe/percent issues
    const repoPath = BACKUP_REPO_PATH.replace(/\\/g, '/');
    const r = spawnSync('powershell.exe', [
      '-NoProfile', '-NonInteractive', '-Command',
      `git -C '${repoPath}' log -1 '--format=%ci|||%s'`
    ], { encoding: 'utf8' });
    if (r.error) throw r.error;
    if (r.status !== 0) throw new Error(r.stderr || 'git log failed');
    const log = r.stdout.trim();
    const sep = log.indexOf('|||');
    const date = sep > -1 ? log.slice(0, sep).trim() : '';
    const msg  = sep > -1 ? log.slice(sep + 3).trim() : log;
    res.json({ lastRun: date || null, lastMessage: msg || 'No commits yet' });
  } catch(e) { res.json({ lastRun: null, lastMessage: 'Backup repo not found or no commits yet: ' + e.message }); }
});

app.post('/api/backup/run', (req, res) => {
  const { spawn } = require('child_process');
  const proc = spawn('powershell.exe',
    ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', BACKUP_SCRIPT_PATH],
    { cwd: path.dirname(BACKUP_SCRIPT_PATH) }
  );
  let output = '';
  proc.stdout.on('data', d => output += d.toString());
  proc.stderr.on('data', d => output += d.toString());
  proc.on('close', code => res.json({ ok: code === 0, output: output.trim(), code }));
});

// ── Run Script ────────────────────────────────────────────────────────────
// POST /api/run-script  { idx: <number> }
// Looks up the script by index in control-panel-config.json (server-side),
// then runs its pre-stored commands. Never executes request-supplied commands.
app.post('/api/run-script', (req, res) => {
  const { spawn } = require('child_process');
  const idx = parseInt(req.body.idx, 10);
  if (isNaN(idx)) return res.json({ ok: false, output: 'Invalid script index.' });

  let config;
  try {
    config = JSON.parse(fs.readFileSync(PANEL_CONFIG_PATH, 'utf8'));
  } catch(e) {
    return res.json({ ok: false, output: 'Could not load panel config: ' + e.message });
  }

  const script = config.scripts && config.scripts[idx];
  if (!script) return res.json({ ok: false, output: 'Script not found at index ' + idx });

  const commands = (script.commands || []).filter(Boolean);
  if (!commands.length) return res.json({ ok: false, output: 'No commands defined for "' + script.label + '".' });

  const WORK_DIR = path.join(__dirname);
  let allOutput = '';
  let cmdIdx = 0;

  function runNext() {
    if (cmdIdx >= commands.length) {
      return res.json({ ok: true, output: allOutput.trim() });
    }
    const cmd = commands[cmdIdx++];
    allOutput += `> ${cmd}\n`;
    const proc = spawn('cmd.exe', ['/c', cmd], { cwd: WORK_DIR, shell: false });
    proc.stdout.on('data', d => { allOutput += d.toString(); });
    proc.stderr.on('data', d => { allOutput += d.toString(); });
    proc.on('close', code => {
      if (code !== 0) {
        allOutput += `\n[exited with code ${code}]\n`;
        return res.json({ ok: false, output: allOutput.trim() });
      }
      runNext();
    });
    proc.on('error', err => {
      allOutput += `\n[Error: ${err.message}]\n`;
      res.json({ ok: false, output: allOutput.trim() });
    });
  }
  runNext();
});

// ── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('\n  Mr Mallorca Golf Control Panel');
  console.log('  Open: http://localhost:3010/control-panel\n');
});
