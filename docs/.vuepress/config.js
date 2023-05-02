//引入默认主题
import { defaultTheme } from 'vuepress'
export default {
	theme: defaultTheme({
	// favicon.ico网站收藏夹图标，图片本地地址在public文件夹内，图片地址也可选填网络地址
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	logo: 'favicon.png', //文件在public文件夹内
	repo: 'StuffStyle',  //默认识别为GitHub仓库
        sidebar: auto,
	 navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
	notFound:['Not Found','没找到','网页走丢了'],
	backToHome:'返回首页' //404 页面中 返回首页链接的文字。
	})
}
