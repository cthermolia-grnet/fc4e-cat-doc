// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FC4E CAT',
  tagline: 'Learn how FC4E CAT Tookit works',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fc4e-cat.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fc4e-cat-doc',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fc4e-cat', // Usually your GitHub org/user name.
  projectName: 'fc4e-cat-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
     
      navbar: {
        title: 'FC4E CAT',
        logo: {
          alt: 'FC4E',
          src: 'img/logo.svg',
          srcDark: 'img/logodark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Explore the Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Repos',
            items: [
              {
                label: 'FC4E CAT API',
                to: 'https://github.com/FC4E-CAT/fc4e-cat-api',
              },
              {
                label: 'FC4E CAT UI',
                to: 'https://github.com/FC4E-CAT/fc4e-cat-ui',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} fc4e-cat`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    themes: [
      [
        "@easyops-cn/docusaurus-search-local",
        {
          hashed: true,
          language: ["en", "zh"],
          highlightSearchTermsOnTargetPage: true,
          explicitSearchResultPath: true,
          indexBlog: false,
        },
      ],
    ],
};

module.exports = config;
