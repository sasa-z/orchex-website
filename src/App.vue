<template>
  <div class="site">

    <!-- NAV -->
    <nav class="nav">
      <div class="nav-inner">
        <span class="wordmark">ORCHEX</span>
        <div class="nav-tabs">
          <button class="nav-tab" :class="activePage === 'features' && 'nav-tab-active'" @click="setActivePage('features')">Features</button>
          <button class="nav-tab" :class="activePage === 'pricing' && 'nav-tab-active'" @click="setActivePage('pricing')">Pricing</button>
          <button class="nav-tab" :class="activePage === 'faq' && 'nav-tab-active'" @click="setActivePage('faq')">FAQ</button>
          <button class="nav-tab" :class="activePage === 'about' && 'nav-tab-active'" @click="setActivePage('about')">About</button>
        </div>
        <a href="https://tally.so/r/dWABZA" target="_blank" class="nav-cta">Get in touch</a>
      </div>
    </nav>

    <!-- FEATURES PAGE -->
    <template v-if="activePage === 'features'">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-badge">Limited Pilot Spots</div>
      <h1 class="hero-title">
        Manage, monitor and secure<br />
        <span class="accent">every Microsoft 365 tenant from one place.</span>
      </h1>
      <p class="hero-sub">
        Built after 8 years inside MSPs — cross-tenant from day one,
        opinionated by design, focused on what you actually do every day,
        not everything Microsoft exposes.
      </p>
      <div class="hero-actions">
        <a href="https://tally.so/r/dWABZA" target="_blank" class="btn-primary">Apply for Pilot</a>
        <a href="#features" class="btn-ghost">Explore features →</a>
      </div>
      <ul class="hero-checklist">
        <li>Active alerts across all tenants</li>
        <li>Standards enforcement &amp; remediation</li>
        <li>User forensics and investigations</li>
      </ul>
      <p class="hero-trust">A US-based MSP with a 10-person team managing ~100 tenants has been running ORCHEX in production for 60+ days.</p>
    </section>

    <!-- HOW IT WORKS -->
    <section class="how-it-works">
      <div class="how-it-works-inner">
        <div class="how-header">
          <span class="feature-label">Why ORCHEX is different</span>
          <h2>What sets ORCHEX apart.</h2>
        </div>
        <div class="how-steps">
          <div class="how-step">
            <div class="how-step-num">01</div>
            <h3>Problems surface. You don't hunt for them.</h3>
            <p>Active alerts, portal health warnings, expiring credentials — each with a dedicated view, surfaced automatically.</p>
          </div>
          <div class="how-step">
            <div class="how-step-num">02</div>
            <h3>Opinionated by design</h3>
            <p>ORCHEX intentionally doesn't try to be everything Microsoft can do. It focuses on what MSPs actually use every day — and makes those workflows exceptional.</p>
          </div>
          <div class="how-step">
            <div class="how-step-num">03</div>
            <h3>Designed for daily use</h3>
            <p>Information dense by design. Tasks in context, not three clicks away — built by someone who spent years doing this work.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DASHBOARD SHOWCASE -->
    <section class="stats-showcase">
      <div class="stats-showcase-inner">
        <div class="feature-wide-header" style="text-align: center; align-items: center;">
          <span class="feature-label">Dashboard</span>
          <h2>The metrics that matter, always within reach.</h2>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Dashboard.png" alt="ORCHEX Dashboard with Quick View panel" />
        </div>
      </div>
    </section>



    <!-- FEATURES -->
    <section class="features" id="features">

      <!-- 1. User Lifecycle — biggest MSP pain point -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">User Lifecycle</span>
          <h2>Onboard a new user in minutes. Offboard safely with one guided flow.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Full review screen before any changes are applied</li>
            <li>Assign licenses, groups, Teams and Distribution Lists in one flow</li>
            <li>Offboarding checklist — mailbox reassignment, license reclaim, access removal</li>
            <li>Copy settings from an existing user to match their setup instantly</li>
          </ul>
        </div>
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.21">
            <img src="/images/UserOnboard.png" alt="ORCHEX User Onboarding — results" />
            <div class="feature-sub-caption">
              <strong>Onboarding — Results</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 1.34">
            <img src="/images/UserOffboard.png" alt="ORCHEX User Offboarding — configure actions" />
            <div class="feature-sub-caption">
              <strong>Offboarding — Configure Actions</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Client Requests — extends lifecycle story -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">User Lifecycle</span>
          <h2>Let clients submit requests. You stay in control.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Pre-fills the wizard — name, job title, tenant, copy-from user, notes</li>
            <li>API-key authentication — one key per client portal, revocable instantly</li>
            <li>Human in the loop — no automatic tenant changes, ever</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/ClientRequests.png" alt="ORCHEX Client Requests — onboarding and offboarding intake queue" />
        </div>
      </div>

      <!-- 3. Standards — cross-tenant automation, key differentiator -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Standards</span>
          <h2>Define once. Enforce across every tenant, automatically.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Assign templates to individual tenants or all tenants at once</li>
            <li>Scheduled enforcement or manual-only execution per template</li>
            <li>Tag and organise templates — Recommended, Onboarding, and custom tags</li>
            <li>Multiple standards per template, any combination of categories</li>
            <li>One-click recommended templates — ORCHEX creates curated workload packs (baseline, email, identity, SharePoint, Teams), report-only and ready to review</li>
            <li>Automatic remediation — non-compliant settings are corrected on the next enforcement run, no manual action needed</li>
            <li>Track compliance over time — daily % across all tenants, with per-tenant drill-down at any point in history</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Standards.png" alt="ORCHEX Standards Templates — enforce settings across all tenants" />
        </div>

        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 2.22">
            <img src="/images/StandardsCompliance.png" alt="ORCHEX Standards Compliance — track compliance across all tenants" />
            <div class="feature-sub-caption">
              <strong>Standards Compliance</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 2.27">
            <img src="/images/EffectiveStandards.png" alt="ORCHEX Effective Standards — inspect what is applied to a tenant" />
            <div class="feature-sub-caption">
              <strong>Effective Standards</strong>
            </div>
          </div>
        </div>

        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 2.26">
            <img src="/images/StandardsTrendAllTenants.png" alt="ORCHEX Standards Compliance Trend — aggregate compliance % across all tenants over time" />
            <div class="feature-sub-caption">
              <strong>Compliance Trend — All Tenants</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 2.26">
            <img src="/images/StandardsTrendSingleTenant.png" alt="ORCHEX Standards Compliance Trend — per-tenant compliant vs non-compliant standards over time" />
            <div class="feature-sub-caption">
              <strong>Compliance Trend — Per Tenant</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Security Alerting — urgent for MSPs -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Security Alerting</span>
          <h2>Detect it. Investigate it. Fix it. All in one place.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Snooze for 7, 14, or 30 days — auto-re-activates if the issue persists</li>
            <li>Email and webhook on first detection — one summary per tenant, not per individual alert</li>
            <li>Contextual row actions: resolve, view sign-ins, manage MFA — right from the alert row</li>
            <li>Auto-resolves stateful alerts when the issue is gone — no manual cleanup</li>
            <li>Per-alert-type thresholds, excluded tenants, admin notes, and frequency controls</li>
            <li>Per-user bell subscriptions — subscribe only to the alert types you care about</li>
            <li>Trend view — alert volume over time, stacked by type, click any bar to drill into per-tenant breakdown</li>
          </ul>
        </div>
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.80">
            <img src="/images/AlertsTable.png" alt="ORCHEX Security Alerts — active alerts across all tenants" />
            <div class="feature-sub-caption">
              <strong>Active Alerts</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 1.58">
            <img src="/images/TenantAlertConfig.png" alt="ORCHEX Alert Configuration — per-alert-type settings and active checks" />
            <div class="feature-sub-caption">
              <strong>Alert Configuration</strong>
            </div>
          </div>
        </div>

        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.87">
            <img src="/images/AlertsTrendAllAlerts.png" alt="ORCHEX Alerts Trend — all alert types stacked by day" />
            <div class="feature-sub-caption">
              <strong>Trend — All Types</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 1.87">
            <img src="/images/AlertsTrend.png" alt="ORCHEX Alerts Trend — filtered by Risky Sign-In Detections over 90 days" />
            <div class="feature-sub-caption">
              <strong>Trend — Filtered by Type</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. User Forensics — moved up: strong differentiator -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">User Forensics</span>
          <h2>Investigate smarter. Analysis that knows your environment, not just the logs.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Risk-scored timeline — Critical, High, Medium, Low, Safe per event with inline trust context</li>
            <li>Impossible travel — geolocation-aware, suppressed when both locations are in the user's expected countries</li>
            <li>Trust enrichment — Safe Locations, User Exceptions, and Global IP Exceptions applied to each sign-in</li>
            <li>Interactive map — sign-in locations plotted geographically, synced with timeline filters</li>
            <li>Inbox rules audit — new and modified rules flagged for review</li>
            <li>File activity — SharePoint and OneDrive operations in the investigation window</li>
            <li>Mailbox activity — Exchange events and access patterns</li>
          </ul>
        </div>
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.95">
            <img src="/images/Forensic-impossible_travel.png" alt="ORCHEX User Forensics — sign-in timeline with impossible travel detection" />
            <div class="feature-sub-caption">
              <strong>Sign-In Analysis</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 1.71">
            <img src="/images/Forensic.png" alt="ORCHEX User Forensics — structured investigation checklist" />
            <div class="feature-sub-caption">
              <strong>Forensic Checklist</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 6. Security Assessment — tenant security posture -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Security Assessment</span>
          <h2>Every tenant's security posture. One scheduled scan.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Read-only checks across Exchange Online and Entra ID — email protection, authentication, guest access, privileged identity, audit readiness, data sharing</li>
            <li>Grounded in recognised baselines — CISA SCuBA, CIS Microsoft 365, Microsoft Zero Trust — each check links to its source</li>
            <li>Application attack surface covered: expired app credentials, high-privilege Graph permissions, risky OAuth consent grants — with the exact apps listed and App IDs ready to copy</li>
            <li>Failing check with a matching ORCHEX standard? A badge shows whether automation already covers it — or is one click away</li>
            <li>Runs on a schedule across all tenants, or on demand for a single one</li>
            <li>Fully configurable — enable exactly the checks you want, exclude your own management apps by App ID</li>
            <li>Compact triage view — the whole list at a glance, anything red stands out immediately</li>
          </ul>
        </div>
        <div class="feature-wide-img-row">
          <div class="feature-wide-img">
            <img src="/images/SecurityAssesment.png" alt="ORCHEX Security Assessment — Exchange Online checks grouped by category with risk levels, baseline sources and standard badges" />
          </div>
          <div class="feature-wide-img">
            <img src="/images/SecurityAssesmentConfig.png" alt="ORCHEX Security Assessment Config — toggle checks per category, with app exclusion lists for the application-security checks" />
          </div>
        </div>
      </div>

      <!-- 7. CA Health — security continues -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Conditional Access Health</span>
          <h2>27 CA checks. Instant results. Step-by-step fix guides.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Grouped by severity — drill into issues without scrolling through passing checks</li>
            <li>Step-by-step "How to Fix" guide for every finding, directly in the portal</li>
            <li>MS Zero Trust Baseline tab — instant status of the 5 foundation policies every tenant should have</li>
            <li>Sign-in Coverage tab — real sign-in data from the past 30 days split by CA Applied / No CA, with a per-user breakdown of unprotected sign-ins sorted by risk</li>
            <li>P2-dependent checks (sign-in risk, user risk) auto-skipped on non-P2 tenants — no false positives</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/CAHealth.png" alt="ORCHEX CA Health — 27 checks grouped by severity with How to Fix guides and Sign-in Coverage" />
        </div>
      </div>

      <!-- 6. License Management — cost savings -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">License Management</span>
          <h2>Spot wasted spend at a glance.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Smart filters: Unused, Expiring &lt;30d, Has Expired, Fully Suspended</li>
            <li>Click any overview card — unused, expiring, with warnings — to filter the table to exactly those licenses</li>
            <li>Idle seats, license distribution and usage bands, per tenant or across all tenants</li>
            <li>Overutilised SKUs surfaced next to unused ones — both sides of the waste, before renewal</li>
          </ul>
        </div>
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.81">
            <img src="/images/LicensesOverview.png" alt="ORCHEX License Overview — unused licenses, idle seats, distribution and expiring subscriptions" />
            <div class="feature-sub-caption">
              <strong>Overview — click any card to filter the table</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 1.89">
            <img src="/images/Licenses.png" alt="ORCHEX License Management — usage, availability and seats per SKU" />
            <div class="feature-sub-caption">
              <strong>Licenses — usage, availability and seats per SKU</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 7. Identity Management — day-to-day -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Identity Management</span>
          <h2>One row. Complete picture. Every number a filter.</h2>
          <p>Most M365 portals split user details, mailbox, and MFA across three separate pages. ORCHEX consolidates it all in one row — under an overview that doubles as your filter.</p>
          <ul class="feature-list feature-list-cols">
            <li>User identity, mailbox and MFA status in a single view</li>
            <li>Cross-tenant user search and filtering</li>
            <li>License assignment and usage tracking</li>
            <li>Sign-in activity and last active status</li>
            <li>Overview mode on every major page — one toggle switches between a single tenant and all tenants</li>
            <li>Click any stat card and the table below is filtered and scrolled into view — no manual filtering</li>
            <li>In All Tenants mode, click a tenant in any breakdown to scope everything to it</li>
            <li>Click a user or group in the overview to open their full detail view — Reset restores your own filters</li>
          </ul>
        </div>
        <!-- flex grows track each shot's aspect ratio so the two images render
             at the same height despite different source dimensions. -->
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.73">
            <img src="/images/UsersOverview.png" alt="ORCHEX Users Overview — clickable stat cards, MFA coverage, mailbox storage and user growth" />
            <div class="feature-sub-caption">
              <strong>Overview — click a card to filter the table</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 2.37">
            <img src="/images/Users.png" alt="ORCHEX Users — unified identity view" />
            <div class="feature-sub-caption">
              <strong>Users — the filtered result, one row per identity</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 8. User Details -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">User Details</span>
          <h2>Every detail about a user, in one place.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Tabbed layout: Overview, Mailbox, MFA, Licenses, Sign-Ins, Roles, and more</li>
            <li>Per-user tab preferences — auto-load or on-demand, per tab</li>
            <li>Inline editing for display name, job title, department, phone, and office</li>
            <li>Quick status cards for mailbox usage, MFA, privileged roles, and license count</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/UserDetails.png" alt="ORCHEX User Details — tabbed per-user view with inline editing" />
        </div>
      </div>

      <!-- 9. Assisted Sign-in — unique support feature -->
      <div class="feature-row">
        <div class="feature-img">
          <img src="/images/AssistedSignin.png" alt="ORCHEX Assisted Sign-in — temporary support session with countdown and audit trail" />
        </div>
        <div class="feature-text">
          <span class="feature-label">Support Access</span>
          <h2>Sign in as a user to fix their session — safely, temporarily, and with a full audit trail.</h2>
          <ul class="feature-list">
            <li>Time-limited sessions — access is automatically revoked when the session expires</li>
            <li>Full audit trail — who signed in, as whom, when, and for how long</li>
            <li>One-click early revoke the moment the support task is done</li>
            <li>Scoped permission — not tied to broad admin access</li>
          </ul>
        </div>
      </div>

      <!-- 10. Quick Actions — efficiency -->
      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">Quick Actions</span>
          <h2>Every action, one keystroke away.</h2>
          <p>A command palette for M365 management — 50+ actions, instantly searchable.</p>
          <ul class="feature-list">
            <li>Context-aware — auto-fills tenant and user when opened in context</li>
            <li>Pinnable quick action bar with your most-used actions</li>
            <li>Configurable — show, hide and reorder actions to fit your workflow</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/QuickActions.png" alt="ORCHEX Quick Actions command palette" />
        </div>
      </div>

      <!-- 10. Bulk Operations — efficiency -->
      <div class="feature-row">
        <div class="feature-img">
          <img src="/images/BulkMode.png" alt="ORCHEX bulk operations — live per-item results with inline copy and CSV export" style="max-width: 420px; margin: 0 auto; display: block;" />
        </div>
        <div class="feature-text">
          <span class="feature-label">Bulk Operations</span>
          <h2>Act on many records at once — safely.</h2>
          <ul class="feature-list">
            <li>Live per-item success / failure breakdown</li>
            <li>Reveal and copy sensitive results inline, or export everything to CSV</li>
            <li>Admin-configurable guardrails — type-to-confirm threshold and a hard maximum on selected items</li>
            <li>Runs in single-tenant and All Tenants mode</li>
          </ul>
        </div>
      </div>

      <!-- 11. Tenant Capabilities — visibility -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Tenant Capabilities</span>
          <h2>Know exactly which tenants have what — before it becomes a problem.</h2>
          <ul class="feature-list feature-list-cols">
            <li>License matrix across all tenants: Entra P1/P2, MDO, Intune P1/P2, Defender XDR</li>
            <li>Smart filters: Missing Entra P1, Missing Entra P2, Fully covered</li>
            <li>Per-tenant capability drill-down with source SKUs and unit counts</li>
            <li>Purchase recommendations for missing capabilities</li>
            <li>Scheduled background checks — always up to date without manual refresh</li>
          </ul>
        </div>
        <!-- The sidebar shot is portrait and the matrix is landscape, so equal
             columns would render it nearly three times taller. -->
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 2.13">
            <img src="/images/TenantCapabilities.png" alt="ORCHEX Tenant Capabilities — license matrix across all tenants" />
            <div class="feature-sub-caption">
              <strong>Capability Matrix</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 0.79">
            <img src="/images/TenantCapabilitiesSidebar.png" alt="ORCHEX License Details — source SKUs and recommendations per tenant" />
            <div class="feature-sub-caption">
              <strong>License Details</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 12. Enterprise Applications — credential management -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Enterprise Applications</span>
          <h2>Every app credential, across every tenant.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Certificate and secret counts per app, per tenant</li>
            <li>Next expiry date with expired / expiring-soon indicators</li>
            <li>Quick filters: All Creds Expired, Has Creds Expired</li>
            <li>Drill into credentials or owners directly from any row</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/EnterpriseApps.png" alt="ORCHEX Enterprise Applications — credential expiry across all tenants" />
        </div>
      </div>

      <!-- 13. Analytics — change tracking -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Analytics</span>
          <h2>See what changed between two points in time.</h2>
          <ul class="feature-list feature-list-cols">
            <li>License increases and decreases across all tenants</li>
            <li>Users onboarded and offboarded per period</li>
            <li>Per-tenant drill-down: Subscription Changes and User Changes</li>
            <li>Filter tenants instantly to show only those with activity</li>
            <li>Built-in chart view in every section — switch between table and analytics without leaving the page</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Analytics.png" alt="ORCHEX Analytics — cross-tenant change tracking" />
        </div>
      </div>

      <!-- 16. AI Integration — advanced/future -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">AI Integration</span>
          <h2>Ask your AI about any tenant.</h2>
          <p>Connects via MCP — any compatible AI client queries your M365 environment in plain language. Your data stays in your own Azure subscription.</p>
          <ul class="feature-list feature-list-cols">
            <li>"Who are the Global Admins in tenant X?"</li>
            <li>"Find all users named Smith across all tenants"</li>
            <li>"Does user@contoso.com have MFA enabled?"</li>
            <li>"List disabled users that still have licenses assigned"</li>
            <li>"Which tenant does josh@fabrikam.com belong to?"</li>
            <li>"Show me the mailbox size and forwarding config for this user"</li>
          </ul>
        </div>
      </div>

      <!-- 17. Tenant Management — setup/admin -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Tenant Management</span>
          <h2>Full control over every tenant connection.</h2>
          <ul class="feature-list feature-list-cols">
            <li>CPV tab — consent status per tenant, re-run consent directly from the portal</li>
            <li>Permissions tab — verify all app registration roles and delegated scopes are assigned</li>
            <li>Access Check tab — verify portal access to each tenant on demand or on a schedule</li>
            <li>GDAP Health tab — relationship status, expiry dates, and assigned roles per tenant</li>
            <li>Daily automated checks — expiring GDAP, stale CPV consent, and access failures surface as Portal Health warnings</li>
            <li>Schedule Apply Permissions — push updated app permissions to all tenants with one click</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Tenants.png" alt="ORCHEX Tenant Management — permissions, CPV, GDAP and access check" />
        </div>
      </div>

      <!-- 18. Teams -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Teams</span>
          <h2>Every team, and the storage it is actually using.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Storage and file count per team — the figure Microsoft makes you open each team to find</li>
            <li>Smart filters: has guests, private or shared channels, multiple owners, inactive 90+ days, new</li>
            <li>Tenant storage measured against its real quota, not an estimate</li>
            <li>Click a team in the storage breakdown to open it, or a stat card to filter the table</li>
            <li>Per tenant or across every tenant at once, and the filtered list exports to CSV</li>
          </ul>
        </div>
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.90">
            <img src="/images/TeamsOverview.png" alt="ORCHEX Teams Overview — tenant storage, visibility split and storage per team" />
            <div class="feature-sub-caption">
              <strong>Overview — storage per team, largest first</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 1.78">
            <img src="/images/Teams.png" alt="ORCHEX Teams — members, owners, guests, channels and storage per team" />
            <div class="feature-sub-caption">
              <strong>Teams — owners, guests and channels in one row</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 19. SharePoint -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">SharePoint</span>
          <h2>Where the storage went — and what the capacity is made of.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Capacity broken into its parts: base allocation, licence contribution and purchased add-ons</li>
            <li>Top storage consumers ranked, next to the sites nobody has opened in a year</li>
            <li>Quick filters: large sites &gt;50 GB, high file count, inactive &gt;90 days, storage critical &gt;90%</li>
            <li>Teams and system sites counted separately, so a site count means what you expect</li>
            <li>Per-site usage against quota, file count and last activity in a single row</li>
          </ul>
        </div>
        <div class="feature-wide-img-row">
          <div class="feature-wide-img" style="flex: 1.74">
            <img src="/images/SharePointOverview.png" alt="ORCHEX SharePoint Overview — storage used against capacity, storage breakdown, site types and top consumers" />
            <div class="feature-sub-caption">
              <strong>Overview — what the capacity is made of</strong>
            </div>
          </div>
          <div class="feature-wide-img" style="flex: 1.73">
            <img src="/images/SharePoint.png" alt="ORCHEX SharePoint Sites — usage against quota, file counts and last activity per site" />
            <div class="feature-sub-caption">
              <strong>Sites — usage, files and last activity</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- 20. Portal Health — internal ops -->
      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Portal Health</span>
          <h2>A dedicated page for what's happening inside your portal.</h2>
          <ul class="feature-list feature-list-cols">
            <li>Critical and Warning severity — at a glance</li>
            <li>30-day trend chart for incident history</li>
            <li>Auto-resolves when the system recovers</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Health.png" alt="ORCHEX Portal Health — system task monitoring" />
        </div>
      </div>

      <!-- 21. User Actions — UI detail -->
      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">User Actions</span>
          <h2>All user actions, one panel.</h2>
          <ul class="feature-list">
            <li>Lock button — stays open between actions on the same user</li>
            <li>Switch users without closing the panel</li>
            <li>Pin your most-used actions for instant access</li>
            <li>Search across all available actions</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/UserAction.png" alt="ORCHEX User Actions panel" style="max-width: 320px; margin: 0 auto; display: block;" />
        </div>
      </div>

      <!-- 22. Dual-mode Modals — UI detail -->
      <div class="feature-row feature-row-reverse">
        <div class="feature-text">
          <span class="feature-label">Dual-mode Modals</span>
          <h2>Context-aware actions, everywhere.</h2>
          <ul class="feature-list">
            <li>Pre-filled context when opened from a resource page</li>
            <li>Tenant switcher available when opened standalone</li>
            <li>Same modal, same experience — regardless of how it's opened</li>
            <li>Covers users, mailboxes, groups, licenses and more</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/Modal.png" alt="ORCHEX dual-mode modal — Mailbox Permissions" style="max-width: 420px; margin: 0 auto; display: block;" />
        </div>
      </div>

      <div class="features-more">
        <p>And more — mailbox management, transport rules, quarantine, app registrations, risky users, sign-in logs, and others. Not a mirror of every Microsoft admin portal, but a deliberate selection of what MSPs actually reach for every day.</p>
      </div>

    </section>

    </template><!-- end features page -->

    <!-- PRICING PAGE (hidden until launch) -->
    <template v-if="activePage === 'pricing'">
    <section class="pricing-page">

      <!-- Header -->
      <div class="pricing-header">
        <h1>Early access program.</h1>
        <p>The pilot is live. A US-based MSP with a 10-person team managing ~100 tenants has been running ORCHEX in production for 60+ days. A few additional slots are open — everything included, preferential pricing locked in for 5 years.</p>
      </div>


      <!-- Cards -->
      <div class="pricing-cards">

        <!-- Pilot card -->
        <div class="pricing-card pricing-card--pilot">
          <div class="pricing-card-top">
            <span class="pricing-plan-name">Pilot Program</span>
            <p class="pricing-plan-desc">For MSPs that want to be involved early. Limited spots.</p>
          </div>
          <div class="pricing-amount">
            <div class="pricing-amount-main">
              <span class="pricing-price-free">Free</span>
            </div>
            <div class="pricing-per-tenant-note">for the pilot period</div>
          </div>

          <!-- Pilot conversion rate callout — 30% off the standard annual rate, locked in for 5 years -->
          <div class="pricing-pilot-rate">
            <div class="pricing-pilot-rate-label">Then convert at your pilot rate</div>
            <div class="pricing-pilot-rate-price">
              <span class="pricing-pilot-rate-amount">$99</span>
              <span class="pricing-pilot-rate-period">/mo</span>
            </div>
            <div class="pricing-pilot-rate-compare">
              <span class="pricing-pilot-rate-strike">$150</span>
              <span>standard rate — locked in for 5 years</span>
            </div>
            <div class="pricing-pilot-rate-min">First 10 tenants included · then $8/tenant above 10 (standard: $12/tenant)</div>
          </div>
          <p class="pricing-pilot-note" style="text-align:left; margin-top:-0.5rem;">A US-based MSP with a 10-person team managing ~100 tenants has been running ORCHEX in production for 60+ days.</p>

          <ul class="pricing-pilot-list">
            <li>All features fully unlocked</li>
            <li>Unlimited tenants for the pilot period</li>
            <li>Direct onboarding — we set it up together</li>
            <li>Your feedback shapes the roadmap</li>
          </ul>
          <a href="https://tally.so/r/dWABZA" target="_blank" class="btn-secondary pricing-cta">Apply for Pilot</a>
          <p class="pricing-pilot-note">Each application is reviewed manually.</p>
          <p class="pricing-pilot-note">Pilot partners commit to actively using ORCHEX and sharing feedback — a short monthly check-in and honest input on what works and what doesn't. This is a partnership, not a free trial.</p>
        </div>

        <!-- Standard card — hidden during pilot; remove v-if to restore -->
        <div class="pricing-card pricing-card--standard">
          <div class="pricing-card-top">
            <span class="pricing-plan-name">Standard</span>
            <p class="pricing-plan-desc">Everything included. Scales with your tenant count — no tier cliffs.</p>
          </div>

          <!-- Billing tabs -->
          <div class="pricing-billing-tabs">
            <button
              class="pricing-billing-tab"
              :class="billingCycle === 'annual' && 'pricing-billing-tab--active'"
              @click="billingCycle = 'annual'"
            >Annual <span class="pricing-save-badge">2 months free</span></button>
            <button
              class="pricing-billing-tab"
              :class="billingCycle === 'monthly' && 'pricing-billing-tab--active'"
              @click="billingCycle = 'monthly'"
            >Monthly</button>
          </div>

          <!-- Base price -->
          <div class="pricing-amount">
            <div class="pricing-amount-main">
              <span class="pricing-currency">$</span>
              <span class="pricing-price">{{ billingCycle === 'annual' ? '150' : '180' }}</span>
              <span class="pricing-period">/mo</span>
            </div>
            <div class="pricing-per-tenant-note pricing-per-tenant-note--emphasis">
              First 10 tenants included · then ${{ billingCycle === 'annual' ? '12' : '14' }}/tenant above 10{{ billingCycle === 'annual' ? ' · billed annually' : '' }}
            </div>
          </div>

          <!-- Live calculator -->
          <div class="pricing-calc">
            <div class="pricing-calc-header">
              <span class="pricing-calc-label">Your estimate</span>
              <span class="pricing-calc-tenants">{{ tenantCount }} tenants</span>
            </div>
            <input type="range" min="1" :max="CUSTOM_PRICING_THRESHOLD" step="1" v-model.number="tenantCount" class="pricing-slider" />
            <div class="pricing-calc-output">
              <span class="pricing-calc-price">${{ calcPrice }}<span class="pricing-calc-mo">/mo</span></span>
              <span class="pricing-calc-annual" v-if="billingCycle === 'annual'">${{ (calcPrice * 12).toLocaleString() }}/yr</span>
            </div>
            <p v-if="tenantCount >= CUSTOM_PRICING_THRESHOLD" class="pricing-calc-max-hint">
              More than {{ CUSTOM_PRICING_THRESHOLD }} tenants? <a href="mailto:hello@orchex.app">Contact us</a> for custom pricing.
            </p>
          </div>

          <button class="btn-primary pricing-cta pricing-cta--disabled" disabled>Available after pilot</button>
          <p class="pricing-pilot-note">Direct signup opens when the pilot program ends.</p>
        </div>

      </div>

      <!-- FAQ -->
      <div class="pricing-faq">
        <h2>Common questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>What does "runs in my Azure" mean?</h3>
            <p>ORCHEX deploys entirely into five resources in your own Azure subscription — nothing runs on shared or third-party servers. You pay your own Azure costs (typically $20–60/mo depending on usage), not us. <a href="#" @click.prevent="setActivePage('faq')">See the full infrastructure breakdown in the FAQ →</a></p>
          </div>
          <div class="faq-item">
            <h3>What is the pilot program?</h3>
            <p>The pilot is a partner program for MSPs that want to be involved early — not a self-serve trial. Each application is reviewed manually. Pilot partners get full access free of charge during the pilot period, direct setup support, and a locked-in rate when they convert to paid.</p>
          </div>
          <div class="faq-item">
            <h3>How many tenants can I connect?</h3>
            <p>There is no hard cap. Standard pricing will be announced after the pilot program. Pilot partners convert at a preferential rate — locked in for 5 years.</p>
          </div>
          <div class="faq-item">
            <h3>Why isn't ORCHEX "unlimited tenants" for one flat price?</h3>
            <p>Some MSP tools advertise unlimited tenants — but check what that actually covers. Often it's on-demand tools only; monitoring and alerting (the part that actually protects your clients) is metered separately per tenant once you look past the headline. ORCHEX's price already includes everything — standards enforcement, alerting, forensics — for every tenant, with no separate metered add-on to discover later.</p>
          </div>
          <div class="faq-item">
            <h3>What kind of support do I get?</h3>
            <p>Email and async chat — direct access to the founder. You'll get faster, more personal support than any ticket queue, and your feedback directly shapes what gets built next.</p>
          </div>
          <div class="faq-item">
            <h3>Is the pilot rate locked in?</h3>
            <p>Yes. Pilot partners convert to paid at a preferential rate — locked in for 5 years regardless of future pricing changes. You keep it as long as you stay subscribed within that period.</p>
          </div>
        </div>
      </div>

    </section>
    </template><!-- end pricing page -->

    <!-- FAQ PAGE -->
    <template v-if="activePage === 'faq'">
    <section class="faq-page">

      <div class="faq-page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know before getting started with ORCHEX.</p>
      </div>

      <div class="faq-accordion">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="faq-accordion-item"
          :class="{ 'faq-accordion-item--open': openFaq === i }"
          @click="openFaq = openFaq === i ? null : i"
        >
          <div class="faq-accordion-trigger">
            <span>{{ item.q }}</span>
            <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="faq-accordion-body" v-show="openFaq === i" v-html="item.a" />
        </div>
      </div>

    </section>
    </template><!-- end faq page -->

    <!-- FOUNDER -->
    <template v-if="activePage === 'about'">
    <section class="founder founder--page">
      <div class="founder-inner">
        <span class="feature-label">About the founder</span>
        <h2>Built by someone who's been there.</h2>

        <p>My name is Sasa Zelic. I've spent nearly two decades in IT, including the last 8 years working in the MSP industry, almost entirely within the Microsoft ecosystem — from on-premises infrastructure and Exchange to Microsoft 365 and Azure at MSP scale.</p>

        <p>Throughout those years, I built and deployed numerous custom automations and internal tools to solve problems that off-the-shelf products couldn't. Many of those solutions were tested, refined, and used in production long before ORCHEX existed, eventually becoming its foundation.</p>

        <p>ORCHEX was created around a simple principle: build the platform I always wished existed. Years of working inside MSP environments gave me a very clear — and admittedly opinionated — perspective on how software should work. ORCHEX is simply an expression of that perspective.</p>

        <p>I never set out to create software for everyone. I built the platform I always wished I had. If other MSPs recognize the same frustrations and appreciate the same approach, that's exactly who ORCHEX is for.</p>

        <p>That philosophy naturally extends into how I build. I'm someone who pays close attention to details others often overlook — unnecessary clicks, inconsistent experiences, and small inefficiencies that slowly add up over time.</p>


        <a href="https://www.linkedin.com/in/sasa-zelic-14a1533b/" target="_blank" class="founder-linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          Sasa Zelic on LinkedIn
        </a>
      </div>
    </section>
    </template>

    <!-- CONTACT -->
    <section class="contact">
      <h2>If this is the portal you've been looking for —</h2>
      <p>The pilot is live. A US-based MSP with a 10-person team managing ~100 tenants has been running ORCHEX in production for the past 60+ days. A few slots are still open.</p>
      <a href="https://tally.so/r/dWABZA" target="_blank" class="btn-primary">Apply for Pilot</a>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <span class="wordmark wordmark-sm">ORCHEX</span>
      <span class="footer-copy">&copy; {{ year }} Orchex. All rights reserved.</span>
      <a href="mailto:hello@orchex.app" class="footer-email">hello@orchex.app</a>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const year = new Date().getFullYear()
