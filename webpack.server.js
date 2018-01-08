const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
	// Inform webpack that wee're building a bundle
	// for nodeJS, rather than for the browser.
	target: 'node',

	// Tell webpack the root file of our
	// server application. where to output the bundle
	entry: './src/index.js',

	//Tell webpack where to put the output file that is generated 
	output: {
		filename: 'bundle.js',
		// the folder automatically gets built by webpack when runs
		path: path.resolve(__dirname, 'build'),
	},
	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);