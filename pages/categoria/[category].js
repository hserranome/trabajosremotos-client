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
		const initialJobs = jobs.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))

		const resAds = await fetch(`${API_URL}/advertisements?Active=true`);
		let advertisements = await resAds.json();
		// Get random index
		let randInd = Math.floor(Math.random() * advertisements.length);
		// Put ad into array
		initialJobs.splice(5, 0, advertisements[randInd]);
		// Remove element from ads
		advertisements.splice(randInd, 1);

		return { initialJobs, categoryName, query: thisQuery, advertisements };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default CategoryList;