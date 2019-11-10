import Link from './ActiveLink';

const Header = (props) => {    
    return (
        <div>
            <nav className='mobile top'>
                <form method='get' id='searchform' action=''>
                    <img src='/static/images/search.svg' alt='icono de busqueda' />
                    <input type='hidden' name='post_type' value='trabajos-remotos' />
                    <input type='text' className='field' name='s' id='s' placeholder='Encuentra tu próximo trabajo' />
                </form>
            </nav>

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
                        <Link activeClassName='active' href='/publicar'>
                            <a>Publicar</a>
                        </Link>
                    </li>
                    {/* <li className='blog'>
                        <Link activeClassName='active' href='/blog'>
                            <a>Blog</a>
                        </Link>
                    </li> */}
                </ul>
            </nav>

            <nav className='desktop'>
                <div className='container'>
                    <Link href='/'>
                        <div className='logo'><img src='/static/images/logo.png' /></div>
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
                            <Link href='/anunciate'>
                                <a>Anúnciate</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/sobrenosotros'>
                                <a>Sobre nosotros</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/publicar'>
                                <a className='main-button'>Publicar anuncio</a>
                            </Link>
                        </li>
                        <li>
                            <div className='search'></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Header;