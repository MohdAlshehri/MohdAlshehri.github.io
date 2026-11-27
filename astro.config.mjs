import { defineConfig } from "astro/config";

// الموقع يُنشر على: https://mohdalshehri.github.io
export default defineConfig({
  site: "https://mohdalshehri.github.io",
  trailingSlash: "always",
  // يدمج ملفات CSS الصغيرة داخل الصفحة لتسريع الظهور (ملفات الخطوط نفسها تبقى منفصلة)
  build: { inlineStylesheets: "always" },
});
