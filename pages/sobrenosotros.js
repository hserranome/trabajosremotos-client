import Head from 'next/head';

const About = (props) => {
	return (
		<div>
			<Head>
				<title>Sobre nosotros - Trabajos remotos</title>
			</Head>
			
			<div className="about">
				<div className="container">
					<h1>Sobre trabajosremotos.es</h1>
					<p>Trabajos remotos es un proyecto de <a href="https://hserrano.me/" target="_blank">HJ</a> y <a href="https://mascarell.me/" target="_blank">Mascarell</a>.</p>
				</div>
			</div>
		</div>
	)
};

export default About;