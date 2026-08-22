# Canonical Drive-skill-file -> target-folder-name mapping.
# Single source of truth for SKILLS_SYNC.ps1 (~/.claude/skills/) and
# CODEX_SKILLS_SYNC.ps1 (~/.codex/skills/) — both dot-source this file
# instead of keeping their own copy, so the two targets structurally
# cannot drift apart the way they did before (CODEX_SKILLS_SYNC.ps1 kept
# two stale entries for skills retired from SKILLS_SYNC.ps1 in 0f18407).
#
# Naming rule: every target below must carry an unambiguous "mmg-" (or
# clearly MMG-branded) prefix. On 2026-08-14 the generic target
# "seo-content" collided with an unrelated pre-existing SEO-plugin skill
# of the same name and silently overwrote it — the sync scripts only
# check whether a target folder exists, not whether it's the right one.
# Never add a bare generic name (e.g. "seo-content", "repurpose") here.

$MmgSkillsMap = @(
    @{Drive="MMG_SKILL_BLOG_WRITING.md"; Target="mmg-blog-writing"},
    @{Drive="MMG_SKILL_SEO_CONTENT.md"; Target="mmg-seo-content"},
    @{Drive="MMG_SKILL_SOCIAL_MEDIA.md"; Target="social-media-mmg"},
    @{Drive="MMG_SKILL_CAROUSEL.md"; Target="mr-mallorca-golf-carousel"},
    @{Drive="MMG_SKILL_CHINESE_CONTENT.md"; Target="mmg-chinese-content"},
    @{Drive="MMG_SKILL_FRONTEND_DESIGN.md"; Target="frontend-design-mmg"},
    @{Drive="MMG_SKILL_NEXTJS.md"; Target="nextjs-mrmallorcagolf"},
    @{Drive="MMG_SKILL_PARTNERSHIPS.md"; Target="mmg-partnerships"},
    @{Drive="MMG_SKILL_REPURPOSE.md"; Target="mmg-repurpose"},
    @{Drive="MMG_SKILL_CHINESE_BACKLOG.md"; Target="mmg-chinese-backlog"},
    @{Drive="MMG_SKILL_EMAIL_MANAGEMENT.md"; Target="mmg-email-management"},
    @{Drive="MMG_SKILL_SITE_OPERATIONS_MMG.md"; Target="site-operations-mmg"},
    @{Drive="MMG_SKILL_AUTONOMO_FILING.md"; Target="mmg-autonomo-filing"},
    @{Drive="MMG_SKILL_CLIENT_DOCS.md"; Target="mmg-client-docs"},
    @{Drive="MMG_SKILL_HERMES_OPS.md"; Target="mmg-hermes-ops"}
)
