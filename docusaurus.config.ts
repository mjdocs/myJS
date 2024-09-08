import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
    title: 'MyJS Web Docs',
    tagline: 'Real and Free JavaScript',
    favicon: 'img/favicon.ico',

    url: 'https://mjdocs.github.io/',
    baseUrl: '/myJS/',

    // GitHub pages deployment config.
    organizationName: 'mjdocs',
    projectName: 'myJS',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'ru',
        locales: ['ru'],
    },

    plugins: ['docusaurus-plugin-sass'],

    staticDirectories: ['static'],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/mjdocs/myJS/tree/main',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    editUrl: 'https://github.com/mjdocs/myJS/tree/main/blog',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/ecma-big.png',
        navbar: {
            title: 'MyJS Web Docs',
            logo: {
                alt: 'MyJS Web Docs Logo',
                src: 'img/myJS.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'ecmascriptSidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                { to: '/about-us', label: 'About us', position: 'left' },
                {
                    href: 'https://github.com/mjdocs/myJS',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            logo: {
                alt: 'MyJS Web Docs logo',
                src: 'img/myJS.png',
                href: 'https://mjdocs.github.io/myJS/',
                width: 50,
                height: 50,
            },
            copyright: `© ${new Date().getFullYear()} MyJS Web Docs. All Rights Reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
        },
    } satisfies Preset.ThemeConfig,
}

export default config
