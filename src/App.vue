<template>
  <div class="site">

    <!-- NAV -->
    <nav class="nav">
      <div class="nav-inner">
        <span class="wordmark">ORCHEX</span>
        <!-- nav-tabs hidden until pricing is live -->

        <a href="https://tally.so/r/dWABZA" target="_blank" class="nav-cta">Get in touch</a>
      </div>
    </nav>

    <!-- FEATURES PAGE -->
    <template v-if="activePage === 'features'">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-badge">Launching Soon</div>
      <h1 class="hero-title">
        Microsoft 365 management,<br />
        <span class="accent">simplified for MSPs.</span>
      </h1>
      <p class="hero-sub">
        One portal to manage every client tenant — licensing, security policies,
        compliance and reporting, all in one place.
      </p>
      <a href="https://tally.so/r/dWABZA" target="_blank" class="btn-primary">Request early access</a>
    </section>

    <!-- HOW IT WORKS -->
    <section class="how-it-works">
      <div class="how-it-works-inner">
        <div class="how-header">
          <span class="feature-label">How it works</span>
          <h2>Built for MSPs who take data ownership seriously.</h2>
          <p>ORCHEX runs entirely in your own Azure subscription. No shared infrastructure, no third-party servers — your client data never leaves your environment.</p>
        </div>
        <div class="how-steps">
          <div class="how-step">
            <div class="how-step-num">01</div>
            <h3>One script, full infrastructure</h3>
            <p>Run the ORCHEX setup script and your Azure infrastructure is ready — Static Web App, Function App, and Key Vault, all provisioned in your own subscription automatically.</p>
          </div>
          <div class="how-step">
            <div class="how-step-num">02</div>
            <h3>Connect your client tenants</h3>
            <p>Authenticate each tenant via OAuth 2.0. No passwords stored anywhere — tokens are secured in your Key Vault, in your own environment.</p>
          </div>
          <div class="how-step">
            <div class="how-step-num">03</div>
            <h3>Your data, your infrastructure</h3>
            <p>Everything runs in your Azure subscription. Client data never touches third-party servers. Updates to the portal and API flow in automatically — no maintenance on your end.</p>
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
          <p>Click any card to expand a Quick View panel with detailed stats — right on the dashboard, without navigating away. Security and monitoring cards support per-portal and per-user thresholds: set your own alert conditions for Secure Score, Global Admins, MFA enrollment, and more.</p>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Dashboard.png" alt="ORCHEX Dashboard with Quick View panel" />
        </div>
      </div>
    </section>

    <!-- STATISTICS -->
    <section class="stats-showcase">
      <div class="stats-showcase-inner">
        <div class="feature-wide-header" style="text-align: center; align-items: center;">
          <span class="feature-label">Analytics</span>
          <h2>Built-in analytics, across every section.</h2>
          <p>Every section of ORCHEX has a dedicated analytics view — switch between current tenant and all-tenants mode with one click. Track license changes, user activity, security posture, and more, without leaving the portal.</p>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Statistics.png" alt="ORCHEX — Built-in analytics across all sections" />
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Teams & SharePoint</span>
          <h2>Full visibility across all tenants</h2>
          <p>See every Microsoft Teams workspace and SharePoint site across all your client tenants in one place. Filter by visibility, storage size, activity, and more. Smart filters instantly surface inactive teams, guest-heavy workspaces, and storage outliers.</p>
          <ul class="feature-list feature-list-cols">
            <li>Storage usage per team with file count</li>
            <li>Smart filters: inactive, new, multiple owners, has guests</li>
            <li>Export to CSV with one click</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Teams.png" alt="Teams management across all tenants" />
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Quick Actions</span>
          <h2>Every action, one keystroke away.</h2>
          <p>A command palette for M365 management. Search and execute any of 50+ built-in actions instantly — reset a password, offboard a user, manage MFA, assign licenses — without navigating through menus. Quick Actions are context-aware: opened from a user page they auto-load tenant and user data; opened standalone, you pick the tenant and target yourself. The bar is fully customizable — show, hide, and reorder actions to fit your workflow.</p>
          <ul class="feature-list feature-list-cols">
            <li>Search across all available actions instantly</li>
            <li>Context-aware — auto-fills tenant and user when opened in context</li>
            <li>Pinnable quick action bar with your most-used actions</li>
            <li>Three display modes: always show labels, labels on hover, or icons only</li>
            <li>Configurable — show, hide and reorder actions to fit your workflow</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/QuickActionsv1.png" alt="ORCHEX Quick Actions command palette" />
        </div>
      </div>

      <div class="feature-row">
        <div class="feature-text">
          <span class="feature-label">User Actions</span>
          <h2>All user actions, one panel.</h2>
          <p>Click a user and a contextual action panel slides in — pinned actions at the top, everything else organised by category: Mailbox, Security, Licenses, Groups, and Danger Zone. A lock button keeps the panel open while you execute multiple actions on the same user, so you never lose context between operations. Switch to a different user directly from the panel without closing it.</p>
          <ul class="feature-list">
            <li>Lock button — stays open between actions on the same user</li>
            <li>Switch users without closing the panel</li>
            <li>Pin your most-used actions for instant access</li>
            <li>Organised by category: Mailbox, Security, Licenses, Groups and more</li>
            <li>Search across all available actions</li>
          </ul>
        </div>
        <div class="feature-img">
          <img src="/images/UserAction.png" alt="ORCHEX User Actions panel" style="max-width: 320px; margin: 0 auto; display: block;" />
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

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">User Lifecycle</span>
          <h2>Onboard a new user in minutes. Offboard safely with one guided flow.</h2>
          <p>ORCHEX walks you through every step — user details, organisation, permissions, licenses, group assignments — and shows a full review before anything is created. Offboarding is the same: a structured checklist that reassigns mailboxes, removes licenses, disables accounts, and cleans up access in the right order. No steps missed, no tenants forgotten.</p>
          <ul class="feature-list feature-list-cols">
            <li>Step-by-step wizard with progress indicator</li>
            <li>Full review screen before any changes are applied</li>
            <li>Assign licenses, groups, Teams and Distribution Lists in one flow</li>
            <li>Offboarding checklist — mailbox reassignment, license reclaim, access removal</li>
            <li>Works across any tenant directly from the portal</li>
            <li>Copy settings from an existing user to match their setup instantly</li>
          </ul>
        </div>
        <div class="feature-sub-screenshots">
          <div class="feature-sub-item">
            <img src="/images/UserOnboard.png" alt="ORCHEX User Onboarding — review step" />
            <div class="feature-sub-caption">
              <strong>Onboarding — Review & Confirm</strong>
              <span>Every detail reviewed before anything is created — user info, licenses, group memberships, Teams and Distribution Lists all in one screen.</span>
            </div>
          </div>
          <div class="feature-sub-item">
            <img src="/images/UserOffboard.png" alt="ORCHEX User Offboarding — configure actions" />
            <div class="feature-sub-caption">
              <strong>Offboarding — Configure Actions</strong>
              <span>Pick a quick template or configure each action individually — disable sign-in, convert mailbox, remove from groups, wipe devices, and more.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Identity Management</span>
          <h2>One row. Complete picture.</h2>
          <p>Most M365 portals split user details, mailbox configuration, and MFA status across three separate pages. ORCHEX consolidates it all — every user row shows identity, mailbox health, and security posture together. Less clicking, faster decisions.</p>
          <ul class="feature-list feature-list-cols">
            <li>User identity, mailbox and MFA status in a single view</li>
            <li>Cross-tenant user search and filtering</li>
            <li>License assignment and usage tracking</li>
            <li>Sign-in activity and last active status</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Users.png" alt="ORCHEX Users — unified identity view" />
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">User Details</span>
          <h2>Every detail about a user, in one place.</h2>
          <p>Open any user and get a complete picture instantly — mailbox health, MFA status, assigned roles, licenses, sign-in history, and more, all in a single tabbed view. Edit contact and work information inline, without opening a separate form. Status cards surface the most important signals at a glance so you know exactly what needs attention before you start.</p>
          <p>Each portal user controls which tabs auto-load on open and which load on demand. Auto-load the tabs you use every day; leave the rest on-demand so the page opens fast and only fetches what you actually need. It's a per-user preference — two people on the same team can have completely different load profiles without affecting each other.</p>
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

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">License Management</span>
          <h2>Spot wasted spend at a glance.</h2>
          <p>See exactly how many licenses are unused, which SKUs are over-provisioned, and what's expiring soon — across all your client tenants at once. Switch between table view and analytics view with one click.</p>
          <ul class="feature-list feature-list-cols">
            <li>Smart filters: Unused, Expiring &lt;30d, Has Expired, Fully Suspended</li>
            <li>Toggle between table view and analytics view per page</li>
            <li>License distribution and status charts across all tenants</li>
            <li>Tenant-level warnings surfaced instantly</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Licenses.png" alt="ORCHEX License Management — table view" />
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Tenant Capabilities</span>
          <h2>Know exactly which tenants have what — before it becomes a problem.</h2>
          <p>See Entra ID P1/P2, MDO, Intune, and Defender XDR license status across every client tenant in a single matrix view. No manual checks, no digging through individual admin portals. Drill into any tenant to see exactly which SKUs provide each capability — and what to purchase to fill the gaps.</p>
          <ul class="feature-list feature-list-cols">
            <li>License matrix across all tenants: Entra P1/P2, MDO, Intune P1/P2, Defender XDR</li>
            <li>Smart filters: Missing Entra P1, Missing Entra P2, Fully covered</li>
            <li>Per-tenant capability drill-down with source SKUs and unit counts</li>
            <li>Purchase recommendations for missing capabilities</li>
            <li>Scheduled background checks — always up to date without manual refresh</li>
          </ul>
        </div>
        <div class="feature-sub-screenshots">
          <div class="feature-sub-item">
            <img src="/images/TenantCapabilities.png" alt="ORCHEX Tenant Capabilities — license matrix across all tenants" />
            <div class="feature-sub-caption">
              <strong>Capability Matrix</strong>
              <span>Entra ID, MDO, Intune, and Defender XDR status across every client — with smart filters to instantly surface gaps.</span>
            </div>
          </div>
          <div class="feature-sub-item">
            <img src="/images/TenantCapabilitiesSidebar.png" alt="ORCHEX License Details — source SKUs and recommendations per tenant" />
            <div class="feature-sub-caption">
              <strong>License Details</strong>
              <span>Drill into any tenant to see which SKUs provide each capability and what to add to fill the gaps — including unit counts.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Enterprise Applications</span>
          <h2>Every app credential, across every tenant.</h2>
          <p>See every enterprise app and app registration across all your client tenants — certificates, secrets, owner counts, and next expiry date, all in one table. Quick filters instantly surface apps with fully expired or partially expired credentials, so you can act before something breaks.</p>
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

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Analytics</span>
          <h2>See exactly what changed, and when.</h2>
          <p>Pick date range and instantly see every change across all your client tenants — new users, offboarded users, license increases, assignment changes, and which tenants were affected. All of it in a single view, without running manual reports or digging through individual admin portals.</p>
          <ul class="feature-list feature-list-cols">
            <li>License increases and decreases across all tenants</li>
            <li>Users onboarded and offboarded per period</li>
            <li>Per-tenant drill-down: Subscription Changes and User Changes</li>
            <li>Filter tenants instantly to show only those with activity</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Analytics.png" alt="ORCHEX Analytics — cross-tenant change tracking" />
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Standards</span>
          <h2>Define once. Enforce across every tenant, automatically.</h2>
          <p>Create templates that group together any combination of settings and policies — security baselines, compliance requirements, mail configurations. Assign a template to one tenant or all of them, set an enforcement schedule, and ORCHEX keeps everything in sync. Templates can also provision resources like shared accounts and distribution groups, so onboarding a new tenant to your baseline takes minutes, not hours.</p>
          <ul class="feature-list feature-list-cols">
            <li>Assign templates to individual tenants or all tenants at once</li>
            <li>Scheduled enforcement or manual-only execution per template</li>
            <li>Tag and organise templates — Core, Onboarding, and custom tags</li>
            <li>Multiple standards per template, any combination of categories</li>
            <li>One-click recommended templates — ORCHEX groups best-practice standards by schedule and creates them automatically</li>
            <li>Exchange Online retention policies and archive tags — provisioned and kept in sync across all tenants</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Standards.png" alt="ORCHEX Standards Templates — enforce settings across all tenants" />
        </div>

        <div class="feature-sub-screenshots">
          <div class="feature-sub-item">
            <img src="/images/StandardsCompliance.png" alt="ORCHEX Standards Compliance — track compliance across all tenants" />
            <div class="feature-sub-caption">
              <strong>Standards Compliance</strong>
              <span>Track compliance across every tenant — filter by standard or tenant, instantly spot non-compliant settings, errors, and skipped items.</span>
            </div>
          </div>
          <div class="feature-sub-item">
            <img src="/images/EffectiveStandards.png" alt="ORCHEX Effective Standards — inspect what is applied to a tenant" />
            <div class="feature-sub-caption">
              <strong>Effective Standards</strong>
              <span>See exactly what's active on any tenant — which template each setting comes from, and detect shadowed or conflicting standards instantly.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Security Alerting</span>
          <h2>Detect it. Investigate it. Fix it. All in one place.</h2>
          <p>Enable the alert types you care about and ORCHEX monitors all your client tenants automatically — admins without MFA, risky users, expiring app secrets, blocked senders, unused licenses, and more. What makes it different: every alert row connects directly to the rest of the portal. Suspicious sign-in flagged? Open the full sign-in history inline. Admin without MFA? Launch MFA management from the same row. No tab switching, no copy-pasting UPNs into other portals. </p>
          <ul class="feature-list feature-list-cols">
            <li>Snooze for 7, 14, or 30 days — auto-re-activates if the issue persists</li>
            <li>Email and webhook on first detection — one summary per tenant, not per individual alert</li>
            <li>Contextual row actions: resolve, view sign-ins, manage MFA — right from the alert row</li>
            <li>Auto-resolves stateful alerts when the issue is gone — no manual cleanup</li>
            <li>Per-alert-type thresholds, excluded tenants, admin notes, and frequency controls</li>
            <li>Per-user bell subscriptions — subscribe only to the alert types you care about</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/AlertsTable.png" alt="ORCHEX Security Alerts — resolve, snooze and investigate from one view" />
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Conditional Access Health</span>
          <h2>27 CA checks. Instant results. Step-by-step fix guides.</h2>
          <p>Conditional Access misconfigurations are one of the most common entry points for attackers — and one of the hardest to spot manually. ORCHEX runs 27 checks per tenant on demand: MFA gaps, legacy auth bypasses, platform bypass risks, sign-in risk policy coverage, break-glass exclusions, geo-blocking, and more. Every finding includes a severity rating, a plain-language explanation, and a step-by-step fix guide — no need to cross-reference Microsoft docs.</p>
          <ul class="feature-list feature-list-cols">
            <li>27 checks across Critical, High, Medium, and Info severity</li>
            <li>Grouped by severity — drill into issues without scrolling through passing checks</li>
            <li>Step-by-step "How to Fix" guide for every finding, directly in the portal</li>
            <li>MS Zero Trust Baseline tab — instant status of the 5 foundation policies every tenant should have</li>
            <li>P2-dependent checks (sign-in risk, user risk) auto-skipped on non-P2 tenants — no false positives</li>
            <li>Results cached per tenant — switch back and forth without re-running the scan</li>
          </ul>
        </div>
        <div class="feature-wide-img" style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <img src="/images/CAHealth.png" alt="ORCHEX CA Health — 27 checks grouped by severity with How to Fix guides" />
            <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-muted); text-align: center;"><strong style="color: var(--text);">On-demand health scan</strong> — failing checks grouped by severity with affected policy details and a direct fix guide per finding.</p>
          </div>
          <div>
            <img src="/images/CABaseline.png" alt="ORCHEX CA Baseline — MS Zero Trust foundation policy status" />
            <p style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-muted); text-align: center;"><strong style="color: var(--text);">MS Zero Trust Baseline</strong> — instant status of the 5 Microsoft-recommended foundation policies, with a progress indicator and Set Up shortcut for anything missing.</p>
          </div>
        </div>
      </div>

      <div class="feature-wide">
        <div class="feature-wide-header">
          <span class="feature-label">Portal Health</span>
          <h2>A dedicated page for what's happening inside your portal.</h2>
          <p>Standards enforcement, scheduled tasks, background operations — ORCHEX runs a lot on your behalf. Portal Health gives you a dedicated view to see exactly what's active, what's been resolved, and how the system has been behaving over the last 30 days. No log hunting required.</p>
          <ul class="feature-list feature-list-cols">
            <li>Critical and Warning severity — at a glance</li>
            <li>Active / Resolved / All tabs with live counts</li>
            <li>30-day trend chart for incident history</li>
            <li>Search and filter across all notifications</li>
            <li>Auto-resolves when the system recovers</li>
          </ul>
        </div>
        <div class="feature-wide-img">
          <img src="/images/Health.png" alt="ORCHEX Portal Health — system task monitoring" />
        </div>
      </div>

      <div class="features-more">
        <p>And much more — mailbox management, Teams & SharePoint, conditional access, transport rules, quarantine, app registrations, risky users, sign-in logs, and more. ORCHEX covers the full M365 stack across all your tenants from a single portal.</p>
      </div>

    </section>

    </template><!-- end features page -->

    <!-- PRICING PAGE (hidden until launch) -->
    <template v-if="false /* activePage === 'pricing' */">
    <section class="pricing-page">

      <!-- Header -->
      <div class="pricing-header">
        <div class="hero-badge">Early Access</div>
        <h1>Simple, transparent pricing.</h1>
        <p>ORCHEX is currently onboarding its first MSP partners at a locked-in founding rate. Early adopters keep this price for life — no increases, ever.</p>
      </div>

      <!-- Card -->
      <div class="pricing-card-wrap">
        <div class="pricing-card">
          <div class="pricing-card-top">
            <div>
              <span class="pricing-plan-name">Founding Partner</span>
              <p class="pricing-plan-desc">Everything included. No feature tiers during early access.</p>
            </div>
            <div class="pricing-spots">
              <span class="pricing-spots-dot"></span>
              Limited spots available
            </div>
          </div>

          <div class="pricing-amount">
            <div class="pricing-amount-main">
              <span class="pricing-currency">$</span>
              <span class="pricing-price">49</span>
              <span class="pricing-period">/mo</span>
            </div>
            <div class="pricing-per-tenant">+ $3 per tenant / mo</div>
          </div>

          <div class="pricing-example">
            <div class="pricing-example-row">
              <span>10 tenants</span>
              <span>$79 / mo</span>
            </div>
            <div class="pricing-example-row">
              <span>25 tenants</span>
              <span>$124 / mo</span>
            </div>
            <div class="pricing-example-row">
              <span>50 tenants</span>
              <span>$199 / mo</span>
            </div>
          </div>

          <a href="https://tally.so/r/dWABZA" target="_blank" class="btn-primary pricing-cta">Request early access</a>

          <p class="pricing-annual">Pay annually and get 2 months free.</p>
        </div>
      </div>

      <!-- What's included -->
      <div class="pricing-includes">
        <h2>Everything included</h2>
        <p class="pricing-includes-sub">All features, all tenants, no add-ons.</p>
        <div class="pricing-features-grid">
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Full M365 management — users, mailboxes, groups, licenses, Teams, SharePoint</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>JIT Admin Access — grant time-limited admin roles with automatic expiration</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Security alerting — risky users, MFA gaps, expiring credentials, and more</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Standards engine — define, enforce, and track compliance across all tenants</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Portal health monitoring — background tasks, enforcement runs, audit trail</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>User onboarding & offboarding workflows</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Conditional access, Intune, device management</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Runs in your own Azure subscription — your data, your environment</span>
          </div>
          <div class="pricing-feature-item">
            <svg class="pricing-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Direct founder support</span>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="pricing-faq">
        <h2>Common questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>What does "runs in my Azure" mean?</h3>
            <p>ORCHEX deploys to your own Azure subscription — Function App, Static Web App, and Key Vault are all provisioned in your environment. Client data never touches any shared or third-party servers. You pay your own Azure costs (typically $20–60/mo depending on usage), not us.</p>
          </div>
          <div class="faq-item">
            <h3>Is the founding price really locked in?</h3>
            <p>Yes. Early adopters keep this rate for as long as they stay subscribed. When we move to standard pricing, existing partners are never affected.</p>
          </div>
          <div class="faq-item">
            <h3>How many tenants can I connect?</h3>
            <p>There is no hard cap on tenant count. You pay $3 per tenant per month, so the cost scales naturally with your business.</p>
          </div>
          <div class="faq-item">
            <h3>What kind of support do I get?</h3>
            <p>Direct access to the founder — email and async chat. As an early adopter you'll get faster, more personal support than you would from any support queue. Your feedback also directly shapes what gets built next.</p>
          </div>
          <div class="faq-item">
            <h3>What happens after the early access period?</h3>
            <p>Your price stays the same. Standard pricing for new customers will be higher. Early adopters are never migrated to a higher tier without explicit opt-in.</p>
          </div>
        </div>
      </div>

    </section>
    </template><!-- end pricing page -->

    <!-- FOUNDER -->
    <section class="founder" v-if="activePage === 'features'">
      <div class="founder-inner">
        <span class="feature-label">About the founder</span>
        <h2>Built by someone who's been there.</h2>
        <p>My name is Sasa Zelic. With 16+ years in IT — the last 8 spent in the MSP industry — I've managed Microsoft 365 environments at scale, led automation, and worked hands-on with the same tools MSPs rely on every day.</p>
        <a href="https://www.linkedin.com/in/sasa-zelic-14a1533b/" target="_blank" class="founder-linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          Sasa Zelic on LinkedIn
        </a>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact">
      <h2>Interested in ORCHEX?</h2>
      <p>ORCHEX is approaching its first pilot deployment. If you're an MSP managing Microsoft 365 tenants and want to be among the first to try it, get in touch.</p>
      <a href="https://tally.so/r/dWABZA" target="_blank" class="btn-primary">Request early access</a>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <span class="wordmark wordmark-sm">ORCHEX</span>
      <span class="footer-copy">&copy; {{ year }} Orchex. All rights reserved.</span>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
const activePage = ref('features')
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
  padding: 80px 2rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--bg-card);
}
.how-it-works-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.how-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 640px;
  margin: 0 auto;
}
.how-header h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}
.how-header p {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--text-muted);
}
.how-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
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

.feature-sub-screenshots {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.feature-sub-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.feature-sub-item img {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--border);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
}
.feature-sub-caption {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.feature-sub-caption strong {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
}
.feature-sub-caption span {
  font-size: 0.85rem;
  line-height: 1.65;
  color: var(--text-muted);
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
}

/* FOUNDER */
.founder {
  padding: 80px 2rem;
  background: rgba(79, 142, 247, 0.05);
  border-top: 1px solid rgba(79, 142, 247, 0.15);
  border-bottom: 1px solid rgba(79, 142, 247, 0.15);
}
.founder-inner {
  max-width: 620px;
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
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
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
.pricing-per-tenant {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 500;
}

.pricing-example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.875rem 1rem;
}
.pricing-example-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.pricing-example-row span:last-child {
  font-weight: 600;
  color: var(--text);
}

.pricing-cta {
  text-align: center;
}
.pricing-annual {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-muted);
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
</style>
