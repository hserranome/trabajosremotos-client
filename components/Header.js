import React, { useEffect, useState } from 'react';
import Link from './ActiveLink';
import { WEB_URL } from '../utils';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.handleMobileMenu = this.handleMobileMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.openSubmenu = this.openSubmenu.bind(this);
	}

	handleMobileMenu() {
		let menu = document.querySelector('.b-container');
		let overlay = document.querySelector('.overlay');

		// Open and close the menu
		menu.classList.toggle('open');

		if (menu.classList.contains('open')) {
			// When the menu is open, disable scrolling
			document.body.style.overflow = 'hidden';
			window.scrollTo(0, 0);
			overlay.classList.add('open');
		} else {
			// When the menu is closed, we enable again the scroll on the site
			document.body.style.overflow = 'visible';
			overlay.classList.remove('open');
		}
	}

	closeMenu() {
		let overlay = document.querySelector('.overlay');
		let menu = document.querySelector('.b-container');

		try {
			// close the menu
			menu.classList.remove('open');
			overlay.classList.remove('open');
		} catch (error) {
			console.error('cant close the menu')
		}
	}

	openSubmenu(submenu) {
		try {
			let sub = [...document.querySelectorAll(`.${submenu}`)]

			sub.forEach(element => {
				element.classList.toggle('open')
			})
		} catch (error) {
			console.error(error)
		}
	}

	render() {
		return (
			<div>
				<nav className='desktop'>
					<div className='container'>
						<Link href='/'>
							<div className='logo'><img src='/static/images/logo-big.jpg' /></div>
						</Link>

						<ul>
							{/* <li className="dropdown-parent">
							<a>Comunidad</a>
							<ul className="dropdown">
								<li>
									<Link href='/blog'>
										<a>Blog</a>
									</Link>
								</li>
								<li>
									<Link href='/recursos'>
										<a>Recursos</a>
									</Link>
								</li>
								<li>
									<Link href='/contacto'>
										<a href="https://emailoctopus.com/lists/347308e1-960d-11ea-a3d0-06b4694bee2a/forms/subscribe" target="_blank" rel="noopener">Newsletter</a>
									</Link>
								</li>
							</ul>
						</li> */}
							<li>
								<Link href='/blog'>
									<a>Blog</a>
								</Link>
							</li>
							<li>
								<Link href='/recursos'>
									<a>Recursos</a>
								</Link>
							</li>
							<li>
								<Link href='/contacto'>
									<a>Contacto</a>
								</Link>
							</li>
							<li>
								<Link href='/publicar'>
									<a className='main-button'>Publicar trabajo</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>

				{/* Overlay when menu on mobile is open */}
				<div className="overlay">
					<div className="links">
						<li onClick={this.closeMenu}>
							<Link href='/'>
								<a>Trabajos remotos</a>
							</Link>
						</li>
						<li onClick={this.closeMenu}>
							<Link href='/blog'>
								<a>Blog</a>
							</Link>
						</li>
						<li>
							<div className="submenu-container submenu-categories">
								<a onClick={() => this.openSubmenu('submenu-categories')}>Categorias</a>

								<div className="plusButton">
									<span></span>
									<span></span>
								</div>
							</div>
							<ul className="submenu submenu-categories">
								<li>
									<a href={`${WEB_URL}/categoria/programacion`} >
										Programación
									</a>
								</li>
								<li>
									<a href={`${WEB_URL}/categoria/diseno`}>
										Diseño
									</a>
								</li>
								<li>
									<a href={`${WEB_URL}/categoria/marketing`}>
										Marketing
									</a>
								</li>
								<li>
									<a href={`${WEB_URL}/categoria/atencion-al-cliente`}>
										Atención al cliente
									</a>
								</li>
								<li>
									<a href={`${WEB_URL}/categoria/gamedev`}>
										GameDev
									</a>
								</li>
								<li>
									<a href={`${WEB_URL}/categoria/otros`}>
										Otros
									</a>
								</li>
							</ul>
						</li>
						<li onClick={this.closeMenu}>
							<Link href='/recursos'>
								<a>Recursos</a>
							</Link>
						</li>
						<li onClick={this.closeMenu}>
							<Link href='/contacto'>
								<a>Contacto</a>
							</Link>
						</li>
						<li onClick={this.closeMenu}>
							<Link href='/publicar'>
								<a className='main-button'>Publicar trabajo</a>
							</Link>
						</li>
					</div>
				</div>

				<div className="mobile">
					<div className="nav">
						{/* Logo */}
						<Link href='/'>
							<div onClick={this.closeMenu} className='logo'><img src='/static/images/logo-big.jpg' /></div>
						</Link>

						{/* Burger menu for mobile */}
						<span className="b-container">
							<div className="b-menu" onClick={this.handleMobileMenu}>
								<div className="b-bun b-bun--top"></div>
								<div className="b-bun b-bun--mid"></div>
								<div className="b-bun b-bun--bottom"></div>
							</div>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;