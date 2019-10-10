import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import '../static/css/style.css';
import 'easymde/dist/easymde.min.css';


import Header from './Header';
import Footer from './Footer';

// 👏 CONSISTENCIA 👏 
const Layout = (props) => {
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			// Si no esta, iniciamos
			ReactGA.initialize('UA-108296865-1');
			window.GA_INITIALIZED = true
		}
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return(
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='shortcut icon' href='/static/favicon.ico' />
				<script src='https://js.stripe.com/v3' />
			</Head>
	
			<Header {...props} />
				{props.children}
			<Footer />
		</div>
	)
}

export default Layout;
