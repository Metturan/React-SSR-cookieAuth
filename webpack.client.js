const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
	// Tell webpack the root file of our
	// server application. where to output the bundle
	entry: './src/client/client.js',

	//Tell webpack where to put the output file that is generated 
	output: {
		filename: 'bundle.js',
		// the folder automatically gets built by webpack when runs
		path: path.resolve(__dirname, 'public'),
	}
};

module.exports = merge(baseConfig, config);