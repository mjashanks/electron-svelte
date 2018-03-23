const { resolve, join } = require('path')
const port = process.env.PORT || 3000;
const { spawn, execSync } = require('child_process');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: { app: './src/renderer/index.js' },
  output: {
    path: resolve(__dirname, 'src', 'dist'),
    //publicPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src", "renderer"),
      "~": resolve(__dirname)
    }
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: port,
      server: { baseDir: ['src'] },
      open: false
    })
  ]
}