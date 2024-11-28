const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // vue.config.js
 
// devServer: {
//   proxys: {
//     '/websocket': {
//       target: 'http://192.168.0.100:8080',
//       ws: true,
//       changeOrigin: true
//     }
//   }
// }
})
