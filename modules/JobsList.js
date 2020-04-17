import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import LazyLoad from 'react-lazyload';

import { WEB_URL } from '../utils';
import addVisitedJob from '../utils/addVisitedJob';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs, setJobs] = useState(initialJobs || []);
	const [activeJob, setActiveJob] = useState(null);
	const [baseUrl, setBaseUrl] = useState(null);

	useEffect(() => {
		if (initialJobs !== jobs) setJobs(initialJobs);
		if (!baseUrl) setBaseUrl(document.location.pathname);
	}, [initialJobs])

	const scrollToTargetAdjusted = (id) => {
		// from -> https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
		const element = document.getElementById(id);
		const offset = 80;
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = element.getBoundingClientRect().top;
		const elementPosition = elementRect - bodyRect;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}

	const handleClick = async (jobId, url) => {
		if (activeJob === jobId) {
			await setActiveJob(null);
			history.pushState({
				id: 'homepage'
			}, document.title, `${WEB_URL}${baseUrl}`);
		} else {
			await setActiveJob(jobId);
			history.pushState({
				id: 'homepage'
			}, document.title, `${WEB_URL}${url}`);
			addVisitedJob(jobId)
		}
		scrollToTargetAdjusted(jobId);
	}

	let visitedJobs = null;
	if (typeof window !== 'undefined') {
		visitedJobs = JSON.parse(localStorage.getItem("visitedJobs"));
	}
	if (!visitedJobs) visitedJobs = [];

	return (
		<div className='container'>
			<div className='trabajos'>
				{jobs && jobs.length > 0
					? (
						jobs.map((job) => (
							<div 
								className={`trabajo ${job.featured ? 'featured' : ''}`}
								key={job.id}
								id={job.id}
							>
								{/* This href is just so google knows there's more things on the website, with the div alone google doesnt know how to get to that page, so it doesnt index it */}
								<a href={`https://trabajosremotos.es/${job.slug}`} style={{ display: 'none' }}>{job.title}</a>
								<div className="a">
									<div
										className={
											visitedJobs.includes(job.id)
												? 'visited' : null
										}
										onClick={() => handleClick(job.id, `/trabajo/${job.slug}`)}
									>
										{job.logo && job.showLogo
											? (
												<div className='img'>
													<LazyLoad once>
														<img src={job.logo} alt={'logo ' + job.company} />
													</LazyLoad>
												</div>
											)
											: ''}
										<div>
											<h2>{job.title} <span>{job.pinned ? '📌' : ''} {job.created_at}</span></h2>
											<p>{job.company}</p>
										</div>
									</div>
									{activeJob === job.id 
										? (
											<div className="description">
												<Markdown>{job.description ? job.description : ''}</Markdown>
												<div />
												<a target="_blank" rel="noopener" className="main-button" href={job.link.includes('@') ? `mailto:${job.link}` : job.link}>Solicitar trabajo</a>
											</div>
										)
										: null
									}
								</div>
							</div>
						))
					)
					: (
						<div className='empty-message'>No se han encontrado trabajos</div>
					)
				}
			</div>
		</div>
	)
}

export default JobsList;
