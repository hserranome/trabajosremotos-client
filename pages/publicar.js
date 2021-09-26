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

	// ON FIRST LOAD, GET VALUES FROM LOCALSTORAGE
	useEffect(() => {
		const publishValues = localStorage.getItem("publishValues");
		if (publishValues) setValues(JSON.parse(publishValues));
		if (!stripe) {
			if (window.Stripe && typeof window.Stripe == Function) {
				setStripe(window.Stripe(STRIPE_KEY));
			}
		}
	}, []);

	// ON VALUE CHANGE, SET PRICE COUNTER AND SAVE TO LOCALSTORAGE
	useEffect(() => {
		let thisPrice = 39;
		if (values.pinned) thisPrice += 29;
		if (values.featured) thisPrice += 19;
		if (values.showLogo) thisPrice += 9;
		setPrice(thisPrice);
		localStorage.setItem("publishValues", JSON.stringify(values));
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

			<br />
			<br />
			<br />

			<div className="block nuevo">
				<div className="container">
					<form className="publicar-anuncio" onSubmit={handleSubmit}>
						{/* Title */}
						<label>
							<p>
								Puesto de trabajo <span className="required"></span>
							</p>
							<input
								name="title"
								type="text"
								placeholder="Nombre del puesto de trabajo"
								onChange={handleChange}
								value={values.title || ""}
								required
							/>
						</label>
						{/* Description */}
						<label>
							<p>
								Descripción <span className="required"></span>
							</p>
							<SimpleMDE
								className="publication-editor"
								id="publication-editor"
								onChange={(description) => setValues({ ...values, description })}
								value={values.description || ""}
								options={{
									spellChecker: false,
								}}
							/>
						</label>
						{/* Tags */}
						<label className="small">
							<p>Etiquetas</p>
							<input
								name="tags"
								type="text"
								placeholder="React, PHP, Desarrollador"
								onChange={handleChange}
								value={values.tags || ""}
							/>
							<small>Máximo 8, separadas por comas</small>
						</label>
						{/* Category */}
						<label className="small">
							<p>
								Categoría <span className="required"></span>
							</p>
							<select name="category" required onChange={handleChange} value={values.category || ""}>
								<option value="" disabled>
									Elige una categoría
								</option>
								<option value="1">Programación</option>
								<option value="4">Diseño</option>
								<option value="2">Marketing</option>
								<option value="6">GameDev</option>
								<option value="3">Atención al cliente</option>
								<option value="5">Otros</option>
							</select>
						</label>
						{/* Company name */}
						<label className="small">
							<p>
								Nombre de la empresa <span className="required"></span>
							</p>
							<input name="company" type="text" required onChange={handleChange} value={values.company || ""} />
						</label>
						{/* Company logo */}
						<label className="small">
							<p>Logo de la empresa</p>
							<input type="url" name="logo" onChange={handleChange} value={values.logo || ""} />
							<small>Url con el logo de tu empresa (recomendamos usar .png con fondo transparente)</small>
						</label>
						{/* Email */}
						<label className="small">
							<p>
								Correo electrónico <span className="required"></span>
							</p>
							<input name="email" type="email" required onChange={handleChange} value={values.email || ""} />
							<small>Es privado y solo se usará para enviarte avisos relacionados con tu anuncio.</small>
						</label>
						{/* Apply link */}
						<label className="small">
							<p>
								Enlace para solicitar el trabajo <span className="required"></span>
							</p>
							<input name="link" type="text" required onChange={handleChange} value={values.link || ""} />
							<small>Puede ser una url o un correo</small>
						</label>
						{/* Show Logo */}
						<label className="custom-checkbox-row">
							<input name="showLogo" type="checkbox" onChange={handleChange} checked={values.showLogo || false} />
							<p>
								Muestra el logo de tu empresa en la página principal <span>+9€</span>
							</p>
						</label>
						{/* Featured */}
						<label className="custom-checkbox-row">
							<input name="featured" type="checkbox" onChange={handleChange} checked={values.featured || false} />
							<p>
								Destaca en amarillo tu anuncio <span>+19€</span>
							</p>
						</label>
						{/* Pinned */}
						<label className="custom-checkbox-row">
							<input name="pinned" type="checkbox" onChange={handleChange} checked={values.pinned || false} />
							<p>
								Ancla tu anuncio arriba del todo durante dos semanas <span>+29€</span>
							</p>
						</label>
						{/* Payment info */}
						<div className="boton-pagar">
							<p>
								A pagar:
								<span>
									<animated.span>{priceSpr.price.interpolate((val) => Math.floor(val))}</animated.span>€
								</span>
							</p>

							<button type="submit" className="main-button big umami--click--publicar-trabajo" disabled={submitting}>
								Publicar trabajo
								{submitting ? <Spinner /> : null}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Publicar;
