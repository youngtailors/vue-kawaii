import path from 'path'

import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const reslv = p => path.resolve(__dirname, p)

const plugins = [
  vue({
    compileTemplate: true,
  }),
  babel({
    babelrc: false,
    presets: ['@babel/preset-env'],
    plugins: ['transform-vue-jsx'],
    comments: false,
  }),
  buble(),
  resolve(),
  cjs(),
]

export default [
  {
    input: reslv('src/main.js'),
    output: [
      {
        format: 'es',
        file: reslv('dist/vuekawaii.es.js'),
      },
      {
        format: 'cjs',
        file: reslv('dist/vuekawaii.common.js'),
        exports: 'named',
      },
    ],
    plugins: [...plugins],
  },
  {
    input: reslv('src/main.js'),
    output: {
      format: 'iife',
      file: reslv('dist/vuekawaii.iife.js'),
      name: 'vuekawaii',
      exports: 'named',
    },
    plugins: [
      ...plugins,
      uglify({
        compress: { unused: true, dead_code: true },
      }),
    ],
  },
]
