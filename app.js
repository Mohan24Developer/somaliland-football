* {
  box-sizing: border-box;
}

:root {
  --bg: #071a15;
  --panel: #0d261f;
  --panel-alt: #112f29;
  --card: rgba(16, 38, 31, 0.9);
  --card-soft: rgba(20, 48, 40, 0.9);
  --line: rgba(151, 185, 171, 0.18);
  --text: #edf9f2;
  --muted: #b7d0c2;
  --accent: #54d88c;
  --accent-strong: #1ab873;
  --accent-soft: rgba(84, 216, 140, 0.12);
  --warning: #ffca6a;
  --danger: #ff768e;
  --shadow: 0 20px 50px rgba(5, 17, 13, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(74, 129, 108, 0.23), transparent 32%),
    radial-gradient(circle at bottom right, rgba(26, 184, 115, 0.16), transparent 24%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 18px 64px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  margin-bottom: 28px;
  background: rgba(7, 26, 21, 0.78);
  border: 1px solid var(--line);
  border-radius: 18px;
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-badge {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #042a1b;
}

.eyebrow {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

h1, h2, h3, h4, p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: 1.1rem;
}

.topnav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.topnav a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 600;
}

.topnav a:hover {
  color: var(--text);
}

.lang-switcher {
  display: inline-flex;
  padding: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
}

.lang-btn {
  border: 0;
  background: transparent;
  color: var(--muted);
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
}

.lang-btn.active {
  background: var(--accent-soft);
  color: var(--text);
  border: 1px solid rgba(84, 216, 140, 0.3);
}

.card {
  background: linear-gradient(180deg, rgba(19, 45, 38, 0.94), rgba(12, 31, 25, 0.94));
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.hero-section {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
  padding: 32px;
}

.kicker {
  margin-bottom: 14px;
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 12px;
}

.hero-copy h2 {
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero-copy p {
  color: var(--muted);
  line-height: 1.7;
  max-width: 620px;
}

.cta-row {
  display: flex;
  gap: 14px;
  margin-top: 22px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid transparent;
  font-weight: 700;
}

.primary-btn {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: #042a1b;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-color: var(--line);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-content: center;
}

.stat-box {
  padding: 18px 16px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(14, 39, 33, 0.9), rgba(9, 25, 21, 0.9));
  border: 1px solid var(--line);
}

.stat-box strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 4px;
}

.stat-box span {
  color: var(--muted);
  font-size: 0.92rem;
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: 30px 0 18px;
}

.section-header h3 {
  font-size: clamp(1.5rem, 4vw, 2.1rem);
  margin-bottom: 0;
}

.grid {
  display: grid;
  gap: 18px;
}

.cards-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.competition-card,
.team-card,
.fixture-card {
  background: linear-gradient(180deg, rgba(17, 42, 35, 0.96), rgba(10, 24, 20, 0.96));
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px;
}

.competition-card header,
.team-card header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--text);
  font-size: 12px;
  font-weight: 700;
}

.competition-card h4,
.team-card h4,
.fixture-card h4,
.summary-card h4,
.form-card h4 {
  margin-bottom: 10px;
}

.competition-meta,
.fixture-meta,
.summary-list {
  color: var(--muted);
  line-height: 1.7;
}

.fixture-wrap {
  display: grid;
  gap: 18px;
}

.fixture-card {
  display: grid;
  gap: 14px;
}

.fixture-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 0.9rem;
}

.fixture-score {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 12px;
  align-items: center;
}

.team-mini {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.team-badge {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: var(--accent-soft);
  color: var(--text);
}

.result-score {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
}

.table-card {
  padding: 18px;
  overflow: auto;
}

.standings-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 620px;
}

.standings-table th,
.standings-table td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.standings-table th {
  color: var(--muted);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.team-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.team-badge.small {
  width: 28px;
  height: 28px;
  font-size: 0.72rem;
}

.admin-layout {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 18px;
  margin-top: 10px;
}

.form-card,
.summary-card {
  padding: 20px;
}

.field-grid {
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
}

.two-columns {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 0.95rem;
}

input,
select {
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--text);
  outline: none;
}

input:focus,
select:focus {
  border-color: rgba(84, 216, 140, 0.6);
  box-shadow: 0 0 0 2px rgba(84, 216, 140, 0.1);
}

.submit-btn {
  width: 100%;
  border: 0;
  margin-top: 10px;
}

.mini-metrics {
  display: grid;
  gap: 12px;
}

.metric-box {
  padding: 14px 16px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
}

.metric-box strong {
  display: block;
  font-size: 1.6rem;
  margin-bottom: 4px;
}

.metric-box span {
  color: var(--muted);
}

@media (max-width: 900px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .topnav {
    justify-content: center;
  }

  .hero-section,
  .admin-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding-left: 12px;
    padding-right: 12px;
  }

  .topbar {
    padding: 16px;
  }

  .hero-section,
  .form-card,
  .summary-card,
  .competition-card,
  .team-card,
  .fixture-card {
    padding: 16px;
  }

  .two-columns {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    grid-template-columns: 1fr 1fr;
  }
}
