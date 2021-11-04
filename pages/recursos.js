import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { API_URL, getLocalDate } from "../utils";
import RecursosList from "../modules/RecursosList";

const query = "/recursos?_sort=created_at:desc&_limit=30";

const Recursos = (props) => {
	const { initialJobs, error } = props;

	return (
		<div>
			<Head>
				<title>Recursos para trabajadores remotos</title>

				<meta name="robots" content="all" />
				<meta
					property="description"
					content={`Recursos para trabajadores remotos, aplicaciones, tips y consejos para hacer tu jornada remota mas amena.`}
				/>
				<meta property="og:title" content={`Recursos para trabajadores remotos`} key="trabajos-title-og" />
				<meta
					property="og:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-logo-og"
				/>
				<meta
					property="og:description"
					content={`Recursos para trabajadores remotos, aplicaciones, tips y consejos para hacer tu jornada remota mas amena.`}
				/>
				<meta name="twitter:title" content={`Recursos para trabajadores remotos`} key="trabajos-title-twitter" />
				<meta
					name="twitter:image"
					content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg"
					key="trabajos-image-twitter"
				/>
				<meta
					name="twitter:description"
					content={`Recursos para trabajadores remotos, aplicaciones, tips y consejos para hacer tu jornada remota mas amena.`}
				/>
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

			<div className="container"></div>
			<div className="container desktop"></div>
			<div className="container desktop"></div>
			<div className="container desktop"></div>

			<div className="container recursos-hero">
				<div className="content">
					<h4>¿Crees que falta algún recurso o quieres poner el tuyo?</h4>
					<p>
						Puedes enviarnos un correo a <a href="mailto:contacto@trabajosremotos.es">contacto@trabajosremotos.es</a> y lo
						pondremos 🎉
					</p>
				</div>
			</div>

			<RecursosList initialJobs={initialJobs} error={error} query={query} />
		</div>
	);
};

export default Recursos;

Recursos.getInitialProps = async () => {
	try {
		// Jobs query
		const res = await fetch(`${API_URL}${query}`);
		let data = await res.json();
		const initialJobs = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }));

		console.log(initialJobs[0].Logo);

		return { initialJobs };
	} catch (error) {
		return { error };
	}
};
