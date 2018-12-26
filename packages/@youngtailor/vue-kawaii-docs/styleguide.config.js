const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  title: 'Vue Kawaii',
  sections: [
    {
      name: 'Getting Started',
      content: 'docs/GetStarted.md',
    },
    {
      name: 'Components',
      components: '../vue-kawaii/src/components/**/[A-Z]*.vue',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'Cute Vue SVG Components',
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600',
        },
      ],
    },
  },
  theme: {
    color: {
      link: '#4B4E6A',
      linkHover: '#2B3847',
      baseBackground: '#fff',
      border: '#D0DAE4',
      sidebarBackground: '#fff',
    },
    fontFamily: {
      base: '"Source Sans Pro", sans-serif',
    },
  },
  pagePerSection: true,
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
