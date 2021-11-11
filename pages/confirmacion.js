import { useEffect } from "react";
import Router, { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

import { API_URL } from "../utils";

const Confirmation = (props) => {
	const { result, query } = props;

	return (
		<div>
			<Head>
				<title>Confirmación - Trabajos remotos</title>

				<meta
					property="og:description"
					content="La plataforma para encontrar trabajos remotos online de manera sencilla."
				/>
				<meta
					name="twitter:description"
					content="La plataforma para encontrar trabajos remotos online de manera sencilla."
				/>
			</Head>

			<div className="anuncio">
				<div className="container">
					<div className="content fullwidth">
						<h4>🎉 ¡Gracias por confiar en Trabajos Remotos para buscar tu próximo empleado!</h4>
						<p>
							Las nuevas ofertas de trabajo pueden tardar en aparecer en la web como maxímo 12 horas. Para cualquier cambio que quieras realizar puedes enviarnos un correo a <a href="mailto:contacto@trabajosremotos.es">contacto@trabajosremotos.es</a>.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Confirmation.getInitialProps = ({ query }) => {
	return { query };
};

export default withRouter(Confirmation);
