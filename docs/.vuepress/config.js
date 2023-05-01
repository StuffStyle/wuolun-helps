import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'RST Helps',
  description: '回响项目组帮助中心，帮助您解决问题。',
    theme: defaultTheme({
    sidebar: [
      // SidebarItem
      {
        text: '首页',
        link: '/',
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
}),
})
