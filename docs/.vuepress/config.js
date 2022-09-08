module.exports = (_ctx) => ({
  sourceDir: 'docs',
  dest: 'docs/dist',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Dekey Docs',
      description: 'Developer documentation for the Dekey Ethereum wallet',
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],

  theme: '@vuepress/theme-default',

  themeConfig: {
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/': guideSidebar,
        },
      },
    },
  },

  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: (info) => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        redirectors: [
          {
            base: '/',
            alternative: '/guide',
          },
        ],
      },
    ],
    [
      'tabs',
      {
        useUrlFragment: false,
      },
    ],
  ],

  extraWatchFiles: ['.vuepress/nav/en.js'],
});

const guideSidebar = [
  {
    title: 'Guide',
    collapsable: false,
    children: [
      'getting-started',
      'mpc-api',
      'signing-data',
      'get-user-account',
      'sdk-error-handling',
    ],
  },
];
