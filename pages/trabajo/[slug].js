import Layout from '../../components/Layout'
import Head from 'next/head';

function SingleJob(props) {
	const { job } = props;
	// Options to format the date from the database, taken from (https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date)
	const options = { year: 'numeric', month: 'short', day: 'numeric' };

	return (
		<Layout>
			<Head>
				<title>{`${job.title} en ${job.company} - Trabajos remotos`}</title>
			</Head>
			<div className="anuncio">
				<div className="container">
					<div class="content">
						<p class="date"> {new Date(job.createdAt).toLocaleDateString('es-ES', options)} </p>
						<h1 class="prata">{job.title}</h1>

						<div class="description">
							{/* <?php the_content(); ?> <!-- Page Content --> */}
						</div>
					</div>

					<div class="sidebar">
						{/* <!-- Logo if there's any -->
						<!-- company name -->
						<!-- button to apply -->
						<!-- view all jobs button --> */}
					</div>
				</div>
			</div>
		</Layout>
	)
}

SingleJob.getInitialProps = async ({ query }) => {
	const { slug } = query;
	const res = await fetch(`http://localhost:5000/trabajo/${slug}`);
	const job = await res.json();
	return { job };
};

export default SingleJob;