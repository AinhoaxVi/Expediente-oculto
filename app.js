const CASES = [
  {
    id: 'lincoln-1865', number: '001', title: 'El palco presidencial', date: '14 de abril de 1865', location: 'Washington D. C., Estados Unidos',
    teaser: 'Una función teatral, un actor conocido y una huida preparada en plena posguerra.', difficulty: 'Iniciación',
    intro: 'Durante una representación de [OBRA], el presidente Abraham Lincoln fue atacado en el [PALCO] del Teatro Ford. El autor era un conocido [ACTOR] que escapó tras el disparo.',
    words: [
      {answer:'OBRA', mask:'O _ R A'}, {answer:'PALCO', mask:'P A _ C O'}, {answer:'ACTOR', mask:'A C _ O R'},
      {answer:'TEATRO', mask:'T E A _ R O'}, {answer:'ESCAPE', mask:'E S C _ P E'}, {answer:'PRESIDENTE', mask:'P R E S I D _ N T E'},
      {answer:'CONFEDERADO', mask:'C O N F E D E R A _ O'}, {answer:'DERRINGER', mask:'D E R R _ N G E R', missing:true}
    ],
    grid: ['JOHNWILPKESBP','OOTHXIERLBOVA','IPOQLPVERKRHL','KICBAFASJKTEC','ACVCRTGIZBAMO','WASSHINDGTEON','XEYENDSEUNTOE','RLUPTURNUGARJ','LLJOVZFTLJYOA','SCNFOVQESNYTR','DSADEIEEZEQCB','CONFEDERADOAO','LIPVMLVTCNKRW'],
    culprit: 'John Wilkes Booth', weapon: 'Derringer', crimePlace: 'Teatro Ford',
    missingChoices: ['DERRINGER','DAGA','REVOLVER'],
    cipher: { text:'SDOFR SUHVLGHQFLDO', hint:'Cifrado César: retrocede tres letras.', answer:'PALCO PRESIDENCIAL' },
    culpritChoices:['John Wilkes Booth','Lewis Powell','David Herold'], weaponChoices:['Derringer','Daga','Rifle'], placeChoices:['Teatro Ford','Casa Petersen','Capitolio'],
    fullStory:'El 14 de abril de 1865, Abraham Lincoln asistía a la obra Our American Cousin en el Teatro Ford. John Wilkes Booth, actor y simpatizante confederado, accedió al palco presidencial y disparó a Lincoln con una pistola Derringer de un solo tiro. Booth huyó del teatro. Lincoln fue trasladado a la Casa Petersen, donde murió al día siguiente. El expediente utiliza la conclusión histórica documentada y evita recreaciones gráficas.',
    sources:[
      {label:'National Park Service: preguntas sobre el asesinato', url:'https://www.nps.gov/foth/learn/historyculture/faq-the-assassination.htm'},
      {label:'National Park Service: historia y colección del Teatro Ford', url:'https://www.nps.gov/foth/learn/historyculture/index.htm'}
    ]
  },
  {
    id: 'sarajevo-1914', number: '002', title: 'El giro equivocado', date: '28 de junio de 1914', location: 'Sarajevo, Bosnia y Herzegovina',
    teaser: 'Un primer atentado fallido, una ruta alterada y un encuentro que cambió Europa.', difficulty: 'Intermedio',
    intro: 'El archiduque Francisco Fernando recorría [SARAJEVO] en [COCHE]. Tras un primer ataque con una [BOMBA], la [RUTA] cambió y el vehículo terminó cerca de uno de los conspiradores.',
    words:[
      {answer:'SARAJEVO',mask:'S A R A _ E V O'}, {answer:'COCHE',mask:'C O _ H E'}, {answer:'BOMBA',mask:'B O M _ A'},
      {answer:'RUTA',mask:'R _ T A'}, {answer:'PUENTE',mask:'P U E _ T E'}, {answer:'HEREDERO',mask:'H E R E D _ R O'},
      {answer:'CONSPIRADOR',mask:'C O N S P I R A _ O R'}, {answer:'PISTOLA',mask:'P I S _ O L A',missing:true}
    ],
    grid:['GASPVRILOPRIN','CIPAUXKSNEFQQ','EOCWREHVTRLCR','SRDPNANQSBCOU','FECHAFJTJRFNT','SDARAJEEEVOSA','XESKDEADVVDPQ','FRYCCSHPGOUIM','HECQKEEBMOARD','SHOUNWUUSWMAR','OCOCHEVFQGQDZ','FDCMWDZDAVAON','VCBOMBAQJIYRD'],
    culprit:'Gavrilo Princip', weapon:'Pistola modelo 1910', crimePlace:'Sarajevo',
    missingChoices:['PISTOLA','CUCHILLO','FUSIL'],
    cipher:{text:'SXHQWH ODWLQR',hint:'Cifrado César: retrocede tres letras.',answer:'PUENTE LATINO'},
    culpritChoices:['Gavrilo Princip','Nedeljko Čabrinović','Trifko Grabež'], weaponChoices:['Pistola modelo 1910','Bomba de mano','Fusil'], placeChoices:['Sarajevo','Belgrado','Viena'],
    fullStory:'El 28 de junio de 1914, Francisco Fernando y Sophie visitaban Sarajevo. Nedeljko Čabrinović lanzó una bomba contra la comitiva, pero el ataque falló. Más tarde, tras un cambio de recorrido y una confusión en la ruta, el coche se detuvo cerca de Gavrilo Princip. Princip disparó con una pistola automática belga modelo 1910 y ambos murieron. El atentado fue uno de los acontecimientos que precipitaron la Primera Guerra Mundial.',
    sources:[
      {label:'National WWI Museum: cronología del 28 de junio de 1914',url:'https://www.theworldwar.org/learn/about-wwi/june-28-1914'},
      {label:'National WWI Museum: pistola automática belga modelo 1910',url:'https://www.theworldwar.org/learn/about-wwi/spotlight-belgian-automatic-pistol'}
    ]
  },
  {
    id:'mlk-1968', number:'003', title:'La habitación frente al motel', date:'4 de abril de 1968', location:'Memphis, Tennessee, Estados Unidos',
    teaser:'Un balcón, una pensión cercana y una fuga internacional seguida por el FBI.', difficulty:'Intermedio',
    intro:'Martin Luther King Jr. estaba en el [BALCON] del Motel [LORRAINE] en [MEMPHIS]. La investigación siguió la pista de un [MUSTANG] abandonado y de objetos hallados cerca de una pensión.',
    words:[
      {answer:'BALCON',mask:'B A L _ O N'}, {answer:'LORRAINE',mask:'L O R R A _ N E'}, {answer:'MEMPHIS',mask:'M E M _ H I S'},
      {answer:'MUSTANG',mask:'M U S _ A N G'}, {answer:'PENSION',mask:'P E N S _ O N'}, {answer:'FUGITIVO',mask:'F U G I _ I V O'},
      {answer:'CANADA',mask:'C A N _ D A'}, {answer:'RIFLE',mask:'R I _ L E',missing:true}
    ],
    grid:['JAMBMESEARLRA','YXELAUCMCBLZO','ZWMOVLCABPEVE','NJPRSGCSNNFOG','SUHRGWIOIAVWE','MOIATELLNIDOR','RASIINEXTNTAO','KVFNBUAIFFNLA','HDLEBFGSERFQQ','AZRNIUNEMEODY','URLFFWECLWRHN','YGNATSUMGGBLK','HIWQENOISNEPZ'],
    culprit:'James Earl Ray', weapon:'Rifle', crimePlace:'Motel Lorraine',
    missingChoices:['RIFLE','PISTOLA','ESCOPETA'],
    cipher:{text:'PRWHO ORUUDLQH',hint:'Cifrado César: retrocede tres letras.',answer:'MOTEL LORRAINE'},
    culpritChoices:['James Earl Ray','Loyd Jowers','Raoul'], weaponChoices:['Rifle','Pistola','Escopeta'], placeChoices:['Motel Lorraine','Capitolio de Tennessee','Estación Central de Memphis'],
    fullStory:'Martin Luther King Jr. fue asesinado el 4 de abril de 1968 cuando estaba en el balcón del Motel Lorraine de Memphis. La investigación vinculó el disparo con un rifle y siguió la fuga de James Earl Ray, detenido en Londres. Ray se declaró culpable en 1969 y fue condenado a 99 años, aunque después intentó retirar su confesión. Este expediente presenta la resolución judicial y señala que el caso generó debates posteriores.',
    sources:[
      {label:'Departamento de Justicia de EE. UU.: revisión de las alegaciones sobre el asesinato',url:'https://www.justice.gov/crt/overview-investigation-allegations-regarding-assassination-dr-martin-luther-king-jr'},
      {label:'National Civil Rights Museum: historia del Motel Lorraine',url:'https://civilrightsmuseum.org/about-us/'}
    ]
  }
];

