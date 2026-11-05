const translations = {
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', navAbout: 'About', navWork: 'Work', navJourney: 'Journey', navContact: 'Contact <span aria-hidden="true">↗</span>',
    hello: 'Hello, I’m Yuhao Deng <span>@unive3sal</span>', heroTitle: 'Building systems.<br>Making them <span class="serif-accent">reliable.</span>',
    heroDescription: 'From low-level performance to cloud architecture, and from AI agents to real products. I build systems that turn complex ideas into dependable outcomes.',
    viewWork: 'Explore my work', heroFootnote: '5+ years in engineering · Stay curious. Keep building.', avatarAlt: 'Yuhao’s GitHub avatar', expertiseLabel: 'Engineering focus areas',
    aboutSmall: 'A little about me', aboutTitle: 'A systems thinker.<br><span class="muted">A builder at heart.</span>',
    aboutP1: 'I’m Yuhao, a backend and platform engineer with 5+ years of experience across Ericsson, Alibaba Cloud, and Super Intelligence Inc. My work spans performance-sensitive C++ software, cloud reliability, and AI product architecture.',
    aboutP2: 'I like understanding the boundaries of a system—and turning ideas into things that work. My recent focus is durable AI agent execution, tool integration, and backend architecture. I also contribute to open-source Rust developer tooling.',
    basedLabel: 'BASED IN', based: 'China', focusLabel: 'FOCUS', approachLabel: 'APPROACH', approach: 'Reliable. Clear. Maintainable.',
    workTitle: 'Ideas, put into practice<span class="green-period">.</span>', workAside: 'Where architecture, open source & performance meet',
    megahitSubtitle: 'AI CMO Agent · Architecture & backend delivery', megahitDescription: 'Owned service boundaries and execution architecture for an AI growth platform. Completed a PydanticAI migration, connecting agents, business commands, and shared memory through durable execution and resumable activity streams.', architecture: 'System architecture',
    ccSubtitle: 'A cross-platform CLI for AI coding assistants', ccDescription: 'Contributed a Rust daemon and IPC architecture, automatic provider failover, conflict-aware configuration merging, and recovery. Improved streaming protocol compatibility and CI test reliability.', seeContributions: 'View contributions ↗',
    performanceMetric: 'Faster key matrix operations', signalTitle: 'Signal-processing library redesign', signalDescription: 'Redesigned asynchronous inter-thread communication with Protobuf and Linux epoll. Parallelized matrix factorization and rewrote Cholesky decomposition for approximately 6× efficiency in key workloads.',
    forecastMetric: 'Company AI Hackathon · 2nd prize', forecastTitle: 'Time-series forecasting research', forecastDescription: 'Led model selection, training, tuning, and deployment. Compared LSTM, LightGBM, and Informer, using sparse attention for long-range dependencies. Achieved RMSE ≈ 3 on an internal dataset.',
    journeyTitle: 'Always building.<br>Always evolving.', journeyDescription: 'From signal processing to the cloud, and on to AI. The technology changes. The engineering mindset stays.', downloadResume: 'Download résumé',
    siiDate: 'JUL — NOV 2026', siiDescription: 'Owned Megahit backend architecture and the AI agent runtime migration. Built Rust authorization services and an MCP data workspace, alongside AWS infrastructure and deployment workflows.',
    alibaba: 'Alibaba Cloud', alibabaRole: 'SRE · Hangzhou', alibabaDescription: 'Supported cloud and distributed-database reliability through incident response, Kubernetes troubleshooting, and drill tooling. Worked with international support and engineering teams to resolve customer issues.',
    ericssonRole: 'Experienced Developer Software · Chengdu', ericssonDescription: 'Developed Linux-based radio software, focusing on signal-processing libraries, concurrent architecture, and numerical algorithms in performance-sensitive C++ systems.',
    toolkitTitle: 'Tools in hand. Foundations in mind.', skillsTitle: 'Tools I work with', educationTitle: 'Education', uestc: 'University of Electronic Science and Technology of China', masters: 'Master · Signal and Information Processing', hebut: 'Hebei University of Technology', bachelors: 'Bachelor · Electronic Information Engineering', certifications: 'Alibaba Cloud Certified Professional<br><span>Cloud Computing (Dec 2025) · LLM (Oct 2025)</span>',
    beyondTitle: 'Curiosity, <span class="serif-accent">beyond code.</span>', beyondDescription: 'There’s more than one way to understand the world.', philosophy: 'Philosophy', hema: 'Historical European Martial Arts', linguistics: 'Languages & linguistics', languages: 'Chinese <span>Native</span><i>/</i> English <span>B2</span><i>/</i> Français <span>B1</span>',
    contactTitle: 'Good ideas start<br>with a conversation.', contactDescription: 'Let’s talk AI, engineering, open source—or anything worth exploring.', sayHello: 'Say hello', footerNote: 'Built with care. Driven by curiosity.', backTop: 'Back to top ↑'
  }
};

const elements = [...document.querySelectorAll('[data-i18n]')];
const originals = new Map(elements.map(element => [element, element.innerHTML]));
const attributeElements = [...document.querySelectorAll('[data-i18n-aria], [data-i18n-alt]')];
const originalAttributes = new Map(attributeElements.map(element => [element, { aria: element.getAttribute('aria-label'), alt: element.getAttribute('alt') }]));
const toggle = document.getElementById('language-toggle');
let language = 'zh';

function setLanguage(nextLanguage) {
  language = nextLanguage === 'en' ? 'en' : 'zh';
  document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  elements.forEach(element => {
    element.innerHTML = language === 'en' ? translations.en[element.dataset.i18n] ?? originals.get(element) : originals.get(element);
  });
  attributeElements.forEach(element => {
    const original = originalAttributes.get(element);
    if (element.dataset.i18nAria) element.setAttribute('aria-label', language === 'en' ? translations.en[element.dataset.i18nAria] : original.aria);
    if (element.dataset.i18nAlt) element.setAttribute('alt', language === 'en' ? translations.en[element.dataset.i18nAlt] : original.alt);
  });
  toggle.innerHTML = language === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
  toggle.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
  document.querySelector('meta[name="description"]').content = language === 'en' ? 'Yuhao Deng — Backend and platform engineer building reliable AI agents, cloud infrastructure, and high-performance systems.' : 'Yuhao Deng — 后端与平台工程师，专注 AI Agent、Rust、云可靠性与高性能系统。';
  try { localStorage.setItem('yuhao-language', language); } catch (_) { /* The site works without browser storage. */ }
}

toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
try { setLanguage(localStorage.getItem('yuhao-language') === 'en' ? 'en' : 'zh'); } catch (_) { setLanguage('zh'); }
document.getElementById('year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.site-header nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