const activePage = ref('features')
function setActivePage(page) {
  activePage.value = page
  window.scrollTo(0, 0)
}
const openFaq = ref(null)
const billingCycle = ref('annual')
const tenantCount = ref(25)
const CUSTOM_PRICING_THRESHOLD = 100
const calcPrice = computed(() => {
  const base = billingCycle.value === 'annual' ? 150 : 180
  const rate = billingCycle.value === 'annual' ? 12 : 14
  const extra = Math.max(0, tenantCount.value - 10)
  return Math.round(base + extra * rate)
})
const faqItems = [
  {
    q: 'Is ORCHEX right for my business?',
    a: `<p>ORCHEX is built specifically for <strong>Microsoft CSP (Cloud Solution Provider) partners</strong> who manage multiple client Microsoft 365 tenants. To use ORCHEX you need:</p>
        <ul>
          <li>An active Microsoft Partner Center account</li>
          <li>GDAP (Granular Delegated Admin Privileges) relationships established with each client tenant you want to manage</li>
          <li>An Azure subscription to host the ORCHEX infrastructure</li>
        </ul>
        <p>If you manage only your own organization's tenant, or you are not a Microsoft CSP partner, ORCHEX is not the right fit.</p>`
  },
  {
    q: 'What infrastructure does ORCHEX deploy?',
    a: `<p>ORCHEX deploys five Azure resources into your own Azure subscription using a single ARM/Bicep script:</p>
        <ul>
          <li><strong>Static Web App</strong> — hosts the ORCHEX portal, connected directly to the ORCHEX frontend repository. Updates deploy automatically whenever a new version is released.</li>
          <li><strong>Function App</strong> — the ORCHEX backend, connected directly to the ORCHEX API repository. Updates deploy automatically alongside the frontend.</li>
          <li><strong>Storage Account</strong> — used by the Function App and for portal data (Azure Table Storage)</li>
          <li><strong>Key Vault</strong> — stores all secrets: app credentials and refresh tokens. Only your Function App has access.</li>
          <li><strong>Application Insights</strong> — telemetry and logging for the Function App</li>
        </ul>
        <p>Everything runs in your environment. Client data never touches our servers or any shared infrastructure. Your Azure costs for these resources are typically <strong>$20–60/month</strong> depending on the number of tenants and usage.</p>`
  },
  {
    q: 'Is my data secure?',
    a: `<p>Yes — and the architecture is designed so you don't have to take our word for it. ORCHEX runs entirely in <strong>your own Azure subscription</strong>. Client data never touches our servers or any shared infrastructure. All secrets and refresh tokens are stored in <strong>your Key Vault</strong>, accessible only to your own Function App.</p>
        <p>The ORCHEX codebase — both the API and frontend — is maintained in a private repository and goes through regular security reviews. The founder spent several years working exclusively in security architecture and holds a Certified Ethical Hacker certification — the codebase is reviewed with the same mindset: looking for what an attacker would.</p>`
  },
  {
    q: 'Do I need GitHub or developer knowledge to run ORCHEX?',
    a: `<p>No. ORCHEX does not require you to fork any repositories or manage a GitHub pipeline. Your Static Web App and Function App connect directly to the ORCHEX repositories — updates deploy automatically whenever a new version is released.</p>
        <p>The only technical requirement on your side is an <strong>Azure subscription</strong>.</p>`
  },
  {
    q: 'How does the setup work? Do I need to do it myself?',
    a: `<p>During the pilot phase, setup is handled together with the founder — you won't be left to figure it out alone. As ORCHEX moves toward general availability, full self-service documentation will be available.</p>
        <p>Either way, setup typically takes <strong>under an hour</strong> once the prerequisites are in place.</p>`
  },
  {
    q: 'What counts as a "tenant," and what happens if I cancel?',
    a: `<p>A "tenant" is one client Microsoft 365 organization you manage — regardless of how many users, mailboxes, or licenses exist inside it. There's no per-user metering; add as many users as you want within a tenant at no extra cost.</p>
        <p>Your Azure infrastructure and data always live in your own subscription, not ours. If you cancel or a license lapses, portal functionality is disabled once the license expires — but the underlying resources remain yours.</p>`
  },
  {
    q: 'What kind of support do I get?',
    a: `<p>Support during the pilot is direct and async, via email — you're reaching the founder, not a ticket queue. Typical response time is within one business day. As ORCHEX grows, a more formal support channel and SLA will be introduced.</p>`
  },
]
</script>

