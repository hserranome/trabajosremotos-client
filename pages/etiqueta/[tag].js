import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from '../../components/ActiveLink';
import CategoryMenu from '../../components/CategoryMenu';
import SearchBar from '../../components/SearchBar';

import JobsList from '../../modules/JobsList';
import { API_URL, getLocalDate } from '../../utils';

const TagList = (props) => {
	const { initialJobs, error, tag, query } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos con la etiqueta {tag}</title>

				<meta name="robots" content="all" />
				<meta property="description" content={`Explora cientos de trabajos remotos con la etiqueta ${tag}`} />
				<meta property="og:title" content={`Trabajos remotos de ${tag}`} key="trabajos-title-og" />
				<meta property="og:image" content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg" key="trabajos-logo-og" />
				<meta property="og:description" content={`Explora cientos de trabajos remotos con la etiqueta ${tag}`} />
				<meta name="twitter:title" content={`Trabajos remotos de ${tag}`} key="trabajos-title-twitter" />
				<meta name="twitter:image" content="https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg" key="trabajos-image-twitter" />
				<meta name="twitter:description" content={`Explora cientos de trabajos remotos con la etiqueta ${tag}`} />
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />
			</Head>

			<div className="hero">
				<div className="container">
					<div className="desktop"><br /><br /><br /></div>
					<h1>Trabajos remotos de {tag}</h1>
					<p className="prata">La plataforma para encontrar trabajos remotos online de manera sencilla.</p>
				</div>
			</div>

			<SearchBar />

			<div className="trabajos nobottom">
				<CategoryMenu />

				<JobsList
					initialJobs={initialJobs}
					error={error}
					query={query}
				/>
			</div>
		</div>
	)
};


TagList.getInitialProps = async ({ query }) => {
	const { tag } = query;
	const thisQuery = `/jobs?_where[_or][0][tags.slug]=${tag}&_sort=pinned:DESC,created_at:desc&_limit=40`;

	try {
		// Advertisement query
		const ad = await fetch(`${API_URL}/archives?_sort=active:DESC&_limit=1`);
		const ads = await ad.json();

		// Jobs query
		const res = await fetch(`${API_URL}${thisQuery}`);
		const jobs = await res.json();

		// add tag name to the query so we can display it and use for seo
		const tags = jobs[0].tags
		const tagName = tags.filter(tmp => tmp.slug == tag) // this return the whole tag object

		const initialJobs = jobs.map((job) => ({ ...job, created_at_formatted: getLocalDate(job.created_at) }));

		// Before returning the jobs, add the advertisement to the array of jobs
		try { if (ads.length !== 0 && ads[0].Active === true) initialJobs.splice(5, 0, ads[0]) } catch { console.error('cannot load ads') };

		return { initialJobs, tag: tagName[0].name, query: thisQuery };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default TagList;