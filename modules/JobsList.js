import React, {useState, useEffect} from 'react';

function JobsList (props) {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		// Llamada a la api
		// la respuesta va en setJobs(res.data) xddd
	}, []);

	return (<div>xd</div>)
}
export default JobsList;