<style scoped>
/* NAV */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-nav);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wordmark {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: var(--text);
}
.wordmark-sm {
  font-size: 1rem;
}
.nav-cta {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s;
}
.nav-cta:hover {
  color: var(--accent-hover);
}

/* HERO */
.hero {
  max-width: 780px;
  margin: 0 auto;
  padding: 32px 2rem 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.hero-badge {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--accent-glow);
}
.hero-title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text);
}
.accent {
  color: var(--accent);
}
.hero-sub {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 560px;
}

/* HERO ACTIONS */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem 1.75rem;
}
.hero-checklist li {
  font-size: 0.85rem;
  color: var(--text-muted);
  padding-left: 1.3rem;
  position: relative;
}
.hero-checklist li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}
.hero-trust {
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.75;
}

/* BUTTON */
.btn-primary {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  background: var(--accent);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  background: var(--accent-hover);
  box-shadow: 0 0 24px var(--accent-glow);
}

/* GHOST BUTTON */
.btn-ghost {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}
.btn-ghost:hover {
  color: var(--text);
}

/* SHOWCASE */
.showcase {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 2rem 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
}
.showcase-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 680px;
}
.showcase-header h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}
.showcase-header p {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-muted);
}
.showcase-badges {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
}
.badge-stat {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-width: 130px;
}
.badge-num {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}
.badge-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: center;
}

