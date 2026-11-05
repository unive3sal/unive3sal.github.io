const translations = {
  "en": {
    "aboutLabel": "a little about me",
    "aboutP1": "I’m Yuhao Deng (unive3sal). I work on AI engineering and architecture, and have worked at <span class=\"text-bright\">Ericsson</span>, <span class=\"text-bright\">Alibaba Cloud</span>, and <span class=\"text-bright\">Super Intelligence Inc.</span> I started out implementing and optimizing algorithms at Ericsson. That got me interested in AI inference and parallel computing, and then in how to design the systems around them.",
    "aboutP2": "At Super Intelligence Inc., I designed the architecture for <a href=\"#projects\">megahit</a>, from cloud deployment to backend service boundaries. Its worker runs long-horizon agent tasks, with durable execution and recovery from interruptions. I also worked with researchers to put their memory research into the product. These days, I’m interested in AI agents, memory, and how they change application architecture.",
    "aboutP3": "When choosing an architecture, I start with what the company needs most and the metric it cares about. That guides the trade-offs between performance, delivery speed, and reliability. I also consider how much harder a design might make it for engineers and domain experts to work together.",
    "aboutP4": "I mostly write Rust, Python, and C++. I also contribute to <a href=\"https://github.com/SaladDay/cc-switch-cli\" target=\"_blank\" rel=\"noopener noreferrer\">cc-switch-cli</a>, an open-source tool for AI coding assistants, where I’ve worked on the daemon, protocol compatibility, and CI. I’m looking for my next role, and I’d be glad to hear from people looking for collaborators or co-maintainers for open-source projects.",
    "aboutTitle": "about",
    "aiRole": "AI Engineer, Architect",
    "alibaba": "Alibaba Cloud",
    "alibabaDescription": "Cloud and distributed-database reliability, incident response, Kubernetes troubleshooting, and drill tooling. Collaborated with international teams to resolve customer issues.",
    "architectureKind": "architecture",
    "bachelors": "Bachelor · Electronic Information Engineering",
    "backgroundLabel": "education & certifications",
    "backgroundTitle": "background",
    "ccCiContribution": "<strong>Protocol compatibility & CI.</strong> Fixed streaming tool calls and volatile prompt metadata; isolated filesystem and process state in parallel tests and added unit and integration suites to CI. <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/146\" target=\"_blank\" rel=\"noopener noreferrer\">#146 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/149\" target=\"_blank\" rel=\"noopener noreferrer\">#149 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/232\" target=\"_blank\" rel=\"noopener noreferrer\">#232 ↗</a>",
    "ccConfigContribution": "<strong>Configuration integrity.</strong> Merged live and saved configuration without losing unrelated local edits; fixed hot-switch backups to restore the latest provider selection. <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/283\" target=\"_blank\" rel=\"noopener noreferrer\">#283 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/295\" target=\"_blank\" rel=\"noopener noreferrer\">#295 ↗</a>",
    "ccDaemonContribution": "<strong>Daemon & IPC.</strong> Moved proxy-worker ownership into a long-lived supervisor, with restart recovery and runtime-state reconciliation. <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/189\" target=\"_blank\" rel=\"noopener noreferrer\">PR #189 ↗</a>",
    "ccDescription": "A Rust CLI / TUI for managing providers and proxies for AI coding assistants. My contributions focused on keeping the tooling predictable when the interface exits, a provider fails, or local configuration changes outside the application.",
    "ccFailoverContribution": "<strong>Provider failover.</strong> Added TUI controls and scriptable CLI commands for automatic failover and provider-queue management, with integration coverage. <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/155\" target=\"_blank\" rel=\"noopener noreferrer\">#155 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/165\" target=\"_blank\" rel=\"noopener noreferrer\">#165 ↗</a>",
    "ccMeta": "Apr–Jun 2026 · Merged open-source contributions",
    "ccResult": "12 merged PRs · Explore my contributions ↗",
    "ccSubtitle": "Reliable infrastructure for AI coding tools",
    "certificationKey": "certifications",
    "certifications": "Alibaba Cloud ACP · Cloud Computing (Dec 2025), LLM (Oct 2025)",
    "chengdu": "· Chengdu",
    "chinese": "Chinese",
    "closeHint": "close",
    "closeLabel": "Close",
    "commandLabel": "Open command palette",
    "commandTitle": "Command palette",
    "contactDescription": "I’m looking for roles in AI agents, memory systems, and architecture design, and welcome opportunities to collaborate on and co-maintain open-source projects.",
    "contactLabel": "say hello",
    "contactTitle": "contact",
    "developerRole": "Experienced Developer Software",
    "emailLink": "[ Email ↗ ]",
    "englishLanguage": "English",
    "ericsson": "Ericsson",
    "ericssonDescription": "Linux-based radio software, signal-processing libraries, concurrent architecture, and numerical algorithms in performance-sensitive C++ systems.",
    "executeHint": "run",
    "experienceLabel": "where I’ve worked",
    "experienceTitle": "experience",
    "fileHint": "personal profile",
    "footerComment": "// stay curious. keep building.",
    "footerHelp": "[ ? help ]",
    "forecastDescription": "Led model comparison, training, tuning, and deployment for an internal forecasting project. Compared LSTM, LightGBM, and Informer, selecting Informer to capture long-range dependencies through sparse attention.",
    "forecastMeta": "Apr–Sep 2025 · Ericsson",
    "forecastName": "time-series<span class=\"directory-slash\">/</span>",
    "forecastResult": "Company AI Hackathon: <strong>2nd prize</strong>.",
    "forecastSubtitle": "Time-series forecasting · Model selection through deployment",
    "frenchLanguage": "French",
    "hangzhou": "· Hangzhou",
    "hebut": "Hebei University of Technology",
    "helpButtonLabel": "Show keybindings",
    "helpClose": "Close dialog",
    "helpCommand": "Search sections & commands",
    "helpIntro": "Familiar keys. All navigation also works with a click.",
    "helpJump": "Top / bottom",
    "helpNote": "Page shortcuts are inactive while typing. Tab, Enter, and arrow keys work as usual.",
    "helpOpen": "Show keybindings",
    "helpPalette": "Open command palette",
    "helpScroll": "Scroll down / up",
    "helpTitle": "Keybindings",
    "hintCommand": "commands",
    "hintHelp": "keybindings",
    "hintScroll": "scroll",
    "homeLabel": "Yuhao Deng home",
    "infraLabel": "Infra",
    "interestAgents": "\"AI agents\"",
    "interestArchitecture": "\"AI architecture\"",
    "interestMemory": "\"memory systems\"",
    "interestsKey": "interests =",
    "introSummary": "Architect focused on AI agents, memory systems, and AI application architecture.",
    "locationLabel": "location",
    "locationValue": "China Mainland",
    "masters": "Master · Signal and Information Processing",
    "megahitDescription": "Megahit turns business goals into research, campaign plans, and execution workflows. I owned its backend architecture and migration to PydanticAI, with two priorities: keeping long-running work recoverable and making agent behavior testable.",
    "megahitEval": "I built a versioned routing regression suite and extended it with incident-seeded multi-turn cases for forms, memory corrections, revisions, and concurrent requests. Deterministic checks ran in CI; live-model sweeps tracked behavioral changes. Missing configuration, incomplete coverage, and errored runs could not produce a passing verdict.",
    "megahitEvalTitle": "02 · Evaluation datasets & automation",
    "megahitEvidence": "<strong>773 queries</strong> in a recorded full sweep · 25 Sep 2026",
    "megahitEvidenceNote": "A historical evaluation snapshot with zero harness errors; results were tied to a specific build and model.",
    "megahitFinding": "One regression test caught approvals expiring before the last post in a future weekly batch. I aligned approval lifetime with the preparation lead time and posting horizon.",
    "megahitMemory": "Working with the memory-system researcher, I integrated shared memory into the runtime, tracking context sources and routing proposed updates through the memory service. Chat and campaign workflows could reuse relevant context while keeping execution state and access scopes separate.",
    "megahitMeta": "Jul–Nov 2026 · AI Engineer / Architect · Super Intelligence Inc.",
    "megahitResult": "Completed the staged PydanticAI migration and retired the legacy agent loop.",
    "megahitRuntime": "I separated execution from browser streaming, with checkpoints, worker leases, and a durable activity feed to support recovery across disconnects and restarts. Content-bound approvals and an idempotent operation ledger kept publishing tied to the content the user approved.",
    "megahitRuntimeTitle": "01 · Long-horizon tasks & memory",
    "megahitScenario": "“Post three times a week on X for us.” Prepare a weekly batch, wait for edits and approval, publish at the chosen local times, then continue into the next cycle.",
    "megahitSubtitle": "AI growth platform · Agent architecture & evaluation",
    "name": "Yuhao Deng",
    "native": "Native",
    "navAbout": "about",
    "navBackground": "background",
    "navExperience": "experience",
    "navLabel": "Main navigation",
    "navProjects": "projects",
    "navToolbox": "toolbox",
    "noResults": "No matching commands.",
    "numericalComputing": "Numerical computing",
    "offscreenDescription": "Outside work, I enjoy philosophy, Historical European Martial Arts (HEMA), and linguistics.",
    "offscreenLabel": "life & interests",
    "offscreenPhilosophy": "Hegel’s dialectic informs how I think about technical abstraction: a concept that tries to encompass everything can lose its concrete meaning. Engineering models have boundaries too. When translating a business into symbols and rules, I pay attention to what gets left out and where those simplifications might fail.",
    "offscreenTitle": "beyond code",
    "ossKind": "open source",
    "paletteLabel": "Switch color palette",
    "performanceKind": "performance",
    "productLink": "Product ↗",
    "projectHint": "Expand a project for the details. Public code and contributions on <a href=\"https://github.com/unive3sal?tab=repositories\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub ↗</a>.",
    "projectsLabel": "selected work",
    "projectsTitle": "projects",
    "researchKind": "research",
    "resultsLabel": "Available commands",
    "resumeLink": "[ Résumé PDF ↓ ]",
    "roleLine": "Architect <span>/</span> AI Engineering <span>/</span> Rustacean",
    "searchLabel": "Search commands",
    "searchPlaceholder": "Type a command or jump to a section…",
    "selectHint": "select",
    "signInRequired": "Sign-in required",
    "signalDescription": "Refactored a Linux-based signal-processing library, moving key components toward asynchronous communication with Protocol Buffers and epoll. Parallelized matrix factorization, rewrote Cholesky decomposition, and used disassembly analysis to investigate floating-point and runtime issues.",
    "signalMeta": "Jun 2024–Mar 2025 · Ericsson",
    "signalName": "signal-processing<span class=\"directory-slash\">/</span>",
    "signalSubtitle": "C++ systems · Concurrency & numerical performance",
    "siiDescription": "AI agent runtime, backend architecture, Rust authorization services, and an MCP data workspace, alongside AWS infrastructure and deployment workflows.",
    "skip": "Skip to content",
    "spokenLanguages": "Languages",
    "sreRole": "Site Reliability Engineer",
    "statusLabel": "Page status",
    "technicalSkills": "Engineering tools",
    "testEnvironmentLink": "Test environment ↗",
    "toolboxLabel": "tools & languages",
    "toolboxTitle": "toolbox",
    "typescriptSkills": "React, Agent development",
    "uestc": "University of Electronic Science and Technology of China",
    "yearsLabel": "experience",
    "yearsValue": "5+ years"
  },
  "zh": {
    "aboutLabel": "about/",
    "aboutP1": "我是邓宇昊（unive3sal），做 AI 工程和架构设计。之前在 <span class=\"text-bright\">爱立信</span>、<span class=\"text-bright\">阿里云</span> 和 <span class=\"text-bright\">Super Intelligence Inc.</span> 工作。在爱立信做算法实现和性能优化时，我开始对 AI 推理、并行计算感兴趣，后来也越来越关心整个 AI 系统该怎么设计。",
    "aboutP2": "在 Super Intelligence Inc.，我负责 <a href=\"#projects\">megahit</a> 的整体架构，从云部署方案到后端服务拆分。其中的 worker 用来跑长周期 Agent 任务，支持持久化执行和中断恢复。我也和 researcher 一起，把 memory 研究成果用到产品里。现在主要关注 AI Agent、memory，以及它们会怎样改变应用架构。",
    "aboutP3": "做技术选型时，我会先看公司现在最需要什么、主要看哪个指标。性能、交付速度和可靠性要在这个前提下取舍，也得想想方案会不会增加同事和领域专家的协作负担。",
    "aboutP4": "平时主要写 Rust、Python 和 C++，也给开源 AI 开发工具 <a href=\"https://github.com/SaladDay/cc-switch-cli\" target=\"_blank\" rel=\"noopener noreferrer\">cc-switch-cli</a> 贡献代码，做过守护进程、协议兼容和 CI 相关的工作。目前在找下一份工作，也欢迎找我聊开源项目的合作和共同维护。",
    "aboutTitle": "关于我",
    "aiRole": "AI 工程师、架构师",
    "alibaba": "阿里云",
    "alibabaDescription": "云服务与分布式数据库可靠性、应急响应、Kubernetes 故障排查及演练平台；与国际团队协作处理客户问题。",
    "architectureKind": "架构设计",
    "bachelors": "学士 · 电子信息工程",
    "backgroundLabel": "background/",
    "backgroundTitle": "教育背景",
    "ccCiContribution": "<strong>协议兼容与 CI。</strong>修复流式工具调用和动态提示元数据；隔离并行测试的文件系统与进程状态，将单元和集成测试纳入 CI。<a href=\"https://github.com/SaladDay/cc-switch-cli/pull/146\" target=\"_blank\" rel=\"noopener noreferrer\">#146 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/149\" target=\"_blank\" rel=\"noopener noreferrer\">#149 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/232\" target=\"_blank\" rel=\"noopener noreferrer\">#232 ↗</a>",
    "ccConfigContribution": "<strong>配置完整性。</strong>合并实时配置与保存状态，保留用户的独立修改；修复热切换备份，恢复最近选择的服务商。<a href=\"https://github.com/SaladDay/cc-switch-cli/pull/283\" target=\"_blank\" rel=\"noopener noreferrer\">#283 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/295\" target=\"_blank\" rel=\"noopener noreferrer\">#295 ↗</a>",
    "ccDaemonContribution": "<strong>守护进程与 IPC。</strong>将代理 worker 的生命周期交给长期运行的 supervisor，支持异常恢复和运行状态协调。<a href=\"https://github.com/SaladDay/cc-switch-cli/pull/189\" target=\"_blank\" rel=\"noopener noreferrer\">PR #189 ↗</a>",
    "ccDescription": "用于管理 AI 编程助手服务商与代理的 Rust CLI / TUI。我的贡献聚焦在界面退出、服务商故障，以及应用外修改配置后，工具能否继续保持可预期的行为。",
    "ccFailoverContribution": "<strong>服务商故障切换。</strong>增加 TUI 控件与可脚本化的 CLI 命令，管理自动切换和服务商队列，并补充集成验证。<a href=\"https://github.com/SaladDay/cc-switch-cli/pull/155\" target=\"_blank\" rel=\"noopener noreferrer\">#155 ↗</a> · <a href=\"https://github.com/SaladDay/cc-switch-cli/pull/165\" target=\"_blank\" rel=\"noopener noreferrer\">#165 ↗</a>",
    "ccMeta": "2026.04–2026.06 · 已合并的开源贡献",
    "ccResult": "12 个已合并 PR · 查看贡献 ↗",
    "ccSubtitle": "AI 编程工具的可靠性基础设施",
    "certificationKey": "认证",
    "certifications": "阿里云 ACP · 云计算（2025.12）、大模型（2025.10）",
    "chengdu": "· 成都",
    "chinese": "中文",
    "closeHint": "关闭",
    "closeLabel": "关闭",
    "commandLabel": "打开命令面板",
    "commandTitle": "命令面板",
    "contactDescription": "目前在寻找 AI Agent、记忆系统与架构设计相关的工作机会，也欢迎开源项目的合作开发与共同维护。",
    "contactLabel": "contact/",
    "contactTitle": "联系我",
    "developerRole": "软件开发工程师",
    "emailLink": "[ 邮箱 ↗ ]",
    "englishLanguage": "英语",
    "ericsson": "爱立信",
    "ericssonDescription": "Linux 无线软件、信号处理库、并发架构与数值算法，专注性能敏感的 C++ 系统。",
    "executeHint": "执行",
    "experienceLabel": "experience/",
    "experienceTitle": "工作经历",
    "fileHint": "个人简介",
    "footerComment": "// 保持好奇，持续构建。",
    "footerHelp": "[ ? 帮助 ]",
    "forecastDescription": "负责内部预测项目的模型对比、训练、调参与部署。比较 LSTM、LightGBM 与 Informer，选择以稀疏注意力捕捉长程依赖的 Informer。",
    "forecastMeta": "2025.04–2025.09 · 爱立信",
    "forecastName": "时间序列预测<span class=\"directory-slash\">/</span>",
    "forecastResult": "公司 AI Hackathon <strong>二等奖</strong>。",
    "forecastSubtitle": "时间序列预测 · 从模型选型到部署",
    "frenchLanguage": "法语",
    "hangzhou": "· 杭州",
    "hebut": "河北工业大学",
    "helpButtonLabel": "显示快捷键",
    "helpClose": "关闭面板",
    "helpCommand": "搜索章节与命令",
    "helpIntro": "熟悉的按键。也可以直接点击页面链接。",
    "helpJump": "页首 / 页尾",
    "helpNote": "输入框内不会触发页面快捷键。Tab、Enter 和方向键也可正常使用。",
    "helpOpen": "显示快捷键",
    "helpPalette": "打开命令面板",
    "helpScroll": "向下 / 向上滚动",
    "helpTitle": "快捷键说明",
    "hintCommand": "命令",
    "hintHelp": "快捷键",
    "hintScroll": "滚动",
    "homeLabel": "邓宇昊的主页",
    "infraLabel": "基础设施",
    "interestAgents": "\"AI 智能体\"",
    "interestArchitecture": "\"AI 应用架构\"",
    "interestMemory": "\"记忆系统\"",
    "interestsKey": "关注方向 =",
    "introSummary": "架构师，专注 AI Agent、记忆系统与 AI 应用架构。",
    "locationLabel": "所在地",
    "locationValue": "中国大陆",
    "masters": "硕士 · 信号与信息处理",
    "megahitDescription": "Megahit 将业务增长目标转化为研究、活动规划与执行工作流。我负责后端架构和向 PydanticAI 的迁移，重点解决两个问题：让长周期任务可恢复，让 Agent 行为可评测。",
    "megahitEval": "建立版本化的路由回归评测，并根据真实问题扩展多轮案例，覆盖表单、记忆纠正、修改流程与并发请求。确定性检查进入 CI，真实模型评测跟踪行为变化；配置缺失、覆盖不全或运行出错时，不会给出通过结论。",
    "megahitEvalTitle": "02 · 评测数据集与自动 eval",
    "megahitEvidence": "一次完整评测覆盖 <strong>773 条查询</strong> · 2026.09.25",
    "megahitEvidenceNote": "该历史评测快照中 harness 运行错误为零；结果对应当时的特定构建与模型。",
    "megahitFinding": "一项回归测试发现：提前准备下周内容后，审批凭证会早于最后一条帖子的发布时间到期。我将审批有效期与准备提前量、发布周期对齐。",
    "megahitMemory": "与负责 memory 系统的 researcher 协作，我完成了共享记忆的运行时集成，追踪上下文来源，并将记忆更新建议交给 memory service 处理。Chat 与 Campaign 可以复用相关上下文，同时隔离执行状态与权限范围。",
    "megahitMeta": "2026.07–2026.11 · AI 工程师、架构师 · Super Intelligence Inc.",
    "megahitResult": "完成向 PydanticAI 的分阶段迁移，退役旧 Agent Loop。",
    "megahitRuntime": "我将执行过程与浏览器流式连接解耦，通过 checkpoint、worker 租约和持久化活动流支持断线及重启后的恢复。内容绑定的审批与幂等操作账本，让发布始终对应用户批准的内容。",
    "megahitRuntimeTitle": "01 · 长周期任务与 memory",
    "megahitScenario": "“每周帮我们在 X 上发三次内容。”提前准备每周草稿，等待修改与批准，按用户的当地时间发布，再进入下一周期。",
    "megahitSubtitle": "AI 增长平台 · Agent 架构与评测",
    "name": "邓宇昊",
    "native": "母语",
    "navAbout": "关于我",
    "navBackground": "教育背景",
    "navExperience": "工作经历",
    "navLabel": "主导航",
    "navProjects": "项目",
    "navToolbox": "技术能力",
    "noResults": "没有匹配的命令。",
    "numericalComputing": "数值计算",
    "offscreenDescription": "工作之外，我喜欢哲学、欧洲历史武术（HEMA）与语言学。",
    "offscreenLabel": "beyond-code/",
    "offscreenPhilosophy": "黑格尔辩证法影响了我看待技术抽象的方式：概念越想包揽一切，越容易失去具体内容。工程里的模型也总有边界；把业务映射成符号与规则时，我会关注被省略的条件，以及这些简化可能在哪里失效。",
    "offscreenTitle": "代码之外",
    "ossKind": "开源贡献",
    "paletteLabel": "切换到绿色主题",
    "performanceKind": "性能优化",
    "productLink": "产品入口 ↗",
    "projectHint": "点击项目展开详情。公开代码与贡献见 <a href=\"https://github.com/unive3sal?tab=repositories\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub ↗</a>。",
    "projectsLabel": "projects/",
    "projectsTitle": "精选项目",
    "researchKind": "算法研究",
    "resultsLabel": "可用命令",
    "resumeLink": "[ 简历 PDF ↓ ]",
    "roleLine": "架构师 <span>/</span> AI 工程 <span>/</span> Rust 开发者",
    "searchLabel": "搜索命令",
    "searchPlaceholder": "输入命令或跳转到章节…",
    "selectHint": "选择",
    "signInRequired": "需要登录",
    "signalDescription": "重构 Linux 信号处理库，使用 Protocol Buffers 与 epoll 将关键组件改造为异步通信。并行化矩阵分解、重写 Cholesky 实现，并结合反汇编分析定位浮点精度与运行时问题。",
    "signalMeta": "2024.06–2025.03 · 爱立信",
    "signalName": "信号处理库<span class=\"directory-slash\">/</span>",
    "signalSubtitle": "C++ 系统 · 并发架构与数值性能",
    "siiDescription": "AI Agent 运行时、后端架构、Rust 授权服务与 MCP 数据工作空间；AWS 基础设施及部署流程。",
    "skip": "跳到正文",
    "spokenLanguages": "语言能力",
    "sreRole": "站点可靠性工程师",
    "statusLabel": "页面状态",
    "technicalSkills": "技术栈",
    "testEnvironmentLink": "测试环境 ↗",
    "toolboxLabel": "toolbox/",
    "toolboxTitle": "技术与语言",
    "typescriptSkills": "React、智能体开发",
    "uestc": "电子科技大学",
    "yearsLabel": "工程经验",
    "yearsValue": "5 年以上"
  }
};
const elements=[...document.querySelectorAll('[data-i18n]')];
const attributes=[...document.querySelectorAll('[data-i18n-aria], [data-i18n-alt], [data-i18n-placeholder]')];
const languageButton=document.getElementById('language-toggle');
const paletteButton=document.getElementById('palette-toggle');
const commandDialog=document.getElementById('command-dialog');
const helpDialog=document.getElementById('help-dialog');
const commandInput=document.getElementById('command-input');
const commandResults=document.getElementById('command-results');
const commandEmpty=document.getElementById('command-empty');
const modeIndicator=document.getElementById('mode-indicator');
const announcement=document.getElementById('announcements');
let language='en';
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
  const copy=translations[language];
  elements.forEach(el=>{el.innerHTML=copy[el.dataset.i18n];});
  attributes.forEach(el=>{
    if(el.dataset.i18nAria)el.setAttribute('aria-label',copy[el.dataset.i18nAria]);
    if(el.dataset.i18nAlt)el.setAttribute('alt',copy[el.dataset.i18nAlt]);
    if(el.dataset.i18nPlaceholder)el.setAttribute('placeholder',copy[el.dataset.i18nPlaceholder]);
  });
  languageButton.textContent=language==='en'?'中文':'EN';
  languageButton.setAttribute('aria-label',language==='en'?'切换到中文':'Switch to English');
  document.getElementById('status-language').textContent=language==='en'?'en-US':'zh-CN';
  document.title=language==='en'?'Yuhao Deng · ~/home':'邓宇昊 · 个人主页';
  document.querySelector('meta[name="description"]').content=language==='en'?'Yuhao Deng / unive3sal — Architect focused on AI agents, memory systems, and AI application architecture.':'邓宇昊 / unive3sal — 架构师，专注 AI Agent、记忆系统与 AI 应用架构。';
  document.querySelector('meta[property="og:title"]').content=language==='en'?'Yuhao Deng — Architect / AI Engineering':'邓宇昊 — 架构师 / AI 工程';
  document.querySelector('meta[property="og:description"]').content=language==='en'?'Building AI agent systems with memory, durable execution, and recovery.':'构建具备记忆、持久化执行与中断恢复能力的 AI Agent 系统。';
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
    {id:'beyond-code',description:en?'Beyond code':'代码之外',keywords:'beyond code offscreen interests hema philosophy 代码之外 兴趣 哲学 武术',run:()=>jumpTo('offscreen')},
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
setLanguage(readPreference('yuhao-language','en'));
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
