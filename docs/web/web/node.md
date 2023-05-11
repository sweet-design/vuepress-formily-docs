# node

### 一：下载node
1. 打开[Node 官网](https://nodejs.org/)
2. 点击下面文件下载文件 
  <img :src="$withBase('/assets/images/node.png')" alt="node">
  <img :src="$withBase('/assets/images/node1.jpg')" alt="node">
  <img :src="$withBase('/assets/images/node2.jpg')" alt="node">
3. 一直选下一步直至完成
4. 重启电脑

#### 1.1 检测是否安装成功
1. 快捷键盘win + R，打开cmd 
2. 输入node -v <br/>
  <img :src="$withBase('/assets/images/node4.png')" alt="node">
3. 如果node版本小于8，请重新点击上面官网下载最新

### 二：开发工具vscode
1. 企业微信 -> 微盘 -> 工具软件 -> 前端 -> 下载安装包

### 三： vuepress.js安装
前置条件:
```bash
### VuePress 需要 Node.js (opens new window)>= 8.6
```
#### 1.1 命令
```bash
yarn add -D vuepress  或者  npm install -D vuepress
```
#### 1.2 启动服务 
1. 点击vscode终端 -> 运行任务 -> 点击npm -> 点击npm:dev命令