const STORAGE_KEY='expedienteOculto.v1';
const defaultState={progress:{},settings:{paper:false,reducedMotion:false},mini:{caesar:false,a1:false}};
let state=loadState();
let activeCaseId=null;
let caseFilter='all';
let deferredInstallPrompt=null;

function loadState(){
  try { return {...structuredClone(defaultState), ...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}; }
  catch { return structuredClone(defaultState); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); renderGlobal(); }
function progressFor(id){
  if(!state.progress[id]) state.progress[id]={found:[],missingSolved:false,cipherSolved:false,solved:false,hints:0};
  return state.progress[id];
}
function normalize(text){ return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toUpperCase().replace(/[^A-Z]/g,''); }
function pct(c){ const p=progressFor(c.id); const present=c.words.filter(w=>!w.missing).length; const steps=present+3; return Math.round(((p.found.length+(p.missingSolved?1:0)+(p.cipherSolved?1:0)+(p.solved?1:0))/steps)*100); }
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove('show'),2200); }
function showModal(html){ document.getElementById('modal').innerHTML=html; document.getElementById('modalBackdrop').classList.add('open'); }
function closeModal(){ document.getElementById('modalBackdrop').classList.remove('open'); }
document.getElementById('modalBackdrop').addEventListener('click',e=>{ if(e.target.id==='modalBackdrop') closeModal(); });

