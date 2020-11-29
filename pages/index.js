import JobsList from '../modules/JobsList';
import MailForm from '../components/MailForm';
import CategoryMenu from '../components/CategoryMenu';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from '../components/ActiveLink';
import heroImg from '../static/images/hero.jpg';

import { API_URL, getLocalDate } from '../utils';

const query = '/jobs?_sort=pinned:DESC,created_at:desc&_limit=40';

const Index = (props) => {
	const { initialJobs, error } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				<meta name="robots" content="all" />
				<meta property="description" content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`} />
				<meta property="og:title" content={`Tu tablón de empleo remoto exclusivamente en español`} key="trabajos-title-og" />
				<meta property="og:image" content="https://api.trabajosremotos.es/uploads/index_picture_209aae9a09.jpeg" key="trabajos-logo-og" />
				<meta property="og:description" content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`} />
				<meta name="twitter:title" content={`Tu tablón de empleo remoto exclusivamente en español`} key="trabajos-title-twitter" />
				<meta name="twitter:image" content="https://api.trabajosremotos.es/uploads/index_picture_209aae9a09.jpeg" key="trabajos-image-twitter" />
				<meta name="twitter:description" content={`La plataforma para encontrar trabajos remotos online de manera sencilla. ¿A qué esperas para encontrar el teletrabajo de tus sueños?`} />
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

			<div className="hero" style={{ backgroundImage: "url(" + `${heroImg}` + ")" }}>
				<div className="container">
					<h1>Trabajos remotos</h1>
					<p className="prata">La plataforma para encontrar trabajos remotos online de manera sencilla.</p>
				</div>
			</div>

			<div className="trabajos nobottom">
        <CategoryMenu />
        
				<MailForm />
				
				<JobsList
					initialJobs={initialJobs}
					error={error}
					query={query}
				/>
			</div>

			<div className="extra">
				<div className="container" style={{ marginTop: '0' }}>
					<div>
						<h3>Misión de Trabajos Remotos</h3>

						<p>Trabajos remotos nace en 2019 para ayudar a todas aquellas personas que quieren dar el paso al teletrabajo y no saben por donde empezar, publicando ofertas de trabajos remotos de manera frecuente y dando información en nuestro <Link href="/blog"><a>blog</a></Link>.</p>

						<h3>Situación actual del teletrabajo</h3>

						<p>Cada vez más empresas están buscando perfiles remotos para sus nuevas contrataciones, no sólo por la situación actual si no por los <Link href="/blog/que-es-el-teletrabajo-o-trabajo-en-remoto"><a>beneficios</a></Link> que el teletrabajo tiene.</p>

						<p>La demanda de teletrabajo ha ido creciendo con los años y estamos en un punto en el cual es cada vez más normal pedir el trabajo en remoto como beneficio en un nuevo puesto de trabajo.</p>

						<h3>¿Eres una empresa buscando perfiles remotos?</h3>

						<p>Si eres una empresa remote friendly o que está pensando dar el paso al teletrabajo para tus nuevas contrataciones, sigue leyendo.</p>

						<p>Además de los lectores de nuestra página web, al publicar una oferta la enviamos por Telegram, Twitter y cada martes en nuestra newsletter, dando así más difusión a tu trabajo y atrayendo un mayor número de interesados.</p>
					</div>
				</div>
			</div>
		</div>
	)
};

Index.getInitialProps = async () => {
	try {
		// Advertisement query
		const ad = await fetch(`${API_URL}/archives?_sort=active:DESC&_limit=1`);
		const ads = await ad.json();

		// Jobs query
		const res = await fetch(`${API_URL}${query}`);
		let data = await res.json();
		const initialJobs = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }));

		// Before returning the jobs, add the advertisement to the array of jobs
		try { if (ads.length !== 0 && ads[0].Active === true) initialJobs.splice(5, 0, ads[0]) } catch{ console.error('cannot load ads') };

		return { initialJobs };
	} catch (error) {
		// console.log(error);
		return { error };
	}
};

export default Index;