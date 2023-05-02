//引入默认主题
import { defaultTheme } from 'vuepress'
export default {
	theme: defaultTheme({
	// favicon.ico网站收藏夹图标，图片本地地址在public文件夹内，图片地址也可选填网络地址
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	
	logo: 'favicon.png', //文件在public文件夹内
	repo: 'username/repoName',  //默认识别为GitHub仓库

	//设置多语言，默认页面为en-US，新建`zh`文件夹存放中文页面
	locales: {
	  '/': {
	      selectLanguageName: 'English',
	      title: 'Foresee the future',
	      description: 'igloo\'s bookshop',
		  navbar: [
			  {
			        text: '首页',
			        link: '/',
			        // 该元素将一直处于激活状态
			        activeMatch: '/',
			    },
			    //两层嵌套
			    {
			        text: '语言学习',
			        children: [
			            {
			                text: '编程语言',
			                children: ['C', 'Java', 'Js', 'PHP', 'Python'],
			            },
			            {
			                text: '标记美化',
			                children: ['HTML', 'Markdown', 'CSS'],
			            },
			        ],
			    },
			    //多个条目
			    {
			        text: '课程',
			        children: ['Politics', 'English'],
			    },
			    // 字符串 - 页面文件路径
			    '/Guide/README.md',
				]
	        },
	        //可单独设置文章sidebar:auto
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
	    '/zh/': {
	    	selectLanguageName: '简体中文',
	        title: '预见·未来',
	        description: 'igloo文档库',
	        }
		},
	notFound:['Not Found','没找到','网页走丢了'],
	backToHome:'返回首页' //404 页面中 返回首页链接的文字。
	})
}
