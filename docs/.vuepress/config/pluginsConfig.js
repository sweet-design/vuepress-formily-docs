module.exports = {
    "vuepress-plugin-auto-sidebar": {
        nav: true
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: true
    },
    '@vuepress/active-header-links': {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }, 
    '@vuepress/plugin-register-components': {
        componentsDir: require('path').resolve(__dirname, '../components'),
    }
}