/* MOCKUP */
.mockup-wrap {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin-top: 1rem;
}
.browser-frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.04);
}
.browser-bar {
  background: #2e2e32;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid var(--border);
}
.browser-dots {
  display: flex;
  gap: 6px;
}
.browser-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.browser-dots span:nth-child(1) { background: #ff5f57; }
.browser-dots span:nth-child(2) { background: #febc2e; }
.browser-dots span:nth-child(3) { background: #28c840; }
.browser-url {
  flex: 1;
  background: #1c1c1e;
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
}
.browser-body {
  max-height: 480px;
  overflow: hidden;
}
.browser-body img {
  width: 100%;
  display: block;
}
.mockup-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: linear-gradient(to bottom, transparent, var(--bg));
  border-radius: 0 0 12px 12px;
  pointer-events: none;
}

/* STATISTICS */
.stats-showcase {
  padding: 60px 2rem 80px;
}
.stats-showcase-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* HOW IT WORKS */
.how-it-works {
  padding: 40px 2rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--bg-card);
}
.how-it-works-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;
}
.how-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.how-header h2 {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}
.how-header p {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-muted);
}
.how-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.how-step {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.how-step-num {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  opacity: 0.4;
}
.how-step h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
}
.how-step p {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-muted);
}
@media (max-width: 768px) {
  .how-steps {
    grid-template-columns: 1fr;
  }
}

