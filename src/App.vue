<template>
  <div class="site">

    <!-- NAV -->
    <nav class="nav">
      <div class="nav-inner">
        <span class="wordmark">ORCHEX</span>
        <a href="mailto:hello@orchex.app" class="nav-cta">Get in touch</a>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-badge">Coming Soon</div>
      <h1 class="hero-title">
        Microsoft 365 management,<br />
        <span class="accent">simplified for MSPs.</span>
      </h1>
      <p class="hero-sub">
        One portal to manage every client tenant — licensing, security policies,
        compliance and reporting, all in one place.
      </p>
      <a href="mailto:hello@orchex.app" class="btn-primary">Request early access</a>
    </section>

    <!-- ALL TENANTS SHOWCASE -->
    <section class="showcase">
      <div class="showcase-header">
        <span class="feature-label">Global Operations</span>
        <h2>Every tenant. One view.</h2>
        <p>Switch between single-tenant and all-tenant mode across every section of the portal. Security incidents, licenses, users, teams — all filterable across your entire client base simultaneously.</p>
        <div class="showcase-badges">
          <div class="badge-stat">
            <span class="badge-num">70</span>
            <span class="badge-label">Managed tenants</span>
          </div>
          <div class="badge-stat">
            <span class="badge-num">54</span>
            <span class="badge-label">Security incidents tracked</span>
          </div>
          <div class="badge-stat">
            <span class="badge-num">206</span>
            <span class="badge-label">Licenses across all clients</span>
          </div>
          <div class="badge-stat">
            <span class="badge-num">244</span>
            <span class="badge-label">Teams workspaces</span>
          </div>
        </div>
      </div>
      <div class="mockup-wrap">
        <div class="browser-frame">
          <div class="browser-bar">
            <div class="browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div class="browser-url">app.orchex.app</div>
          </div>
          <div class="browser-body">
            <img src="/images/image.png" alt="ORCHEX — Security Incidents across all tenants" />
          </div>
        </div>
        <div class="mockup-fade"></div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">

      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">Teams & SharePoint</span>
          <h2>Full visibility across all tenants</h2>
          <p>See every Microsoft Teams workspace and SharePoint site across all your client tenants in one place. Filter by visibility, storage size, activity, and more. Smart filters instantly surface inactive teams, guest-heavy workspaces, and storage outliers.</p>
          <ul class="feature-list">
            <li>244+ teams visible across all clients simultaneously</li>
            <li>Storage usage per team with file count</li>
            <li>Smart filters: inactive, new, multiple owners, has guests</li>
            <li>Export to CSV with one click</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/Teams.png" alt="Teams management across all tenants" />
        </div>
      </div>

      <div class="feature-row feature-row-reverse">
        <div class="feature-text">
          <span class="feature-label">Quick Actions</span>
          <h2>Every action, one keystroke away.</h2>
          <p>A command palette for M365 management. Search and execute any action instantly — reset a password, offboard a user, manage MFA, assign licenses — without navigating through menus. Quick Actions are context-aware: opened from a user page they auto-load tenant and user data; opened standalone, you pick the tenant and target yourself.</p>
          <ul class="feature-list">
            <li>Search across all available actions instantly</li>
            <li>Context-aware — auto-fills tenant and user when opened in context</li>
            <li>Pinnable quick action bar with your most-used actions</li>
            <li>Three display modes: always show labels, labels on hover, or icons only</li>
            <li>Configurable — show, hide and reorder actions to fit your workflow</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/QuickActions.png" alt="ORCHEX Quick Actions command palette" />
        </div>
      </div>

      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">User Actions</span>
          <h2>All user actions, one panel.</h2>
          <p>Click a user and a contextual action panel slides in — pinned actions at the top, everything else organised by category: Mailbox, Security, Licenses, Groups, and Danger Zone. A lock button keeps the panel open while you execute multiple actions on the same user, so you never lose context between operations.</p>
          <ul class="feature-list">
            <li>Lock button — stays open between actions on the same user</li>
            <li>Pin your most-used actions for instant access</li>
            <li>Organised by category: Mailbox, Security, Licenses, Groups and more</li>
            <li>Search across all available actions</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/UserAction.png" alt="ORCHEX User Actions panel" style="max-width: 400px; margin: 0 auto; display: block;" />
        </div>
      </div>

      <div class="feature-row feature-row-reverse">
        <div class="feature-text">
          <span class="feature-label">Dual-mode Modals</span>
          <h2>Context-aware actions, everywhere.</h2>
          <p>Every action modal in ORCHEX works in two modes. Opened from a user or mailbox page — tenant, user and resource are pre-filled, ready to go. Opened from Quick Actions — you pick the tenant and target yourself, enabling the same action from anywhere in the portal without navigating first.</p>
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

      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">Identity Management</span>
          <h2>One row. Complete picture.</h2>
          <p>Most M365 portals split user details, mailbox configuration, and MFA status across three separate pages. ORCHEX consolidates it all — every user row shows identity, mailbox health, and security posture together. Less clicking, faster decisions.</p>
          <ul class="feature-list">
            <li>User identity, mailbox and MFA status in a single view</li>
            <li>Cross-tenant user search and filtering</li>
            <li>License assignment and usage tracking</li>
            <li>Sign-in activity and last active status</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/Users.png" alt="ORCHEX Users — unified identity view" />
        </div>
      </div>

      <div class="feature-row feature-row-reverse">
        <div class="feature-text">
          <span class="feature-label">License Management</span>
          <h2>Spot wasted spend at a glance.</h2>
          <p>882 licenses across all tenants, and you instantly know how many are unused, which SKUs are over-provisioned, and what's expiring soon. Switch between table view and analytics view with one click — distribution charts, active SKU breakdown, and tenant-level warnings all in one place.</p>
          <ul class="feature-list">
            <li>97 unused licenses surfaced instantly — no manual counting</li>
            <li>Smart filters: Unused, Expiring &lt;30d, Has Expired, Fully Suspended</li>
            <li>Toggle between table view and analytics view per page</li>
            <li>License distribution and status charts across all tenants</li>
          </ul>
        </div>
        <div class="feature-img feature-img-stack">
          <img src="/images/Licenses.png" alt="ORCHEX License Management — table view" />
          <img src="/images/Overview.png" alt="ORCHEX License Analytics — overview" />
        </div>
      </div>

      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">Analytics</span>
          <h2>See exactly what changed, and when.</h2>
          <p>Pick any date range and instantly see every change across all your client tenants — new users, offboarded users, license increases, assignment changes, and which tenants were affected. All of it in a single view, without running manual reports or digging through individual admin portals.</p>
          <ul class="feature-list">
            <li>License increases and decreases across all tenants</li>
            <li>Users onboarded and offboarded per period</li>
            <li>Per-tenant drill-down: Subscription Changes and User Changes</li>
            <li>Filter tenants instantly to show only those with activity</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/Analytics.png" alt="ORCHEX Analytics — cross-tenant change tracking" />
        </div>
      </div>

    </section>

    <!-- CONTACT -->
    <section class="contact">
      <h2>Interested in ORCHEX?</h2>
      <p>The product is currently in development. Reach out to get on the early access list.</p>
      <a href="mailto:hello@orchex.app" class="btn-primary">hello@orchex.app</a>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <span class="wordmark wordmark-sm">ORCHEX</span>
      <span class="footer-copy">&copy; {{ year }} Orchex. All rights reserved.</span>
    </footer>

  </div>
</template>

<script setup>
const year = new Date().getFullYear()
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

/* FEATURES */
.features {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 2rem 100px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}
.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
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
}

/* CONTACT */
.contact {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  text-align: center;
  padding: 80px 2rem;
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
  max-width: 440px;
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

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
