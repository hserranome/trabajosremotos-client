import React, { useState, useEffect } from 'react';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs, setJobs] = useState(initialJobs || []);

	return (
		<div className="container">
			<div className="trabajos">
				{jobs.map((job) => (
					<div>
						<a href={`/trabajo/${job.slug}`}>
							<h3>{job.title}</h3>
							<h4>{job.company}</h4>
						</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default JobsList;