const translations = {
  en: {
    brandEyebrow: 'Somaliland Football',
    brandTitle: 'Matchday Hub',
    navHome: 'Home',
    navFixtures: 'Fixtures',
    navStandings: 'Standings',
    navTeams: 'Teams',
    navAdmin: 'Admin',
    heroKicker: 'Football network',
    heroTitle: 'Somaliland football coverage at a glance',
    heroText: 'Follow leagues, teams, standings and match results in Somali and English.',
    heroPrimary: 'See fixtures',
    heroSecondary: 'Open admin',
    competitionsTitleSmall: 'Featured competitions',
    competitionsTitle: 'Leagues and cups',
    fixturesTitleSmall: 'Live matchday',
    fixturesTitle: 'Upcoming and recent fixtures',
    standingsTitleSmall: 'Table tracker',
    standingsTitle: 'League standings',
    teamsTitleSmall: 'Clubs',
    teamsTitle: 'Featured teams',
    adminTitleSmall: 'Control center',
    adminTitle: 'Admin dashboard',
    adminFormTitle: 'Add match result',
    formCompetition: 'Competition',
    formDate: 'Date',
    formHomeTeam: 'Home team',
    formAwayTeam: 'Away team',
    formHomeScore: 'Home score',
    formAwayScore: 'Away score',
    formSubmit: 'Save result',
    adminSummaryTitle: 'Quick overview',
    completed: 'Completed',
    upcoming: 'Upcoming',
    clubs: 'Clubs',
    points: 'Points',
    goalsFor: 'GF',
    goalsAgainst: 'GA',
    played: 'P',
    wins: 'W',
    draws: 'D',
    losses: 'L',
    noFixtures: 'No fixtures available',
    liveMatches: 'Live matches',
    totalCompetitions: 'Competitions',
    matchDay: 'Matchday',
    status: 'Status',
    dateLabel: 'Date',
    leaguePhase: 'League phase',
    teamsCount: 'Teams',
    region: 'Region',
    matches: 'Matches',
    fixturesOverview: 'Fixtures overview',
    recentResult: 'Recent result',
    soon: 'Soon',
    resultSaved: 'Match result saved successfully.'
  },
  so: {
    brandEyebrow: 'Kubadda Cagta Somaliland',
    brandTitle: 'Xarunta Ciyaaraha',
    navHome: 'Hoyga',
    navFixtures: 'Ciyaaraha',
    navStandings: 'Kala Sarreynta',
    navTeams: 'Kooxaha',
    navAdmin: 'Maamulka',
    heroKicker: 'Shabakada kubadda cagta',
    heroTitle: 'Gaadiidka kubadda cagta Somaliland oo dhan',
    heroText: 'Raadi horyaalada, kooxaha, kala sarreynta iyo natiijooyinka Af-Soomaali iyo Ingiriisi.',
    heroPrimary: 'Eeg ciyaaraha',
    heroSecondary: 'Fur maamulka',
    competitionsTitleSmall: 'Tartamada laga helo',
    competitionsTitle: 'Horyaalada iyo koobabka',
    fixturesTitleSmall: 'Maalinta ciyaaraha',
    fixturesTitle: 'Ciyaaraha soo socda iyo kuwa hore',
    standingsTitleSmall: 'Xisaabiyaha miiska',
    standingsTitle: 'Kala sarreynta horyaalka',
    teamsTitleSmall: 'Kooxaha',
    teamsTitle: 'Kooxaha caanka ah',
    adminTitleSmall: 'Xarunta xakamaynta',
    adminTitle: 'Dashboard-ka maamulka',
    adminFormTitle: 'Ku dar natiijada ciyaarta',
    formCompetition: 'Tartanka',
    formDate: 'Taariikhda',
    formHomeTeam: 'Kooxda guriga',
    formAwayTeam: 'Kooxda martida',
    formHomeScore: 'Dhibco guriga',
    formAwayScore: 'Dhibco martida',
    formSubmit: 'Keydi natiijada',
    adminSummaryTitle: 'Gorofka degdega ah',
    completed: 'Dhammaatay',
    upcoming: 'Soon',
    clubs: 'Kooxaha',
    points: 'Dhibco',
    goalsFor: 'GF',
    goalsAgainst: 'GA',
    played: 'C',
    wins: 'G',
    draws: 'D',
    losses: 'L',
    noFixtures: 'Ciyaar lama helin',
    liveMatches: 'Ciyaaraha socda',
    totalCompetitions: 'Tartamada',
    matchDay: 'Maalinta ciyaaraha',
    status: 'Xaaladda',
    dateLabel: 'Taariikh',
    leaguePhase: 'Weerarka horyaalka',
    teamsCount: 'Kooxaha',
    region: 'Gobolka',
    matches: 'Ciyaaraha',
    fixturesOverview: 'Dulmar ciyaaraha',
    recentResult: 'Natiijadii ugu dambeeyay',
    soon: 'Dhakhso',
    resultSaved: 'Natiijada ciyaarta waa la keydiyay.'
  }
};

