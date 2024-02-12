const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "[name].[hash:8].js",
	},
	resolve: {
		extensions: [".mjs", ".js", ".json", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									targets: "last 2 versions, > 0.2%, not dead", // 根据项目去配置
									useBuiltIns: "usage", // 会根据配置的目标环境找出需要的polyfill进行部分引入
									corejs: 3, // 使用 core-js@3 版本
								},
							],
							["@babel/preset-react"],
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./index.html"), // 使用自定义模板
		}),
	],
}
