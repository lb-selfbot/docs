// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LightningBot Documentation",
  tagline: "Improve your Discord experience with LightningBot",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.lightning-bot.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "LightningBot",
        logo: {
          alt: "LightningBot Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://lightning-bot.com/",
            label: "Main Site",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get started",
                to: "/intro",
              },
              {
                label: "Commands",
                to: "/category/commands",
              },
              {
                label: "Features",
                to: "/category/features",
              },
            ],
          },
          {
            title: "Installation",
            items: [
              {
                label: "Windows",
                href: "/category/installation/windows",
              },
              {
                label: "Linux",
                href: "/category/installation/linux",
              },
              {
                label: "macOS",
                href: "/category/installation/macOS",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Support",
                href: "/category/support",
              },
              {
                label: "FAQ",
                href: "/support/faq",
              },
              {
                label: "Troubleshooting",
                href: "/support/troubleshooting",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://lightning-bot.com/discord",
              },
            ],
          },
        ],
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} lightning-bot.com | All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
