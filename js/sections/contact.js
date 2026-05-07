import { site } from '../data/siteData.js';

const MailIcon = `
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>`;

export function renderContact() {
  const el = document.getElementById('contact');
  const { contact, email } = site;

  el.innerHTML = `
    <div class="section-wrapper">
      <div class="contact-inner">
        <p class="section-label fade-up" style="justify-content:center;">
          ${contact.eyebrow}
        </p>
        <h2 class="section-title fade-up delay-1">${contact.title}</h2>
        <p class="contact-body fade-up delay-2">${contact.body}</p>
        <div class="fade-up delay-3">
          <a href="mailto:${email}" class="contact-email-link">
            ${MailIcon}
            ${email}
          </a>
        </div>
      </div>
    </div>
  `;
}