/* FEATURES */
.features {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 2rem 100px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}
.feature-wide {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.feature-wide-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.feature-wide-header p {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-muted);
}
.feature-list-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 0.5rem;
  margin-top: 0.25rem;
}
.feature-wide-img img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--border);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}
.feature-wide-img-row {
  display: flex;
  gap: 1.5rem;
  /* Break out wider than the 1100px text column so two side-by-side shots
     don't read as tiny next to the full-width single images elsewhere. */
  width: min(1400px, 94vw);
  margin-left: 50%;
  transform: translateX(-50%);
}
.feature-wide-img-row .feature-wide-img {
  flex: 1;
  min-width: 0;
}
.feature-wide-img .feature-sub-caption {
  margin-top: 1rem;
}
.features-more {
  text-align: center;
  padding: 2rem 3rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg-card);
}
.features-more p {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-muted);
  max-width: 680px;
  margin: 0 auto;
}

.feature-sub-caption {
  display: block;
  font-size: 0.85rem;
  line-height: 1.65;
  text-align: center;
}
.feature-sub-caption strong {
  font-weight: 600;
  color: var(--text);
}
.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.feature-row-wide-img {
  grid-template-columns: 2fr 3fr;
}
.feature-row-reverse .feature-img {
  grid-column: 1;
  grid-row: 1;
}
.feature-row-reverse .feature-text {
  grid-column: 2;
  grid-row: 1;
}
.feature-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}
.feature-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.feature-text h2 {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.feature-text p {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-muted);
}
.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.25rem;
}
.feature-list li {
  font-size: 0.9rem;
  color: var(--text-muted);
  padding-left: 1.25rem;
  position: relative;
}
.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}
.feature-img img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--border);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}
.feature-img-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.feature-img-placeholder .placeholder-screen {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.placeholder-bar {
  height: 28px;
  background: var(--border);
  border-radius: 6px;
  width: 60%;
}
.placeholder-row {
  height: 44px;
  background: rgba(255,255,255,0.03);
  border-radius: 6px;
  border: 1px solid var(--border);
}
@media (max-width: 768px) {
  .feature-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .feature-row-reverse .feature-img {
    grid-column: auto;
    grid-row: auto;
  }
  .feature-row-reverse .feature-text {
    grid-column: auto;
    grid-row: auto;
  }
  .feature-wide-img-row {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    transform: none;
  }
}

/* FOUNDER */
.founder {
  padding: 80px 2rem;
  background: rgba(79, 142, 247, 0.05);
  border-top: 1px solid rgba(79, 142, 247, 0.15);
  border-bottom: 1px solid rgba(79, 142, 247, 0.15);
}
.founder--page {
  min-height: calc(100vh - 64px);
  border: none;
  padding: 120px 2rem;
}
.founder-inner {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.founder-inner h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.founder-inner p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted);
}
.founder-linkedin {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s;
}
.founder-linkedin:hover {
  color: var(--accent-hover);
}

