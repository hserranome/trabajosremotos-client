import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import analytics from "../utils/analytics";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="es">
				<Head>
					{process.env.NODE_ENV == "production" ? (
						<script
							async
							defer
							data-website-id="9b2e0d69-64ef-40d9-917f-6e6a1d2f889c"
							src="https://analytics.mango.moe/umami.js"
							data-cache="true"
						></script>
					) : null}
				</Head>
				<body>
					{/* Made by */}
					<p className="by">Proyecto de 
					<a 
						href="http://twitter.com/mascarelldev" 
						target="_blank" 
						rel="noopener noreferrer"
						onClick={() => {
							analytics.trackEvent(analytics.eventTypes["open-twitter"]);
						}}
					>Mascarell</a> y 
					<a 
						href="http://twitter.com/hserranome" 
						target="_blank" 
						rel="noopener noreferrer"
						onClick={() => {
							analytics.trackEvent(analytics.eventTypes["open-twitter"]);
						}}
					>Hserranome</a></p>
					
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
