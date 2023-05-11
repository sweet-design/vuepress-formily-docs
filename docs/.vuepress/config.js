const head = require('./config/headConfig');
const pugings = require('./config/pluginsConfig');
const nav = require('./config/navConfig');
const sidebar = require('./config/sidebarConfig');
const routes = require('./config/routesConfig');
module.exports = {
    base: '/',
    title: '劳勤',
    description: "劳勤前端在线文档",
    head: head,
    themeConfig: {
        logo: '/assets/images/laoqin.png',
        nav: nav,
        sidebar: sidebar,
        themeConfig: {
          router: {
              base: '/',
               routes: routes
          }
        }
    },
    plugins: pugings,
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': 'path/to/some/dir'
          }
        }
    },
    markdown: {
        importCode: {
            handleImportPath: str => str.replace(/^@components/, require('path').resolve(__dirname, './components'))
        },
        code: {
            lineNumbers: false
        }
    },
    /*configureWebpack: {
        resolve: {
            alias: {
                '@router': require('path').resolve(__dirname, '../router.js')
            }
        }
    }*/
}