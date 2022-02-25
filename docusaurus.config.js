// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'IXLA IWS',
  tagline: 'Laser Personalization Systems',
  url: 'https://ixla-dev.github.io',
  baseUrl: '/ixla-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_IXLA_mono_blue.svg',

  deploymentBranch: "gh-pages",
  organizationName: 'ixla-dev',            // Usually your GitHub org/user name.
  projectName: 'ixla-docs',                // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')]
        }
      }
    ]
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'IXLA Logo',
          src: 'img/logo_IXLA_mono_blue.svg',
          srcDark: 'img/logo_IXLA_mono_white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Integration Guide',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IXLA s.r.l., Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["powershell", "http"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: "🌜",
          darkIconStyle: {},
          lightIcon: "🌞",
          lightIconStyle: {}
        }
      }
    }),
};
module.exports = config;
