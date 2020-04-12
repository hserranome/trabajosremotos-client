import { useEffect } from 'react';
import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import LazyLoad from 'react-lazyload';

import { API_URL, getLocalDate } from '../../utils';
import Error from '../_error';
import addVisitedJob from '../../utils/addVisitedJob';


function SingleJob(props) {
	const { job } = props;
	if (!job) return <Error />

	useEffect(() => {
		if (job && job.id) {
			addVisitedJob(job.id);
		}
	}, []);

	const jobDescriptionSEO = `${job.description.substring(0, 50)}...`;
	const trabajosRemotosLogo = 'https://www.trabajosremotos.es/static/images/logo.png';
	
	return (
		<div>
			{job
				? (
					<Head>
						<title>{`${job.title} en ${job.company}`}</title>

						<meta name="robots" content="all" />
						<meta property="og:title" content={`${job.title} en ${job.company}`} key="trabajos-title-og" />
						<meta property="og:image" content={job.logo ? job.logo : trabajosRemotosLogo} key="trabajos-logo-og" />
						<meta property="og:description" content={jobDescriptionSEO} />
						<meta name="twitter:title" content={`${job.title} en ${job.company}`} key="trabajos-title-twitter" />
						<meta name="twitter:image" content={job.logo ? job.logo : trabajosRemotosLogo} key="trabajos-image-twitter" />
						<meta name="twitter:description" content={jobDescriptionSEO} />
						<meta name="robots" content="index,follow" />
						<meta name="googlebot" content="index,follow" />

						{/* Schema to show jobs on google searches */}
						<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: `
							{ 
								"@context" : "https://schema.org/",
								"@type" : "JobPosting",
								"title" : "${job.title}",
								"jobLocationType": "TELECOMMUTE",
								"description" : "${job.jobDescriptionSEO}",
								"datePosted" : "${job.schemaDatePosted}",
								"validThrough" : "${job.schemaValidThrough}",
								"employmentType" : "FULL_TIME",
								"hiringOrganization":{
									"@type" : "Organization",
									"name" : "${job.company}",
									"logo" : "${job.logo ? job.logo : null}"
								}
							}
						` }} />
					</Head>
				)
				: (
					<Head>
						<title>{`404 - Trabajos remotos`}</title>

						<meta name="googlebot" content="noindex" />
					</Head>
				)
			}
		
			<div className="anuncio">
					{job 
						? (
						<div className="container">
							<div className="content">
								<p className="date">{job.created_at}</p>
								<h1>{job.title}</h1>

								<div className="description">
									{job.description
										?<Markdown>{job.description}</Markdown>
										: ''
									}
									<a target="_blank" rel="noopener" className="main-button" href={job.link}>Solicitar trabajo</a>
								</div>
							</div>

							<div className="sidebar">
								{job.logo ? (
									<div className="img">
										<LazyLoad once>
											<img
												src={job.logo}
												alt={'logo ' + job.company}
											/>
										</LazyLoad>
									</div>
								) : ''}
								<h2>{job.company}</h2>
								<a target="_blank" rel="noopener" className="main-button" href={job.link}>Solicitar trabajo</a>
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
		if (!jobs || jobs.length === 0) {
			return { job: null };
		}

		const job = jobs[0];
		job.link = job.link.includes('@') ? `mailto:${job.link}` : `${job.link}?ref=trabajosremotos`;
		
		// Dates to show schema.org job listing
		job.schemaDatePosted = job.created_at;
		const dateValidThrough = new Date(job.created_at).setDate(new Date().getDate() + 30);
		job.schemaValidThrough = new Date(dateValidThrough).toUTCString();
		job.created_at = getLocalDate(job.created_at);

		return { job };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default SingleJob;