const state = {
  language: 'en',
  competitions: [
    {
      name: 'Somaliland Premier League',
      teams: 12,
      status: 'Active',
      region: 'National',
      matches: 66,
      phase: 'Round 12'
    },
    {
      name: 'Champions League',
      teams: 8,
      status: 'Group stage',
      region: 'Regional',
      matches: 16,
      phase: 'Group B'
    },
    {
      name: 'FA League',
      teams: 10,
      status: 'Active',
      region: 'National',
      matches: 24,
      phase: 'Semi-final'
    },
    {
      name: 'Regional Cup',
      teams: 14,
      status: 'Cup',
      region: 'Regional',
      matches: 20,
      phase: 'Quarter-final'
    }
  ],
  fixtures: [
    {
      competition: 'Somaliland Premier League',
      date: '2026-11-14',
      status: 'upcoming',
      home: 'Hargeisa City',
      away: 'Borama FC',
      score: 'VS',
      venue: 'Hargeisa Stadium'
    },
    {
      competition: 'FA League',
      date: '2026-11-15',
      status: 'upcoming',
      home: 'Berbera FC',
      away: 'Bosaso FC',
      score: 'VS',
      venue: 'Berbera Arena'
    },
    {
      competition: 'Champions League',
      date: '2026-11-12',
      status: 'completed',
      home: 'Sahil FC',
      away: 'Erigavo FC',
      score: '2 - 1',
      venue: 'Burao Stadium'
    },
    {
      competition: 'Regional Cup',
      date: '2026-11-10',
      status: 'completed',
      home: 'Borama FC',
      away: 'Hargeisa City',
      score: '1 - 1',
      venue: 'Borama Ground'
    }
  ],
  standings: [
    { team: 'Hargeisa City', played: 12, wins: 9, draws: 2, losses: 1, gf: 26, ga: 9, points: 29 },
    { team: 'Borama FC', played: 12, wins: 8, draws: 3, losses: 1, gf: 23, ga: 11, points: 27 },
    { team: 'Berbera FC', played: 12, wins: 7, draws: 2, losses: 3, gf: 20, ga: 12, points: 23 },
    { team: 'Bosaso FC', played: 12, wins: 6, draws: 2, losses: 4, gf: 18, ga: 15, points: 20 },
    { team: 'Sahil FC', played: 12, wins: 5, draws: 2, losses: 5, gf: 16, ga: 18, points: 17 },
    { team: 'Erigavo FC', played: 12, wins: 4, draws: 3, losses: 5, gf: 15, ga: 17, points: 15 }
  ],
  teams: [
    { name: 'Hargeisa City', city: 'Hargeisa', badge: 'HC', founded: 2002 },
    { name: 'Borama FC', city: 'Borama', badge: 'BF', founded: 1998 },
    { name: 'Berbera FC', city: 'Berbera', badge: 'BR', founded: 2005 },
    { name: 'Bosaso FC', city: 'Bosaso', badge: 'BS', founded: 1999 },
    { name: 'Sahil FC', city: 'Burao', badge: 'SF', founded: 2006 },
    { name: 'Erigavo FC', city: 'Erigavo', badge: 'EF', founded: 2003 }
  ],
  news: []
};

const heroStats = [
  { label: 'liveMatches', value: 3 },
  { label: 'totalCompetitions', value: 4 },
  { label: 'clubs', value: 12 },
  { label: 'matches', value: 126 }
];

const el = {
  competitions: document.getElementById('competitions'),
  fixtures: document.getElementById('fixtures'),
  standings: document.getElementById('standings'),
  teams: document.getElementById('teams'),
  heroStats: document.getElementById('heroStats'),
  adminMetrics: document.getElementById('adminMetrics'),
  langButtons: document.querySelectorAll('.lang-btn'),
  resultForm: document.getElementById('resultForm')
};

function t(key) {
  return translations[state.language][key] || key;
}

function renderTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (translations[state.language][key]) {
      node.textContent = translations[state.language][key];
    }
  });

  document.documentElement.lang = state.language === 'so' ? 'so' : 'en';
}

function renderHeroStats() {
  el.heroStats.innerHTML = heroStats
    .map(
      (stat) => `
        <div class="stat-box">
          <strong>${stat.value}</strong>
          <span>${t(stat.label)}</span>
        </div>
      `
    )
    .join('');
}

