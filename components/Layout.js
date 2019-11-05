import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';

import '../static/css/style.scss';
import '../static/css/easymde.min.css';
import '../static/css/nprogress.css';

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

		// Mailchimp
		window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({ "baseUrl": "mc.us4.list-manage.com", "uuid": "3a042d90b01c388c7081ca588", "lid": "591a1153bf", "uniqueMethods": true }) })
	}, []);

	return(
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				{/* General tags */}
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name="description" content="La plataforma para encontrar trabajos online de manera sencilla." />
				<meta name="robots" content="all" />

				{/* OpenGraph tags */}
				<meta content="website" property="og:type" />
				<meta property="og:title" content="Trabajos remotos" key="trabajos-title-og" />
				<meta content="es_ES" property="og:locale" />
				<meta content="Trabajos Remotos" property="og:site_name" />

				{/* Twitter Card tags */}
				<meta name="twitter:title" content="Trabajos remotos" key="trabajos-title-twitter" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@trabajos_remoto" />
				<meta name="twitter:creator" content="@trabajos_remoto" />

				<link rel='shortcut icon' href='/static/favicon.ico' />
				
				<script src='https://js.stripe.com/v3' />
				<script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>
			</Head>
	
			<Header {...props} />
				{props.children}
			<Footer />
		</div>
	)
}

export default Layout;
