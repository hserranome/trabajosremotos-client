import Head from 'next/head';

const Anunciate = (props) => {
	return (
		<div>
			<Head>
				<title>Anúnciate en Trabajos remotos</title>
			</Head>
			
			<div className="anuncio">
				<div className="container">
					<div className="content fullwidth">
						<h4>Anúnciate en Trabajos remotos</h4>
						<p>
							Trabajos Remotos es un proyecto 
							de <a href="https://hserrano.me/" target="_blank">HJ</a> y <a href="https://mascarell.me/" target="_blank">Mascarell</a>, 
							idea que ambos tuvimos por separado y, en principio, ibamos a desarrollar cada uno por su cuenta.
						</p>
						<p>
							Como somos <strike>vagos</strike> programadores y ya habiamos trabajado en otros proyectos juntos, decidimos unir
							fuerzas para ayudar a personas hispanohablantes encontrar trabajos a distancia.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Anunciate;