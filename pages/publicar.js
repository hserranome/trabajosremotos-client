import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Head from "next/head";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import Spinner from "../components/Spinner";

import { API_URL } from "../utils";

const STRIPE_KEY = process.env.STRIPE_KEY || "pk_test_ggi6CNK5xAQySQxoZfkFVJoZ00FxmHeKgq";

const Publicar = () => {
	const [values, setValues] = useState({});
	const [price, setPrice] = useState(0);
	const [submitting, setSubmitting] = useState(false);
	const [stripe, setStripe] = useState(undefined);
	const priceSpr = useSpring({ price, config: { ...config.stiff, clamp: true } });

	// FIRST LOAD
	useEffect(() => {
		if (!stripe) {
			try {
				setStripe(window.Stripe(STRIPE_KEY));
			} catch (e) {}
		}
	}, []);

	// ON VALUE CHANGE, SET PRICE COUNTER
	useEffect(() => {
		let thisPrice = 39;
		if (values.pinned) thisPrice += 29;
		if (values.featured) thisPrice += 19;
		if (values.showLogo) thisPrice += 9;
		setPrice(thisPrice);
	}, [values]);

	// HANDLE SUBMIT
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!submitting) {
			setSubmitting(true);

			// Check if the logo URL exists and is HTTPS secured
			if (values.logo && values.logo.split("://")[0] !== "https") {
				window.alert("La url del logo debe ser HTTPS");
				return setSubmitting(false);
			}

			try {
				const res = await axios.post(`${API_URL}/orders`, values);
				if (res.status !== 200) return window.alert("Ha ocurrido un error al intentar publicar este trabajo");
				const { session_id } = res.data;
				if (session_id.startsWith("cs_")) {
					stripe.redirectToCheckout({ sessionId: session_id });
				} else {
					window.location.replace(`/confirmacion?session_id=${session_id}`);
				}
			} catch (error) {
				console.error(error);
				setSubmitting(false);
				window.alert("Ha ocurrido un error al intentar publicar este trabajo");
			}
		}
	};

	// HANDLE VALUES CHANGES
	const handleChange = (e) => {
		const { target } = e;
		const newValues = { ...values };
		newValues[target.name] = target.value;
		if (target.type === "checkbox") newValues[target.name] = target.checked;
		setValues(newValues);
	};

	return (
		<div>
			<Head>
				<title>Publicar nuevo trabajo - Trabajos remotos</title>

				<meta
					property="og:description"
					content="La plataforma para encontrar trabajos remotos online de manera sencilla."
				/>
				<meta
					name="twitter:description"
					content="La plataforma para encontrar trabajos remotos online de manera sencilla."
				/>
			</Head>
			<div className="container recursos-hero" style={{ marginTop: "6rem" }}>
				<div className="content">
					<Statistic />
				</div>
			</div>

			<div className="block nuevo" style={{ marginTop: 0 }}>
				<div className="container">
          <iframe src="https://tally.so/embed/nGoQjn?hideTitle=1&alignLeft=1&transparentBackground=1" width="100%" height="500" frameBorder="0" marginHeight="0" marginWidth="0" title="Nuevo empleo en Trabajos Remotos"></iframe>
				</div>
			</div>
		</div>
	);
};

export default Publicar;

const Statistic = () => {
	return (
		<div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-8 pb-8">
			<div className="grid gap-24 row-gap-8 lg:grid-cols-5">
				<div className="grid gap-8 lg:col-span-2">
					<div className="relative">
            <br />
						<h4 className="text-lg font-bold">Publica tu oferta en trabajosremotos.es</h4>
						<p className="text-gray-700">
							La oferta permanecerá activa durante 30 días. Después, la publicación seguirá visible, pero no se podrá
							postular a ella.
						</p>
					</div>
				</div>
				<div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
					<div className="flex flex-col justify-between p-10">
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Visitantes mensuales</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">~10.000</p>
						</div>
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Usuarios en Telegram</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">+1.100</p>
						</div>
					</div>
					<div className="flex flex-col justify-between p-10">
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Seguidores en LinkedIn</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">+1.600</p>
						</div>
						<div>
							<p className="text-lg font-semibold text-gray-800 sm:text-base">Newsletter</p>
							<p className="text-2xl font-bold accent-text sm:text-2xl">+500</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