/* CONTACT */
.contact {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  text-align: center;
  padding: 20px 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}
.contact h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
}
.contact p {
  color: var(--text-muted);
  max-width: 580px;
  line-height: 1.7;
}

/* FOOTER */
.footer {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
.footer-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.footer-email {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-email:hover {
  color: var(--accent);
}

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

/* NAV TABS */
.nav-tabs {
  display: flex;
  gap: 0.25rem;
}
.nav-tab {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}
.nav-tab:hover {
  color: var(--text);
  background: rgba(255,255,255,0.05);
}
.nav-tab-active {
  color: var(--text);
  background: rgba(255,255,255,0.08);
}

/* PRICING PAGE */
.pricing-page {
  max-width: 860px;
  margin: 0 auto;
  padding: 72px 2rem 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
}

.pricing-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 600px;
}
.pricing-header h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
}
.pricing-header p {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.pricing-card-wrap {
  width: 100%;
  max-width: 480px;
}

/* Two-card layout */
.pricing-cards {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  align-items: stretch;
  justify-content: center;
}
.pricing-card--pilot {
  flex: none;
  width: 420px;
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent), 0 8px 32px rgba(99,102,241,0.10);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.pricing-card--pilot:hover {
  box-shadow: 0 0 0 1px var(--accent), 0 8px 20px rgba(99,102,241,0.10);
}
.pricing-card--standard {
  flex: none;
  width: 420px;
  border-color: var(--border);
}
.pricing-card--disabled {
  opacity: 0.7;
  pointer-events: none;
}

.pricing-plan-name-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.pricing-early-badge {
  font-size: 0.7rem;
  font-weight: 600;
  background: rgba(99,102,241,0.15);
  color: var(--accent);
  padding: 0.15rem 0.5rem;
  border-radius: 99px;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.pricing-future-note {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
  opacity: 0.8;
}
.pricing-cta--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--border);
  color: var(--text-muted);
  box-shadow: none;
}

