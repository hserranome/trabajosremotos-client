import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import { API_URL, getLocalDate } from '../utils';


const Search = (props) => {
	const { initialJobs, error } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				<meta property="og:description" content="La plataforma para encontrar trabajos online de manera sencilla." />
				<meta name="twitter:description" content="La plataforma para encontrar trabajos online de manera sencilla." />
			</Head>

			<div className="hero">
				<div className="container">
					<h1>Trabajos remotos</h1>
					<p className="prata">La plataforma para encontrar trabajos online de manera sencilla.</p>
				</div>
			</div>

			<div className="trabajos">
				<JobsList initialJobs={initialJobs} error={error} />
			</div>
		</div>
	)
};

Search.getInitialProps = async ({ query }) => {
	try {
		const { filtro } = query;

		const res = await fetch(`${API_URL}/jobs?_contains=${filtro.replace(' ', '%20')}`);
		// const res = await fetch(`${API_URL}/jobs?_limit=2`);
		let data = await res.json();
		console.log(data);
		data = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))
		return { initialJobs: data };		
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default Search;