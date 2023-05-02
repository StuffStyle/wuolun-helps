import { defineUserConfig } from 'vuepress'
export default {
  title:'RST Helps'
  themeConfig: {
    sidebar: {
      '/vue/': [
        'one',
        'two'
      ],
      '/css/': [
        'three',
        'four'
      ],
    },
  },
}
