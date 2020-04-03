import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import JobsList from '../../modules/JobsList';
import { API_URL, getLocalDate } from '../../utils';

const CategoryList = (props) => {
	const { initialJobs, error, categoryName } = props;
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
				<JobsList initialJobs={initialJobs} error={error} />
			</div>
		</div>
	)
};


CategoryList.getInitialProps = async ({ query }) => {
	const { category } = query;
	try {
		const res = await fetch(`${API_URL}/jobs?category.slug=${category}&_sort=pinned:DESC,created_at:desc`);
		const jobs = await res.json();
		const categoryName = jobs.length > 0 ? jobs[0].category.name : 'none';
		const initialJobs = jobs.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))
		return { initialJobs, categoryName };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default CategoryList;