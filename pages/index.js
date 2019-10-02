import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';

import '../utils/style.css';

// La de trabajo single
// La de formulario que lleva al pago

const Index = (props) => {
	const { initialJobs } = props;

	return (
		<div className="container">
			<div className="hero">
				<h1>Trabajos remotos</h1>
				<p className="prata">La plataforma para encontrar trabajos online de manera sencilla.</p>
			</div>
			<JobsList initialJobs={initialJobs} />
		</div>
	)
};

Index.getInitialProps = async function () {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();
	return {
		initialJobs: data.map(entry => entry.show)
	};
};

export default Index;