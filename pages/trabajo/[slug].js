import Head from 'next/head';
import Markdown from 'markdown-to-jsx';

import { API_URL } from '../../utils';


function SingleJob(props) {
	const { job } = props;
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	return (
		<div>
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
								<p className="date">{job.created_at}</p>
								<h1 className="prata">{job.title}</h1>

								<div className="description">
									{job.description
										?<Markdown>{job.description}</Markdown>
										: ''
									}
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
		</div>
	)
}

SingleJob.getInitialProps = async ({ query }) => {
	try {
		const { slug } = query;
		const res = await fetch(`${API_URL}/jobs?slug=${slug}`);
		const jobs = await res.json();
		const job = jobs[0];
		// comprobar que es un email y cambiar el valor xddd
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		job.link = job.link.includes('@') ? `mailto:${job.link}` : job.link;
		job.created_at = new Date(job.created_at).toLocaleDateString('es-ES', options);
		return { job };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default SingleJob;