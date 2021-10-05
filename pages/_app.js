import React from "react";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { CookiesProvider } from "react-cookie";

import "../static/css/style.scss";

import Layout from "../components/Layout";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	componentDidMount() {
		try {
			console.log("%c(┬┬﹏┬┬)", "color: red; font-family:monospace; font-size: 20px");
			console.log("%cCeci siempre gana.", "color: blue; font-family:monospace; font-size: 20px");
			console.log("%c༼ つ ◕_◕ ༽つ", "color: green; font-family:monospace; font-size: 20px");
		} catch (error) {}
	}

	componentDidCatch(error, errorInfo) {
		super.componentDidCatch(error, errorInfo);
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<CookiesProvider>
				<Layout {...pageProps}>
					<Component {...pageProps} />
				</Layout>
			</CookiesProvider>
		);
	}
}

export default MyApp;
