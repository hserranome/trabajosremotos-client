import Head from 'next/head';

const Anunciate = (props) => {
	return (
		<div>
			<Head>
				<title>Anúnciate en Trabajos remotos</title>

				<meta property="og:description" content="La plataforma para encontrar trabajos online de manera sencilla." />
				<meta name="twitter:description" content="La plataforma para encontrar trabajos online de manera sencilla." />
			</Head>
			
			<div className="anuncio">
				<div className="container">
					<div className="content fullwidth">
						<h4>Anúnciate en Trabajos remotos</h4>
						<p>
							Antes de nada, ¡Gracias por interesarte en anunciarte con nosotros! 
						</p>
						<p>
							Ofrecemos dos tipos de publicidad, en la newsletter y en la página de inicio.
							Tenemos packs si quieres anunciarte en ambos sitios, para dudas 
							y mas información sobre precios, puedes ponerte en 
							contacto a través de <a href="mailto:contacto@trabajosremotos.es">contacto@trabajosremotos.es</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Anunciate;