import { useEffect } from 'react';
import Router, { withRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head'

import { API_URL } from '../utils';

const Confirmation = (props) => {
	const { result, query } = props;

	const checkJob = async () => {
		const { session_id } = query;
		const res = await axios.get(`${API_URL}/orders?session_id=${session_id}`);
		// if (!res.data || !res.data[0] || !res.data[0].job) {
		// 	Router.push('/')
		// 	return false;
		// }
		return true;
	}

	// CHECK IF JOB EXISTS
	useEffect(() => {
		const thisFunction = async () => {
			const result = await checkJob();
			if (result) localStorage.clear();
		}
		thisFunction();
	}, []);

	return (
		<div>
			<Head>			
				<title>Confirmación - Trabajos remotos</title>

				<meta property="og:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
				<meta name="twitter:description" content="La plataforma para encontrar trabajos remotos online de manera sencilla." />
			</Head>
			
			<div className="anuncio">
				<div className="container">
					<div className="content fullwidth">
						<h4>🎉 ¡Gracias por confiar en Trabajos Remotos para buscar tu próximo empleado!</h4>
						<p>
							Las nuevas ofertas de trabajo pueden tardar en aparecer en la web unos 
							minutos. Para cualquier cambio que quieras realizar puedes enviarnos
							un correo a <a href="mailto:contacto@trabajosremotos.es">contacto@trabajosremotos.es</a>.
						</p>
						<p>
							Las ofertas de trabajo que se publican de manera gratuita no aparecerán en la 
							web hasta que sean aprobadas manualmente para evitar spam. En caso de que tengas
							dudas por que tu trabajo no ha sido aprobado, puedes mandarnos 
							un correo a <a href="mailto:contacto@trabajosremotos.es">contacto@trabajosremotos.es</a>.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

Confirmation.getInitialProps = ({ query }) => {
	return { query }
}

export default withRouter(Confirmation);