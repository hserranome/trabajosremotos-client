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
					<li className='tme'>
						<a href="https://t.me/trabajos_remotos" target="_blank" rel="noopener">Telegram</a>
					</li>
					{/* <li className='newsletter'>
						<a href="https://emailoctopus.com/lists/347308e1-960d-11ea-a3d0-06b4694bee2a/forms/subscribe" target="_blank" rel="noopener">Newsletter</a>
					</li> */}
					<li className='newsletter'>
						<Link activeClassName='active' href='/contacto'>
							<a>Contacto</a>
						</Link>
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
						<div className='logo'><img src='/static/images/logo-big.jpg' /></div>
					</Link>

					<ul>
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
						{/* <li>
							<Link href='/contacto'>
								<a href="https://emailoctopus.com/lists/347308e1-960d-11ea-a3d0-06b4694bee2a/forms/subscribe" target="_blank" rel="noopener">Newsletter</a>
							</Link>
						</li> */}
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