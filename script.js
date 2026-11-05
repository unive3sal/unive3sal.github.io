const english = {
  name:'Yuhao Deng', homeLabel:'Yuhao Deng home', navBackground:'background', navAbout:'about', navToolbox:'toolbox', navExperience:'experience', navProjects:'projects',
  helloComment:'// hello, world.', roleLine:'Backend Engineer <span>/</span> AI Systems <span>/</span> Rustacean', locationLabel:'location', locationValue:'China Mainland', yearsLabel:'experience', yearsValue:'5+ years', emailLink:'[ Email ↗ ]',
  backgroundTitle:'background', aboutTitle:'about', toolboxTitle:'toolbox', experienceTitle:'experience', projectsTitle:'projects', offscreenTitle:'offscreen', contactTitle:'contact',
  certificationKey:'certifications', interestsKey:'interests =', interestAgents:'"AI agents"', interestSystems:'"distributed systems"', interestTools:'"devtools"', englishLanguage:'English', frenchLanguage:'French', infraLabel:'Infra', typescriptSkills:'React, Solana, Agent development',
  ericsson:'Ericsson', aiRole:'AI Engineer, Architect', sreRole:'Site Reliability Engineer', developerRole:'Experienced Developer Software', architectureKind:'architecture', ossKind:'open source', performanceKind:'performance', researchKind:'research', forecastName:'time-series<span class="directory-slash">/</span>', numericalComputing:'Numerical computing', footerComment:'// stay curious. keep building.',
  skip:'Skip to content', navLabel:'Main navigation', paletteLabel:'Switch color palette', commandLabel:'Open command palette', fileHint:'personal profile',
  introSummary:'Backend & platform engineer. Building AI agents, reliable infrastructure, and high-performance systems.', resumeLink:'[ Résumé PDF ↓ ]', hintScroll:'scroll', hintCommand:'commands', hintHelp:'keybindings',
  aboutLabel:'a little about me', aboutP1:'I’m Yuhao, a backend and platform engineer. Previously at <span class="text-bright">Ericsson</span>, <span class="text-bright">Alibaba Cloud</span>, and <span class="text-bright">Super Intelligence Inc.</span> My work spans software architecture, system reliability, and AI agent engineering.',
  aboutP2:'I like clear boundaries, explainable failures, and code that stays maintainable. I write Rust, Python, and C++, work in Neovim, and contribute to open-source AI developer tools.',
  projectsLabel:'selected work', megahitSubtitle:'AI CMO Agent · Architecture & backend delivery', megahitDescription:'Owned end-to-end architecture for an AI growth platform, defining service boundaries and completing a PydanticAI runtime migration. Connected agents, business commands, and shared memory through durable execution and resumable activity streams.', megahitResult:'Completed a staged migration from a custom agent loop and retired the legacy runtime.',
  ccSubtitle:'A Rust CLI / TUI for AI coding assistants', ccDescription:'Contributed a Rust daemon and IPC architecture, automatic provider failover, and conflict-aware configuration merging and recovery. Improved OpenAI / Anthropic streaming compatibility and CI test reliability.', ccResult:'Explore my merged contributions ↗',
  signalName:'signal-processing<span class="directory-slash">/</span>', signalSubtitle:'Signal-processing library · Async architecture & numerical algorithms', signalDescription:'Redesigned inter-thread communication with Protobuf and Linux epoll. Parallelized matrix factorization, rewrote Cholesky decomposition, and used disassembly analysis to investigate floating-point and runtime issues.', signalResult:'Approximately <strong>6×</strong> more efficient matrix operations in key workloads.',
  forecastSubtitle:'Time-series forecasting · From model selection to deployment', forecastDescription:'Compared LSTM, LightGBM, and Informer, using sparse attention to capture long-range dependencies. Led training, tuning, and deployment, achieving RMSE ≈ 3 on an internal dataset.', forecastResult:'Company AI Hackathon: <strong>2nd prize</strong>.',
  projectHint:'Expand a project to read more. More code on <a href="https://github.com/unive3sal?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub ↗</a>',
  experienceLabel:'where I’ve worked', siiDescription:'AI agent runtime, backend architecture, Rust authorization services, and an MCP data workspace, alongside AWS infrastructure and deployment workflows.', alibaba:'Alibaba Cloud', hangzhou:'· Hangzhou', chengdu:'· Chengdu', alibabaDescription:'Cloud and distributed-database reliability, incident response, Kubernetes troubleshooting, and drill tooling. Collaborated with international teams to resolve customer issues.', ericssonDescription:'Linux-based radio software, signal-processing libraries, concurrent architecture, and numerical algorithms in performance-sensitive C++ systems.',
  toolboxLabel:'tools & languages', spokenLanguages:'Languages', technicalSkills:'Engineering tools', chinese:'Chinese', backgroundLabel:'education & certifications', uestc:'University of Electronic Science and Technology of China', masters:'Master · Signal and Information Processing', hebut:'Hebei University of Technology', bachelors:'Bachelor · Electronic Information Engineering', certifications:'Alibaba Cloud ACP · Cloud Computing (Dec 2025), LLM (Oct 2025)',
  offscreenLabel:'beyond the terminal', offscreenDescription:'Also interested in philosophy, Historical European Martial Arts (HEMA), and linguistics. Patient with systems. Curious about the world.', native:'Native', contactLabel:'say hello', contactDescription:'Let’s talk AI, system design, open source—or anything worth exploring.', footerHelp:'[ ? help ]', statusLabel:'Page status',
  commandTitle:'Command palette', closeLabel:'Close', searchLabel:'Search commands', searchPlaceholder:'Type a command or jump to a section…', resultsLabel:'Available commands', noResults:'No matching commands.', selectHint:'select', executeHint:'run', closeHint:'close',
  helpButtonLabel:'Show keybindings', helpTitle:'Keybindings', helpIntro:'Familiar keys. All navigation also works with a click.', helpScroll:'Scroll down / up', helpJump:'Top / bottom', helpCommand:'Search sections & commands', helpPalette:'Open command palette', helpOpen:'Show keybindings', helpClose:'Close dialog', helpNote:'Page shortcuts are inactive while typing. Tab, Enter, and arrow keys work as usual.'
};
const elements=[...document.querySelectorAll('[data-i18n]')];
const originalText=new Map(elements.map(el=>[el,el.innerHTML]));
const attributes=[...document.querySelectorAll('[data-i18n-aria], [data-i18n-alt], [data-i18n-placeholder]')];
const originalAttributes=new Map(attributes.map(el=>[el,{aria:el.getAttribute('aria-label'),alt:el.getAttribute('alt'),placeholder:el.getAttribute('placeholder')}]));
const languageButton=document.getElementById('language-toggle');
const paletteButton=document.getElementById('palette-toggle');
const commandDialog=document.getElementById('command-dialog');
const helpDialog=document.getElementById('help-dialog');
const commandInput=document.getElementById('command-input');
const commandResults=document.getElementById('command-results');
const commandEmpty=document.getElementById('command-empty');
const modeIndicator=document.getElementById('mode-indicator');
const announcement=document.getElementById('announcements');
let language='zh';
let palette='amber';
let commandMatches=[];
let selectedIndex=0;
let pendingG=0;
let scrollFrame=false;

