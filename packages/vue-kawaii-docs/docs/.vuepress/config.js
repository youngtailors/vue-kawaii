const path = require('path')

module.exports = {
  title: 'Vue Kawaii',
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
