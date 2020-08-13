// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Tushar Kshirsagar | kshirsagartd@gmail.com | +919503789589 | Front End/UI Developer';
        return args;
      });
  },
}