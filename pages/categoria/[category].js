import fetch from 'isomorphic-unfetch';

import JobsList from '../../modules/JobsList';
import { API_URL, getLocalDate } from '../../utils';

const CategoryList = (props) => {
	const { initialJobs, error } = props;

	return (
		<div>
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


CategoryList.getInitialProps = async ({ query }) => {
	const { category } = query;
	try {
		const res = await fetch(`${API_URL}/jobs?category.slug=${category}&_sort=pinned:DESC,created_at:desc`);
		const jobs = await res.json();
		const initialJobs = jobs.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))
		return { initialJobs };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default CategoryList;