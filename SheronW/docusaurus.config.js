module.exports = {
  title: "Sheron W",
  tagline: "CS student & daydreamer",
  url: "https://sheronw.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sheronw", // Usually your GitHub org/user name.
  projectName: "sheronw.github.io", // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: "Sheron W",
      /*
      logo: {
        alt: "My Site Logo",
        src: "img/mstile-150x150.png",
      },*/
      links: [
        { to: "blog", label: "博客", position: "right" },
        {
          to: "docs/read/index",
          activeBasePath: "docs",
          label: "阅读",
          position: "right",
        },
        {
          href: "https://notes.sheronw.xyz",
          label: "Notes",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} SheronW. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "read/index",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};
