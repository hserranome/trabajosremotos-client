// next.config.js
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withImages = require('next-images')
require('dotenv').config()

function HACK_removeMinimizeOptionFromCssLoaders(config) {
	console.warn(
		'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
	);
	config.module.rules.forEach(rule => {
		if (Array.isArray(rule.use)) {
			rule.use.forEach(u => {
				if (u.loader === 'css-loader' && u.options) {
					delete u.options.minimize;
				}
			});
		}
	});
}

module.exports = withImages(withSass(withCSS({
	webpack(config) {
		HACK_removeMinimizeOptionFromCssLoaders(config);
		config.plugins = [
			...config.plugins,
			new Dotenv({
				path: path.join(__dirname, '.env'),
				systemvars: true
			})
		]
		return config;
	},
})));