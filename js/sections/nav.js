import { site } from '../data/siteData.js';

export function renderNav() {
  const el = document.getElementById('nav');

  el.innerHTML = `
    <div class="nav-logo">
      <span>//</span> ${site.handle}
    </div>

    <nav aria-label="Main navigation">
      <ul class="nav-links" id="nav-links">
        ${site.navLinks.map(({ label, href }) => `
          <li><a href="${href}">${label}</a></li>
        `).join('')}
        <li>
          <a href="#contact" class="nav-cta">Call Me!</a>
        </li>
      </ul>

      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu"
              aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;

  // ── Mobile toggle ──────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}