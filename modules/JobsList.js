import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import LazyLoad from 'react-lazyload';

import { WEB_URL } from '../utils';
import { createDeflateRaw } from 'zlib';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs, setJobs] = useState(initialJobs || []);
	const [activeJob, setActiveJob] = useState(null);

	useEffect(() => {
		if (initialJobs !== jobs) setJobs(initialJobs);
	}, [initialJobs])

	const handleClick = (jobID, url) => {
		if (activeJob === jobID) {
			setActiveJob(null);
			history.pushState({
				id: 'homepage'
			}, document.title, `${WEB_URL}`);
		} else {
			setActiveJob(jobID);
			history.pushState({
				id: 'homepage'
			}, document.title, `${WEB_URL}${url}`);
		}
	}

	return (
		<div className='container'>
			<div className='trabajos'>
				{jobs && jobs.length > 0
					? (
						jobs.map((job) => (
							<div 
								className={`trabajo ${job.featured ? 'featured' : ''}`}
								key={job.id}
							>
								<div className="a">
									<div onClick={() => handleClick(job.id, `/trabajo/${job.slug}`)}>
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
											<div>
												<Markdown className="hidden-content">{job.description ? job.description : ''}</Markdown>
												<div />
												<a target="_blank" rel="noopener" className="main-button" href={job.link}>Solicitar trabajo</a>
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
