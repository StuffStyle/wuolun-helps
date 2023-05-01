import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'RST Helps',
  description: '回响项目组帮助中心，帮助您解决问题。',
      // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      '/': [
        {
          text: '首页',
          link: 'README.md',
        },
      ],
      '/information': [
        {
          text: '知识产权信息',
          children: ['/information/README.md'],
        },
      ],
    },
})
