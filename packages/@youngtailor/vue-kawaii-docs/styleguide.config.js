const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  components: '../vue-kawaii/src/components/**/[A-Z]*.vue',
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-vue-jsx'],
            comments: false,
          },
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
    plugins: [
      // add vue-loader plugin
      new VueLoaderPlugin(),
    ],
  },
  skipComponentsWithoutExample: true,
  styleguideDir: 'dist',
}
