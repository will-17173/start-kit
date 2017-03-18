## START-KIT
webpack + mockjs + babel的开发模板

#### 安装
`git clone https://github.com/will-17173/start-kit.git`

1. cd start-kit
2. npm install
3. npm start
4. 在浏览器中打开 http://localhost:3000 

#### 发布
1. npm run build
2. 查看dist中文件

#### 文件结构
src目录下每个.html的入口文件是src/js/*.entry.js文件  
每个*.entry.js文件将生成一个 *.js文件，公共模块打包成vendor.js

#### Mock
Mock方案使用[Mock.js](http://mockjs.com/)  
mock文件在mock文件夹内，接口映射文件在src/js/urlmap.js

#### CSS
CSS使用网易的[NEC](http://nec.netease.com)