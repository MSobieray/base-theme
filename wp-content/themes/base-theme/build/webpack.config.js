const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
  entry: {
  	main: './src/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/js')
  },
  module: {
  	rules: [
    	{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
      	test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  /*devServer: {
    contentBase: path.resolve(__dirname, '../'),
    port: 4000,
  },*/
  plugins: [
  	new CleanWebpackPlugin(['dist'], {
  		root: path.resolve(__dirname, '../'),
  	}),
    new BrowserSyncPlugin( {
        proxy: 'http://localhost:4000',
        port: 4001,
        files: [
            path.resolve(__dirname, '../**/*.php')
        ],
        reloadDelay: 0
      }
    ),  
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

};