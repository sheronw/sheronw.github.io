module.exports = {
  title: "Sheron W",
  tagline: "CS student & daydreamer",
  url: "https://sheronw.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sheronw", // Usually your GitHub org/user name.
  projectName: "sheronw.github.io", // Usually your repo name.
  themeConfig: {
    colorMode: { disableSwitch: true },
    navbar: {
      title: "Sheron W",
      /*
      logo: {
        alt: "My Site Logo",
        src: "img/mstile-150x150.png",
      },*/
      items: [
        { to: "/", label: "博客", position: "right" },
        {
          to: "docs/read/",
          activeBasePath: "docs",
          label: "阅读",
          position: "right",
        },
        {
          href: "https://notes.sheronw.xyz",
          label: "Notes",
          position: "right",
        },
        { to: "links", label: "Links", position: "right" },
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
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
