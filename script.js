/* =========================================================
   IRVIN HOUNMENOU — PORTFOLIO
   Design: terminal / réseau, fond vert profond, accents mono
   ========================================================= */

:root {
  /* color */
  --bg: #081210;
  --bg-soft: #0c1a14;
  --surface: #0f1f17;
  --surface-hover: #132719;
  --border: #1c3326;
  --border-soft: #15281d;
  --text: #eaf3ec;
  --text-dim: #8aab97;
  --text-faint: #547061;
  --accent: #4ef58a;
  --accent-dim: #2c8a57;
  --accent-soft: rgba(78, 245, 138, 0.12);
  --amber: #f5b942;

  /* type */
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* layout */
  --maxw: 1140px;
  --pad: clamp(20px, 5vw, 64px);
  --radius: 10px;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

body {
  margin: 0;
  background: var(--bg);
  background-image:
    radial-gradient(circle at 12% 8%, rgba(78,245,138,0.06), transparent 38%),
    radial-gradient(circle at 88% 30%, rgba(78,245,138,0.04), transparent 45%);
  color: var(--text);
  font-family: var(--font-display);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 { font-family: var(--font-display); margin: 0; }
p { margin: 0; }
a { color: inherit; text-decoration: none; }
ul, ol { margin: 0; padding: 0; list-style: none; }
code {
  font-family: var(--font-mono);
  background: var(--accent-soft);
  color: var(--accent);
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}

::selection { background: var(--accent); color: var(--bg); }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

.accent { color: var(--accent); }
.accent-text { color: var(--accent); font-weight: 600; }

/* ---------- layout helpers ---------- */
.section {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 96px var(--pad);
}
.section-head { margin-bottom: 48px; max-width: 640px; }
.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--accent-dim);
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 4px 10px;
  border-radius: 5px;
  margin-bottom: 16px;
}
.section-head h2 {
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 600;
  letter-spacing: -0.01em;
}
.section-intro {
  margin-top: 12px;
  color: var(--text-dim);
  font-size: 1rem;
  max-width: 50ch;
}

/* ---------- buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px 22px;
  border-radius: 7px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary {
  background: var(--accent);
  color: #06150d;
}
.btn-primary:hover { background: #6ffba3; }
.btn-ghost {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}
.btn-ghost:hover { border-color: var(--accent-dim); background: var(--surface); }

/* =========================================================
   NAV
   ========================================================= */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(8, 18, 16, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-soft);
}
.nav-inner {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 16px var(--pad);
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav-logo {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
}
.nav-links {
  display: flex;
  gap: 24px;
  margin-right: auto;
}
.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.15s ease;
}
.nav-links a:hover { color: var(--accent); }
.nav-links .idx { color: var(--border); font-size: 0.75rem; }

.nav-status {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-faint);
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}
.status-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: pulse 2.4s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

.nav-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px; height: 32px;
  background: none;
  border: none;
  cursor: pointer;
}
.nav-burger span {
  display: block;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

/* =========================================================
   HERO
   ========================================================= */
.hero {
  position: relative;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: clamp(48px, 8vw, 96px) var(--pad) 80px;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}
.eyebrow {
  font-family: var(--font-mono);
  color: var(--accent-dim);
  font-size: 0.85rem;
  margin-bottom: 18px;
}
.hero-text h1 {
  font-size: clamp(2.6rem, 6vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 20px;
}
.hero-sub {
  color: var(--text-dim);
  font-size: 1.1rem;
  max-width: 46ch;
  margin-bottom: 36px;
}
.hero-sub strong { color: var(--text); font-weight: 600; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }

.scroll-hint {
  position: absolute;
  bottom: -8px;
  left: var(--pad);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-faint);
  letter-spacing: 0.1em;
}
.scroll-line {
  width: 1px;
  height: 28px;
  background: linear-gradient(var(--accent-dim), transparent);
}

/* ---------- terminal (hero + contact) ---------- */
.terminal, .contact-terminal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 30px 80px -30px rgba(0,0,0,0.6);
}
.terminal-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--bg-soft);
  border-bottom: 1px solid var(--border-soft);
}
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot-red { background: #e8645a; }
.dot-amber { background: #e8b14f; }
.dot-green { background: var(--accent-dim); }
.terminal-title {
  margin-left: 8px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-faint);
}
.terminal-body {
  font-family: var(--font-mono);
  font-size: 0.92rem;
  padding: 24px;
  min-height: 220px;
  color: var(--text-dim);
  line-height: 1.85;
}
.terminal-body .line { white-space: pre-wrap; }
.terminal-body .prompt { color: var(--accent); }
.terminal-body .out { color: var(--text); display: block; padding-left: 0; }
.terminal-cursor {
  display: inline-block;
  width: 8px; height: 1em;
  background: var(--accent);
  vertical-align: text-bottom;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* =========================================================
   ABOUT
   ========================================================= */
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  gap: 40px;
  align-items: start;
}
.about-text {
  font-size: 1.08rem;
  color: var(--text-dim);
  line-height: 1.85;
}
.about-text strong { color: var(--text); font-weight: 600; }

.about-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
}
.about-card-label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent-dim);
  margin-bottom: 14px;
}
.about-card p:not(.about-card-label) {
  color: var(--text-dim);
  font-size: 0.98rem;
  line-height: 1.8;
}

/* =========================================================
   TIMELINE
   ========================================================= */
