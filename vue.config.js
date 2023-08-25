const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     },
  //   }
  // },
});
