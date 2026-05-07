import { site } from '../data/siteData.js';

export function renderAbout() {
  const el = document.getElementById('about');
  const { about } = site;

  el.innerHTML = `
    <div class="section-wrapper">
      <div class="about-grid">

        <!-- Text column -->
        <div class="about-text">
          <p class="section-label fade-up">001 — Who I Am</p>

          <div class="status-pill fade-up delay-1">
            <span class="status-dot"></span>
            ${about.statusLabel}
          </div>

          <h2 class="section-title fade-up delay-1">More than endpoints.</h2>

          ${about.paragraphs.map(p =>
            `<p class="about-para fade-up delay-2">${p}</p>`
          ).join('')}

          <div class="tech-stack fade-up delay-3">
            ${about.stack.map(t =>
              `<span class="tech-tag">${t}</span>`
            ).join('')}
          </div>
        </div>

        <!-- Visual column -->
        <div class="about-visual fade-up delay-2" aria-hidden="true">

          <div class="about-card about-card-1">
            <p class="card-filename">// server.js</p>
            ${about.terminalLines.map(line =>
              `<p class="about-card-mono">${line}</p>`
            ).join('')}
          </div>

          <div class="about-card about-card-2">
            <p class="card-filename log">// request log</p>
            ${about.logLines.map(line =>
              `<p class="about-card-mono">${line}</p>`
            ).join('')}
          </div>

        </div>
      </div>
    </div>
    <div class="divider"></div>
  `;
}