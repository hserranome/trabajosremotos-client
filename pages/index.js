import JobsList from '../modules/JobsList';
import MailForm from '../components/MailForm';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import { API_URL, getLocalDate } from '../utils';

const query = '/jobs?_sort=pinned:DESC,created_at:desc&_limit=40';


const Index = (props) => {
	const { initialJobs, error } = props;

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
				<MailForm />
				
				<JobsList
					initialJobs={initialJobs}
					error={error}
					query={query}
				/>
			</div>
		</div>
	)
};

Index.getInitialProps = async () => {
	try {
		// Advertisement query
		const ad = await fetch(`${API_URL}/archives?_sort=active:DESC&_limit=1`);
		const ads = await ad.json();

		console.log(ads[0].Active);

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