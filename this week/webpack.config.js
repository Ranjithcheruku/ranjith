module.export = {
	entry : __dirname+'/indexj.js', // here u may write es 6 code
	outpu : {
	    path : __dirname,
	    filename : 'bundle.js' // here will the es 5.1 code
	},
	devserver : {
		inline : true, // if u see a file change (build, re run and re render)
	    port : 3333

	},
	module : {
	   cd this week loaders : [
	     { 
	     	test : /\.js$/. // all the files that has to loaded
	     	exclude : /node_modules/. // the folder that must not be transpiled
            loader : 'babel-loader',  // babel for transpilation
            query : {
	       	}	prsets : ['es2015', 'stage-1']
	      
	      }

	   
	    ]

	}
}