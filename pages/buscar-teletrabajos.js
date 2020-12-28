import JobsList from '../modules/JobsList';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';

import { API_URL, getLocalDate } from '../utils';

// HJ buen lead dev bro, temtem up
const Search = (props) => {
	const { initialJobs, error, query } = props;

	return (
		<div>
			<Head>
				<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>

				<meta property="og:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
				<meta name="twitter:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
			</Head>

      <div className="hero">
        <div className="container">
          <div className="desktop"><br /><br /><br /></div>
          <h1>Trabajos remotos</h1>
          <p className="prata">La plataforma para encontrar trabajos remotos online de manera sencilla.</p>
        </div>
      </div>

      <SearchBar />

			<div className="trabajos">
				<JobsList
					initialJobs={initialJobs}
					error={error}
					query={query}
				/>
			</div>
		</div>
	)
};

Search.getInitialProps = async ({ query }) => {
	try {
		const { filtro } = query;
		const thisQuery = `/jobs?title_contains=${filtro.replace(' ', '%20')}&_limit=40`;

		const res = await fetch(`${API_URL}${thisQuery}`);
		let data = await res.json();
		const initialJobs = data.map((job) => ({ ...job, created_at: getLocalDate(job.created_at) }))

		return { initialJobs, query: thisQuery };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default Search;