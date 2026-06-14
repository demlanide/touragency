// Google Analytics 4 — loaded only when VITE_GA_ID is set.
// Set VITE_GA_ID in .env (format: G-XXXXXXXXXX) to enable tracking.

const GA_ID = import.meta.env.VITE_GA_ID;

export function initGA() {
  // No ID configured (e.g. local dev) → skip loading the tracker entirely.
  if (!GA_ID) return;

  // Inject the official gtag.js loader.
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_ID);
}

// Send a custom event. No-op when analytics is disabled.
export function trackEvent(name, params = {}) {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
