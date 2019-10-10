import React, { useState, useEffect } from 'react';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs] = useState(initialJobs || []);
	
	return (
		<div className="container">
			<div className="trabajos">
				{jobs && jobs.length > 0
					? (
						jobs.map((job) => (
							<div className={`trabajo ${job.featured ? 'featured' : ''}`} key={job.id}>
								{job.logo ? <div className="img"><img src={job.logo} alt={'logo ' + job.company} /></div> : ''}
								<a href={`/trabajo/${job.slug}`}>
									<h2>{job.title} <span>{job.created_at}</span></h2>
									<p>{job.company}</p>
								</a>
							</div>
						))
					)
					: (
						<div className="empty-message">No se han encontrado trabajos</div>
					)
				}
			</div>
		</div>
	)
}

export default JobsList;
