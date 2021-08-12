import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'

import * as Sentry from '@sentry/browser';

process.on('unhandledRejection', (err) => {
	Sentry.captureException(err);
});

process.on('uncaughtException', (err) => {
	Sentry.captureException(err);
});

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			}
		} finally {
			sheet.seal()
		}
	}
	render() {
		return (
			<Html lang="es">
			<Head>
					{process.env.NODE_ENV == 'production' ? <script async defer data-website-id="9b2e0d69-64ef-40d9-917f-6e6a1d2f889c" src="https://analytics.mango.moe/umami.js"></script> : null}
					{process.env.NODE_ENV == 'production' ? <script src="https://scrollytics.com/scrollytics.js" data-pid="ZUYgTyKyoDsj"></script> : null}
			</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