.timeline {
  position: relative;
  border-left: 1px solid var(--border);
  margin-left: 6px;
}
.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 28px;
  padding: 0 0 40px 32px;
}
.timeline-item:last-child { padding-bottom: 0; }
.timeline-item::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 6px;
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--accent-dim);
}
.timeline-item--goal::before { border-color: var(--accent); }

.timeline-year {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--accent-dim);
  padding-top: 2px;
}
.timeline-content h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.timeline-content p {
  color: var(--text-dim);
  font-size: 0.96rem;
}
.goal-pill {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--bg);
  background: var(--accent);
  padding: 3px 8px;
  border-radius: 999px;
}

/* =========================================================
   SKILLS
   ========================================================= */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  transition: border-color 0.2s ease;
}
.skill-card:hover { border-color: var(--accent-dim); }
.skill-card-title {
  font-weight: 600;
  font-size: 1.02rem;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.skill-icon { color: var(--accent); }
.skill-list li {
  font-family: var(--font-mono);
  font-size: 0.88rem;
  color: var(--text);
  padding: 10px 0;
  border-top: 1px solid var(--border-soft);
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.skill-list li:first-child { border-top: none; padding-top: 0; }
.skill-meta {
  color: var(--text-faint);
  font-size: 0.78rem;
}
.skill-meta--progress { color: var(--amber); }

/* =========================================================
   PROJECTS
   ========================================================= */
.projects-featured {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}
.projects-mini {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}
.project-card:hover {
  border-color: var(--accent-dim);
  background: var(--surface-hover);
  transform: translateY(-3px);
}
.project-file {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent-dim);
  margin-bottom: 14px;
}
.project-file .ext { color: var(--text-faint); }
.project-card h3 {
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.projects-mini .project-card h3 { font-size: 1rem; }
.project-card p {
  color: var(--text-dim);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 18px;
}
.projects-mini .project-card p { font-size: 0.86rem; margin-bottom: 14px; }
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.project-tags li {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-dim);
  border: 1px solid var(--border);
  padding: 4px 9px;
  border-radius: 999px;
}

/* =========================================================
   VEILLE TECHNOLOGIQUE
   ========================================================= */
.veille-method {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  margin-bottom: 32px;
}
.veille-method-label {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent-dim);
  margin-bottom: 14px;
}
.veille-method-text {
  color: var(--text-dim);
  font-size: 0.98rem;
  line-height: 1.8;
  margin-bottom: 12px;
}
.veille-method-text:last-of-type { margin-bottom: 20px; }
.veille-method-text strong { color: var(--text); font-weight: 600; }
.source-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
.source-chips li {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid var(--border);
  padding: 5px 11px;
  border-radius: 999px;
}

.veille-articles {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.veille-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.veille-card:hover { border-color: var(--accent-dim); transform: translateY(-3px); }
.veille-meta {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-faint);
  margin-bottom: 10px;
}
.veille-source { color: var(--accent-dim); }
.veille-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
}
.veille-card > p {
  color: var(--text-dim);
  font-size: 0.92rem;
  line-height: 1.7;
  margin-bottom: 16px;
}
.veille-takeaway {
  border-left: 2px solid var(--accent-dim);
  padding-left: 14px;
  margin-bottom: 18px;
  color: var(--text);
  font-size: 0.88rem;
  line-height: 1.7;
}
.veille-takeaway span {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 5px;
}
.veille-link {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent);
  margin-top: auto;
  align-self: flex-start;
  transition: opacity 0.15s ease;
}
.veille-link:hover { opacity: 0.7; }

/* =========================================================
   CONTACT
   ========================================================= */
.contact-terminal { max-width: 720px; }
.contact-body p { color: var(--text-dim); }
.contact-body .prompt { color: var(--accent); }
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 22px 0 26px;
}
.contact-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 7px;
  border: 1px solid transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.contact-link:hover {
  background: var(--accent-soft);
  border-color: var(--border);
}
.contact-key {
  color: var(--text-faint);
  font-size: 0.82rem;
}
.contact-val {
  color: var(--text);
  font-size: 0.9rem;
}
.copy-btn { font-size: 0.82rem; padding: 10px 18px; }
.copy-btn.copied { background: var(--accent); }

/* =========================================================
   FOOTER
   ========================================================= */
.footer {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 40px var(--pad) 60px;
  border-top: 1px solid var(--border-soft);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-faint);
}
.cursor-blink { animation: blink 1.1s step-end infinite; }

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media (max-width: 980px) {
  .hero-inner { grid-template-columns: 1fr; gap: 40px; }
  .about-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: 1fr 1fr; }
  .projects-featured { grid-template-columns: 1fr 1fr; }
  .projects-mini { grid-template-columns: 1fr 1fr; }
  .veille-articles { grid-template-columns: 1fr; }
}

@media (max-width: 760px) {
  .nav-links, .nav-status { display: none; }
  .nav-burger { display: flex; }
  .nav.is-open .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    background: var(--bg-soft);
    border-bottom: 1px solid var(--border-soft);
    padding: 16px var(--pad) 24px;
    gap: 16px;
  }
  .skills-grid { grid-template-columns: 1fr; }
  .projects-featured { grid-template-columns: 1fr; }
  .projects-mini { grid-template-columns: 1fr; }
  .timeline-item { grid-template-columns: 1fr; gap: 6px; }
  .scroll-hint { display: none; }
}