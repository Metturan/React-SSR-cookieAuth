const path = require('path');

module.exports = {
	// Tell webpack the root file of our
	// server application. where to output the bundle
	entry: './src/client/client.js',

	//Tell webpack where to put the output file that is generated 
	output: {
		filename: 'bundle.js',
		// the folder automatically gets built by webpack when runs
		path: path.resolve(__dirname, 'public'),
	},

	// Tell webpack to run babel on every file it runs through
	module: {
		rules: [
			{
				test:  /\.js?$/, 
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					]
				}
			}
		]
	}
};