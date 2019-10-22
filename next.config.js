// next.config.js
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')
const withOffline = require('next-offline')

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

module.exports = withImages(withOffline(
	withSass(withCSS(
		{
			webpack(config) {
				HACK_removeMinimizeOptionFromCssLoaders(config);
				config.plugins = [
					...config.plugins,
					new Dotenv({
						path: path.join(__dirname, '.env'),
						systemvars: true
					})
				]
					config.plugins = config.plugins.filter((plugin) => (plugin.constructor.name !== 'UglifyJsPlugin'))
					config.plugins.push(new webpack.optimize.UglifyJsPlugin())
				return config;
			},
		}
	))
));