/* Billing tabs inside card */
.pricing-billing-tabs {
  display: flex;
  gap: 0.5rem;
  background: rgba(255,255,255,0.04);
  border-radius: 8px;
  padding: 0.25rem;
}
.pricing-billing-tab {
  flex: 1;
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}
.pricing-billing-tab--active {
  background: var(--bg-card);
  color: var(--text);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

/* Billing toggle */
.pricing-toggle-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
}
.pricing-toggle-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.pricing-toggle-label--active {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.pricing-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  background: var(--border);
  border-radius: 99px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}
.pricing-toggle--on {
  background: var(--accent);
}
.pricing-toggle-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.2s;
  display: block;
}
.pricing-toggle--on .pricing-toggle-knob {
  transform: translateX(20px);
}
.pricing-save-badge {
  background: rgba(99,102,241,0.12);
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 99px;
  letter-spacing: 0.02em;
}

/* Pilot-specific */
.pricing-price-free {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text);
  line-height: 1;
}
.pricing-per-tenant-note {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 400;
}
.pricing-per-tenant-note--emphasis {
  font-size: 0.95rem;
  color: var(--text);
  font-weight: 600;
}
.pricing-pilot-rate {
  background: rgba(99,102,241,0.08);
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.pricing-pilot-rate-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.pricing-pilot-rate-price {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}
.pricing-pilot-rate-amount {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1;
}
.pricing-pilot-rate-period {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}
.pricing-pilot-rate-compare {
  font-size: 0.775rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.pricing-pilot-rate-strike {
  text-decoration: line-through;
  opacity: 0.6;
}
.pricing-pilot-rate-min {
  font-size: 0.72rem;
  color: var(--text-muted);
  opacity: 0.6;
  margin-top: 0.1rem;
}

.pricing-pilot-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.pricing-pilot-list li {
  font-size: 0.875rem;
  color: var(--text-muted);
  padding-left: 1.2rem;
  position: relative;
}
.pricing-pilot-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}
.pricing-pilot-note {
  font-size: 0.775rem;
  color: var(--text-muted);
  text-align: center;
  margin-top: -0.75rem;
}

/* btn-secondary */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1.5px solid var(--border);
  color: var(--text);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  text-decoration: none;
}
.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(99,102,241,0.05);
}
.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}
.pricing-card-top {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.pricing-plan-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
}
.pricing-plan-desc {
  font-size: 0.825rem;
  color: var(--text-muted);
  margin-top: 0.3rem;
  line-height: 1.5;
}
.pricing-spots {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #f59e0b;
  white-space: nowrap;
  flex-shrink: 0;
}
.pricing-spots-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f59e0b;
  flex-shrink: 0;
}

