import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import { API_URL, getLocalDate } from '../utils';


const Index = (props) => {
	const { initialJobs, error } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>
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

Index.getInitialProps = async () => {
	try {
		const res = await fetch(`${API_URL}/jobs?_sort=pinned:DESC,created_at:desc`);
		let data = await res.json();
		data = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))
		return { initialJobs: data };
	} catch (error) {
		console.log(error)
		return { error }
	}
};

export default Index;