module.exports = {
    base: '/doc-blog/',  //站点的基础路径
    title: 'blog-demo',   //网站的标题
    description: 'Vuepress blog demo',  //描述
    themeConfig: {
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'doc', link: '/blog/' }
        ],
        sidebar: {
            '/blog/': [
                {
                    title: '基于iview组件',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    children: [
                      'p-line',
                    ]
                },
               ],
        }
    }
}