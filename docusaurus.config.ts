import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Eternia Docs',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Eternia Docs',
      logo: {
        alt: 'Eternia logo',
        src: 'img/logo.png',
      },
    //   algolia: {
    //     // The application ID provided by Algolia
    //     appId: 'W1FW1P39YD',
  
    //     // Public API key: it is safe to commit it
    //     apiKey: 'f6d40494c221b2d951c0dce39d2b43e1',
  
    //     indexName: 'Eternia Doc',
  
    //     // Optional: see doc section below
    //     contextualSearch: true,
  
    //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //     externalUrlRegex: 'external\\.com|domain\\.com',
  
    //     // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //     replaceSearchResultPathname: {
    //       from: '/docs/', // or as RegExp: /\/docs\//
    //       to: '/',
    //     },
  
    //     // Optional: Algolia search parameters
    //     searchParameters: {},
  
    //     // Optional: path for search page that enabled by default (`false` to disable it)
    //     searchPagePath: 'search',
  
    //     // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    //     insights: false,  
    // },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}
};

export default config;
