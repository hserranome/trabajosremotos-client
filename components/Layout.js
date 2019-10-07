import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import ReactGA from 'react-ga';
import '../static/css/style.css';
import React from 'react';

export default class Layout extends React.Component{
	componentDidMount(){
		// Comprobamos si ya esta google analytics o no para evitar duplicados
		ReactGA.initialize('UA-108296865-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
		// if (!window.GA_INITIALIZED) {
		// 	// Si no esta, iniciamos
		// 	window.GA_INITIALIZED = true
		//   }
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
