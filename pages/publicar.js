import Head from "next/head";

const Publicar = () => {
	return (
		<div>
			<Head>
				<title>Publicar nuevo trabajo - Trabajos remotos</title>

				<meta
					property="og:description"
					content="La plataforma para encontrar trabajos remotos online de manera sencilla."
				/>
				<meta
					name="twitter:description"
					content="La plataforma para encontrar trabajos remotos online de manera sencilla."
				/>
			</Head>
			<div className="container recursos-hero" style={{ marginTop: "6rem" }}>
				<div className="content">
					<Statistic />
				</div>
			</div>

			<div className="block nuevo" style={{ marginTop: 0 }}>
				<div className="container">
          <iframe src="https://tally.so/embed/nGoQjn?hideTitle=1&alignLeft=1&transparentBackground=1" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0" title="Nuevo empleo en Trabajos Remotos"></iframe>
				</div>
			</div>
		</div>
	);
};

export default Publicar;

const Statistic = () => {
	return (
		<div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-8 pb-8">
			<div className="grid gap-24 row-gap-8 lg:grid-cols-5">
				<div className="grid gap-8 lg:col-span-2">
					<div className="relative">
            <br />
						<h4 className="text-lg font-bold">Publica tu oferta en trabajosremotos.es</h4>
						<p className="text-gray-700">
							La oferta permanecerá activa durante 30 días. Después, la publicación seguirá visible, pero no se podrá
							postular a ella.
						</p>
					</div>
				</div>
				<div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
					<div className="flex flex-col justify-between p-10">
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Visitantes mensuales</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">~10.000</p>
						</div>
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Usuarios en Telegram</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">+1.100</p>
						</div>
					</div>
					<div className="flex flex-col justify-between p-10">
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Seguidores en LinkedIn</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">+1.600</p>
						</div>
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Newsletter</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">+500</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
