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
									{/* <?php the_content(); ?> <!-- Page Content --> */}
								</div>
							</div>

							<div className="sidebar">
								{/* <!-- Logo if there's any -->
								<!-- company name -->
								<!-- button to apply -->
								<!-- view all jobs button --> */}
							</div>
						</div>
						)
						: (
						<div className="container">
							<div className="content">
								<div className="empty-message">No se han encontrado este trabajo</div>
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
		return { job };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default SingleJob;