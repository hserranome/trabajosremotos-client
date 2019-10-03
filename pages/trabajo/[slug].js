
function SingleJob(props) {
	const { job } = props;
	return (
		<div>
			<h1>{job.title}</h1>
			<h2>{job.company}</h2>
		</div>
	)
}

SingleJob.getInitialProps = async ({ query }) => {
	const { slug } = query;
	const res = await fetch(`http://localhost:5000/trabajo/${slug}`);
	const job = await res.json();
	return { job };
};

export default SingleJob;