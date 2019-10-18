import { useState, useEffect } from 'react';
import { useSpring, animated, config  } from 'react-spring';
import Layout from '../components/Layout'
import Head from 'next/head';
import axios from 'axios';
import SimpleMDE from "react-simplemde-editor";
import Spinner from '../components/Spinner';

import { API_URL } from '../utils';


const Publicar = () => {
	const [values, setValues] = useState({});
	const [price, setPrice] = useState(2);
	const [submitting, setSubmitting] = useState(false);
	const [stripe, setStripe] = useState(undefined);
	const priceSpr = useSpring({ price, config: { ...config.stiff, clamp: true } });

	// ON FIRST LOAD, GET VALUES FROM LOCALSTORAGE
	useEffect(() => {
		const publishValues = localStorage.getItem('publishValues');
		if (publishValues) setValues(JSON.parse(publishValues));
		// if (!stripe) setStripe(window.Stripe('pk_test_ggi6CNK5xAQySQxoZfkFVJoZ00FxmHeKgq'));
		if (!stripe) setStripe(window.Stripe('process.env.STRIPE_PUBLISHABLE_KEY'));
	}, [])

	// ON VALUE CHANGE, SET PRICE COUNTER AND SAVE TO LOCALSTORAGE
	useEffect(() => {
		let thisPrice = 2;
		if (values.pinned) thisPrice += 8;
		if (values.featured) thisPrice += 8;
		if (values.showLogo) thisPrice += 8;
		setPrice(thisPrice);
		localStorage.setItem("publishValues", JSON.stringify(values));
	}, [values])

	// HANDLE SUBMIT
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!submitting) {
			setSubmitting(true);

			// Check if the logo URL is HTTPS secured
			if(values.logo.split('://')[0] === 'https'){
				try {
					const res = await axios.post(`${API_URL}/orders`, values);
					if (res.status !== 200) return window.alert('Ha ocurrido un error al intentar publicar este trabajo');
					const { session_id } = res.data;
					stripe.redirectToCheckout({ sessionId: session_id });
				} catch (error) {
					console.error(error)
					setSubmitting(false);
					window.alert('Ha ocurrido un error al intentar publicar este trabajo');
				}
			} else {
				console.error('Logo url must be HTTPS');
				setSubmitting(false);
				window.alert('La url del logo debe ser HTTPS');
			}
		}
	}

	// HANDLE VALUES CHANGES
	const handleChange = (e) => {
		const { target } = e;
		const newValues = { ...values };
		newValues[target.name] = target.value;
		if (target.type === 'checkbox') newValues[target.name] = target.checked;
		setValues(newValues);
	}



	return (
		<div>
			<Head>
				<title>Publicar - Trabajos remotos</title>
			</Head>
			<div className="block nuevo">
				<div className="container">
					<form className="publicar-anuncio" onSubmit={handleSubmit}>
						{/* Title */}
						<label>
							<p>Puesto de trabajo <span className="required"></span></p>
							<input 
								name="title"
								type="text"
								placeholder="Nombre del puesto de trabajo"
								onChange={handleChange}
								value={values.title || ''}
								required
							/>
						</label>
						{/* Description */}
						<label>
							<p>Descripción <span className="required"></span></p>	
							<SimpleMDE
								className="publication-editor"
								id="publication-editor"
								onChange={(description) => setValues({ ...values, description })}
								value={values.description || ''}
								options={{
									spellChecker: false
								}}
							/>	
						</label>
						{/* Email */}
						<label>
							<p>Correo electrónico <span className="required"></span></p>
							<input
								name="email"
								type="email"
								required
								onChange={handleChange}
								value={values.email || ''}
							/>
							<small>Es privado y solo se usará para enviarte avisos relacionados con tu anuncio.</small>
						</label>
						{/* Category */}
						<label className="small">
							<p>Categoría <span className="required"></span></p>
							<select
								name="category"
								required
								onChange={handleChange}
								value={values.category || ''}
							>
								<option value="" disabled>Elige una categoría</option>
								<option value="programación">Programación</option>
								<option value="diseno">Diseño</option>
								<option value="marketing">Marketing</option>
								<option value="atencion">Atención al cliente</option>
								<option value="otros">Otros</option>
							</select>
						</label>
						{/* Company name */}
						<label className="small">
							<p>Nombre de la empresa <span className="required"></span></p>
							<input
								name="company"
								type="text"
								required
								onChange={handleChange}
								value={values.company || ''}
							/>
						</label>
						{/* Apply link */}
						<label className="small">
							<p>Enlace para solicitar el trabajo <span className="required"></span></p>
							<input
								name="link"
								type="text"
								required
								onChange={handleChange}
								value={values.link || ''}
							/>
							<small>Puede ser una url o un correo</small>
						</label>
						{/* Company logo */}
						<label className="small">
							<p>Logo de la empresa</p>
							<input
								type="url"
								name="logo"
								onChange={handleChange}
								value={values.logo || ''}
							/>
							<small>Url con el logo de tu empresa (recomendamos usar .png con fondo transparente)</small>
						</label>
						{/* Pinned */}
						<label className="custom-checkbox-row">
							<input
								name="pinned"
								type="checkbox"
								onChange={handleChange}
								checked={values.pinned || false}
							/>
							<p>Ancla tu anuncio arriba del todo durante un mes <span>+8€</span></p>
						</label>
						{/* Featured */}
						<label className="custom-checkbox-row">
							<input
								name="featured"
								type="checkbox"
								onChange={handleChange}
								checked={values.featured || false}
							/>
							<p>Destaca en amarillo tu anuncio <span>+8€</span></p>
						</label>
						{/* Show Logo */}
						<label className="custom-checkbox-row">
							<input
								name="showLogo"
								type="checkbox"
								onChange={handleChange}
								checked={values.showLogo || false}
							/>
							<p>Muestra el logo de tu empresa en la página principal <span>+8€</span></p>
						</label>
						{/* Payment info */}
						<div className="boton-pagar">
							<p>A pagar: 
								<span>
									<animated.span>
										{priceSpr.price.interpolate(val => Math.floor(val))}
									</animated.span>€
								</span>
							</p>
							
							<button
								type="submit"
								className="main-button big"
								disabled={submitting}
							>
								Publicar anuncio
								{submitting ? <Spinner /> : null}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Publicar;