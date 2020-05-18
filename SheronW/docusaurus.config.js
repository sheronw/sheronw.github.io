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
          to: "docs/yeyin",
          activeBasePath: "docs",
          label: "编故事",
          position: "right",
        },
        {
          to: "https://notes.sheronw.xyz",
          label: "Notes",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Writing",
          items: [
            {
              label: "Notes",
              to: "https://notes.sheronw.xyz",
            },
            {
              label: "编故事",
              to: "docs/yeyin",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "电报频道",
              to: "https://t.me/sheronw_in_the_box",
            },
            {
              label: "GitHub",
              href: "http://github.com/sheronw",
            },
          ],
        },
      ],
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
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};
