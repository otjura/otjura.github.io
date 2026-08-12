document.addEventListener('DOMContentLoaded', () => {

  customElements.define('bloglist-frag', class extends HTMLElement {
    constructor() {
      super();
      // Make sure path always points to /blog/ by manipulating prefix. Note!!! if already at /blog/ leave empty! 
      let prefix = this.getAttribute('p')
      prefix = prefix === null ? '' : prefix = prefix+'/'
      this.outerHTML = `
        <menu class="blog-hero">
          <li><a href="${prefix}programming-with-ai.html" data-date="2026-08-02">Programming With AI</a></li>
          <li><a href="${prefix}avoiding-stack-overkill.html" data-date="2025-04-19">Avoiding Stack Overkill</a></li>
          <li><a href="${prefix}software-simplicity-movement.html" data-date="2024-09-12">Software Simplicity Movement</a></li>
          <li><a href="${prefix}why-did-i-pivot-to-java.html" data-date="2021-01-30">Why did I pivot to Java?</a></li>
          <li><a href="${prefix}thoughts-on-lisp-pt2.html" data-date="2018-06-14">Thoughts on Lisp, part 2</a></li>
          <li><a href="${prefix}emacs-vs-vim-vs-programming.html" data-date="2017-02-07">Emacs vs. Vim vs. programming</a></li>
          <li><a href="${prefix}kiinan-oppimisesta.html" data-date="2016-07-23">Kiinan oppimisesta</a></li>
          <li><a href="${prefix}thoughts-on-lisp.html" data-date="2016-01-23">Thoughts on Lisp</a></li>
          <li><a href="${prefix}questionable-future-of-gtk.html" data-date="2015-07-23">Questionable Future of GTK</a></li>
          <li><a href="${prefix}post-mortem-of-kde4.html" data-date="2015-07-11">Post-mortem of KDE 4-series</a></li>
          <li><a href="${prefix}why-is-ubuntu-successful.html" data-date="2015-05-27">Why is Ubuntu successful?</a></li>
          <li><a href="${prefix}adventures-with-kubuntu.html" data-date="2015-05-14">Adventures with Kubuntu 15.04</a></li>
          <li><a href="${prefix}ubuntu-the-broken.html" data-date="2014-12-10">Ubuntu the Broken</a></li>
          <li><a href="${prefix}why-computers-dont-sell.html" data-date="2014-11-30">Why Computer's Don't Sell</a></li>
        </menu>
      `
    }
  })
  
  customElements.define('header-frag', class extends HTMLElement {
    constructor() {
      super();
      let current = this.getAttribute('current')
      if (current === 'home') {
        this.outerHTML = `
            <header>
              <nav>
                <h1><a href="/"><img src="/static/img/favicon192.webp" alt="ojr"></a></h1>
                <ul>
                  <li><a href="/" aria-current="page">Home</a></li>
                  <li><a href="/blog.html">Blog</a></li>
                  <li><a href="/projects.html">Projects</a></li>
                  <li><a href="/about.html">About</a></li>
                </ul>
                <button id="theme-btn" onclick="toggleDark()"
                aria-label="Toggle theme">
                  <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                  <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                </button>
              </nav>
            </header>
          `
      } else if (current === 'about') {
        this.outerHTML = `
                <header>
                  <nav>
                    <h1><a href="/"><img src="/static/img/favicon192.webp" alt="ojr"></a></h1>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/blog.html">Blog</a></li>
                      <li><a href="/projects.html">Projects</a></li>
                      <li><a href="/about.html" aria-current="page">About</a></li>
                    </ul>
                    <button id="theme-btn" onclick="toggleDark()"
                    aria-label="Toggle theme">
                      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    </button>
                  </nav>
                </header>
              `
      } else if (current === 'projects') {
        this.outerHTML = `
                <header>
                  <nav>
                    <h1><a href="/"><img src="/static/img/favicon192.webp" alt="ojr"></a></h1>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/blog.html">Blog</a></li>
                      <li><a href="/projects.html" aria-current="page">Projects</a></li>
                      <li><a href="/about.html">About</a></li>
                    </ul>
                    <button id="theme-btn" onclick="toggleDark()"
                    aria-label="Toggle theme">
                      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    </button>
                  </nav>
                </header>
              `
      } else {
        this.outerHTML = `
                <header>
                  <nav>
                    <h1><a href="/"><img src="/static/img/favicon192.webp" alt="ojr"></a></h1>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/blog.html" aria-current="page">Blog</a></li>
                      <li><a href="/projects.html">Projects</a></li>
                      <li><a href="/about.html">About</a></li>
                    </ul>
                    <button id="theme-btn" onclick="toggleDark()"
                    aria-label="Toggle theme">
                      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    </button>
                  </nav>
                </header>
              `
      }
    }
  })

  customElements.define('footer-frag', class extends HTMLElement {
    constructor() {
      super()
      this.outerHTML = `
      <footer>
        <span>This site doesn't use any cookies.</span>
        <span>This site follows <a href="https://brutalist-web.design/" target="_blank">brutalist web design</a> guidelines.</span>
        <span>2014-2026</span>
      </footer>
      `
    }
  })

  customElements.define('projects-frag', class extends HTMLElement {
    constructor() {
      super();
      this.outerHTML = `
        <menu class="projects-list">
          <li><a href="#">Project Alpha</a></li>
          <li><a href="#">Project Beta</a></li>
          <li><a href="#">Project Gamma</a></li>
          <li><a href="#">Project Delta</a></li>
          <li><a href="#">Project Epsilon</a></li>
        </menu>
      `
    }
  })

})