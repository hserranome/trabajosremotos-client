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
			ReactGA.initialize('UA-108296865-5');
			window.GA_INITIALIZED = true;
		}
		ReactGA.pageview(window.location.pathname + window.location.search);

		window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({ "baseUrl": "mc.us4.list-manage.com", "uuid": "3a042d90b01c388c7081ca588", "lid": "591a1153bf", "uniqueMethods": true }) })


	}, []);

	return(
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				{/* Favicon */}
				<link rel='shortcut icon' href='/static/favicon.ico' />
				{/* Stripe */}
				<script src='https://js.stripe.com/v3' />
				{/* Mailchimp */}
				<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>
			</Head>
	
			<Header {...props} />
				{props.children}
			<Footer />
		</div>
	)
}

export default Layout;
