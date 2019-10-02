import React, { useState, useEffect } from 'react';

function JobsList (props) {
	const { initialJobs } = props;
	const [jobs, setJobs] = useState(0);
	
	useEffect(() => {
		if (initialJobs) setJobs(initialJobs);
	}, [initialJobs]);

	return (
		<div>
			{JSON.stringify(jobs)}
		</div>
	)
}

export default JobsList;