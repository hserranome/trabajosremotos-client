import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import { API_URL, getLocalDate } from '../utils';

const query = '/jobs?_sort=pinned:DESC,created_at:desc&_limit=40';


const Index = (props) => {
	const { initialJobs, error, advertisements } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				<meta property="og:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
				<meta name="twitter:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

			<div className="hero">
				<div className="container">
					<h1>Trabajos remotos</h1>
					<p className="prata">La plataforma para encontrar trabajos remotos online de manera sencilla.</p>
				</div>
			</div>

			<div className="trabajos">
				<JobsList
					initialJobs={initialJobs}
					error={error}
					query={query}
					advertisements={advertisements}
				/>
			</div>
		</div>
	)
};

Index.getInitialProps = async () => {
	try {
		const res = await fetch(`${API_URL}${query}`);
		let data = await res.json();
		data = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))

		const resAds = await fetch(`${API_URL}/advertisements?Active=true`);
		let advertisements = await resAds.json();

		// Get random index
		let randInd = Math.floor(Math.random() * advertisements.length);
		// Put ad into array
		data.splice(5, 0, advertisements[randInd]);
		// Remove element from ads
		advertisements.splice(randInd, 1);
		return { initialJobs: data, advertisements };
	} catch (error) {
		console.log(error)
		return { error }
	}
};

export default Index;