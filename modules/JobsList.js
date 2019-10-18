import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs, setJobs] = useState(initialJobs || []);

	useEffect(() => {
		if (initialJobs !== jobs) setJobs(initialJobs);
	}, [initialJobs])
	
	return (
		<div className='container'>
			<div className='trabajos'>
				{jobs && jobs.length > 0
					? (
						jobs.map((job) => (
							<div className={`trabajo ${job.featured ? 'featured' : ''}`} key={job.id}>
								{job.logo ? <div className='img'><img src={job.logo} alt={'logo ' + job.company} /></div> : ''}
								<Link 
									href='/trabajo/[slug]'
									as={`/trabajo/${job.slug}`}
								>
									<a>
										<h2>{job.title} <span>{job.pinned ? '📌' : ''} {job.created_at}</span></h2>
										<p>{job.company}</p>
									</a>
								</Link>
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
