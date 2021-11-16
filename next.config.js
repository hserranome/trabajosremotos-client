// next.config.js
const path = require("path");
const Dotenv = require("dotenv-webpack");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withOffline = require("next-offline");
const withSourceMaps = require("@zeit/next-source-maps");
// const { withSentryConfig } = require("@sentry/nextjs");

require("dotenv").config();

function HACK_removeMinimizeOptionFromCssLoaders(config) {
	console.warn("HACK: Removing `minimize` option from `css-loader` entries in Webpack config");
	config.module.rules.forEach((rule) => {
		if (Array.isArray(rule.use)) {
			rule.use.forEach((u) => {
				if (u.loader === "css-loader" && u.options) {
					delete u.options.minimize;
				}
			});
		}
	});
}

const moduleExports = withSourceMaps(
	withImages(
		withOffline(
			withSass(
				withCSS({
					webpack(config) {
						HACK_removeMinimizeOptionFromCssLoaders(config);
						config.plugins = [
							...config.plugins,
							new Dotenv({
								path: path.join(__dirname, ".env"),
								systemvars: true,
							}),
						];
						config.watchOptions = {
							poll: 1000,
							aggregateTimeout: 300,
						};
						return config;
					},
				})
			)
		)
	)
);

// const SentryWebpackPluginOptions = {
// 	silent: true, e
// };

module.exports = moduleExports
