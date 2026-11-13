const words={
  so:{tagline:'Kubadda cagta oo dhan, hal meel',navMatches:'Ciyaaraha',navComps:'Tartamada',navTable:'Kala sarreynta',navAdmin:'Maamulka',eyebrow:'Kubadda cagta Somaliland',heroTitle:'Dhammaan ciyaaraha.<br><span>Hal meel.</span>',heroCopy:'La soco jadwalka, natiijooyinka iyo tartamada kubadda cagta Somaliland—ragga, dumarka iyo da’ kasta.',seeMatches:'Eeg ciyaaraha',today:'Ciyaaraha maanta',demo:'Tusaale',sampleNote:'Xog tusaale ah — ma aha natiijooyin rasmi ah',matches:'Ciyaaraha',competitionCount:'Tartamada tusaalaha',languages:'Luqadood',fixturesEyebrow:'Jadwalka',fixturesTitle:'Ciyaaraha soo socda',sampleData:'Xog tusaale ah',competitionEyebrow:'Dalka oo dhan',competitionTitle:'Tartamada',tableEyebrow:'Horyaalka tusaalaha',tableTitle:'Kala sarreynta',team:'Koox',points:'Dhibco',adminEyebrow:'Qaybta maamulka',adminTitle:'Ku dar ciyaar',adminCopy:'Foomka demo-ga wuxuu xogta ku kaydiyaa browser-kan oo keliya. Ma laha login ama kayd xog wadaag ah.',homeTeam:'Kooxda 1',awayTeam:'Kooxda 2',date:'Taariikhda',addMatch:'Ku dar ciyaar',footerNote:'Prototype — xogtu weli ma aha mid rasmi ah.',league:'Horyaalka Somaliland',cup:'Koobka Gobollada',champions:'Champions League',fa:'FA League',added:'La daray'},
  en:{tagline:'All Somaliland football, in one place',navMatches:'Matches',navComps:'Competitions',navTable:'Standings',navAdmin:'Admin',eyebrow:'Somaliland football',heroTitle:'Every match.<br><span>One place.</span>',heroCopy:'Follow fixtures, results and competitions across Somaliland football—men, women and every age group.',seeMatches:'View matches',today:'Featured matches',demo:'Demo',sampleNote:'Sample data — not official results',matches:'Matches',competitionCount:'Sample competitions',languages:'Languages',fixturesEyebrow:'Schedule',fixturesTitle:'Upcoming matches',sampleData:'Sample data',competitionEyebrow:'Across the country',competitionTitle:'Competitions',tableEyebrow:'Sample league',tableTitle:'Standings',team:'Team',points:'Points',adminEyebrow:'Admin area',adminTitle:'Add a match',adminCopy:'The demo form stores data only in this browser. It has no login or shared database.',homeTeam:'Home team',awayTeam:'Away team',date:'Date',addMatch:'Add match',footerNote:'Prototype — data is not official.',league:'Somaliland Premier League',cup:'Regional Cup',champions:'Champions League',fa:'FA League',added:'Added'}
};
const initialMatches=[
 {home:'Hargeisa City',away:'Borama FC',date:'2026-11-14',competition:'Somaliland Premier League'},
 {home:'Berbera FC',away:'Sahil FC',date:'2026-11-16',competition:'FA League'},
 {home:'Borama FC',away:'Erigavo FC',date:'2026-11-18',competition:'Regional Cup'},
 {home:'Hargeisa City',away:'Berbera FC',date:'2026-11-20',competition:'Champions League'}
];
const comps=[['league','🏆','league','Horyaalka heerka koowaad'],['champions','🌟','Champions League','Naadiyada u soo baxay'],['fa','🥇','FA League','Tartanka koobka'],['cup','🗺️','cup','Gobollada iyo xulalkooda']];
let lang='so';
let matches=loadMatches();
function loadMatches(){try{const saved=JSON.parse(localStorage.getItem('sf-matches'));return Array.isArray(saved)?saved:initialMatches.slice()}catch{return initialMatches.slice()}}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function render(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-t]').forEach(node=>{const value=words[lang][node.dataset.t];if(value)node.innerHTML=value});
 document.getElementById('language').textContent=lang==='so'?'EN':'SO';
 document.getElementById('match-count').textContent=matches.length;
 document.getElementById('fixture-list').innerHTML=matches.map(match=>`<article class="fixture"><div class="fixture-top"><span>${escapeHtml(match.competition)}</span><span>${escapeHtml(match.date)}</span></div><div class="fixture-teams"><span>${escapeHtml(match.home)}</span><b class="vs">VS</b><span>${escapeHtml(match.away)}</span></div></article>`).join('');
 document.getElementById('competition-list').innerHTML=comps.map(c=>`<article class="competition"><span class="icon">${c[1]}</span><h3>${escapeHtml(words[lang][c[2]]||c[2])}</h3><p>${escapeHtml(lang==='so'?c[3]:({league:'Top division',champions:'Qualified clubs',fa:'Cup competition',cup:'Regions and representative teams'}[c[0]))}</p></article>`).join('');
}
document.getElementById('language').addEventListener('click',()=>{lang=lang==='so'?'en':'so';render()});
document.getElementById('match-form').addEventListener('submit',event=>{
 event.preventDefault();
 const inputs=event.currentTarget.querySelectorAll('input');
 const home=inputs[0].value.trim(),away=inputs[1].value.trim(),date=inputs[2].value;
 if(home.toLocaleLowerCase()===away.toLocaleLowerCase()){alert(lang==='so'?'Kooxuhu isku mid ma noqon karaan.':'The teams must be different.');return}
 matches.unshift({home,away,date,competition:lang==='so'?'Tartan cusub':'New fixture'});
 try{localStorage.setItem('sf-matches',JSON.stringify(matches))}catch{}
 event.currentTarget.reset();render();
});
// Add installability metadata and offline shell support for compatible browsers.
const manifest=document.createElement('link');manifest.rel='manifest';manifest.href='./manifest.webmanifest';document.head.appendChild(manifest);
if('serviceWorker' in navigator && location.protocol!=='file:') navigator.serviceWorker.register('./sw.js').catch(()=>{});
render();
