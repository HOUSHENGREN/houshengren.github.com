const { path } = require('@vuepress/shared-utils')
const THEME_PATH = '/vuepress-theme/'

/**
 * /vuepress-thepress-thme/:year/:month/:day/:slug.html
 * 
 * 该url对应plugin/gallery
 * 
 */

module.exports = {
    // base: '/zdz-blog/', // 这里注释，不需要了，因为styles/index.styl里面设置属性的cursor地址不会自动拼接一个base
    title: "zdz's blogs",
    description: '😁🤞😁',  
    port: 80,
    // port: 8080,
    theme: 'vuepress-theme-maker',
    head: [
        // ['link', { rel: 'icon', href: '/avatar.ico' }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'referrer', content: 'no-referrer' }], // 网络图片不显示
        ['meta', { name: 'theme-color', content: '#607d8b' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#607d8b' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }]
    ],
    markdown: {
        lineNumbers: true,
        extractHeaders: [ 'h2', 'h3', 'h4' ],
        plugins: {
        'markdown-it-mark': true,
        'markdown-it-footnote': true,
        'markdown-it-abbr': true,
        'markdown-it-task-lists': true
        }
    },
    themeConfig: {
        logo: '/avatar.jpg',
        hostname: 'https://houshengren.github.io',
        // hostname: 'https://80shuo.com',
        nav: [
        { text: '🏠 Home', link: '/' },
        //   { text: '📖 Theme', link: '/post/2020/12/26/theme-learning-0.html' },
        //   { text: '🐉 Maker Docs', link: '/_post/maker.md' },
        // #region // 页面存在，暂时不清楚用途
        // { text: '🖼 Theme Gallery', link: '/vuepress-theme/' },
        // #endregion
        //   { text: '🔥 Animation', link: '/categories/animation/' },
          { text: '🔗 friend-links', link: '/friend-links/' },  
        ],
        searchPlaceholder: 'Search ⌘+K',
        searchMaxSuggestions: 10,
        // wordPerminute: {cn: 300, en: 160},
        // dateFormat: 'MMM DD, YYYY',
        social: [
        {
            type: 'email',
            link: 'lid342490@gmail.com'
        },
        {
            type: 'github',
            link: 'HOUSHENGREN/houshengren.github.com'
        },
        //   {
        //     type: 'qq',
        //     link: '//qm.qq.com/cgi-bin/qm/qr?k=5qf0UGmRJWavJGOgo5nemY2BezuGKa-V&jump_from=webapi'
        //   },
        //   {
        //     type: 'feed',
        //     link: '/rss.xml'
        //   }
        ],
        copyright: `© ${new Date().getFullYear()}  <a style="font-weight: bold;" target="_blank" rel="external nofollow noopener" href="https://beian.miit.gov.cn">粤ICP备2024177801号</a>`,
        // copyright: `© ${new Date().getFullYear()} ❤️ <a target="_blank" rel="external nofollow noopener" href="https://17ria.com/">Neil Chen</a>`,
        reward: {
        text: 'Buy me a cup of coffee ☕.',
        enable: true,
        ways: [
            {
            name: 'wechat',
            icon: 'wechat',
            qrcode: '/wechat.png',
            text: 'This is a Wechat Pay qrcode',
            color: 'rgb(9, 187, 7)'
            },
            {
            name: 'alipay',
            symbol: 'alipay',
            qrcode: '/alipay.png',
            text: 'This is a Alipay Pay qrcode',
            color: '#1296db'
            }
        ]
        },
        blog: {
        directories: [
            {
            id: 'post',
            dirname: '_post',
            path: '/',
            itemPermalink: '/post/:year/:month/:day/:slug.html',
            frontmatter: { title: '' },
            pagination: {
                perPagePosts: 10,
                prevText: '',
                nextText: ''
            },
            }
        ],
        frontmatters: [
            {
            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tags/',
            frontmatter: { title: 'Tag' },
            pagination: {
                lengthPerPage: 10,
                prevText: '',
                nextText: ''
            }
            },
            {
            id: "category",
            keys: ['category', 'categories'],
            path: '/categories/',
            frontmatter: { title: 'Category' },
            pagination: {
                lengthPerPage: 10,
                prevText: '',
                nextText: ''
            }
            }
        ],
        sitemap: {
            hostname: 'https://houshengren.github.io',
            // hostname: 'https://80shuo.com',
            exclude: ['/404.html']
        },
        feed: {
            canonical_base: 'https://houshengren.github.io',
            // canonical_base: 'http://80shuo.com',
        },
        comment: {
            service: 'valine',
            appId: '6y5EwczPCBohCmqUTky596J0-gzGzoHsz',
            // appId: '1oeLbJt8p8rzkCaguAkbm0sp-gzGzoHsz',
            appKey: 'Kbid9kWoMzbWT2hKpo2blYM3',
            // appKey: 'jotwOTiL9EkOSYmsp21OcdaM',
            placeholder: 'Leave a comment',
            visitor: true,
            enableQQ: true
        }
        },
        seo: {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => {
            if ('theme-tags' in $page.frontmatter) {
            return $page.frontmatter['theme-tags'];
            }
            return $page.frontmatter.tags
        },
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', '_post', 'blog', '_theme'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.hostname || '') + path,
        image: ($page, $site) => $page.frontmatter.cover && (($site.themeConfig.hostname && !$page.frontmatter.cover.startsWith('http') || '') + $page.frontmatter.cover),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
        },
        pwa: {
        serviceWorker: true,
        popupComponent: 'ThemeSWUpdatePopup',
        updatePopup: true
        },
        copy: {
        copySelector: ['div[class*="language-"] pre', '.friend-link__content div[class*="language-"] pre'], // String or Array
        copyMessage: '代码复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        },
        palette: {
        colors: [{
            btnColor: '#673ab7',
            paletteVars: {
            dark: `--theme-accent-color: #673ab7;
            --theme-foreground-color: #d8d8d8;
            --theme-border-color: #444;
            --theme-background: #202020;
            --theme-sidebar-background: #673ab7;
            --theme-card-background: #252525;
            --theme-card-color: #252525;
            --theme-bg-tertiary-color: #161b22;
            --theme-accent-color-005: rgba(103,58,183,0.05);
            --theme-accent-color-01: rgba(103,58,183,0.1);
            --theme-accent-color-02: rgba(103,58,183,0.2);
            --theme-accent-color-04: rgba(103,58,183,0.4);
            --theme-accent-color-08: rgba(103,58,183,0.8);`,
            light: `--theme-accent-color: #673ab7;
            --theme-foreground-color: #363636;
            --theme-border-color: #e0e0e0;
            --theme-sidebar-background: #673ab7 linear-gradient(to bottom, #673ab7 0%, #522e92 100%);
            --theme-card-background: #fff;
            --theme-bg-tertiary-color: #f6f8fa;
            --theme-accent-color-005: rgba(103,58,183,0.05);
            --theme-accent-color-01: rgba(103,58,183,0.1);
            --theme-accent-color-02: rgba(103,58,183,0.2);
            --theme-accent-color-04: rgba(103,58,183,0.4);
            --theme-accent-color-08: rgba(103,58,183,0.8);`
            }
        },
        {
            btnColor: '#3f51b5',
            paletteVars: {
            dark: `--theme-accent-color: #3f51b5;
                    --theme-foreground-color: #d8d8d8;
                    --theme-border-color: #444;
                    --theme-background: #202020;
                    --theme-sidebar-background: #3f51b5;
                    --theme-card-background: #252525;
                    --theme-card-color: #252525;
                    --theme-bg-tertiary-color: #161b22;
                    --theme-accent-color-005: rgba(63,81,181,0.05);
                    --theme-accent-color-01: rgba(63,81,181,0.1);
                    --theme-accent-color-02: rgba(63,81,181,0.2);
                    --theme-accent-color-04: rgba(63,81,181,0.4);
                    --theme-accent-color-08: rgba(63,81,181,0.8);`,
            light: `--theme-accent-color: #3f51b5;
                    --theme-foreground-color: #363636;
                    --theme-border-color: #e0e0e0;
                    --theme-sidebar-background: #3f51b5 linear-gradient(to bottom, #3f51b5 0%, #324191 100%);
                    --theme-card-background: #fff;
                    --theme-bg-tertiary-color: #f6f8fa;
                    --theme-accent-color-005: rgba(63,81,181,0.05);
                    --theme-accent-color-01: rgba(63,81,181,0.1);
                    --theme-accent-color-02: rgba(63,81,181,0.2);
                    --theme-accent-color-04: rgba(63,81,181,0.4);
                    --theme-accent-color-08: rgba(63,81,181,0.8);`
            }
        },{
            btnColor: '#2196f3',
            paletteVars: {
            dark: `--theme-accent-color: #2196f3; --theme-sidebar-background: #2196f3;`,
            light: `--theme-accent-color: #2196f3; --theme-sidebar-background: #2196f3;`
            }
        },{
            btnColor: '#009688',
            paletteVars: {
            dark: `--theme-accent-color: #009688; --theme-sidebar-background: #009688;`,
            light: `--theme-accent-color: #009688; --theme-sidebar-background: #009688;`
            }
        },{
            btnColor: '#4caf50',
            paletteVars: {
            dark: `--theme-accent-color: #4caf50; --theme-sidebar-background: #4caf50;`,
            light: `--theme-accent-color: #4caf50; --theme-sidebar-background: #4caf50;`
            }
        },{
            btnColor: '#ff9800',
            paletteVars: {
            dark: `--theme-accent-color: #ff9800; --theme-sidebar-background: #ff9800;`,
            light: `--theme-accent-color: #ff9800; --theme-sidebar-background: #ff9800;`
            }
        },{
            btnColor: '#ff5722',
            paletteVars: {
            dark: `--theme-accent-color: #ff5722; --theme-sidebar-background: #ff5722;`,
            light: `--theme-accent-color: #ff5722; --theme-sidebar-background: #ff5722;`
            }
        },{
            btnColor: '#795548',
            paletteVars: {
            dark: `--theme-accent-color: #795548; --theme-sidebar-background: #795548;`,
            light: `--theme-accent-color: #795548; --theme-sidebar-background: #795548;`
            }
        },{
            btnColor: '#607D8B',
            paletteVars: {
            dark: `--theme-accent-color: #607D8B; --theme-sidebar-background: #607D8B;`,
            light: `--theme-accent-color: #607D8B; --theme-sidebar-background: #607D8B;`
            }
        },{
            btnColor: '#2a2b33',
            paletteVars: {
            dark: `--theme-accent-color: #2a2b33; --theme-sidebar-background: #2a2b33;`,
            light: `--theme-accent-color: #2a2b33; --theme-sidebar-background: #2a2b33;`
            }
        }]
        }
    },
    plugins: [
        [
        '@vuepress/google-analytics',
        {
            'ga': 'UA-79204848-2' // UA-00000000-0
        }
        ],
        require('./plugin/util'),
        [require('./plugin/gallery'), {
        id: 'theme',
        dirname: '_theme',
        path: THEME_PATH,
        itemPermalink: '/vuepress-theme/:year/:month/:day/:slug.html',
        layout: 'GalleryLayout',
        itemLayout: 'GalleryLayout',
        pagination: {
            perPagePosts: 10,
        },
        }],
        // 动态网站标题
        [
            'dynamic-title',
            {
               showIcon: '/avatar.ico',
            //    showIcon: '/favicon.ico',
               showText: '(/≧▽≦/)😁😁',
               hideIcon: '/wbb-mad04.ico',
               hideText: '爱我，别走😭😭',
            //    hideText: '(●—●)喔哟，崩溃啦！',
               recoverTime: 2000,
            },
        ],
        [
            'cursor-effects',
            {
               size: 2, // 粒子大小
               shape: 'star', // 粒子形状（可选 'star' 和 'circle'）
               zIndex: 999999999,
            },
        ],

        // 音乐播放器 => vue2.7.14版本冲突，用不了
        // [
        //     'meting',
        //     {
        //        meting: {
        //           server: 'netease', // 音乐源
        //           type: 'playlist', // 资源类型
        //           mid: '2007976796', // 资源 id
        //        },
        //     //    aplayer: {
        //     //       lrcType: 3,
        //     //    },
        //     },
        // ]
    ]
}