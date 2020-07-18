import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import JobsList from '../../modules/JobsList';
import MailForm from '../../components/MailForm';
import { API_URL, getLocalDate } from '../../utils';

const CategoryList = (props) => {
	const { initialJobs, error, categoryName, query } = props;
	const categoryFinalName = categoryName !== 'none' ? `de ${categoryName}` : '';

	return (
		<div>
			<Head>
				<title>Trabajos remotos {categoryFinalName}</title>

				<meta property="og:title" content={`Trabajos remotos ${categoryFinalName}`} key="trabajos-title-og" />
				<meta name="twitter:title" content={`Trabajos remotos ${categoryFinalName}`} key="trabajos-title-twitter" />
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


CategoryList.getInitialProps = async ({ query }) => {
	const { category } = query;
	const thisQuery = `/jobs?category.slug=${category}&_sort=pinned:DESC,created_at:desc&_limit=40`;
	try {
		// Advertisement query
		const ad = await fetch(`${API_URL}/archives?_sort=active:DESC&_limit=1`);
		const ads = await ad.json();
		
		// Jobs query
		const res = await fetch(`${API_URL}${thisQuery}`);
		const jobs = await res.json();
		
		// add category name to the query
		const categoryName = jobs.length > 0 ? jobs[0].category.name : 'none';
		const initialJobs = jobs.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }));

		// Before returning the jobs, add the advertisement to the array of jobs
		try { if (ads.length !== 0 && ads[0].Active === true) initialJobs.splice(5, 0, ads[0]) } catch{ console.error('cannot load ads') };

		return { initialJobs, categoryName, query: thisQuery };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default CategoryList;