.pricing-amount {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.pricing-amount-main {
  display: flex;
  align-items: baseline;
  gap: 0.15rem;
}
.pricing-currency {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-muted);
  align-self: flex-start;
  margin-top: 0.4rem;
}
.pricing-price {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text);
  line-height: 1;
}
.pricing-period {
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 500;
}

.pricing-cta {
  text-align: center;
}
.pricing-annual {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* PRICING CALCULATOR */
.pricing-calc {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.pricing-calc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pricing-calc-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.07em;
}
.pricing-calc-tenants {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent);
}
.pricing-slider {
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  height: 4px;
  border-radius: 99px;
  background: var(--border);
  outline: none;
  cursor: pointer;
}
.pricing-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.25);
}
.pricing-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
  border: none;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.25);
}
.pricing-calc-output {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}
.pricing-calc-price {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1;
}
.pricing-calc-mo {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
}
.pricing-calc-annual {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.pricing-calc-max-hint {
  font-size: 0.775rem;
  color: var(--text-muted);
  margin: 0;
}
.pricing-calc-max-hint a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}
.pricing-calc-max-hint a:hover {
  text-decoration: underline;
}

/* INCLUDES */
.pricing-includes {
  width: 100%;
  text-align: center;
}
.pricing-includes h2 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}
.pricing-includes-sub {
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}
.pricing-features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
  text-align: left;
}
.pricing-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
}
.pricing-check {
  width: 16px;
  height: 16px;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}

/* FAQ */
.pricing-faq {
  width: 100%;
}
.pricing-faq h2 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 1.75rem;
  text-align: center;
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.faq-item {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
}
.faq-item:first-child {
  border-top: 1px solid var(--border);
}
.faq-item h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
}
.faq-item p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.7;
}
.faq-item p a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}
.faq-item p a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .pricing-features-grid {
    grid-template-columns: 1fr;
  }
  .pricing-card-top {
    flex-direction: column;
  }
  .nav-tabs {
    display: none;
  }
}

/* FAQ PAGE */
.faq-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 72px 2rem 120px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}
.faq-page-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.faq-page-header h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.faq-page-header p {
  font-size: 1.05rem;
  color: var(--text-muted);
}
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.faq-accordion-item {
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  user-select: none;
}
.faq-accordion-item:first-child {
  border-top: 1px solid var(--border);
}
.faq-accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  transition: color 0.15s, background 0.15s;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  margin: 4px 0;
}
.faq-accordion-item--open .faq-accordion-trigger {
  color: var(--accent);
}
.faq-chevron {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.2s ease;
}
.faq-accordion-item--open .faq-chevron {
  transform: rotate(180deg);
  color: var(--accent);
}
.faq-accordion-body {
  padding: 0.5rem 1.25rem 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.faq-accordion-body :deep(p) {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.8;
}
.faq-accordion-body :deep(ul) {
  list-style: disc;
  padding-left: 1rem;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.faq-accordion-body :deep(li) {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.38);
  line-height: 1.7;
  display: list-item;
}
.faq-accordion-body :deep(strong) {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}
.faq-page-cta {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.faq-page-cta p {
  color: var(--text-muted);
  font-size: 0.95rem;
}
</style>
