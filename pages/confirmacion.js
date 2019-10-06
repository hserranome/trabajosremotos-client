import axios from 'axios';
import Head from 'next/head'

import Layout from '../components/Layout';


const Confirmation = (props) => {
	const { result } = props;
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

Confirmation.getInitialProps = async ({ query }) => {
	// try {
	// 	const { session_id } = query;
	// 	const res = await axios.post('http://localhost:1337/jobs', { session_id });
	// 	const { data } = res;
	// 	return { result: data };
	// } catch (error) {
	// 	console.log(error)
	// 	return { error }
	// }
};

export default Confirmation;