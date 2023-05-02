//引入默认主题
import { defaultTheme } from 'vuepress'
const sidebarConf = require('./sidebar')

module.exports = {
  plugins: [
    ["vuepress-plugin-auto-sidebar", {}]
  ],
  themeConfig: {
    sidebar: sidebarConf
  }
}
export default {
        title: 'RST Helps',
	theme: defaultTheme({
	// favicon.ico网站收藏夹图标，图片本地地址在public文件夹内，图片地址也可选填网络地
	repo: 'StuffStyle/wuolun-helps',  //默认识别为GitHub仓库
	notFound:['Not Found','没找到','网页走丢了'],
	backToHome:'返回首页' //404 页面中 返回首页链接的文字。
	})
}
