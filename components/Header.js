import React, { useEffect, useState } from 'react';
import Link from './ActiveLink';

const Header = (props) => {
	return (
		<div>
			<nav className='mobile bottom'>
				<ul>
					<li className='inicio'>
						<Link activeClassName='active' href='/'>
							<a>Inicio</a>
						</Link>
					</li>
					<li className='publicar'>
						<a href="https://t.me/trabajos_remotos" target="_blank" rel="noopener">Telegram</a>
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
						<li>
							<Link href='/blog'>
								<a>Blog</a>
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
		</div>
	)
}


export default Header;