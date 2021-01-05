import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'
import { CookiesProvider } from 'react-cookie';
import * as Sentry from '@sentry/browser';

import '../static/css/easymde.min.css';
import '../static/css/nprogress.css';
import '../static/css/style.scss';

import Layout from '../components/Layout';

Sentry.init({ dsn: "https://ac20f57b88b54d819e761b537545aa93@o376610.ingest.sentry.io/5197584" });

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
  }
  
	componentDidCatch(error, errorInfo) {
		Sentry.withScope((scope) => {
			Object.keys(errorInfo).forEach((key) => {
				scope.setExtra(key, errorInfo[key]);
			});

			Sentry.captureException(error);
		});

		super.componentDidCatch(error, errorInfo);
	}

	render () {
		const { Component, pageProps } = this.props;
		
        return (
			<CookiesProvider>
				<Layout {...pageProps}>
					<Component {...pageProps} />
				</Layout>
			</CookiesProvider>
        )
	}
}

export default MyApp;
