import { defineUserConfig } from 'vuepress'
const genSidebar = require('./utils/genSidebar.js');
...
/* 生成侧边栏配置 */
var sidebar = {
    '/information': genSidebar.genDefaultSidebar('information', '常见问题（FAQ）', '知识库', true, 2),
    /* fallback 侧边栏必须最后定义，否则会导致侧边栏无法使用 */
    '/': ['']
}

/* vuepress 的配置对象 */
var config = {
    ...
    themeConfig: {
        sidebar: sidebar,
    },
}


export default {
  title:'RST Helps'
}
