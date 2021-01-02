import React from "react";
import slugify from 'slugify';
import Router from 'next/router';

const SearchBar = (props) => {
	const { tags } = props
	
	const handleSearch = (event) => {
		event.preventDefault();
		const input = document.querySelector('#searchQuery');

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
	
	return (
		<div className="bar">
			<div className="container">
				<form method='get' id='searchform' onSubmit={(event) => handleSearch(event)}>
					<input type='text' className='field' id="searchQuery" placeholder='Buscar trabajo' />
					<input className='search' type='submit' value='Buscar' />
				</form>

				<div className="tags">
					<p>Etiquetas populares: 
						<span>react</span> 
						<span>php</span> 
						<span>developer</span> 
						<span>designer</span>
						<span>react</span> 
						<span>php</span> 
					</p>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;