function renderCompetitions() {
  el.competitions.innerHTML = state.competitions
    .map(
      (comp) => `
        <article class="competition-card">
          <header>
            <h4>${comp.name}</h4>
            <span class="pill">${comp.status}</span>
          </header>
          <div class="competition-meta">
            <div>${t('leaguePhase')}: ${comp.phase}</div>
            <div>${t('teamsCount')}: ${comp.teams}</div>
            <div>${t('region')}: ${comp.region}</div>
            <div>${t('matches')}: ${comp.matches}</div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderFixtures() {
  const fixturesHTML = state.fixtures
    .map(
      (match) => `
        <article class="fixture-card">
          <div class="fixture-top">
            <span>${match.competition}</span>
            <span class="pill">${match.status === 'completed' ? t('completed') : t('upcoming')}</span>
          </div>
          <div class="fixture-score">
            <div class="team-mini">
              <div class="team-badge">${match.home.slice(0, 2).toUpperCase()}</div>
              <span>${match.home}</span>
            </div>
            <div class="result-score">${match.score}</div>
            <div class="team-mini">
              <div class="team-badge">${match.away.slice(0, 2).toUpperCase()}</div>
              <span>${match.away}</span>
            </div>
          </div>
          <div class="fixture-meta">
            <div>${t('dateLabel')}: ${match.date}</div>
            <div>${t('status')}: ${match.venue}</div>
          </div>
        </article>
      `
    )
    .join('');

  el.fixtures.innerHTML = fixturesHTML || `<div class="card fixture-card"><p>${t('noFixtures')}</p></div>`;
}

function renderStandings() {
  const rows = state.standings
    .map(
      (team, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>
            <div class="team-row">
              <span class="team-badge small">${team.team.slice(0, 2).toUpperCase()}</span>
              <span>${team.team}</span>
            </div>
          </td>
          <td>${team.played}</td>
          <td>${team.wins}</td>
          <td>${team.draws}</td>
          <td>${team.losses}</td>
          <td>${team.gf}</td>
          <td>${team.ga}</td>
          <td>${team.points}</td>
        </tr>
      `
    )
    .join('');

  el.standings.innerHTML = `
    <table class="standings-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>${t('played')}</th>
          <th>${t('wins')}</th>
          <th>${t('draws')}</th>
          <th>${t('losses')}</th>
          <th>${t('goalsFor')}</th>
          <th>${t('goalsAgainst')}</th>
          <th>${t('points')}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderTeams() {
  el.teams.innerHTML = state.teams
    .map(
      (team) => `
        <article class="team-card">
          <header>
            <div class="team-row">
              <span class="team-badge">${team.badge}</span>
              <h4>${team.name}</h4>
            </div>
            <span class="pill">${team.city}</span>
          </header>
          <div class="competition-meta">
            <div>${t('region')}: ${team.city}</div>
            <div>Founded: ${team.founded}</div>
          </div>
        </article>
      `
    )
    .join('');
}

function renderAdminMetrics() {
  const metrics = [
    { value: state.competitions.length, label: t('totalCompetitions') },
    { value: state.teams.length, label: t('clubs') },
    { value: state.fixtures.filter((f) => f.status === 'upcoming').length, label: t('upcoming') },
    { value: state.fixtures.filter((f) => f.status === 'completed').length, label: t('completed') }
  ];

  el.adminMetrics.innerHTML = metrics
    .map(
      (metric) => `
        <div class="metric-box">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join('');
}

function renderAll() {
  renderTranslations();
  renderHeroStats();
  renderCompetitions();
  renderFixtures();
  renderStandings();
  renderTeams();
  renderAdminMetrics();
}

el.langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.language = button.dataset.lang;
    el.langButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderAll();
  });
});

el.resultForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const homeTeam = document.getElementById('homeTeam').value;
  const awayTeam = document.getElementById('awayTeam').value;
  const homeScore = Number(document.getElementById('homeScore').value);
  const awayScore = Number(document.getElementById('awayScore').value);
  const competition = document.getElementById('competition').value;
  const matchDate = document.getElementById('matchDate').value;

  if (homeTeam === awayTeam) {
    alert('Home team and away team cannot be the same.');
    return;
  }

  state.fixtures.unshift({
    competition,
    date: matchDate,
    status: 'completed',
    home: homeTeam,
    away: awayTeam,
    score: `${homeScore} - ${awayScore}`,
    venue: 'Admin Entry'
  });

  alert(t('resultSaved'));
  renderFixtures();
  renderAdminMetrics();
  el.resultForm.reset();
});

renderAll();
