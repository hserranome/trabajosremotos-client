import Layout from '../components/Layout'
import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
	const { initialJobs } = props;

	return (
		<Layout>
			<div className="hero">
				<div className="container">
					<h1>Trabajos remotos</h1>
					<p className="prata">La plataforma para encontrar trabajos online de manera sencilla.</p>
				</div>
			</div>
			
			<div className="trabajos">
				<JobsList initialJobs={initialJobs} />
			</div>
		</Layout>
	)
};

Index.getInitialProps = async () => {
	const res = await fetch('http://localhost:5000/trabajos');
	const data = await res.json();
	return {
		initialJobs: data.jobs,
	};
};

export default Index;