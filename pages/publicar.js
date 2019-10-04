import { useState } from 'react';
import Layout from '../components/Layout'
import { createForm } from 'rc-form';

const Publicar = () => {
	const [values, setValues] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	}

	const handleChange = (e) => {
		const { target } = e;
		const newValues = values;
		newValues[target.name] = target.value;
		setValues(newValues);
	}

	return (
		<Layout>
			<div className="block nuevo">
				<div className="container">
					<form className="publicar-anuncio" onSubmit={handleSubmit}>
						{/* Title */}
						<label>
							<p>Puesto de trabajo <span className="required"></span></p>
							<input 
								name="title"
								placeholder="Nombre del puesto de trabajo"
								required
								onChange={handleChange}
								value={values.title}
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
						<label>
							<input
								name="pinned"
								type="checkbox"
								onChange={handleChange}
								value={values.pinned}
							/>
							<span>Ancla tu anuncio arribita del todo durante un mes (+1.5k€)</span>
						</label>
						{/* Featured */}
						<label>
							<input
								name="featured"
								type="checkbox"
								onChange={handleChange}
								value={values.featured}
							/>
							<span>Destaca en amarillo tu anuncio (+1.5k€)</span>
						</label>
						<button type="submit" className="submit">Publicar</button>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default Publicar;