export const THEME_STORAGE_KEY = "theme";

/**
 * Serialized and inlined into a blocking <script> in app/layout.tsx's <head>,
 * so the correct data-theme attribute is set before first paint — no
 * light-mode flash before dark mode (or vice versa) hydrates in.
 */
export function themeInitScript() {
  return `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:(m?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
}
