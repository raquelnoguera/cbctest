import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { pwaPlugin } from '@vuepress/plugin-pwa';
const { description } = require('../../package.json');
// const fs = require('fs');

// module.exports = {
export default defineUserConfig({
  /**
   * Ref：https://v2.vuepress.vuejs.org/reference/config.html#lang
   */
  lang: 'en-GB',
  /**
   * Ref：https://v2.vuepress.vuejs.org/reference/config.html#title
   */
  title: 'CBC Test Specification',
  /**
   * Ref：https://v2.vuepress.vuejs.org/reference/config.html#description
   */
  description: description,

  bundler: viteBundler(),

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v2.vuepress.vuejs.org/reference/config.html#head
   */
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/assets/img/icon.png' }]
  ],

  // devServer: {
  //   https: {
  //     key: fs.readFileSync('./docs/.vuepress/public/certs/localhost+2-key.pem'),
  //     cert: fs.readFileSync('./docs/.vuepress/public/certs/localhost+2.pem'),
  //   },
  //   public: 'https://localhost:8081/'
  // },

  /**
   * Default theme configuration
   *
   * ref：https://v2.vuepress.vuejs.org/guide/theme.html
   *      https://ecosystem.vuejs.press/themes/default/config.html
   */
  theme: defaultTheme({
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    darkMode: true,
    logo: '/assets/img/K_64.png',
    logoDark: '/assets/img/K_64.png',
    repo: 'https://github.com/raquelnoguera/cbctest',
    navbar: [
      {
        text: 'Test Spec',
        children: [
            {
                text: 'LTE',
                link: '/testcases/lte/tclist.md'
            },
            {
                text: '5G',
                link: '/testcases/5G/tclist.md'
            },
        ]
      },
      {
        text: 'Information',
        children: [
          {
            text: 'Abbreviations',
            link: '/abbreviations.md'
          },
          {
            text: 'CBS intro',
            link: '/introduction.md'
          },
          {
              text: 'Standards',
              link: '/standards.md'
          },
          {
            text: 'Identifiers',
            link: '/identifiers.md'
          }
        ]
      }
    ],
    sidebarDepth: 3,
    sidebar: {
      '/testcases/lte/': [
        {
          text: "Back to introduction",
          link: '/introduction.md'
        },
        {
          text: "General",
          link: '/testcases/lte/tclist.html#general'
        },
        {
          text: "3GPP Release",
          link: '/testcases/lte/tclist.html#_3gpp-release'
        },
        {
          text: 'LTE Test Cases',
          children: [
            {
                text: 'Start Alert',
                link: '/testcases/lte/tclist.html#start-alert'
            },
            {
                text: 'Stop Alert',
                link: '/testcases/lte/tclist.html#stop-alert'
            },
            {
              text: 'Update Alert',
              link: '/testcases/lte/tclist.html#update-alert'
            },
            {
              text: 'Concurrency',
              link: '/testcases/lte/tclist.html#concurrency'
            },
            {
              text: 'Failure and Restart Indications',
              link: '/testcases/lte/tclist.html#failure-and-restart-indications'
            },
            {
              text: 'Error',
              link: '/testcases/lte/tclist.html#error'
            },
            {
              text: 'Timeout',
              link: '/testcases/lte/tclist.html#timeout'
            },
          ]
        }
      ],
      '/': [ 
        {
          text: 'CBS',
          children: [
            {
              text: "Introduction",
              link: '/introduction.md'
            },
            {
              text: "Identifiers",
              link: '/identifiers.md',
              children: [
                {
                  text: "Message Id",
                  link: "/identifiers.html#message-identifiers"
                },
                {
                  text: "Serial Number",
                  link: "/identifiers.html#serial-number"
                },
                {
                  text: "Message Reference",
                  link: "/identifiers.html#message-reference"
                },
                {
                  text: "Data Coding Scheme",
                  link: "/identifiers.html#data-coding-scheme"
                },
                {
                  text: "Area Identifiers",
                  link: "/identifiers.html#area-identifiers"
                }
              ]
            },
            {
              text: "References",
              link: '/standards.md'
            }
          ]
        },
        {
          text: 'Test Cases',
          children: [
            {
                text: 'UMTS',
                link: '/testcases/umts/tclist.md'
            },
            {
                text: 'LTE',
                link: '/testcases/lte/tclist.md'
            },
            {
                text: '5G',
                link: '/testcases/5G/tclist.md'
            },
          ]
        },
        {
          text: 'Abbreviations',
          link: '/abbreviations.md'
        },
      ]
    },
  }),

  markdown: {
    LinksPluginOptions: true
  },

  /**
   * Apply plugins，ref：https://v2.vuepress.vuejs.org/reference/plugin-api.html
   */
  plugins: [
    pwaPlugin()
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/assets/img'
      }
    }
  }
})
