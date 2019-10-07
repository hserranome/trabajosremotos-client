import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import '../static/css/style.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
	componentDidMount(){
		// Comprobamos si ya esta google analytics o no para evitar duplicados
		if (!window.GA_INITIALIZED) {
			// Si no esta, iniciamos
			ReactGA.initialize('UA-108296865-1');
			window.GA_INITIALIZED = true
		}
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render(){
		return(
			<div>
				<Head>
					<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<script src="https://js.stripe.com/v3" />
				</Head>
		
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
