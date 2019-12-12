const addVisitedJob = (jobId) => {
	let visitedJobs = JSON.parse(localStorage.getItem("visitedJobs"));
	if (!visitedJobs) visitedJobs = [];
	if (jobId && !visitedJobs.includes(jobId)) visitedJobs.push(jobId);
	localStorage.setItem("visitedJobs", JSON.stringify(visitedJobs));
}
export default addVisitedJob;