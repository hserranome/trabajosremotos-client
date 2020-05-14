import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import Link from './ActiveLink';
import { useCookies } from 'react-cookie';

import Header from './Header';
import Footer from './Footer';

// 👏 CONSISTENCIA 👏 
const Layout = (props) => {
	const [cookies, setCookie] = useCookies(['acceptCookies']);
	const [loaded, setLoaded] = useState(false); 
	
	useEffect(() => {		
		if (!window.GA_INITIALIZED) {
			// Si no esta, iniciamos
			ReactGA.initialize('UA-108296865-5');
			window.GA_INITIALIZED = true;
		}
		ReactGA.pageview(window.location.pathname + window.location.search);

		// Mailchimp
		// window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({ "baseUrl": "mc.us4.list-manage.com", "uuid": "3a042d90b01c388c7081ca588", "lid": "591a1153bf", "uniqueMethods": true }) })

		window.addEventListener('load', () => {
			setLoaded(true);
		});
	}, []);

	function changeCookie(newValue) {
		let date = new Date();
		// default is 3 months.
		let days = 90;
		// Get unix milliseconds at current time plus number of days
		date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

		setCookie('acceptCookies', newValue, { path: '/', expires: date });
	}

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				{/* General tags */}
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name="description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
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

				<link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/static/favicons/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/static/favicons/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/static/favicons/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/static/favicons/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
				<link rel='shortcut icon' href='/static/favicons/favicon.ico' />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#FFFFFF" />

				<link rel="manifest" href="/static/manifest.json" />

				<script src='https://js.stripe.com/v3' defer />

				<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
				<script defer src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.4/recaptcha.js"></script>
				<script defer src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.4/formEmbed.js"></script>
			</Head>

			<Header {...props} />
				{props.children}
			<Footer />
			
			{cookies.acceptCookies !== 'true' && loaded && (<div className="aviso-cookies active">
				Al seguir navegando por esta web aceptas
				nuestra <Link href="/cookies"><a>política de privacidad</a></Link>.

				<button onClick={() => changeCookie('true')}>Ok! 👍</button>
			</div>)}
		</div>
	)
}

export default Layout;
