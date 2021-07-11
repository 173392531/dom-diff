const path = require('path');

module.exports = {
    // 入口
  entry: './src/index.js',
    // 出口
  output: {
    //   虚拟打包路径，文件夹不会真正生成，而是在8080端口虚拟生成
    publicPath: 'xuni',
    filename: 'bundle.js'
  },
  devServer:{
      //   端口号
      port:8093,
      //   静态资源文件夹
      contentBase:'www'
  }
};