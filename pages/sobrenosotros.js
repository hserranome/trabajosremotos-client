import Head from 'next/head';

const About = (props) => {
	return (
		<div>
			<Head>
				<title>Sobre nosotros - Trabajos remotos</title>
			</Head>
			
			<div className="anuncio">
				<div className="container">
					<div className="content fullwidth">
						<h4>Sobre Trabajos Remotos</h4>
						<p>
							Trabajos Remotos es un proyecto 
							de <a href="https://hserrano.me/" target="_blank">HJ</a> y <a href="https://mascarell.me/" target="_blank">Mascarell</a>, 
							idea que ambos tuvimos por separado y, en principio, ibamos a desarrollar cada uno por su cuenta.
						</p>
						<p>
							Como somos <strike>vagos</strike> programadores y ya habiamos trabajado en otros proyectos juntos, decidimos unir
							fuerzas para ayudar a personas hispanohablantes encontrar trabajos a distancia.
						</p>
						
						<h4>Sobre HJ</h4>
						<p>
							Desarrollador de 🏙 Madrid. Hace carry al Overwatch, pero dice que el juego está amañado. También programa, a veces.
						</p>
						<ul>
							<li><a href="https://hserrano.me/" target="_blank">Página web</a></li>
							<li><a href="https://www.linkedin.com/in/hendy-s-73b532b0/" target="_blank">Linkedin</a></li>
						</ul>

						<h4>Sobre Mascarell</h4>
						<p>
							Desarrollador de 🌴 Tenerife. Siempre está a punto de subir a Champion en Rocket League, pero dice que el juego está amañado. También programa, a veces.
						</p>
						<ul>
							<li><a href="https://mascarell.me/" target="_blank">Página web</a></li>
							<li><a href="https://linkedin.com/in/mascarell" target="_blank">Linkedin</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};

export default About;