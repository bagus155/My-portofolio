import { site } from '../data/siteData.js';

export function renderHero() {
  const el = document.getElementById('hero');

  el.innerHTML = `
    <!-- Decorative blobs -->
    <div class="hero-blob hero-blob-1" aria-hidden="true"></div>
    <div class="hero-blob hero-blob-2" aria-hidden="true"></div>
    <div class="hero-blob hero-blob-3" aria-hidden="true"></div>

    <div class="section-wrapper hero-content">

      <!-- Eyebrow -->
      <p class="hero-eyebrow fade-up">
        <span class="eyebrow-pill">${site.hero.eyebrow}</span>
      </p>

      <!-- Headline -->
      <h1 class="hero-headline fade-up delay-1">
        ${site.hero.headline[0]}<br>
        <em>${site.hero.headline[1]}</em>
      </h1>

      <!-- Subtext -->
      <p class="hero-sub fade-up delay-2">${site.hero.sub}</p>

      <!-- CTAs -->
      <div class="hero-ctas fade-up delay-3">
        <a href="${site.hero.cta.href}" class="btn-primary">
          ${site.hero.cta.label}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="${site.hero.ctaSec.href}" class="btn-ghost">
          ${site.hero.ctaSec.label}
        </a>
      </div>

      <!-- Scroll hint -->
      <p class="scroll-hint fade-up delay-4" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        scroll
      </p>

    </div>
  `;
}