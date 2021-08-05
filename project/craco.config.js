/* eslint-disable @typescript-eslint/no-var-requires */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const BundleTracker = require('webpack-bundle-tracker')
const { whenDev } = require('@craco/craco')

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
        ...whenDev(() => [new BundleAnalyzerPlugin()], []),
        ...whenDev(
          () => [new BundleTracker({ filename: './dist/webpack-stats.json' })],
          [new BundleTracker({ filename: './build/webpack-stats.json' })]
        ),
      ],
    },
  },
}
