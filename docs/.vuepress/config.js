module.exports = {
    title: 'xm-clan',
    description: '记录包括工程化，组件库，协作规范，基础知识等',
    base: "/xm-clan/",
    dest: "./dist",
    themeConfig: {
        nav: [
        { text: '主页', link: '/' },
        { text: '文章', link: '/article/' },
        { text: 'xm-ui组件库', link: 'https://github.com/monw3c/xmui' },
        { text: 'uni-app教程', link: 'https://juejin.cn/book/6844733817438076936' },
        { text: '关注我', link: 'https://github.com/monw3c/' },
        ],
        sidebar: {
            '/article/': [
                {
                title: '前端工程化',
                collapsable: true,
                children: [
                //   'base/basic',
                //   'base/step',
                ]
              }
            ]
        },
        sidebarDepth: 3,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        serviceWorker: true,
    }
}