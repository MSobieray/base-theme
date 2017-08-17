const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
  plugins: [
  	new CleanWebpackPlugin(['dist'], {
  		root: path.resolve(__dirname, '../'),
  	})  
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

};