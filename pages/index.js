import Layout from '../components/Layout'
import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';

import '../utils/style.css';

// La de trabajo single
// La de formulario que lleva al pago

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
				<p>Aqui van los trabajos xdddd</p>
				{/* <JobsList initialJobs={initialJobs} /> */}
			</div>
		</Layout>
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