// 问题:1http://localhost:8080怎么来的?
//   2^/yuedu??
// 3.npm run build
//4 cnpm 安装,改名字?无法运行
//5npm run dev 和npm start
//6开发环境接口和生产环境接口不是同一个?
//6如果配置后不想改变开发环境?
//7phpStudy???
// module.exports = {
//     devServer: {
//         port: 4000//改端口号  http://localhost:4000/   原来http://localhost:8080/  //重启项目
//     }
// }

// module.exports = {
//     devServer: {
//       proxy: 'http://localhost:3000'//告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
//       //设置proxy为你要代理的地址,然后真正的接口访问当前服务器http://localhsot:8080
//     }
//   }


/* 
    如果是生产环境 publicPath '/未来部署的文件夹名字'
    如果是开发环境 publicPath '/'

    process.env.NODE_ENV

    npm run server  这个值是development
    npm run build 这个值是production
  */
// module.exports = {
//   publicPath:process.env.NODE_ENV==='development'?'/':'./',
//   // publicPath:'yuedu',
//   // publicPath:'./',
//   devServer: {
//     proxy:{
//       '/api':{
//         target:'http://localhost:3000',
//         pathRewrite:{
//           '^/api':'/api'//针对两个接口http://localhost:4000/api和http://localhost:8000/api,找代理都为http://localhost:8080/api
//         }
//       }
//     }
//   }
// }