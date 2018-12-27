const path = require('path')

module.exports = {
  title: 'Vue Kawaii',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/youngtailors/vue-kawaii' },
    ],
  },
  plugins: [
    [
      'component-docgen',
      {
        rootDir: path.join(__dirname, '../../../vue-kawaii/src/components'),
        exclude: '**/common/**/*',
      },
    ],
  ],
}
