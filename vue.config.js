module.exports = {
  // 打包目录
  outputDir: "../eggcms/app/public/index/",
  //部署应用的基本URL
  baseUrl: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001/api/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
