import { useEffect } from 'react';
import { withRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head'

import Layout from '../components/Layout';

const Confirmation = (props) => {
	const { result, query } = props;

	const checkJob = async () => {
		const { session_id } = query;
		const res = await axios.get(`http://localhost:1337/orders?session_id=${session_id}`);
		if(res.data && res.data[0].job) {

		}
	}

	// CHECK IF JOB EXISTS
	useEffect(() => {
		checkJob();
	}, []);

	return (
		<Layout>
			<Head>			
				<title>Confirmación - Trabajos remotos</title>
			</Head>
			<div>
				<p>Resultado</p>
			</div>
		</Layout>
	)
};

Confirmation.getInitialProps = ({ query }) => {
	return { query }
}

export default withRouter(Confirmation);