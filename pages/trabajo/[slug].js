import { useEffect } from 'react';
import Head from 'next/head';
import Markdown from 'markdown-to-jsx';
import LazyLoad from 'react-lazyload';
import MailForm from '../../components/MailForm';
import ReactGA from "react-ga";

import { API_URL, getLocalDate } from '../../utils';
import Error from '../_error';
import addVisitedJob from '../../utils/addVisitedJob';


function SingleJob(props) {
	const { job, isJobValid } = props;
	if (!job) return <Error />

	useEffect(() => {
		if (job && job.id) {
			addVisitedJob(job.id);
		}
	}, []);

	const jobDescriptionSEO = `${job.description.substring(0, 100)}...`;
	const trabajosRemotosLogo = 'https://api.trabajosremotos.es/uploads/Frame_2_7b94d3392d.jpeg';

	return (
		<div>
			{job
				? (
					<Head>
						<title>{`${job.title} en ${job.company}`}</title>

						<meta name="robots" content="all" />
						<meta property="description" content={`${jobDescriptionSEO} - Teletrabajo`} />
						<meta property="og:title" content={`${job.title} en ${job.company} | Trabajos remotos`} key="trabajos-title-og" />
						<meta property="og:image" content={job.logo ? job.logo : trabajosRemotosLogo} key="trabajos-logo-og" />
						<meta property="og:description" content={`${jobDescriptionSEO} - Teletrabajo`} />
						<meta name="twitter:title" content={`${job.title} en ${job.company} | Trabajos remotos`} key="trabajos-title-twitter" />
						<meta name="twitter:image" content={job.logo ? job.logo : trabajosRemotosLogo} key="trabajos-image-twitter" />
						<meta name="twitter:description" content={`${jobDescriptionSEO} - Teletrabajo`} />
						<meta name="robots" content="index,follow" />
						<meta name="googlebot" content="index,follow" />

						{/* Schema to show jobs on google searches */}
						<script type='application/ld+json' dangerouslySetInnerHTML={{
							__html: `
							{ 
								"@context" : "https://schema.org/",
								"@type" : "JobPosting",
								"title" : "${job.title}",
								"jobLocationType": "TELECOMMUTE",
								"description" : "${jobDescriptionSEO}",
								"datePosted" : "${job.schemaDatePosted}",
								"validThrough" : "${job.schemaValidThrough}",
								"employmentType" : "FULL_TIME",
								"identifier": {
									"@type": "PropertyValue",
									"name": "${job.company}",
									"value": "${job.slug}"
								},
								"applicantLocationRequirements": {
									"@type": "Country",
									"name": "Remote 📍"
								},
								"hiringOrganization":{
									"@type" : "Organization",
									"name" : "${job.company}",
									"logo" : "${job.logo ? job.logo : undefined}"
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

			<div className="anuncio blog">
				{job
					? (
						<div>
							<div className="container small">
								<div className="content fullwidth">
									<h1>{job.title}</h1>
									<p className="company-single">
										{job.company}
										<span>{job.created_at_formatted}</span>
									</p>

									<div className="description">
										{job.description
											? <Markdown>{job.description}</Markdown>
											: ''
										}
										{
											isJobValid ? (
												<a
													target="_blank" rel="noopener"
													className="main-button solicitar umami--click--solicitar-trabajo"
													href={job.link}
												>
													Solicitar trabajo
												</a>
											) : (
													<span className="main-button solicitar disabled">
														Trabajo caducado
													</span>
												)
										}
									</div>
								</div>
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
		let emailTemplate = `?body=%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%20-%20El%20Equipo%20de%20Trabajos%20Remotos%20%0A%20trabajosremotos.es`
		job.link = job.link.includes('@') ? `mailto:${job.link}${emailTemplate}` : `${job.link}?ref=trabajosremotos`;

		// Dates to show schema.org job listing
		job.schemaDatePosted = job.created_at;
		const dateValidThrough = new Date(job.created_at).setDate(new Date().getDate() + 30);
		job.dateValidThrough = dateValidThrough
		job.schemaValidThrough = new Date(dateValidThrough).toUTCString();
		job.created_at_formatted = getLocalDate(job.created_at);

		const actualDate = new Date();
		const isJobValid = job.dateValidThrough >= actualDate

		return { job, isJobValid };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default SingleJob;
