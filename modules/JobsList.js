import React, { useState, useEffect } from 'react';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs, setJobs] = useState(initialJobs || []);
	// Options to format the date from the database, taken from (https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date)
	const options = { year: 'numeric', month: 'short', day: 'numeric' };

	return (
		<div className="container">
			<div className="trabajos">
				{jobs && jobs.length > 0
					? (
						jobs.map((job) => (
							<div className="trabajo" key={job.id}>
								<a href={`/trabajo/${job.slug}`}>
									<h2>{job.title} <span>{new Date(job.created_at).toLocaleDateString('es-ES', options)}</span></h2>
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
