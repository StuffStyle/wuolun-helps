import { defineUserConfig } from 'vuepress'
export default {
  title:'RST Helps'
  themeConfig: {
        sidebar: {
          '/KnowledgeBase/FAQ/': [{
              title: '常见问题（FAQ）',
              children: [
                {title:'AWTK',path:'1.AWTK'},
                {title:'AWTK Designer',path:'2.AWTK Designer’}
              ]
            }]
         }
     }
}
