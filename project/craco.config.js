/* eslint-disable @typescript-eslint/no-var-requires */
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const BundleTracker = require('webpack-bundle-tracker')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const { whenDev } = require('@craco/craco')
const CracoLessPlugin = require('craco-less')

module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.writeToDisk = true
    return devServerConfig
  },
  webpack: {
    configure: (webpackConfig) => ({
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        publicPath: `${webpackConfig.output.publicPath}static/`,
      },
    }),
    plugins: {
      add: [
        // ...whenDev(() => [new BundleAnalyzerPlugin()], []),
        ...whenDev(
          () => [new BundleTracker({ filename: './dist/webpack-stats.json' })],
          [new BundleTracker({ filename: './build/webpack-stats.json' })]
        ),
      ],
    },
  },
  style: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#5f33ba', '@border-radius-base': '8px', 'input-height-base': '48px' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
