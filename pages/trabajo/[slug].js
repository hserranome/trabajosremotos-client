import Layout from '../../components/Layout'
import Head from 'next/head';

function SingleJob(props) {
	const { job } = props;
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return (
		<Layout>
			<Head>
				{job
					? (<title>{`${job.title} en ${job.company} - Trabajos remotos`}</title>)
					: (<title>{`404 - Trabajos remotos`}</title>)
				}
			</Head>
			<div className="anuncio">
					{job 
						? (
						<div className="container">
							<div className="content">
								<p className="date"> {new Date(job.created_at).toLocaleDateString('es-ES', options)} </p>
								<h1 className="prata">{job.title}</h1>

								<div className="description">
									{/* No tiene que ir en un parrafo porque puede tener listas, cabeceras, etc */}
									{job.description}

									<a target="_blank" className="main-button" href={job.link}>Solicitar trabajo</a>
								</div>
							</div>

							<div className="sidebar">
								{job.logo ? <div className="img"><img src={job.logo} alt={'logo ' + job.company} /></div> : ''}
								<h2>{job.company}</h2>
								<a target="_blank" className="main-button" href={job.link}>Solicitar trabajo</a>
							</div>
						</div>
						)
						: (
						<div className="container">
							<div className="content">
								<div className="empty-message">No se ha encontrado este trabajo</div>
							</div>
						</div>
						)
					}

			</div>
		</Layout>
	)
}

SingleJob.getInitialProps = async ({ query }) => {
	try {
		const { slug } = query;
		const res = await fetch(`http://localhost:1337/jobs?slug=${slug}`);
		const jobs = await res.json();
		const job = jobs[0];
		// comprobar que es un email y cambiar el valor xddd
		job.link = job.link.includes('@') ? `mailto:${job.link}` : job.link;
		return { job };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default SingleJob;