function nav(screen){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const target=document.getElementById(`screen-${screen}`); if(target) target.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.nav===screen || (screen==='case'&&b.dataset.nav==='cases')));
  if(screen==='home') renderHome(); if(screen==='cases') renderCases(); if(screen==='archive') renderArchive();
  window.scrollTo({top:0,behavior:state.settings.reducedMotion?'auto':'smooth'});
}
document.addEventListener('click',e=>{ const b=e.target.closest('[data-nav]'); if(b) nav(b.dataset.nav); });

function caseCard(c){ const p=progressFor(c.id); return `<article class="card case-card" data-open-case="${c.id}">
  <div class="meta">EXPEDIENTE ${c.number} · ${c.date}</div><h3>${c.title}</h3><p>${c.teaser}</p>
  <div class="progress"><span style="width:${pct(c)}%"></span></div>
  <div class="chips"><span class="chip">${c.difficulty}</span><span class="chip ${p.solved?'done':''}">${p.solved?'Resuelto':'Progreso '+pct(c)+'%'}</span></div>
</article>`; }
function renderHome(){
  const solved=CASES.filter(c=>progressFor(c.id).solved).length; const words=CASES.reduce((a,c)=>a+progressFor(c.id).found.length,0);
  document.getElementById('homeStats').innerHTML=`<div class="stat"><strong>${solved}</strong><span>resueltos</span></div><div class="stat"><strong>${words}</strong><span>palabras</span></div><div class="stat"><strong>${CASES.length}</strong><span>casos reales</span></div>`;
  document.getElementById('homeCases').innerHTML=CASES.slice(0,2).map(caseCard).join('');
}
function renderCases(){
  let list=CASES; if(caseFilter==='solved') list=list.filter(c=>progressFor(c.id).solved); if(caseFilter==='pending') list=list.filter(c=>!progressFor(c.id).solved);
  document.getElementById('caseList').innerHTML=list.length?list.map(caseCard).join(''):'<div class="empty">No hay expedientes en este filtro.</div>';
}
document.getElementById('caseFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;caseFilter=b.dataset.filter;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderCases();});
document.addEventListener('click',e=>{const card=e.target.closest('[data-open-case]');if(card) openCase(card.dataset.openCase);});

function renderIntro(c,p){ return c.intro.replace(/\[([A-Z]+)\]/g,(_,w)=>`<span class="blank ${p.found.includes(w)?'filled':''}">${p.found.includes(w)?w:'_'.repeat(Math.max(4,w.length))}</span>`); }
function rawLeftovers(c,p,top){
  const foundCells=new Set();
  c.words.filter(w=>!w.missing&&p.found.includes(w.answer)).forEach(w=>findWordPath(c.grid,w.answer)?.forEach(([r,col])=>foundCells.add(`${r}-${col}`)));
  let chars=''; c.grid.forEach((row,r)=>[...row].forEach((ch,col)=>{ if((top?r<5:r>=5)&&!foundCells.has(`${r}-${col}`)) chars+=ch; }));
  return chars;
}
function decodedLeftover(raw){ return raw.split('X')[0]; }
function findWordPath(grid,word){
  const dirs=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]; const n=grid.length;
  for(let r=0;r<n;r++)for(let c=0;c<n;c++)for(const [dr,dc] of dirs){let path=[],ok=true;for(let i=0;i<word.length;i++){const rr=r+dr*i,cc=c+dc*i;if(rr<0||cc<0||rr>=n||cc>=n||grid[rr][cc]!==word[i]){ok=false;break;}path.push([rr,cc]);}if(ok)return path;}
  return null;
}
function foundCellSet(c,p){ const set=new Set(); c.words.filter(w=>!w.missing&&p.found.includes(w.answer)).forEach(w=>findWordPath(c.grid,w.answer)?.forEach(([r,col])=>set.add(`${r}-${col}`))); return set; }

