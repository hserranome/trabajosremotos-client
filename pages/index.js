import JobsList from "../modules/JobsList";
import CategoryMenu from "../components/CategoryMenu";
import SearchBar from "../components/SearchBar";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

import { WEB_URL, API_URL, getLocalDate } from "../utils";
import ActiveLink from "../components/ActiveLink";

const Index = (props) => {
	const { initialJobs, error, query } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				<meta name="robots" content="all" />
				<meta
					property="description"
					content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`}
				/>
				<meta
					property="og:title"
					content={`Tu tablón de empleo remoto exclusivamente en español`}
					key="trabajos-title-og"
				/>
				<meta
					property="og:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-logo-og"
				/>
				<meta
					property="og:description"
					content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`}
				/>
				<meta
					name="twitter:title"
					content={`Tu tablón de empleo remoto exclusivamente en español`}
					key="trabajos-title-twitter"
				/>
				<meta
					name="twitter:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-image-twitter"
				/>
				<meta
					name="twitter:description"
					content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`}
				/>
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

			<Header />
			<SearchBar />

			<div className="trabajos nobottom">
				<CategoryMenu />
				<PublishBanner />
				<JobsList initialJobs={initialJobs} error={error} query={query} />
			</div>

			<div className="extra">
				<div className="container" style={{ marginTop: "0" }}>
					<div>
						<h3>Misión de Trabajos Remotos</h3>

						<p>
							Trabajos remotos nace en 2019 para ayudar a todas aquellas personas que quieren dar el paso al teletrabajo
							y no saben por donde empezar, publicando ofertas de trabajos remotos de manera frecuente y dando
							información en nuestro <a href={`${WEB_URL}/blog`}>blog</a>.
						</p>

						<h3>Situación actual del teletrabajo</h3>

						<p>
							Cada vez más empresas están buscando perfiles remotos para sus nuevas contrataciones, no sólo por la
							situación actual si no por los{" "}
							<a href={`${WEB_URL}/blog/que-es-el-teletrabajo-o-trabajo-en-remoto`}>beneficios</a> que el teletrabajo
							tiene.
						</p>

						<p>
							La demanda de teletrabajo ha ido creciendo con los años y estamos en un punto en el cual es cada vez más
							normal pedir el trabajo en remoto como beneficio en un nuevo puesto de trabajo.
						</p>

						<h3>¿Eres una empresa buscando perfiles remotos?</h3>

						<p>
							Si eres una empresa remote friendly o que está pensando dar el paso al teletrabajo para tus nuevas
							contrataciones, sigue leyendo.
						</p>

						<p>
							Además de los lectores de nuestra página web, al publicar una oferta la enviamos por Telegram, Twitter y
							cada martes en nuestra newsletter, dando así más difusión a tu trabajo y atrayendo un mayor número de
							interesados.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Index.getInitialProps = async () => {
	const thisQuery = `/jobs?_sort=pinned:DESC,created_at:desc&_limit=40`;

	try {
		// Advertisement query
		const ad = await fetch(`${API_URL}/archives?_sort=active:DESC`);
		const ads = await ad.json();
		const randomAd = ads[Math.floor(Math.random() * ads.length)];

		// Jobs query
		const res = await fetch(`${API_URL}${thisQuery}`);
		const jobs = await res.json();

		// Format date and sort jobs
		const initialJobs = jobs.map((job) => ({ ...job, created_at_formatted: getLocalDate(job.created_at) }));

		// Before returning the jobs, add the advertisement to the array of jobs
		try {
			if (ads.length !== 0 && randomAd.Active === true) initialJobs.splice(3, 0, randomAd);
		} catch {
			console.error("cannot load ads");
		}

		return { initialJobs, query: thisQuery };
	} catch (error) {
		console.error(error);
		return { error };
	}
};

export default Index;

export const Header = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="desktop">
					<br />
					<br />
					<br />
				</div>
				<h1 className="hero-title">Trabajos remotos</h1>
				<p className="hero-subtitle">La plataforma para encontrar trabajos remotos online de manera sencilla.</p>
			</div>
			<div className="text-center">
				<div>
					<p className="max-w-md mx-auto text-xs text-gray-600 sm:text-sm mb-3">
						¿Quieres recibir las últimas ofertas de trabajo todos los martes?
					</p>
					<a
						href="https://emailoctopus.com/lists/347308e1-960d-11ea-a3d0-06b4694bee2a/forms/subscribe"
						target="_blank"
						className="inline-flex shadow-md focus:shadow-outline tracking-wide focus:outline-none items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none cursor:pointer"
						style={{ backgroundColor: "#ff4114" }}
					>
						¡Únete a nuestra newsletter!
					</a>
				</div>
			</div>
		</div>
	);
};

export const PublishBanner = () => {
	return (
		<div style={{ padding: "0 1rem", overflow: "hidden" }} className="container">
			<div
				className="flex flex-col lg:flex-row items-center justify-between rounded-xl overflow-hidden w-full mx-auto py-4 px-10 z-20"
				style={{ backgroundColor: "#e2f4fa" }}
			>
				<h2 className="text-l text-black">
					<span className="font-extrabold">👉 ¿Contratando en remoto?</span>{" "}
					<span className="font-semibold">
						Alcanza a más de <span className="accent-text font-bold">10.000</span> trabajadores en remoto
					</span>
				</h2>
				<div className="pt-2 lg:pt-0">
					<button className="main-button outline">
						<ActiveLink href="/publicar">
							<span>Publica un trabajo</span>
						</ActiveLink>
					</button>
				</div>
			</div>
		</div>
	);
};
