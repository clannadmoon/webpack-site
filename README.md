# 多入口 HTML 网站的 webpack 配置

> 本脚手架适合官网等较简单的多 html 网站开发，支持共用导航栏、底部通栏或侧边栏等；通过读取 html 文件所在目录内容，自动更改配置，即增加页面无需更改 webpack 配置；支持 ES6 开发 js；支持将 less 编写样式

## 主要功能

> 能够打包成多个 html 文件和 js 文件，即支持多入口

> 文件名称都会带上 hash 值，解决缓存问题

> 能够复用网站的头部导航栏和底部通栏

> 通过采用 less 进行样式的编写

> 能够支持 ES6 开发

> 增加页面不需要手动去更改 webpack 的入口设置，能够根据目录下的文件自动配置

> 能够实时看到开发的效果

> build 能够对代码进行压缩

## 相关介绍文章

[http://shanhuxueyuan.com/news/detail/83.html](http://shanhuxueyuan.com/news/detail/83.html)

## 下载使用

```bash
# 下载之后先安装依赖
npm install

# 开发时输入如下命令
npm run start

# 构建线上dist文件，采取如下命令
npm run build

```