function readPreference(key,fallback){try{return localStorage.getItem(key)||fallback;}catch{return fallback;}}
function savePreference(key,value){try{localStorage.setItem(key,value);}catch{/* Preferences are optional. */}}
function say(message){announcement.textContent=message;}

function setLanguage(next){
  language=next==='en'?'en':'zh';
  document.documentElement.lang=language==='en'?'en':'zh-CN';
  elements.forEach(el=>{el.innerHTML=language==='en'?(english[el.dataset.i18n]??originalText.get(el)):originalText.get(el);});
  attributes.forEach(el=>{
    const original=originalAttributes.get(el);
    if(el.dataset.i18nAria)el.setAttribute('aria-label',language==='en'?english[el.dataset.i18nAria]:original.aria);
    if(el.dataset.i18nAlt)el.setAttribute('alt',language==='en'?english[el.dataset.i18nAlt]:original.alt);
    if(el.dataset.i18nPlaceholder)el.setAttribute('placeholder',language==='en'?english[el.dataset.i18nPlaceholder]:original.placeholder);
  });
  languageButton.textContent=language==='en'?'中文':'EN';
  languageButton.setAttribute('aria-label',language==='en'?'切换到中文':'Switch to English');
  document.getElementById('status-language').textContent=language==='en'?'en-US':'zh-CN';
  document.title=language==='en'?'Yuhao Deng · ~/home':'邓宇昊 · 个人主页';
  document.querySelector('meta[name="description"]').content=language==='en'?'Yuhao Deng / unive3sal — Backend, AI agents, and systems engineering. Rust, Python, and C++.':'邓宇昊 / unive3sal — 后端与平台工程师，专注 AI 智能体、云可靠性与高性能系统。';
  document.querySelector('meta[property="og:title"]').content=language==='en'?'Yuhao Deng — Backend / AI / Systems':'邓宇昊 — 后端 / AI / 系统工程';
  document.querySelector('meta[property="og:description"]').content=language==='en'?'Building reliable AI agents, cloud infrastructure, and high-performance systems.':'构建可靠的 AI 智能体、云基础设施与高性能系统。';
  updatePaletteLabel();
  updateMode();
  updateScrollStatus();
  if(commandDialog.open)renderCommands();
  savePreference('yuhao-language',language);
}
function updatePaletteLabel(){
  const next=palette==='amber'?'mint':'amber';
  paletteButton.querySelector('.palette-name').textContent=language==='en'?palette:(palette==='amber'?'琥珀色':'薄荷绿');
  paletteButton.setAttribute('aria-label',language==='en'?`Switch to ${next} palette`:`切换到${next==='amber'?'琥珀色':'薄荷绿'}主题`);
}
function setPalette(next){
  palette=next==='mint'?'mint':'amber';
  document.documentElement.dataset.palette=palette;
  updatePaletteLabel();
  savePreference('yuhao-palette',palette);
}
function togglePalette(){setPalette(palette==='amber'?'mint':'amber');}
function updateMode(){modeIndicator.textContent=language==='en'?(commandDialog.open?'COMMAND':helpDialog.open?'HELP':'NORMAL'):(commandDialog.open?'命令模式':helpDialog.open?'快捷帮助':'普通模式');}
function closeDialog(dialog){if(dialog.open)dialog.close();updateMode();}
function openCommands(){
  closeDialog(helpDialog);
  if(commandDialog.open){commandInput.focus();return;}
  commandInput.value='';selectedIndex=0;renderCommands();
  commandDialog.showModal();updateMode();commandInput.focus();
}
function openHelp(){closeDialog(commandDialog);if(!helpDialog.open)helpDialog.showModal();updateMode();}
function jumpTo(id,instant=false){
  const target=document.getElementById(id);
  if(!target)return;
  const hash=`#${id}`;
  if(location.hash!==hash)history.pushState(null,'',hash);
  const behavior=instant||window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';
  if(id==='home')window.scrollTo({top:0,behavior});
  else target.scrollIntoView({behavior,block:'start'});
  const heading=target.querySelector('h1,h2');
  if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});heading.addEventListener('blur',()=>heading.removeAttribute('tabindex'),{once:true});}
}
function commands(){
  const en=language==='en';
  return [
    {id:'background',description:en?'Education & certifications':'教育背景与认证',keywords:'education background school certifications 教育 学校 认证',run:()=>jumpTo('background')},
    {id:'about',description:en?'A little about me':'关于我',keywords:'about profile 关于 简介',run:()=>jumpTo('about')},
    {id:'toolbox',description:en?'Tools & spoken languages':'技术栈与语言能力',keywords:'skills tools toolbox python rust c++ neovim languages chinese english french 中文 英语 法语 语言 技能 技术',run:()=>jumpTo('toolbox')},
    {id:'experience',description:en?'Work experience':'工作经历',keywords:'experience journey work ericsson alibaba 工作 经历',run:()=>jumpTo('experience')},
    {id:'projects',description:en?'Selected work':'精选项目',keywords:'projects work megahit cc-switch rust 项目 开源',run:()=>jumpTo('projects')},
    {id:'offscreen',description:en?'Beyond the terminal':'终端之外',keywords:'offscreen interests hema philosophy 兴趣 哲学 武术',run:()=>jumpTo('offscreen')},
    {id:'contact',description:en?'Get in touch':'联系我',keywords:'contact email hello 联系 邮箱',run:()=>jumpTo('contact')},
    {id:'resume',description:en?'Download résumé (PDF)':'下载简历（PDF）',keywords:'resume cv download 简历 下载',run:()=>document.querySelector('a[download]').click()},
    {id:'github',description:en?'Open my GitHub profile ↗':'打开 GitHub 主页 ↗',keywords:'github repo code 代码 仓库',run:()=>window.open('https://github.com/unive3sal','_blank','noopener,noreferrer')},
    {id:'lang',description:en?'Switch to Chinese':'切换为英文',keywords:'lang language english chinese 语言 英文 中文',run:()=>setLanguage(language==='en'?'zh':'en')},
    {id:'theme',description:en?'Switch amber / mint':'切换琥珀色 / 薄荷绿',keywords:'theme palette color amber mint 主题 配色 颜色',run:togglePalette},
    {id:'top',description:en?'Back to top':'回到页首',keywords:'top home gg 首页 页首',run:()=>jumpTo('home')},
    {id:'help',description:en?'Keyboard shortcuts':'快捷键说明',keywords:'help keys vim keybindings ? 帮助 快捷键',run:openHelp}
  ];
}
function updateCommandSelection(){
  const buttons=[...commandResults.querySelectorAll('button')];
  buttons.forEach((button,index)=>{
    const selected=index===selectedIndex;
    button.classList.toggle('is-selected',selected);
    if(selected)button.setAttribute('aria-current','true');else button.removeAttribute('aria-current');
  });
  buttons[selectedIndex]?.scrollIntoView({block:'nearest'});
}
function runCommand(index){
  const command=commandMatches[index];
  if(!command)return;
  closeDialog(commandDialog);command.run();
}
function renderCommands(){
  const query=commandInput.value.replace(/^:/,'').trim().toLocaleLowerCase();
  commandMatches=commands().filter(command=>`${command.id} ${command.description} ${command.keywords}`.toLocaleLowerCase().includes(query));
  selectedIndex=Math.min(selectedIndex,Math.max(0,commandMatches.length-1));
  commandResults.replaceChildren();
  commandMatches.forEach((command,index)=>{
    const button=document.createElement('button');button.type='button';button.className='command-result';
    const name=document.createElement('span');name.className='command-name';name.textContent=`:${command.id}`;
    const description=document.createElement('span');description.className='command-description';description.textContent=command.description;
    const enter=document.createElement('span');enter.className='command-enter';enter.textContent='↵';enter.setAttribute('aria-hidden','true');
    button.append(name,description,enter);button.addEventListener('click',()=>runCommand(index));
    button.addEventListener('focus',()=>{selectedIndex=index;updateCommandSelection();});
    commandResults.append(button);
  });
  commandEmpty.hidden=commandMatches.length>0;
  updateCommandSelection();
}

