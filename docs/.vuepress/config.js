//引入默认主题
import { defaultTheme } from 'vuepress'
export default {
        title: 'RST Helps',
	theme: defaultTheme({
	// favicon.ico网站收藏夹图标，图片本地地址在public文件夹内，图片地址也可选填网络地
	repo: 'StuffStyle/wuolun-helps',  //默认识别为GitHub仓库
	 navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      {
        text: '分类',
        children: ['README.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
      sidebar: {
			   '/guide/': [
			        {
			            text: '指导',
			            children: ['env', 'grammer'],
			        }
			    ],
			    '/reference/': [
			        {
			            text: '算法',
			            //可折叠侧边栏
			            collapsible: true,
			            children: ['/C/算法学习.md', '/C/算法学习2.md', '/C/算法学习3.md'],
			        },
			        {
			            text: '指针',
			            collapsible: true,
			            children: ['/C/指针.md', '/C/指针2.md', '/C/指针3.md'],
			        },
			    ],
			}
	notFound:['Not Found','没找到','网页走丢了'],
	backToHome:'返回首页' //404 页面中 返回首页链接的文字。
	})
}
