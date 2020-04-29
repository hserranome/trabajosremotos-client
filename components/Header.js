import React, { useEffect, useState } from 'react';
import Link from './ActiveLink';
import slugify from 'slugify';
import Router from 'next/router';
import LazyLoad from 'react-lazyload';

const Header = (props) => {
	useEffect(() => {
		window.addEventListener('click', (event) => {
			const target = event.target; 
			const wrapper = target.closest('.search-desktop');
			const wrapperRef = document.querySelector('.search-desktop');

			if (!target.classList.contains('search')) {
				if (wrapperRef.classList.contains('active')) {
					if (wrapper === null) {
						wrapperRef.classList.remove('active');
					}
				}
			}
		});
	}, []);

	const handleSearch = (event) => {
		event.preventDefault();
		const input = document.querySelector('#searchQuery');

		let query = slugify(input.value, { remove: /[*+~.()'"!:@]/g });

		Router.push({
			pathname: '/buscar-teletrabajos',
			query: { filtro: query }
		})

		// Despues de buscar un filtro reseteamos el input
		input.value = '';
	}

	const handleSearchDesktop = (event) => {
		event.preventDefault();
		const input = document.querySelector('#searchQueryDesktop');
		const wrapper = document.querySelector('.search-desktop');

		let query = slugify(input.value, { remove: /[*+~.()'"!:@]/g });

		Router.push({
			pathname: '/buscar-teletrabajos',
			query: { filtro: query }
		})

		// Despues de buscar un filtro reseteamos el input y en el caso de escritorio, le quitamos la clase active para cerrarlo
		input.value = '';
		wrapper.classList.remove('active');
	}

	const openDesktopSearch = (event) => {
		event.stopPropagation();
		const wrapper = document.querySelector('.search-desktop');

		wrapper.classList.toggle('active');
	}
	
    return (
		<div>
            <nav className='mobile top'>
                <form method='get' id='searchform' onSubmit={(event) => handleSearch(event)}>
					<LazyLoad once>
                    	<img src='/static/images/search.svg' alt='icono de busqueda' />
					</LazyLoad>
					<label className="sr-only" htmlFor="searchQuery">Encuentra tu próximo trabajo</label>
					<input type='text' className='field' id="searchQuery" placeholder='Encuentra tu próximo trabajo' />
                </form>
            </nav>

			<div className="search-desktop">
				<div className="container">
					<form method='get' id='searchformdesktop' onSubmit={(event) => handleSearchDesktop(event)}>
						<label className="sr-only" htmlFor="searchQueryDesktop">Encuentra tu próximo trabajo</label>
						<input autoComplete='off' type='text' className='field' id="searchQueryDesktop" placeholder='Encuentra tu próximo trabajo' />
					</form>
				</div>
			</div>

            <nav className='mobile bottom'>
                <ul>
                    <li className='inicio'>
                        <Link activeClassName='active' href='/'>
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li className='categorias'>
                        <Link activeClassName='active' href='/categorias'>
                            <a>Categorias</a>
                        </Link>
                    </li>
                    <li className='publicar'>
						<a href="https://t.me/trabajosremotos" target="_blank" rel="noopener">Telegram</a>
                    </li>
                    <li className='blog'>
                        <Link activeClassName='active' href='/blog'>
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <nav className='desktop'>
                <div className='container'>
                    <Link href='/'>
                        <div className='logo'><img src='/static/images/logo.jpg' /></div>
                    </Link>

                    <ul>
                        <li className='dropdown-parent'>
                            <a>Categorias</a>
                            
                            <ul className='dropdown'>
                                <li key='/categoria/programacion'>
									<Link 
										href='/categoria/[category]' 
										as='/categoria/programacion' 
									>
                                        <a>Programación</a>
                                    </Link>
                                </li>
                                <li key='/categoria/diseno'>
									<Link 
										href='/categoria/[category]'
										as='/categoria/diseno' 
									>
                                        <a>Diseño</a>
                                    </Link>
                                </li>
                                <li key='/categoria/marketing'>
                                    <Link
										href='/categoria/[category]' 
										as='/categoria/marketing'
									>
                                        <a>Marketing</a>
                                    </Link>
                                </li>
                                <li key='/categoria/atencion-al-cliente'>
									<Link 
										href='/categoria/[category]' 
										as='/categoria/atencion-al-cliente'
									>
                                        <a>Atención al cliente</a>
                                    </Link>
                                </li>
                                <li key='/categoria/otros'>
									<Link 
										href='/categoria/[category]' 
										as='/categoria/otros'
									>
                                        <a>Otros</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href='/blog'>
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/sobrenosotros'>
                                <a>Sobre nosotros</a>
                            </Link>
                        </li>
                        <li>
							<a rel="noopener" target="_blank" href='https://t.me/trabajosremotos'>
                                Telegram
                            </a>
                        </li>
						<li>
							<div className='search' onClick={openDesktopSearch}>
								<img src='/static/images/search-thick.svg' alt='icono de busqueda' />
							</div>
						</li>
                        <li>
                            <Link href='/publicar'>
                                <a className='main-button'>Publicar anuncio</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Header;