function openCase(id){ activeCaseId=id; renderCase(); nav('case'); }
function renderCase(){
  const c=CASES.find(x=>x.id===activeCaseId), p=progressFor(c.id), foundCells=foundCellSet(c,p);
  const allPresent=c.words.filter(w=>!w.missing).every(w=>p.found.includes(w.answer));
  const gridHtml=c.grid.map((row,r)=>[...row].map((ch,col)=>`<button class="letter ${foundCells.has(`${r}-${col}`)?'found':''} ${p.missingSolved&&!foundCells.has(`${r}-${col}`)?'leftover':''}" data-r="${r}" data-c="${col}">${ch}</button>`).join('')).join('');
  const topRaw=p.missingSolved?rawLeftovers(c,p,true):'', bottomRaw=p.missingSolved?rawLeftovers(c,p,false):'';
  document.getElementById('screen-case').innerHTML=`
    <div class="case-header"><button class="icon-btn back" data-nav="cases">←</button><div><small>EXPEDIENTE ${c.number} · ${c.date}</small><h2>${c.title}</h2></div></div>
    <article class="paper">${renderIntro(c,p)}</article>
    <div class="game-layout">
      <article class="card game-panel"><div class="eyebrow">Fase 1</div><h3>Sopa de letras</h3><p class="hint">Arrastra en línea recta. Una palabra de la lista no aparece: será la pista del arma.</p>
        <div class="word-grid" id="wordGrid" style="grid-template-columns:repeat(${c.grid.length},1fr)">${gridHtml}</div>
      </article>
      <article class="card game-panel"><div class="eyebrow">Palabras del expediente</div><div class="word-list">${c.words.map(w=>`<div class="word-item ${p.found.includes(w.answer)?'found':''} ${w.missing&&p.missingSolved?'missing-found':''}">${w.mask}</div>`).join('')}</div>
        <p class="hint">Encontradas: ${p.found.length}/${c.words.length-1}</p>
        <button class="btn secondary" id="hintBtn">Usar una pista</button>
      </article>
    </div>
    <article class="card stage ${allPresent?'':'locked'}"><div class="eyebrow">Fase 2</div><h3>La palabra que falta</h3>
      ${allPresent ? (p.missingSolved?'<p>Arma identificada. Ahora observa las letras que no pertenecen a ninguna palabra.</p>':`<p>¿Qué palabra de la lista no estaba en la sopa?</p><div class="choice-grid">${c.missingChoices.map(x=>`<button class="choice" data-missing-choice="${x}">${x}</button>`).join('')}</div>`) : '<p>Encuentra primero todas las palabras presentes.</p>'}
    </article>
    ${p.missingSolved?`<article class="card stage"><div class="eyebrow">Fase 3</div><h3>Letras sobrantes</h3><p class="hint">Lee las cinco primeras filas hasta la primera X. Después haz lo mismo con las filas restantes.</p>
      <p class="cipher">${topRaw}</p><p><strong>Sospechoso:</strong> ${decodedLeftover(topRaw)}</p>
      <p class="cipher">${bottomRaw}</p><p><strong>Lugar:</strong> ${decodedLeftover(bottomRaw)}</p>
    </article>
    <article class="card stage"><div class="eyebrow">Fase 4</div><h3>Mensaje cifrado</h3><p class="cipher">${c.cipher.text}</p><p class="hint">${c.cipher.hint}</p>
      ${p.cipherSolved?'<p style="color:var(--success)"><strong>Mensaje descifrado correctamente.</strong></p>':`<input class="field" id="cipherAnswer" placeholder="Escribe el mensaje" autocomplete="off"><div class="actions"><button class="btn" id="checkCipher">Comprobar</button></div>`}
    </article>`:''}
    ${p.cipherSolved?deductionHtml(c,p):''}
  `;
  setupGridSelection(c,p); bindCaseActions(c,p);
}
function deductionHtml(c,p){
  if(p.solved) return `<article class="card stage reveal"><div class="eyebrow">Expediente resuelto</div><h3>Historia completa</h3><p>${c.fullStory}</p>
    <div class="chips"><span class="chip done">Autor: ${c.culprit}</span><span class="chip done">Arma: ${c.weapon}</span><span class="chip done">Lugar: ${c.crimePlace}</span></div>
    <details><summary>Fuentes verificables</summary><ul>${c.sources.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`).join('')}</ul></details></article>`;
  return `<article class="card stage"><div class="eyebrow">Fase final</div><h3>Presenta tu conclusión</h3><div class="form-grid">
    <select class="field" id="culpritSelect"><option value="">Responsable</option>${c.culpritChoices.map(x=>`<option>${x}</option>`).join('')}</select>
    <select class="field" id="weaponSelect"><option value="">Arma</option>${c.weaponChoices.map(x=>`<option>${x}</option>`).join('')}</select>
    <select class="field" id="placeSelect"><option value="">Lugar</option>${c.placeChoices.map(x=>`<option>${x}</option>`).join('')}</select>
    <button class="btn" id="solveCase">Cerrar expediente</button></div></article>`;
}
function setupGridSelection(c,p){
  const grid=document.getElementById('wordGrid'); if(!grid)return; let start=null,current=[];
  const clear=()=>{grid.querySelectorAll('.selecting').forEach(x=>x.classList.remove('selecting'));current=[];};
  const cellAt=(x,y)=>document.elementFromPoint(x,y)?.closest('.letter');
  const path=(a,b)=>{const dr=b.r-a.r,dc=b.c-a.c;if(!(dr===0||dc===0||Math.abs(dr)===Math.abs(dc)))return[];const steps=Math.max(Math.abs(dr),Math.abs(dc)),sr=Math.sign(dr),sc=Math.sign(dc);return Array.from({length:steps+1},(_,i)=>[a.r+sr*i,a.c+sc*i]);};
  grid.addEventListener('pointerdown',e=>{const cell=e.target.closest('.letter');if(!cell)return;e.preventDefault();start={r:+cell.dataset.r,c:+cell.dataset.c};grid.setPointerCapture?.(e.pointerId);});
  grid.addEventListener('pointermove',e=>{if(!start)return;e.preventDefault();const cell=cellAt(e.clientX,e.clientY);if(!cell)return;clear();current=path(start,{r:+cell.dataset.r,c:+cell.dataset.c});current.forEach(([r,col])=>grid.querySelector(`[data-r="${r}"][data-c="${col}"]`)?.classList.add('selecting'));});
  const finish=()=>{if(!start)return;const selected=current.map(([r,col])=>c.grid[r][col]).join('');const rev=[...selected].reverse().join('');const word=c.words.find(w=>!w.missing&&!p.found.includes(w.answer)&&(w.answer===selected||w.answer===rev));clear();start=null;if(word){p.found.push(word.answer);saveState();toast(`Palabra encontrada: ${word.answer}`);renderCase();}else if(selected.length>1)toast('Esa selección no pertenece al expediente.');};
  grid.addEventListener('pointerup',finish);grid.addEventListener('pointercancel',()=>{clear();start=null;});
}
function bindCaseActions(c,p){
  document.getElementById('hintBtn')?.addEventListener('click',()=>{const remaining=c.words.filter(w=>!w.missing&&!p.found.includes(w.answer));if(!remaining.length){toast('Ya has encontrado todas las palabras presentes.');return;}const w=remaining[0],path=findWordPath(c.grid,w.answer);p.hints++;saveState();const grid=document.getElementById('wordGrid');path.forEach(([r,col])=>grid.querySelector(`[data-r="${r}"][data-c="${col}"]`)?.classList.add('selecting'));setTimeout(()=>renderCase(),1600);toast(`Pista usada: empieza por ${w.answer[0]}.`);});
  document.querySelectorAll('[data-missing-choice]').forEach(b=>b.addEventListener('click',()=>{if(b.dataset.missingChoice===c.words.find(w=>w.missing).answer){p.missingSolved=true;saveState();toast('Palabra ausente identificada.');renderCase();}else toast('No encaja con las pistas. Revisa la lista.');}));
  document.getElementById('checkCipher')?.addEventListener('click',()=>{const v=document.getElementById('cipherAnswer').value;if(normalize(v)===normalize(c.cipher.answer)){p.cipherSolved=true;saveState();toast('Código descifrado.');renderCase();}else toast('El código todavía no cuadra.');});
  document.getElementById('solveCase')?.addEventListener('click',()=>{const a=document.getElementById('culpritSelect').value,b=document.getElementById('weaponSelect').value,d=document.getElementById('placeSelect').value;if(a===c.culprit&&b===c.weapon&&d===c.crimePlace){p.solved=true;saveState();toast('Expediente resuelto.');renderCase();}else toast('La conclusión tiene algún dato incorrecto.');});
}

function renderArchive(){
  document.getElementById('archiveList').innerHTML=CASES.map(c=>{const p=progressFor(c.id);return `<article class="card archive-row"><div><strong>${c.number} · ${c.title}</strong><br><small>${p.solved?'Resuelto':pct(c)+'% completado'} · ${p.hints} pistas usadas</small></div><button class="btn secondary" data-open-case="${c.id}">${p.solved?'Revisar':'Continuar'}</button></article>`;}).join('');
}
function renderGlobal(){ applySettings(); renderHome(); renderCases(); renderArchive(); }
function applySettings(){ document.body.classList.toggle('paper-mode',!!state.settings.paper);document.body.classList.toggle('reduce-motion',!!state.settings.reducedMotion);document.getElementById('paperSwitch').classList.toggle('on',!!state.settings.paper);document.getElementById('motionSwitch').classList.toggle('on',!!state.settings.reducedMotion); }
document.getElementById('paperSwitch').addEventListener('click',()=>{state.settings.paper=!state.settings.paper;saveState();});
document.getElementById('motionSwitch').addEventListener('click',()=>{state.settings.reducedMotion=!state.settings.reducedMotion;saveState();});
document.getElementById('resetProgress').addEventListener('click',()=>showModal(`<h3>¿Borrar todo el progreso?</h3><p class="hint">Los tres expedientes volverán a su estado inicial.</p><div class="actions"><button class="btn danger" id="confirmReset">Borrar</button><button class="btn secondary" id="cancelReset">Cancelar</button></div>`));
document.addEventListener('click',e=>{if(e.target.id==='cancelReset')closeModal();if(e.target.id==='confirmReset'){state=structuredClone(defaultState);saveState();closeModal();nav('home');toast('Progreso borrado. La burocracia criminal empieza de nuevo.');}});

document.getElementById('checkCaesar').addEventListener('click',()=>{if(normalize(document.getElementById('caesarInput').value)===normalize('CADA PALABRA ES UNA PISTA')){state.mini.caesar=true;saveState();toast('Código correcto.');}else toast('Todavía no. Retrocede tres posiciones.');});
document.getElementById('checkA1').addEventListener('click',()=>{if(normalize(document.getElementById('a1Input').value)==='EXPEDIENTE'){state.mini.a1=true;saveState();toast('Palabra correcta.');}else toast('A=1, B=2… No era una conspiración tan compleja.');});

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;});
async function installApp(){
  if(deferredInstallPrompt){deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;return;}
  showModal(`<h3>Instalar en el móvil</h3><p class="hint"><strong>iPhone:</strong> abre esta web en Safari, toca Compartir y después “Añadir a pantalla de inicio”.</p><p class="hint"><strong>Android:</strong> abre el menú del navegador y toca “Instalar aplicación”.</p><button class="btn" onclick="document.getElementById('modalBackdrop').classList.remove('open')">Entendido</button>`);
}
document.getElementById('installTop').addEventListener('click',installApp);document.getElementById('installSettings').addEventListener('click',installApp);
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
renderGlobal();
