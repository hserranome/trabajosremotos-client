import Head from 'next/head';

const About = (props) => {
	return (
		<div>
			<Head>
				<title>Contacto - Trabajos remotos</title>

				<meta property="og:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
				<meta name="twitter:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
			</Head>
			
			<div className="anuncio">
				<div className="container">
					<div className="content fullwidth">

						<h4>Contacto</h4>
						<p>
							¿Algo que nos quieras decir? Si tienes algún comentario, idea que compartirnos o simplemente quieres preguntar precios para promocionarte en la web / newsletter, puedes enviarnos un correo a <a href="mailto:trabajosremotos@mango.moe">trabajosremotos@mango.moe</a>.
						</p>
						<div style={{ marginBottom: '3rem' }}></div>

						<h4>Sobre nosotros</h4>
						<p>
							Trabajos Remotos es un proyecto de <a rel="noopener" href="https://mascarell.me" target="_blank">Mascarell</a> y <a rel="noopener" href="https://mango.moe" target="_blank">HJ</a> que busca ayudar a personas hispanohablantes encontrar trabajos a distancia.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default About;
