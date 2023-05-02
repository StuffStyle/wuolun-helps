import { defineUserConfig } from 'vuepress'

/* vuepress 的配置对象 */
var config = {
    themeConfig: {
        sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
    },
}


export default {
  title:'RST Helps'
}
