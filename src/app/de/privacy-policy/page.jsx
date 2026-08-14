import Link from 'next/link'
import PageLayout from '../../../components/PageLayout'
import { buildLegalMetadata } from '../../../lib/page-metadata'

export const metadata = buildLegalMetadata('privacy-policy', 'de')

export default function PrivacyPolicyDE() {
  return (
    <PageLayout>
      <div className="legal-page">
        <div className="legal-page__inner">

          <div className="legal-page__hero">
            <p className="breadcrumb" style={{marginBottom:'2rem'}}>
              <Link href="/de">Startseite</Link> &nbsp;/&nbsp; <span style={{color:'var(--gold-light)'}}>Datenschutzerklärung</span>
            </p>

            <h1 style={{marginBottom:'0.5rem'}}>Datenschutzerklärung</h1>
            <p className="legal-page__updated">Zuletzt aktualisiert: August 2026</p>
          </div>

          <section className="legal-section">
            <h2>1. Verantwortlicher</h2>
            <p>Diese Website wird betrieben von Andy Griffiths, geschäftlich tätig unter <strong>Mr Mallorca Golf</strong>, mit Sitz auf Mallorca, Spanien.</p>
            <p>Für alle Anfragen zum Datenschutz erreichen Sie uns unter: <a href="mailto:info@mrmallorcagolf.com">info@mrmallorcagolf.com</a></p>
          </section>

          <section className="legal-section">
            <h2>2. Welche Daten wir erheben</h2>
            <p>Wir erheben personenbezogene Daten nur, wenn Sie sie uns freiwillig zur Verfügung stellen oder wenn Sie unsere Website besuchen. Dazu gehören:</p>
            <ul>
              <li><strong>Kontaktformular:</strong> Ihr Name, Ihre E-Mail-Adresse, Ihre Telefonnummer und jede Nachricht, die Sie uns senden</li>
              <li><strong>Anfragen per E-Mail und WhatsApp:</strong> Ihr Name und Ihre Kontaktdaten, wenn Sie sich direkt an uns wenden</li>
              <li><strong>Course Selector und E-Mail-Anmeldeformulare:</strong> Ihre E-Mail-Adresse und alle optionalen Angaben, die Sie beim Anfordern von Planungsnotizen oder Ergebnis-Follow-ups machen</li>
              <li><strong>Analysedaten:</strong> anonyme Nutzungsdaten, die von Google Analytics erhoben werden (siehe Abschnitt 5)</li>
            </ul>
            <p>Wir erheben keine Zahlungskartendaten. Alle Zahlungen erfolgen offline per Banküberweisung.</p>
          </section>

          <section className="legal-section">
            <h2>3. Wie wir Ihre Daten nutzen</h2>
            <p>Wir nutzen die von Ihnen bereitgestellten Daten, um:</p>
            <ul>
              <li>auf Ihre Anfrage zu antworten und Ihr Golferlebnis zu organisieren</li>
              <li>mit Ihnen über Ihre Buchung oder den geplanten Besuch zu kommunizieren</li>
              <li>Ergebnisse des Course Selector und, sofern Sie sich dafür entschieden haben, unsere gelegentlichen Mallorca-Golfplanungsnotizen zu versenden</li>
              <li>unsere Leistungen anhand allgemeiner Nutzungsmuster zu verbessern (nur Analyse)</li>
            </ul>
            <p>Wir werden Ihre Daten ohne Ihre ausdrückliche Einwilligung nicht für unerwünschte Werbung verwenden. Wenn Sie sich für Course-Selector-Ergebnisse oder Planungs-E-Mails anmelden, können Sie sich jederzeit über den Link in der E-Mail oder durch direkte Kontaktaufnahme wieder abmelden.</p>
          </section>

          <section className="legal-section">
            <h2>4. Rechtsgrundlage der Verarbeitung</h2>
            <p>Wir verarbeiten Ihre personenbezogenen Daten auf folgenden Rechtsgrundlagen gemäß DSGVO und spanischem Datenschutzrecht (LOPDGDD):</p>
            <ul>
              <li><strong>Vertragserfüllung:</strong> zur Erfüllung oder Vorbereitung einer Buchung auf Ihre Anfrage hin</li>
              <li><strong>Berechtigtes Interesse:</strong> um auf Ihre Nachrichten zu antworten und unseren Geschäftsbetrieb zu führen</li>
              <li><strong>Einwilligung:</strong> wenn Sie ausdrücklich zugestimmt haben, zum Beispiel durch Absenden eines Kontaktformulars oder durch Anmeldung für künftige Mitteilungen</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Google Analytics</h2>
            <p>Diese Website nutzt Google Analytics, um zu verstehen, wie Besucher unsere Website nutzen. Google Analytics erfasst Nutzungsdaten wie besuchte Seiten, Verweildauer und ungefähren geografischen Standort (Land/Region), verknüpft mit einer zufällig erzeugten Kennung, die in Ihrem Browser gespeichert wird. Diese Kennung ist pseudonym &mdash; sie enthält weder Ihren Namen noch Ihre Kontaktdaten &mdash;, aber es handelt sich nicht um vollständig anonyme Daten.</p>
            <p>Google-Analytics-Daten werden von Google LLC verarbeitet, das im Rahmen des EU-US Data Privacy Framework zertifiziert ist, gemäß dessen Datenschutzerklärung. Sie können der Erfassung durch Google Analytics jederzeit widersprechen, indem Sie das <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser-Add-on</a> installieren.</p>
          </section>

          <section className="legal-section">
            <h2>6. Cookies</h2>
            <p>Diese Website verwendet Cookies ausschließlich für Google-Analytics-Zwecke. Es handelt sich um Analyse-Cookies, die uns helfen zu verstehen, wie die Website genutzt wird. Es werden keine Werbe-Cookies oder Tracking-Pixel eingesetzt.</p>
            <p>Die meisten Browser erlauben es Ihnen, Cookies abzulehnen oder zu löschen. Dies hindert Sie nicht an der Nutzung dieser Website, deaktiviert aber die Analyse-Erfassung.</p>
          </section>

          <section className="legal-section">
            <h2>7. Datenweitergabe</h2>
            <p>Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht an Dritte. Wir geben Daten an folgende Auftragsverarbeiter weiter, nur soweit dies für den Betrieb dieser Website und die Erbringung unserer Leistungen erforderlich ist:</p>
            <ul>
              <li><strong>Google Analytics:</strong> pseudonymisierte Nutzungsdaten, wie in Abschnitt 5 beschrieben</li>
              <li><strong>MailerLite:</strong> Ihre E-Mail-Adresse und, je nach verwendetem Formular, die von Ihnen angegebenen Reisedetails (z. B. Termine, Gruppengröße, Budget oder Handicap) sowie etwaige Notizen, um Ihnen Ergebnisse zuzusenden und &mdash; nur wenn Sie sich dafür entscheiden &mdash; unsere gelegentlichen Planungs-E-Mails. MailerLite verarbeitet Daten innerhalb der EU.</li>
              <li><strong>Resend:</strong> den Inhalt jedes von Ihnen abgesendeten Kontakt- oder Anfrageformulars, um es an uns zuzustellen und Ihnen eine Bestätigungs-E-Mail zu senden. Resend hat seinen Sitz in den USA.</li>
              <li><strong>Upstash:</strong> Ihre IP-Adresse, kurzzeitig gespeichert, um Missbrauch unserer Formulare zu verhindern (Rate Limiting). Upstash hat seinen Sitz in den USA.</li>
              <li><strong>Vercel:</strong> hostet diese Website und verarbeitet dabei Standard-Webanfragedaten wie Ihre IP-Adresse und Browserinformationen. Vercel hat seinen Sitz in den USA.</li>
              <li><strong>Gesetzliche Verpflichtung:</strong> sofern gesetzlich oder von einer zuständigen Behörde gefordert</li>
            </ul>
            <p>Einige dieser Auftragsverarbeiter haben ihren Sitz außerhalb der EU/des EWR, in den USA. In diesem Fall erfolgt die Übermittlung unter den nach der DSGVO erforderlichen Garantien &mdash; dem EU-US Data Privacy Framework, sofern der Empfänger danach zertifiziert ist (derzeit Google, Resend und Vercel), oder andernfalls Standardvertragsklauseln (derzeit Upstash).</p>
            <p>Wir können außerdem notwendige Informationen (Ihren Namen und Ihre Kontaktdaten) mit Golfplätzen oder Dienstleistern auf Mallorca teilen, wenn wir Ihr Erlebnis organisieren, jedoch nur in dem Umfang, der zur Erfüllung Ihrer Buchung erforderlich ist.</p>
          </section>

          <section className="legal-section">
            <h2>8. Speicherdauer</h2>
            <p>Wir bewahren Ihre Kontaktdaten so lange auf, wie es für die Erbringung unserer Leistungen erforderlich ist. Wird aus einer Anfrage eine Buchung, werden Rechnungs- und Buchhaltungsunterlagen für den nach spanischem Handelsrecht vorgeschriebenen Zeitraum aufbewahrt, der für Geschäftsunterlagen in der Regel sechs Jahre beträgt. Analysedaten werden gemäß den Standard-Aufbewahrungsrichtlinien von Google gespeichert.</p>
            <p>Sie können jederzeit die Löschung Ihrer personenbezogenen Daten verlangen (siehe Abschnitt 9).</p>
          </section>

          <section className="legal-section">
            <h2>9. Ihre Rechte</h2>
            <p>Gemäß DSGVO und spanischem Datenschutzrecht haben Sie folgende Rechte:</p>
            <ul>
              <li><strong>Auskunft:</strong> eine Kopie der über Sie gespeicherten personenbezogenen Daten anzufordern</li>
              <li><strong>Berichtigung:</strong> die Korrektur unrichtiger Daten zu verlangen</li>
              <li><strong>Löschung:</strong> die Löschung Ihrer personenbezogenen Daten zu verlangen (&bdquo;Recht auf Vergessenwerden&ldquo;)</li>
              <li><strong>Einschränkung:</strong> zu verlangen, dass wir die Nutzung Ihrer Daten einschränken</li>
              <li><strong>Datenübertragbarkeit:</strong> Ihre Daten in einem strukturierten, gängigen Format zu erhalten</li>
              <li><strong>Widerspruch:</strong> der auf berechtigten Interessen beruhenden Verarbeitung zu widersprechen</li>
            </ul>
            <p>Um eines dieser Rechte auszuüben, schreiben Sie uns an <a href="mailto:info@mrmallorcagolf.com">info@mrmallorcagolf.com</a>. Wir antworten innerhalb von 30 Tagen.</p>
          </section>

          <section className="legal-section">
            <h2>10. Beschwerden</h2>
            <p>Wenn Sie der Ansicht sind, dass Ihre Datenschutzrechte nicht eingehalten wurden, haben Sie das Recht, eine Beschwerde bei der spanischen Datenschutzbehörde einzureichen:</p>
            <p><strong>Agencia Española de Protección de Datos (AEPD)</strong><br />
            Website: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a><br />
            Adresse: C/ Jorge Juan, 6, 28001 Madrid, Spanien</p>
          </section>

          <section className="legal-section">
            <h2>11. Änderungen dieser Erklärung</h2>
            <p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Das Datum oben auf dieser Seite gibt die letzte Überarbeitung wieder. Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen.</p>
          </section>

          <div className="legal-page__language-note">
            <p>
              Auch verfügbar auf: <Link href="/privacy-policy" style={{color:'var(--gold-light)'}}>English</Link>{' '}&middot;{' '}
              <Link href="/es/privacy-policy" style={{color:'var(--gold-light)'}}>Español</Link>{' '}&middot;{' '}
              <Link href="/fr/privacy-policy" style={{color:'var(--gold-light)'}}>Français</Link>
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  )
}
