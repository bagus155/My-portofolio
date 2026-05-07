import { site } from '../data/siteData.js';

export function renderExpertise() {
  const el = document.getElementById('expertise');
  const { expertise } = site;

  el.innerHTML = `
    <div class="section-wrapper">
      <p class="section-label fade-up">${expertise.eyebrow}</p>
      <h2 class="section-title fade-up delay-1">${expertise.title}</h2>

      <div class="expertise-grid">
        ${expertise.cards.map((card, i) => `
          <article class="expertise-card fade-up delay-${Math.min(i + 1, 6)}">
            <div class="expertise-icon" style="background:${card.bg};"
                 aria-hidden="true">${card.icon}</div>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
            <p class="mono-detail">${card.mono}</p>
          </article>
        `).join('')}
      </div>
    </div>
    <div class="divider"></div>
  `;
}