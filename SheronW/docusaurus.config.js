module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://sheronw.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sheronw", // Usually your GitHub org/user name.
  projectName: "sheronw.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "SheronW",
      /*
      logo: {
        alt: "My Site Logo",
        src: "img/mstile-150x150.png",
      },*/
      links: [
        { to: "blog", label: "Blog", position: "right" },
        {
          to: "stories/doc1",
          activeBasePath: "stories",
          label: "Novels",
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
              to: "docs/notes",
            },
            {
              label: "Novels",
              to: "docs/novels",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Telegram Channel",
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
      },
    ],
  ],
};
