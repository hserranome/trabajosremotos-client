import JobsList from '../../modules/JobsList';
import fetch from 'isomorphic-unfetch';

const getJobsByCategory = async (category) => {
	const res = await fetch(`http://localhost:5000/trabajos/category/${category}`);
	const data = await res.json();
	return data.jobs
}

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
		return { initialJobs: await getJobsByCategory(category) };
	} catch (error) {
		return { error }
	}
};

export default CategoryList;