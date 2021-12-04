import Head from "next/head";

const Publicitate = () => {
	return (
		<div>
			<Head>
				<title>Publicitate con nosotros - Trabajos remotos</title>
				<meta
					property="og:description"
					content="Ofrecemos la oportunidad de anunciarte en nuestros canales a un público hispanohablante interesado en avanzar su carrera profesional. La mayoría residen en Colombia 🇨🇴, México 🇲🇽, y EE. UU 🇺🇸."
				/>
				<meta
					name="twitter:description"
					content="Ofrecemos la oportunidad de anunciarte en nuestros canales a un público hispanohablante interesado en avanzar su carrera profesional. La mayoría residen en Colombia 🇨🇴, México 🇲🇽, y EE. UU 🇺🇸."
				/>
			</Head>
			<div className="pt-20 pb-32">
				<Content />
				<Pricing />
			</div>
		</div>
	);
};
export default Publicitate;

export const Content = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-12 row-gap-8 lg:grid-cols-2">
				<div className="flex flex-col justify-center">
					<div className="max-w-xl mb-6">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
							Publicítate con trabajosremotos.es
						</h2>
						<p className="text-base text-gray-700 md:text-lg">
							Ofrecemos la oportunidad de anunciarte en nuestros canales a un público hispanohablante interesado en
							avanzar su carrera profesional.
						</p>
					</div>
					<div className="grid gap-8 row-gap-8 sm:grid-cols-1">
						<div>
							<div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full brand-secondary-bg-color">
								<svg className="w-8 h-8 text-deep-purple-accent-300" stroke="currentColor" viewBox="0 0 52 52">
									<polygon
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</div>
							<h6 className="mb-2 font-semibold leading-5">Nuestra audiencia</h6>
							<div class="pb-4 px-4 w-full flex flex-col text-gray-700 ">
								<p>
									<span class="brand-secondary-bg-color text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									Publico hispanohablante, de <b className="font-medium">entre 25 y 45 años</b> de edad.
								</p>
								<p>
									<span class="brand-secondary-bg-color text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									La mayoría residen en <b className="font-medium">Colombia 🇨🇴, México 🇲🇽, y EE. UU 🇺🇸</b>.
								</p>
								<p>
									<span class="brand-secondary-bg-color text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									<b className="font-medium">45.000 visitas</b> de 10.000 visitantes únicos cada mes
								</p>
								<p>
									<span class="brand-secondary-bg-color text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									Nuestro canal de Telegram tiene <b className="font-medium">1.400 usuarios</b> activos
								</p>
								<p>
									<span class="brand-secondary-bg-color text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="3"
											class="w-3 h-3"
											viewBox="0 0 24 24"
										>
											<path d="M20 6L9 17l-5-5"></path>
										</svg>
									</span>
									Nuestra página de LinkedIn tiene más de <b className="font-medium">2.000 seguidores</b>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center -mx-4 lg:pl-8">
					<div className="flex flex-col items-end px-3">
						<img
							className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
							src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							alt=""
						/>
						<img
							className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
							src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
							alt=""
						/>
					</div>
					<div className="px-3">
						<img
							className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
							src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Pricing = () => {
	return (
		<div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="max-w-xl mb-1 md:mx-auto sm:text-center">
				<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
					Paquetes
				</p>
			</div>
			<div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-1 sm:mx-auto">
				<div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
					<div className="mb-6">
						<div className="flex items-center justify-between pb-6 mb-6 border-b">
							<div>
								<p className="text-sm font-bold tracking-wider uppercase">Paquete estándar</p>
								<p className="text-5xl font-extrabold">199 €</p>
							</div>
							<div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
								<svg className="w-10 h-10 text-gray-600" viewBox="0 0 24 24" strokeLinecap="round" strokeLidth="2">
									<path
										d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
										fill="none"
										stroke="currentColor"
									/>
									<path
										d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
										fill="none"
										stroke="currentColor"
									/>
								</svg>
							</div>
						</div>
						<div>
							<p className="mb-2 font-bold tracking-wide">Qué incluye</p>
							<ul className="space-y-2">
								<li className="flex items-center">
									<div className="mr-2">
										<svg
											className="w-4 h-4 text-deep-purple-accent-400"
											viewBox="0 0 24 24"
											strokeLinecap="round"
											strokeLidth="2"
										>
											<polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
											<circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
										</svg>
									</div>
									<p className="font-medium text-gray-800">
										Anuncio en el listado de trabajos, con título, descripción y CTA con enlace
									</p>
								</li>
								<li className="flex items-center">
									<div className="mr-2">
										<svg
											className="w-4 h-4 text-deep-purple-accent-400"
											viewBox="0 0 24 24"
											strokeLinecap="round"
											strokeLidth="2"
										>
											<polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
											<circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
										</svg>
									</div>
									<p className="font-medium text-gray-800">Anuncio en nuestra newsletter semanal</p>
								</li>
								<li className="flex items-center">
									<div className="mr-2">
										<svg
											className="w-4 h-4 text-deep-purple-accent-400"
											viewBox="0 0 24 24"
											strokeLinecap="round"
											strokeLidth="2"
										>
											<polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
											<circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
										</svg>
									</div>
									<p className="font-medium text-gray-800">Publicacion en LinkedIn</p>
								</li>
								<li className="flex items-center">
									<div className="mr-2">
										<svg
											className="w-4 h-4 text-deep-purple-accent-400"
											viewBox="0 0 24 24"
											strokeLinecap="round"
											strokeLidth="2"
										>
											<polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
											<circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
										</svg>
									</div>
									<p className="font-medium text-gray-800">Mensaje en Telegram</p>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<a
							href="mailto:contacto@trabajosremotos.es"
							className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-opacity-80		 focus:shadow-outline focus:outline-none brand-bg-color"
						>
							Ponte en contacto
						</a>
						<p className="text-sm text-gray-600">
							Para más información, puedes ponerte en contactarnos en{" "}
							<a href="mailto:contacto@trabajosremotos.es" className="underline text-indigo-500">
								contacto@trabajosremotos.es
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
