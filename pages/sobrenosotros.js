import Head from 'next/head';

const About = (props) => {
	return (
		<div>
			<Head>
				<title>Sobre nosotros - Trabajos remotos</title>

				<meta property="og:description" content="La plataforma para encontrar trabajos online de manera sencilla." />
				<meta name="twitter:description" content="La plataforma para encontrar trabajos online de manera sencilla." />
			</Head>
			
			<div className="anuncio">
				<div className="container">
					<div className="content fullwidth">

						<h4>Contacto y publicidad</h4>
						<p>
							Para cualquier duda sobre la publicación de trabajos, precios de publicidad en la 
							web / newsletter o simplemente para saludar, puedes mandarnos un correo a <a href="mailto:contacto@trabajosremotos.es">contacto@trabajosremotos.es</a>.
						</p>

						<h4>Sobre Trabajos Remotos</h4>
						<p>
							Trabajos Remotos es un proyecto 
							de <a rel="noopener" target="_blank" href="https://hserrano.me/">HJ</a> y <a rel="noopener" href="https://mascarell.me/" target="_blank">Mascarell</a> que busca
							ayudar a personas hispanohablantes encontrar trabajos a distancia.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default About;