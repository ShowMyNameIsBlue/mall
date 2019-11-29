const { resolve } = require('path')

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@api', resolve('src/api'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))

    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  }
}
