import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import JobsList from '../../modules/JobsList';
import { API_URL, getLocalDate } from '../../utils';

const CategoryList = (props) => {
	const { initialJobs, error, categoryName, query, advertisements } = props;
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


CategoryList.getInitialProps = async ({ query }) => {
	const { category } = query;
	const thisQuery = `/jobs?category.slug=${category}&_sort=pinned:DESC,created_at:desc&_limit=40`;
	try {
		const res = await fetch(`${API_URL}${thisQuery}`);
		const jobs = await res.json();
		const categoryName = jobs.length > 0 ? jobs[0].category.name : 'none';
		let initialJobs = jobs.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))

		return { initialJobs, categoryName, query: thisQuery };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default CategoryList;