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
							¿Algo que nos quieras decir? Si tienes algún comentario o idea que compartirnos, puedes enviarnos un correo a <a href="mailto:trabajosremotos@mango.moe">trabajosremotos@mango.moe</a>.
						</p>
						<div style={{ marginBottom: '3rem' }}></div>

						<h4>Publicidad</h4>
						<p>
							Para cualquier duda sobre precios de publicidad en la web, telegram o nuestras redes sociales, puedes mandarnos un correo a <a href="mailto:publicidad@trabajosremotos.es">publicidad@trabajosremotos.es</a>.
						</p>
						<div style={{ marginBottom: '3rem' }}></div>

						<h4>Escribe en nuestro blog</h4>
						<p>
							¿Quieres publicar tus artículos en nuestro blog? Puedes mandarlos a <a href="mailto:articulos@trabajosremotos.es">articulos@trabajosremotos.es</a> y nos pondremos en contacto contigo.
						</p>
						<div style={{ marginBottom: '3rem' }}></div>

						<h4>Sobre nosotros</h4>
						<p>
							Trabajos Remotos es un proyecto 
							de <a rel="noopener" href="https://www.mango.moe/" target="_blank">MangoMoe</a> que 
							busca ayudar a personas hispanohablantes encontrar trabajos a distancia.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default About;