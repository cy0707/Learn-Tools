// 插件的引入
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: __dirname + '/src/app.js',
	output: {
		path:  __dirname + '/dist',
		filename: 'js/[name].bundle.js',
	},
	module: {
	  rules: [
	    { test: /\.js$/, 
	      exclude: path.resolve(__dirname, 'node_modules'), 
	      // 这个loader不处理的目录
	      include:path.resolve(__dirname,'src'),
	      // 这个loader处理的目录
	      loader: 'babel-loader'
	     },
	     {
	     	test: /\.css$/,
	     	use: ['style-loader',
	     	{ loader: 'css-loader',
	     	  options: {
	     	  	importLoaders: 1
	     	  }
	     	},
	     	{
	     		loader:'postcss-loader'
	     	}]
	     },
	     {
	     	test: /\.html$/,
	     	use: 'html-loader'
	     },
	     {
	     	test:/\.less$/,
	     	use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
	     },
	     {
	     	test:/\.(png|jpg|gif|svg)$/i,
	     	use: {
	     		loader: 'url-loader',
	     		options: {
	     			name: 'assets/[name]-[hash:5].[ext]',
	     			loader: 'image-webpack-loader',
	     			limit: 1000
	     		}
	     	}
	     }
	  ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
}