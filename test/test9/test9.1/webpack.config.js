module.exports = {
	entry : __dirname+'/hello.js', 
	output : {
		path : __dirname,
		filename : 'bundle.js' 
	},
	devServer : {
		inline : true, 
		port : 3333
	}, 
	module : {
		loaders : [
			{
				test : /\.js$/, 
				exclude : /node_modules/, 
				loader : 'babel-loader', 
				query : {
					presets : ['es2015', 'react',  'stage-1'] 
				}
			}
		]
	}
}