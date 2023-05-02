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
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
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
	notFound:['Not Found','没找到','网页走丢了'],
	backToHome:'返回首页' //404 页面中 返回首页链接的文字。
	})
}
