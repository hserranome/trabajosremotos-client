import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import LazyLoad from 'react-lazyload';

import { WEB_URL } from '../utils';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs, setJobs] = useState(initialJobs || []);

	useEffect(() => {
		if (initialJobs !== jobs) setJobs(initialJobs);
	}, [initialJobs])

	const handleClick = (event) => {
		event.preventDefault();
		
		const target = event.currentTarget;
		const actualTarget = event.target; // Actual target the user clicks, to check if we're clicking the apply button
		const url = target.dataset.link;
		const jobs = [...document.querySelectorAll('.trabajo')];

		if(actualTarget.classList.contains('main-button')) {
		} else {
			// Reset all active jobs
			for(let i = 0; i < jobs.length; i++) {
				if(jobs[i] !== target)
					jobs[i].classList.remove('active');
			}
	
			// Check if the clicked job is already active or not
			if(target.classList.contains('active')) {
				// If it is, remove active class and reset url
				target.classList.remove('active');
				history.pushState({
					id: 'homepage'
				}, document.title, `${WEB_URL}`);
			} else {
				// If it's not, add active class and change url
				target.classList.add('active');
				history.pushState({
					id: 'homepage'
				}, document.title, `${WEB_URL}${url}`);
			}
		}

	}

	return (
		<div className='container'>
			<div className='trabajos'>
				{jobs && jobs.length > 0
					? (
						jobs.map((job) => (
							<div data-link={`/trabajo/${job.slug}`} onClick={(event) => handleClick(event)} className={`trabajo ${job.featured ? 'featured' : ''}`} key={job.id}>
								{job.logo && job.showLogo
									? (
										<div className='img'>
											<LazyLoad once>
												<img src={job.logo} alt={'logo ' + job.company} />
											</LazyLoad>
										</div>
									)
									: ''}
								<div className="a">
									<div>
										<h2>{job.title} <span>{job.pinned ? '📌' : ''} {job.created_at}</span></h2>
										<p>{job.company}</p>
									</div>
									<div className="hidden">
										<Markdown className="hidden-content">{job.description ? job.description : ''}</Markdown>
										<div />
										<a target="_blank" rel="noopener" className="main-button" href={job.link}>Solicitar trabajo</a>
									</div>
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
