import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch';
import NProgress from 'nprogress'

import { API_URL } from '../utils';
import Layout from '../components/Layout';

Router.events.on('routeChangeStart', url => {
	console.log(`Loading: ${url}`)
	NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		try {
			const res = await fetch(`${API_URL}/categories`);
			const data = await res.json();
			pageProps.categories = data;
		} catch (error) {
			pageProps.categories = [];
		}	
		return { pageProps }
	}

	render () {
		const { Component, pageProps } = this.props;
		
        return (
			<div>
				<Layout {...pageProps}>
					<Component {...pageProps} />
				</Layout>
			</div>
        )
	}
}

export default MyApp;
