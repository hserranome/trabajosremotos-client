import React from "react";
import slugify from 'slugify';
import Router from 'next/router';

import { WEB_URL } from '../utils';

const SearchBar = (props) => {
	const { tags } = props
	
	const handleSearch = (event) => {
		event.preventDefault();
		const input = document.querySelector('#searchQuery');

		let search = input.value
		
		if(search.length > 0) {
			let query = slugify(input.value, { 
				remove: /[*+~./()'"!:@]/g, 
				locale: 'es',
				lower: 'true',
			});
	
			Router.push({
				pathname: '/buscar-teletrabajos',
				query: { filtro: query }
			})
	
			// Despues de buscar un filtro reseteamos el input
			input.value = '';
		}
	}
	
	return (
		<div className="bar">
			<div className="container">
				<form method='get' id='searchform' onSubmit={(event) => handleSearch(event)}>
					<input type='text' className='field' id="searchQuery" minlength='1' placeholder='Escribe aquí el trabajo que quieres buscar' />
					<input className='search' type='submit' value='Buscar' />
				</form>

				<div className="tags">
					<p>Etiquetas populares: 
						<span><a href={`${WEB_URL}/etiqueta/seo`}>seo</a></span> 
						<span><a href={`${WEB_URL}/etiqueta/react`}>react</a></span> 
						<span><a href={`${WEB_URL}/etiqueta/javascript`}>javascript</a></span> 
						<span><a href={`${WEB_URL}/etiqueta/diseno`}>diseño</a></span>
						<span><a href={`${WEB_URL}/etiqueta/redes-sociales`}>redes sociales</a></span> 
						<span><a href={`${WEB_URL}/etiqueta/photoshop`}>photoshop</a></span> 
					</p>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;