/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.qimmalearning.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  outDir: "./public",
  exclude: [],
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },

  // Manually define pages
  additionalPaths: async (config) => {
    const staticPaths = [
      "", // homepage
      "register",
      // add more pages if needed: "about", "services", etc.
    ];

    const locales = config.i18n?.locales || ["en", "ar"];

    const allPaths = [];

    for (const locale of locales) {
      for (const path of staticPaths) {
        allPaths.push({
          loc: `/${locale}/${path}`.replace(/\/+$/, ""), // clean trailing slash
          changefreq: "weekly",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        });
      }
    }

    return allPaths;
  },
};