document.querySelector('.brand').addEventListener('click',event=>{event.preventDefault();jumpTo('home');});
languageButton.addEventListener('click',()=>setLanguage(language==='en'?'zh':'en'));
setLanguage(readPreference('yuhao-language','zh'));
setPalette(readPreference('yuhao-palette','amber'));
paletteButton.addEventListener('click',togglePalette);
document.querySelector('.command-trigger').addEventListener('click',openCommands);
document.querySelector('.status-command').addEventListener('click',openHelp);
document.querySelectorAll('.help-trigger').forEach(button=>button.addEventListener('click',openHelp));
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>closeDialog(document.getElementById(button.dataset.close))));
[commandDialog,helpDialog].forEach(dialog=>{
  dialog.addEventListener('close',updateMode);
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeDialog(dialog);});
});
commandInput.addEventListener('input',()=>{selectedIndex=0;renderCommands();say(language==='en'?`${commandMatches.length} commands found`:`找到 ${commandMatches.length} 条命令`);});
commandInput.addEventListener('keydown',event=>{
  if(event.key==='ArrowDown'||event.key==='ArrowUp'){
    event.preventDefault();if(!commandMatches.length)return;
    selectedIndex=(selectedIndex+(event.key==='ArrowDown'?1:-1)+commandMatches.length)%commandMatches.length;
    updateCommandSelection();say(`:${commandMatches[selectedIndex].id} — ${commandMatches[selectedIndex].description}`);
  }else if(event.key==='Enter'){event.preventDefault();runCommand(selectedIndex);}
});
document.addEventListener('keydown',event=>{
  if(event.defaultPrevented||event.isComposing)return;
  if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();openCommands();return;}
  if(commandDialog.open||helpDialog.open)return;
  const active=document.activeElement;
  if(active?.matches('input,textarea,select,[contenteditable="true"]')||active?.isContentEditable)return;
  if(event.ctrlKey||event.metaKey||event.altKey)return;
  if(event.key==='j'||event.key==='k'){
    event.preventDefault();pendingG=0;window.scrollBy({top:event.key==='j'?90:-90,behavior:'instant'});
  }else if(event.key==='g'){
    event.preventDefault();const now=Date.now();if(pendingG&&now-pendingG<700){jumpTo('home',true);pendingG=0;}else pendingG=now;
  }else if(event.key==='G'){
    event.preventDefault();pendingG=0;window.scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'});
  }else if(event.key===':'||event.key==='/'){
    event.preventDefault();pendingG=0;openCommands();
  }else if(event.key==='?'){
    event.preventDefault();pendingG=0;openHelp();
  }else pendingG=0;
});
function updateScrollStatus(){
  const navLinks=[...document.querySelectorAll('nav a')];
  const maxScroll=Math.max(0,document.documentElement.scrollHeight-innerHeight);
  const percent=maxScroll?Math.round(scrollY/maxScroll*100):0;
  document.getElementById('scroll-position').textContent=percent<=0?(language==='en'?'Top':'页首'):percent>=100?(language==='en'?'Bot':'页尾'):`${percent}%`;
  let current='';
  navLinks.forEach(link=>{const section=document.getElementById(link.hash.slice(1));if(section&&section.getBoundingClientRect().top<innerHeight*.38)current=link.hash;});
  navLinks.forEach(link=>{const active=link.hash===current;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  scrollFrame=false;
}
window.addEventListener('scroll',()=>{if(!scrollFrame){scrollFrame=true;requestAnimationFrame(updateScrollStatus);}},{passive:true});
window.addEventListener('resize',updateScrollStatus);
document.querySelectorAll('.project').forEach(project=>project.addEventListener('toggle',updateScrollStatus));
document.getElementById('year').textContent=new Date().getFullYear();
updateScrollStatus();
