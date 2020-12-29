import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import { API_URL, getLocalDate } from '../utils';
import PostsList from '../modules/PostsList';

const query = '/posts?_sort=created_at:desc&_limit=12';

const Blog = (props) => {
	const { initialJobs, error } = props;

	return (
		<div>
			<Head>
				<title>El blog de Trabajos remotos</title>

				<meta name="robots" content="all" />
				<meta property="description" content={`Blog de trabajosremotos.es, donde podrás encontrar información sobre el trabajo remoto, consejos, entrevistas y mucho mas.`} />
				<meta property="og:title" content={`Blog de teletrabajo, productividad y mucho mas`} key="trabajos-title-og" />
				<meta property="og:image" content="https://api.trabajosremotos.es/uploads/index_picture_209aae9a09.jpeg" key="trabajos-logo-og" />
				<meta property="og:description" content={`Blog de trabajosremotos.es, donde podrás encontrar información sobre el trabajo remoto, consejos, entrevistas y mucho mas.`} />
				<meta name="twitter:title" content={`Blog de teletrabajo, productividad y mucho mas`} key="trabajos-title-twitter" />
				<meta name="twitter:image" content="https://api.trabajosremotos.es/uploads/index_picture_209aae9a09.jpeg" key="trabajos-image-twitter" />
				<meta name="twitter:description" content={`Blog de trabajosremotos.es, donde podrás encontrar información sobre el trabajo remoto, consejos, entrevistas y mucho mas.`} />
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>
			
			<PostsList
				initialJobs={initialJobs}
				error={error}
				query={query}
			/>
		</div>
	)
};

export default Blog;

Blog.getInitialProps = async () => {
	try {
		// Jobs query
		const res = await fetch(`${API_URL}${query}`);
		let data = await res.json();
		const initialJobs = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }));

		return { initialJobs };
	} catch (error) {
		// console.log(error);
		return { error };
	}
};