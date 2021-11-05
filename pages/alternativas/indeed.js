import Router, { withRouter } from "next/router";
import styled from 'styled-components';
import Head from "next/head";

const Indeed = (props) => {
	return (
		<div>
			<Head>
				<title>El blog de Trabajos remotos</title>

				<meta name="robots" content="all" />
				<meta
					property="description"
					content={`Blog de trabajosremotos.es, donde podrás encontrar información sobre el trabajo remoto, consejos, entrevistas y mucho mas.`}
				/>
				<meta property="og:title" content={`Blog de teletrabajo, productividad y mucho mas`} key="trabajos-title-og" />
				<meta
					property="og:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-logo-og"
				/>
				<meta
					property="og:description"
					content={`Blog de trabajosremotos.es, donde podrás encontrar información sobre el trabajo remoto, consejos, entrevistas y mucho mas.`}
				/>
				<meta
					name="twitter:title"
					content={`Blog de teletrabajo, productividad y mucho mas`}
					key="trabajos-title-twitter"
				/>
				<meta
					name="twitter:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-image-twitter"
				/>
				<meta
					name="twitter:description"
					content={`Blog de trabajosremotos.es, donde podrás encontrar información sobre el trabajo remoto, consejos, entrevistas y mucho mas.`}
				/>
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

			<div className="mt-10 pt-10"></div>

			<section>
				<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24">
					<div class="flex flex-wrap items-center mx-auto max-w-7xl">
						<div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
							<h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl">Descubre la mejor alternativa a Indeed</h1>
							<p class="mb-8 text-xl leading-relaxed text-left text-gray-800">¿En qué se diferencian Trabajos Remotos e Indeed? ¿Cuál es la mejor web para contratar nuevos empleados? Descubre nuestra comparativa entre Trabajos Remotos e Indeed.</p>
							<a href="/publicar" className="main-button big">Publica tu trabajo</a>
						</div>
						<div class="w-full mt-12 lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0">
							<div>
								<div class="relative w-full max-w-lg">
									<div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
									<div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
									<div class="relative">
										<img class="object-cover object-center mx-auto rounded-lg" src='/static/images/indeed.jpg' alt='trabajos remotos esta fuerte' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
					<div class="flex flex-wrap items-center mx-auto max-w-7xl">
						<div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
							<div>
								<div class="relative w-full max-w-lg">
									<div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob
                  "></div>
									<div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000
                  "></div>
									<div class="relative">
										<img class="object-cover object-center mx-auto rounded-lg" src='/static/images/1.jpg' alt='chica picando un ojo' />
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0
            ">
							<span class="mb-8 text-xl font-bold tracking-widest text-blue-600">Motivo 1</span>
							<h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl
              ">El tamaño no importa</h1>
							<p class="mb-8 text-xl leading-relaxed text-left text-gray-800">Nuestra plataforma tiene precios fijos para ofrecer las mismas oportunidades a todas las empresas, independientemente de su tamaño.</p>
							<p class="mb-8 text-xl leading-relaxed text-left text-gray-800">Aunque publicar en ambas plataformas es completamente gratuito, para tener un mejor alcance en Indeed tienes que, como mínimo, pagar 150 euros al mes.</p>
							<p class="mb-8 text-xl leading-relaxed text-left text-gray-800">Esto hace que competir con otras empresas más grandes con mejores presupuestos se convierta en una tarea difícil.</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
					<div class="flex flex-wrap items-center mx-auto max-w-7xl">
						<div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
							<span class="mb-8 text-xl font-bold tracking-widest text-blue-600">Motivo 2</span>
							<h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl">Exclusivamente remoto</h1>
							<p class="mb-8 text-xl leading-relaxed text-left text-gray-800">No cabe duda que Indeed es una gran plataforma para encontrar empleo y cuenta con gran alcance, pero su web no está enfocada en empleo remoto y esto puede afectar a tu proceso de selección cuando ya te has decidido por la modalidad de trabajo remoto.</p>
							<p class="mb-8 text-xl leading-relaxed text-left text-gray-800">Nuestra plataforma se centra 100% en ofertas de teletrabajo en empresas de habla hispana, facilitando tu alcance.</p>
						</div>
						<div class="w-full mt-12 lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0">
							<div>
								<div class="relative w-full max-w-lg">
									<div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
									<div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
									<div class="relative">
										<img class="object-cover object-center mx-auto rounded-lg" src='/static/images/2.jpg' alt='chico en un sillon trabajando' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
					<div class="flex flex-wrap items-center mx-auto max-w-7xl">
						<div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
							<div>
								<div class="relative w-full max-w-lg">
									<div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob
                  "></div>
									<div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000
                  "></div>
									<div class="relative">
										<img class="object-cover object-center mx-auto rounded-lg" src='/static/images/3.jpg' alt='mucha gente' />
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0
            ">
							<span class="mb-8 text-xl font-bold tracking-widest text-blue-600">Motivo 3</span>
							<h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl
              ">Apostamos por el talento hispano</h1>
							<p class="mb-8 text-xl leading-relaxed text-left text-gray-800">Ampliar tu plantilla con posiciones remotas es un paso lógico debido a los tiempos en los que estamos, en Trabajos Remotos además apostamos por el talento hispanohablante ofreciendo solo empleos remotos en empresas españolas y de LATAM.</p>
						</div>
					</div>
				</div>
			</section>


			<section class="w-full">
				<div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24
        ">
					<div class="flex w-full mx-auto text-left">
						<div class="relative inline-flex items-center mx-auto align-middle">
							<div class="text-center">
								<h1 class="max-w-5xl text-4xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl
                ">¿A qué estás esperando?</h1>
								<p class="max-w-xl mx-auto mt-8 text-xl leading-relaxed text-gray-800
                ">Publica tu próxima oferta de empleo remoto con nosotros y consigue un 30% de descuento con el código <strong>REMOTE30</strong></p>
								<div className="mx-auto flex justify-center items-center mt-8">
									<a href="/publicar" className="main-button big">Publicar anuncio</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

Indeed.getInitialProps = ({ query }) => {
	return { query };
};

export default withRouter(Indeed);