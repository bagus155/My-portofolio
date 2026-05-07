import { site } from '../data/siteData.js';

export function renderDataflow() {
  const el = document.getElementById('dataflow');
  const { dataflow } = site;

  el.innerHTML = `
    <div class="section-wrapper">
      <p class="section-label fade-up">${dataflow.eyebrow}</p>
      <h2 class="section-title fade-up delay-1">${dataflow.title}</h2>

      <ol class="flow-container" aria-label="Work process steps">
        ${dataflow.steps.map((step, i) => `
          <li class="flow-step fade-up delay-${Math.min(i + 1, 5)}">
            <div class="flow-number"
                 style="background:${step.bg}; color:${step.color};"
                 aria-hidden="true">
              <span>${step.n}</span>
            </div>
            <div class="flow-content">
              <h3>${step.title}</h3>
              <p>${step.desc}</p>
            </div>
          </li>
        `).join('')}
      </ol>
    </div>
    <div class="divider"></div>
  `;
}