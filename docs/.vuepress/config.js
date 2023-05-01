import { defineUserConfig } from 'vuepress'
const { sideBarTool } = require(path.join(__dirname, 'index.js'))
let unDirIncludes = ['node_modules', 'assets', 'public', '网络工程']
let SuffixIncludes = ['md', 'html']
let sidebar = sideBarTool.genSideBarGroup(rootPath, unDirIncludes, SuffixIncludes, {})
export default {
  title:'RST Helps'
}
