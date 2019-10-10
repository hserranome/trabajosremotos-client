import Layout from '../components/Layout'
import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
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

Index.getInitialProps = async () => {
	try {
		const res = await fetch('http://localhost:1337/jobs');
		let data = await res.json();
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		data = data.map((job) => ({ ...job, created_at: new Date(job.created_at).toLocaleDateString('es-ES', options) }))
		return { initialJobs: data };
	} catch (error) {
		console.log(error)
		return { error }
	}
};

export default Index;