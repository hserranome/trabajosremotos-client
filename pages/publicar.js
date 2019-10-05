import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Head from 'next/head';

const Publicar = () => {
	const [values, setValues] = useState({});
	const [price, setPrice] = useState(2);

	useEffect(() => {
		const publishValues = localStorage.getItem('publishValues');
		if (publishValues) setValues(JSON.parse(publishValues));
	}, [])

	useEffect(() => {
		let thisPrice = 2;
		if (values.pinned) thisPrice += 8;
		if (values.featured) thisPrice += 8;
		if (values.showLogo) thisPrice += 8;
		setPrice(thisPrice);
		localStorage.setItem("publishValues", JSON.stringify(values));
	}, [values])

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("publishValues", "");
	}

	const handleChange = (e) => {
		const { target } = e;
		const newValues = { ...values };
		newValues[target.name] = target.value;
		if (target.type === 'checkbox') newValues[target.name] = target.checked;
		setValues(newValues);
	}

	return (
		<Layout>
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
								value={values.title}
								required
							/>
						</label>
						{/* Description */}
						<label>
							<p>Descripción <span className="required"></span></p>	
						</label>
						<label>
							<p>Correo electrónico <span className="required"></span></p>
							<input
								name="email"
								type="email"
								required
								onChange={handleChange}
								value={values.email}
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
								value={values.category}
								defaultValue=""
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
								value={values.company}
							/>
						</label>
						{/* Apply link */}
						<label className="small">
							<p>Enlace para solicitar el trabajo <span className="required"></span></p>
							<input
								name="link"
								type="url"
								required
								onChange={handleChange}
								value={values.link}
							/>
							<small>Debe ser una url o un correo</small>
						</label>
						{/* Company logo */}
						<label className="small">
							<p>Logo de la empresa</p>
							<input
								type="url"
								name="logo"
								onChange={handleChange}
								value={values.logo}
							/>
							<small>Url con el logo de tu empresa (recomendamos usar .png con fondo transparente)</small>
						</label>
						{/* Pinned */}
						<label className="custom-checkbox-row">
							<input
								name="pinned"
								type="checkbox"
								onChange={handleChange}
								checked={values.pinned}
							/>
							<p>Ancla tu anuncio arriba del todo durante un mes <span>+8€</span></p>
						</label>
						{/* Featured */}
						<label className="custom-checkbox-row">
							<input
								name="featured"
								type="checkbox"
								onChange={handleChange}
								checked={values.featured}
							/>
							<p>Destaca en amarillo tu anuncio <span>+8€</span></p>
						</label>
						{/* Show Logo */}
						<label className="custom-checkbox-row">
							<input
								name="showLogo"
								type="checkbox"
								onChange={handleChange}
								checked={values.showLogo}
							/>
							<p>Muestra el logo de tu empresa <span>+8€</span></p>
						</label>

						<div className="boton-pagar">
							<p>A pagar: <span>{price}€</span></p>
							
							<button type="submit" className="submit">Publicar</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Publicar;