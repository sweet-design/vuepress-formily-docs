module.exports = [
    { text: 'Home', link: '/' }, 
    { text: 'baidu', link: 'https://baidu.com' },
    {
        text: 'css',
        ariaLabel: 'css Menu',
        items: [
            { text: 'css1', link: '/css/css1' }
        ]
    },
    {
        text: 'js',
        items: [
            { text: 'js', link: '/js/js1' } 
        ]
    },
    { text: '前端', 
        items: [
            { text: 'Web', link: '/web/web/' },
            { text: 'JavaScript', link: '/web/javascript/' },
            { text: 'TypeScript', link: '/web/typescript/' },
            { text: 'CSS', link: '/web/css/' },
            { text: 'Canvas', link: '/web/canvas/' },
            { text: 'Vue', link: '/web/vue/' },
            { text: 'Vite', link: '/web/vite/' },
            { text: 'NuxtJS', link: '/web/nuxtjs/' },
            { text: 'Webpack', link: '/web/webpack/' },
            { text: 'Flutter', link: '/web/flutter/' },
            { text: 'D3', link: '/web/d3js/' },
            { text: 'Jest', link: '/web/jest/' },
            { text: 'WeApp', link: '/web/weapp/' },
            { text: 'Utils', link: '/web/utils/' }
        ]
    }
]