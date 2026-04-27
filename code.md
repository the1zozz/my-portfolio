<!doctype html>
<html lang="en" class="h-full">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Developer Portfolio</title>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>
  <script src="/_sdk/element_sdk.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&amp;family=Outfit:wght@300;400;600;700;800&amp;display=swap" rel="stylesheet">
  <style>
    html, body { height: 100%; margin: 0; }
    * { box-sizing: border-box; }
    .font-heading { font-family: 'Outfit', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.15); }
      50% { box-shadow: 0 0 40px rgba(0, 255, 136, 0.3); }
    }
    .anim-fade { animation: fadeUp 0.7s ease both; }
    .anim-fade-d1 { animation: fadeUp 0.7s ease 0.1s both; }
    .anim-fade-d2 { animation: fadeUp 0.7s ease 0.2s both; }
    .anim-fade-d3 { animation: fadeUp 0.7s ease 0.3s both; }
    .anim-fade-d4 { animation: fadeUp 0.7s ease 0.4s both; }
    .anim-fade-d5 { animation: fadeUp 0.7s ease 0.5s both; }
    .anim-slide { animation: slideIn 0.5s ease both; }

    .project-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-6px);
    }
    .skill-pill {
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .skill-pill:hover {
      transform: scale(1.08);
    }
    .nav-link {
      position: relative;
      transition: color 0.2s ease;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 0; height: 2px;
      transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }

    .terminal-cursor {
      display: inline-block;
      width: 2px;
      animation: blink 1s step-end infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .scroll-wrapper {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    section { scroll-margin-top: 80px; }
  </style>
  <style>body { box-sizing: border-box; }</style>
  <script src="/_sdk/data_sdk.js" type="text/javascript"></script>
 </head>
 <body class="h-full">
  <div id="app" class="scroll-wrapper w-full" style="background:#0a0f1a;"><!-- NAV -->
   <nav id="nav-bar" class="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b" style="background:rgba(10,15,26,0.85);border-color:#1a2540;">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
     <div class="font-mono font-bold text-lg" style="color:#00ff88;"><span style="color:#5b6a8a;">&lt;</span>dev<span style="color:#5b6a8a;">/&gt;</span>
     </div>
     <div class="hidden sm:flex gap-8"><a href="#hero" class="nav-link font-heading text-sm font-semibold tracking-wide" style="color:#8a96b0;" onmouseover="this.style.color=c().accent" onmouseout="this.style.color='#8a96b0'">Home</a> <a href="#about" class="nav-link font-heading text-sm font-semibold tracking-wide" style="color:#8a96b0;" onmouseover="this.style.color=c().accent" onmouseout="this.style.color='#8a96b0'">About</a> <a href="#skills" class="nav-link font-heading text-sm font-semibold tracking-wide" style="color:#8a96b0;" onmouseover="this.style.color=c().accent" onmouseout="this.style.color='#8a96b0'">Skills</a> <a href="#projects" class="nav-link font-heading text-sm font-semibold tracking-wide" style="color:#8a96b0;" onmouseover="this.style.color=c().accent" onmouseout="this.style.color='#8a96b0'">Projects</a> <a href="#contact" class="nav-link font-heading text-sm font-semibold tracking-wide" style="color:#8a96b0;" onmouseover="this.style.color=c().accent" onmouseout="this.style.color='#8a96b0'">Contact</a>
     </div><button id="mobile-toggle" class="sm:hidden" style="color:#8a96b0;" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"> <i data-lucide="menu" style="width:24px;height:24px;"></i> </button>
    </div>
    <div id="mobile-menu" class="hidden sm:hidden px-6 pb-4 flex flex-col gap-3"><a href="#hero" class="font-heading text-sm" style="color:#8a96b0;" onclick="this.parentElement.classList.add('hidden')">Home</a> <a href="#about" class="font-heading text-sm" style="color:#8a96b0;" onclick="this.parentElement.classList.add('hidden')">About</a> <a href="#skills" class="font-heading text-sm" style="color:#8a96b0;" onclick="this.parentElement.classList.add('hidden')">Skills</a> <a href="#projects" class="font-heading text-sm" style="color:#8a96b0;" onclick="this.parentElement.classList.add('hidden')">Projects</a> <a href="#contact" class="font-heading text-sm" style="color:#8a96b0;" onclick="this.parentElement.classList.add('hidden')">Contact</a>
    </div>
   </nav><!-- HERO -->
   <section id="hero" class="min-h-full flex items-center relative px-6" style="padding-top:100px;padding-bottom:60px;">
    <div class="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
     <div class="flex-1">
      <div class="font-mono text-sm anim-fade" style="color:#00ff88;"><span style="color:#5b6a8a;">// </span>Hello World, I'm
      </div>
      <h1 id="hero-name" class="font-heading font-extrabold mt-3 leading-tight anim-fade-d1" style="color:#e8ecf4;font-size:clamp(2.5rem,6vw,4.5rem);">John Doe</h1>
      <p id="hero-tagline" class="font-heading font-semibold mt-2 anim-fade-d2" style="color:#00ff88;font-size:clamp(1.1rem,2.5vw,1.5rem);">Full Stack Developer</p>
      <p id="hero-desc" class="mt-5 max-w-lg leading-relaxed anim-fade-d3" style="color:#7a87a4;font-size:1rem;">Crafting robust, scalable web applications with Spring Boot &amp; Angular. Passionate about clean architecture, RESTful APIs, and seamless user experiences.</p>
      <div class="flex gap-4 mt-8 anim-fade-d4"><a href="#projects" class="font-heading font-semibold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105" style="background:#00ff88;color:#0a0f1a;"> View Projects </a> <a href="#contact" class="font-heading font-semibold px-6 py-3 rounded-lg text-sm border transition-all hover:scale-105" style="color:#00ff88;border-color:#00ff88;background:transparent;"> Contact Me </a>
      </div>
     </div>
     <div class="flex-shrink-0 anim-fade-d5"><!-- Terminal card -->
      <div class="rounded-xl p-1" style="background:linear-gradient(135deg,#00ff88 0%,#0066ff 100%);animation:pulse-glow 3s ease infinite;">
       <div class="rounded-lg p-5" style="background:#0d1424;min-width:280px;">
        <div class="flex gap-2 mb-4">
         <div class="w-3 h-3 rounded-full" style="background:#ff5f57;"></div>
         <div class="w-3 h-3 rounded-full" style="background:#febc2e;"></div>
         <div class="w-3 h-3 rounded-full" style="background:#28c840;"></div>
        </div>
        <div class="font-mono text-xs leading-relaxed" style="color:#8a96b0;">
         <div>
          <span style="color:#00ff88;">$</span> cat skills.json
         </div>
         <div class="mt-2" style="color:#5b6a8a;">
          {
         </div>
         <div>
          &nbsp;&nbsp;<span style="color:#febc2e;">"backend"</span>: <span style="color:#00ff88;">"Spring Boot"</span>,
         </div>
         <div>
          &nbsp;&nbsp;<span style="color:#febc2e;">"frontend"</span>: <span style="color:#00ff88;">"Angular"</span>,
         </div>
         <div>
          &nbsp;&nbsp;<span style="color:#febc2e;">"database"</span>: <span style="color:#00ff88;">"PostgreSQL"</span>,
         </div>
         <div>
          &nbsp;&nbsp;<span style="color:#febc2e;">"devops"</span>: <span style="color:#00ff88;">"Docker"</span>
         </div>
         <div style="color:#5b6a8a;">
          }
         </div>
         <div class="mt-2">
          <span style="color:#00ff88;">$</span> <span class="terminal-cursor" style="background:#00ff88;">&nbsp;</span>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section><!-- ABOUT -->
   <section id="about" class="px-6 py-20">
    <div class="max-w-4xl mx-auto">
     <div class="font-mono text-sm mb-2" style="color:#00ff88;">
      <span style="color:#5b6a8a;">01.</span> About Me
     </div>
     <h2 class="font-heading font-bold text-3xl mb-8" style="color:#e8ecf4;">Who I Am</h2>
     <div class="grid md:grid-cols-2 gap-8">
      <div>
       <p id="about-text" class="leading-relaxed" style="color:#7a87a4;">I'm a full stack developer with expertise in building enterprise-grade applications using Spring Boot for backend services and Angular for dynamic, responsive frontends. I love transforming complex business requirements into elegant, maintainable code.</p>
       <div class="mt-6 grid grid-cols-2 gap-4">
        <div class="rounded-lg p-4" style="background:#111828;border:1px solid #1a2540;">
         <div class="font-heading font-bold text-2xl" style="color:#00ff88;">
          3+
         </div>
         <div class="text-xs mt-1" style="color:#5b6a8a;">
          Years Experience
         </div>
        </div>
        <div class="rounded-lg p-4" style="background:#111828;border:1px solid #1a2540;">
         <div class="font-heading font-bold text-2xl" style="color:#00ff88;">
          15+
         </div>
         <div class="text-xs mt-1" style="color:#5b6a8a;">
          Projects Completed
         </div>
        </div>
       </div>
      </div>
      <div class="rounded-xl p-6" style="background:#111828;border:1px solid #1a2540;">
       <div class="font-mono text-sm mb-4" style="color:#febc2e;">
        // What I do best
       </div>
       <div class="space-y-3">
        <div class="flex items-center gap-3">
         <i data-lucide="server" style="width:18px;height:18px;color:#00ff88;"></i><span style="color:#8a96b0;" class="text-sm">REST API Development</span>
        </div>
        <div class="flex items-center gap-3">
         <i data-lucide="layout" style="width:18px;height:18px;color:#00ff88;"></i><span style="color:#8a96b0;" class="text-sm">SPA Architecture</span>
        </div>
        <div class="flex items-center gap-3">
         <i data-lucide="database" style="width:18px;height:18px;color:#00ff88;"></i><span style="color:#8a96b0;" class="text-sm">Database Design</span>
        </div>
        <div class="flex items-center gap-3">
         <i data-lucide="git-branch" style="width:18px;height:18px;color:#00ff88;"></i><span style="color:#8a96b0;" class="text-sm">CI/CD Pipelines</span>
        </div>
        <div class="flex items-center gap-3">
         <i data-lucide="shield" style="width:18px;height:18px;color:#00ff88;"></i><span style="color:#8a96b0;" class="text-sm">Security &amp; Auth (JWT, OAuth)</span>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section><!-- SKILLS -->
   <section id="skills" class="px-6 py-20">
    <div class="max-w-4xl mx-auto">
     <div class="font-mono text-sm mb-2" style="color:#00ff88;">
      <span style="color:#5b6a8a;">02.</span> Tech Stack
     </div>
     <h2 class="font-heading font-bold text-3xl mb-10" style="color:#e8ecf4;">Skills &amp; Technologies</h2>
     <div class="space-y-8"><!-- Backend -->
      <div>
       <h3 class="font-heading font-semibold text-lg mb-3" style="color:#e8ecf4;"><i data-lucide="server" style="width:18px;height:18px;color:#00ff88;display:inline;vertical-align:middle;margin-right:8px;"></i>Backend</h3>
       <div class="flex flex-wrap gap-3"><span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d2818;color:#00ff88;border:1px solid #00ff8840;">Java</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d2818;color:#00ff88;border:1px solid #00ff8840;">Spring Boot</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d2818;color:#00ff88;border:1px solid #00ff8840;">Spring Security</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d2818;color:#00ff88;border:1px solid #00ff8840;">JPA / Hibernate</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d2818;color:#00ff88;border:1px solid #00ff8840;">Maven</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d2818;color:#00ff88;border:1px solid #00ff8840;">REST APIs</span>
       </div>
      </div><!-- Frontend -->
      <div>
       <h3 class="font-heading font-semibold text-lg mb-3" style="color:#e8ecf4;"><i data-lucide="monitor" style="width:18px;height:18px;color:#3b82f6;display:inline;vertical-align:middle;margin-right:8px;"></i>Frontend</h3>
       <div class="flex flex-wrap gap-3"><span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d1a2e;color:#3b82f6;border:1px solid #3b82f640;">Angular</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d1a2e;color:#3b82f6;border:1px solid #3b82f640;">TypeScript</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d1a2e;color:#3b82f6;border:1px solid #3b82f640;">RxJS</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d1a2e;color:#3b82f6;border:1px solid #3b82f640;">HTML / SCSS</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#0d1a2e;color:#3b82f6;border:1px solid #3b82f640;">Tailwind CSS</span>
       </div>
      </div><!-- Database & DevOps -->
      <div>
       <h3 class="font-heading font-semibold text-lg mb-3" style="color:#e8ecf4;"><i data-lucide="database" style="width:18px;height:18px;color:#febc2e;display:inline;vertical-align:middle;margin-right:8px;"></i>Database &amp; DevOps</h3>
       <div class="flex flex-wrap gap-3"><span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#1a1800;color:#febc2e;border:1px solid #febc2e40;">PostgreSQL</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#1a1800;color:#febc2e;border:1px solid #febc2e40;">MySQL</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#1a1800;color:#febc2e;border:1px solid #febc2e40;">MongoDB</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#1a1800;color:#febc2e;border:1px solid #febc2e40;">Docker</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#1a1800;color:#febc2e;border:1px solid #febc2e40;">Git / GitHub</span> <span class="skill-pill font-mono text-xs px-4 py-2 rounded-full cursor-default" style="background:#1a1800;color:#febc2e;border:1px solid #febc2e40;">Jenkins</span>
       </div>
      </div>
     </div>
    </div>
   </section><!-- PROJECTS -->
   <section id="projects" class="px-6 py-20">
    <div class="max-w-5xl mx-auto">
     <div class="font-mono text-sm mb-2" style="color:#00ff88;">
      <span style="color:#5b6a8a;">03.</span> Portfolio
     </div>
     <h2 class="font-heading font-bold text-3xl mb-10" style="color:#e8ecf4;">Featured Projects</h2>
     <div class="grid md:grid-cols-2 gap-6"><!-- Project 1 -->
      <div class="project-card rounded-xl p-6" style="background:#111828;border:1px solid #1a2540;">
       <div class="flex items-center justify-between mb-4"><i data-lucide="folder" style="width:28px;height:28px;color:#00ff88;"></i>
        <div class="flex gap-3"><a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;" class="hover:text-white transition-colors"><i data-lucide="github" style="width:18px;height:18px;"></i></a> <a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;" class="hover:text-white transition-colors"><i data-lucide="external-link" style="width:18px;height:18px;"></i></a>
        </div>
       </div>
       <h3 class="font-heading font-bold text-lg mb-2" style="color:#e8ecf4;">E-Commerce Platform</h3>
       <p class="text-sm leading-relaxed mb-4" style="color:#7a87a4;">Full-stack e-commerce app with product catalog, cart, checkout, and admin dashboard. JWT auth and role-based access.</p>
       <div class="flex flex-wrap gap-2"><span class="font-mono text-xs" style="color:#00ff88;">Spring Boot</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#3b82f6;">Angular</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#febc2e;">PostgreSQL</span>
       </div>
      </div><!-- Project 2 -->
      <div class="project-card rounded-xl p-6" style="background:#111828;border:1px solid #1a2540;">
       <div class="flex items-center justify-between mb-4"><i data-lucide="folder" style="width:28px;height:28px;color:#00ff88;"></i>
        <div class="flex gap-3"><a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;"><i data-lucide="github" style="width:18px;height:18px;"></i></a> <a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;"><i data-lucide="external-link" style="width:18px;height:18px;"></i></a>
        </div>
       </div>
       <h3 class="font-heading font-bold text-lg mb-2" style="color:#e8ecf4;">Task Management System</h3>
       <p class="text-sm leading-relaxed mb-4" style="color:#7a87a4;">Kanban-style project management tool with real-time updates, drag &amp; drop, and team collaboration features.</p>
       <div class="flex flex-wrap gap-2"><span class="font-mono text-xs" style="color:#00ff88;">Spring Boot</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#3b82f6;">Angular</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#febc2e;">MongoDB</span>
       </div>
      </div><!-- Project 3 -->
      <div class="project-card rounded-xl p-6" style="background:#111828;border:1px solid #1a2540;">
       <div class="flex items-center justify-between mb-4"><i data-lucide="folder" style="width:28px;height:28px;color:#00ff88;"></i>
        <div class="flex gap-3"><a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;"><i data-lucide="github" style="width:18px;height:18px;"></i></a> <a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;"><i data-lucide="external-link" style="width:18px;height:18px;"></i></a>
        </div>
       </div>
       <h3 class="font-heading font-bold text-lg mb-2" style="color:#e8ecf4;">REST API Gateway</h3>
       <p class="text-sm leading-relaxed mb-4" style="color:#7a87a4;">Microservices API gateway with rate limiting, circuit breaker pattern, and centralized logging using Spring Cloud.</p>
       <div class="flex flex-wrap gap-2"><span class="font-mono text-xs" style="color:#00ff88;">Spring Cloud</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#febc2e;">Docker</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#3b82f6;">Redis</span>
       </div>
      </div><!-- Project 4 -->
      <div class="project-card rounded-xl p-6" style="background:#111828;border:1px solid #1a2540;">
       <div class="flex items-center justify-between mb-4"><i data-lucide="folder" style="width:28px;height:28px;color:#00ff88;"></i>
        <div class="flex gap-3"><a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;"><i data-lucide="github" style="width:18px;height:18px;"></i></a> <a href="#" target="_blank" rel="noopener noreferrer" style="color:#5b6a8a;"><i data-lucide="external-link" style="width:18px;height:18px;"></i></a>
        </div>
       </div>
       <h3 class="font-heading font-bold text-lg mb-2" style="color:#e8ecf4;">Real-Time Chat App</h3>
       <p class="text-sm leading-relaxed mb-4" style="color:#7a87a4;">WebSocket-powered messaging app with typing indicators, read receipts, and file sharing capabilities.</p>
       <div class="flex flex-wrap gap-2"><span class="font-mono text-xs" style="color:#00ff88;">Spring WebSocket</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#3b82f6;">Angular</span> <span style="color:#2a3550;">•</span> <span class="font-mono text-xs" style="color:#febc2e;">MySQL</span>
       </div>
      </div>
     </div>
    </div>
   </section><!-- CONTACT -->
   <section id="contact" class="px-6 py-20">
    <div class="max-w-2xl mx-auto text-center">
     <div class="font-mono text-sm mb-2" style="color:#00ff88;">
      <span style="color:#5b6a8a;">04.</span> Get In Touch
     </div>
     <h2 class="font-heading font-bold text-3xl mb-4" style="color:#e8ecf4;">Let's Work Together</h2>
     <p class="mb-10" style="color:#7a87a4;">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
     <div class="flex flex-wrap justify-center gap-5"><a id="link-email" href="mailto:hello@example.com" class="flex items-center gap-3 px-6 py-3 rounded-lg transition-all hover:scale-105" style="background:#111828;border:1px solid #1a2540;color:#e8ecf4;text-decoration:none;"> <i data-lucide="mail" style="width:18px;height:18px;color:#00ff88;"></i> <span id="display-email" class="font-mono text-sm">hello@example.com</span> </a> <a id="link-github" href="https://github.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-6 py-3 rounded-lg transition-all hover:scale-105" style="background:#111828;border:1px solid #1a2540;color:#e8ecf4;text-decoration:none;"> <i data-lucide="github" style="width:18px;height:18px;color:#00ff88;"></i> <span class="font-mono text-sm">GitHub</span> </a> <a id="link-linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-6 py-3 rounded-lg transition-all hover:scale-105" style="background:#111828;border:1px solid #1a2540;color:#e8ecf4;text-decoration:none;"> <i data-lucide="linkedin" style="width:18px;height:18px;color:#00ff88;"></i> <span class="font-mono text-sm">LinkedIn</span> </a>
     </div>
    </div>
   </section><!-- FOOTER -->
   <footer class="px-6 py-8 text-center" style="border-top:1px solid #1a2540;">
    <p class="font-mono text-xs" style="color:#5b6a8a;">Designed &amp; Built with <span style="color:#00ff88;">♥</span> using Angular &amp; Spring Boot</p>
   </footer>
  </div>
  <script>
  // Color helper
  function c() {
    const cfg = window.elementSdk?.config;
    return {
      bg: cfg?.background_color || '#0a0f1a',
      surface: cfg?.surface_color || '#111828',
      text: cfg?.text_color || '#e8ecf4',
      accent: cfg?.accent_color || '#00ff88',
      muted: cfg?.muted_color || '#7a87a4'
    };
  }

  const defaultConfig = {
    background_color: '#0a0f1a',
    surface_color: '#111828',
    text_color: '#e8ecf4',
    accent_color: '#00ff88',
    muted_color: '#7a87a4',
    font_family: 'Outfit',
    font_size: 16,
    hero_name: 'John Doe',
    hero_tagline: 'Full Stack Developer',
    hero_description: 'Crafting robust, scalable web applications with Spring Boot & Angular. Passionate about clean architecture, RESTful APIs, and seamless user experiences.',
    about_text: "I'm a full stack developer with expertise in building enterprise-grade applications using Spring Boot for backend services and Angular for dynamic, responsive frontends. I love transforming complex business requirements into elegant, maintainable code.",
    contact_email: 'hello@example.com',
    contact_github: 'https://github.com',
    contact_linkedin: 'https://linkedin.com'
  };

  function applyConfig(config) {
    const v = (k) => config[k] || defaultConfig[k];

    // Text content
    document.getElementById('hero-name').textContent = v('hero_name');
    document.getElementById('hero-tagline').textContent = v('hero_tagline');
    document.getElementById('hero-desc').textContent = v('hero_description');
    document.getElementById('about-text').textContent = v('about_text');

    // Contact links
    const email = v('contact_email');
    document.getElementById('display-email').textContent = email;
    document.getElementById('link-email').href = 'mailto:' + email;
    document.getElementById('link-github').href = v('contact_github');
    document.getElementById('link-linkedin').href = v('contact_linkedin');

    // Colors
    const bg = v('background_color');
    const surface = v('surface_color');
    const text = v('text_color');
    const accent = v('accent_color');
    const muted = v('muted_color');

    document.getElementById('app').style.background = bg;

    // Font
    const font = v('font_family');
    const baseStack = 'Arial, sans-serif';
    const headingStack = `${font}, ${baseStack}`;
    document.querySelectorAll('.font-heading').forEach(el => {
      el.style.fontFamily = headingStack;
    });

    // Font size
    const sz = v('font_size');
    document.getElementById('hero-desc').style.fontSize = `${sz}px`;
    document.getElementById('about-text').style.fontSize = `${sz}px`;

    // Apply accent color to key elements
    document.querySelectorAll('[style*="color:#00ff88"], [style*="color: #00ff88"]').forEach(el => {
      if (el.style.color === 'rgb(0, 255, 136)' || el.style.color === '#00ff88') {
        el.style.color = accent;
      }
    });
  }

  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => applyConfig(config),
    mapToCapabilities: (config) => {
      const v = (k) => config[k] || defaultConfig[k];
      const mut = (key) => ({
        get: () => v(key),
        set: (val) => { config[key] = val; window.elementSdk.setConfig({ [key]: val }); }
      });
      return {
        recolorables: [mut('background_color'), mut('surface_color'), mut('text_color'), mut('accent_color'), mut('muted_color')],
        borderables: [],
        fontEditable: mut('font_family'),
        fontSizeable: mut('font_size')
      };
    },
    mapToEditPanelValues: (config) => {
      const v = (k) => config[k] || defaultConfig[k];
      return new Map([
        ['hero_name', v('hero_name')],
        ['hero_tagline', v('hero_tagline')],
        ['hero_description', v('hero_description')],
        ['about_text', v('about_text')],
        ['contact_email', v('contact_email')],
        ['contact_github', v('contact_github')],
        ['contact_linkedin', v('contact_linkedin')]
      ]);
    }
  });

  lucide.createIcons();
</script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9f299318919be211',t:'MTc3NzI0ODMxNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>