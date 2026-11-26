// أدوات صغيرة للغتين — لا تحتاج تعديلها
export const tx = (v, lang) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.ar : v);
export const home = (lang) => (lang === "en" ? "/en/" : "/");
export const workUrl = (lang, slug) => (lang === "en" ? `/en/work/${slug}/` : `/work/${slug}/`);
export const otherLang = (lang) => (lang === "en" ? "ar" : "en");
export const swapPath = (lang, path) => {
  if (lang === "en") return path.replace(/^\/en/, "") || "/";
  return "/en" + path;
};
