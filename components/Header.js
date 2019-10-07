import Link from './ActiveLink';
import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const API_URL = process.env.API_URL || 'http://localhost:1337'

const Header = (props) => {
    const { categories, error } = props;
    const [cats, setCategory] = useState(categories || []);

    return (
        <div>
            <nav className="mobile top">
                <form method="get" id="searchform" action="">
                    <img src="/static/images/search.svg" alt="icono de busqueda" />
                    <input type="hidden" name="post_type" value="trabajos-remotos" />
                    <input type="text" className="field" name="s" id="s" placeholder="Encuentra tu próximo trabajo" />
                </form>
            </nav>

            <nav className="mobile bottom">
                <ul>
                    <li className="inicio">
                        <Link activeClassName="active" href="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li className="categorias">
                        <Link activeClassName="active" href="/categorias">
                            <a>Categorias</a>
                        </Link>
                    </li>
                    <li className="publicar">
                        <Link activeClassName="active" href="/publicar">
                            <a>Publicar</a>
                        </Link>
                    </li>
                    <li className="blog">
                        <Link activeClassName="active" href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <nav className="desktop">
                <div className="container">
                    <Link href="/">
                        <div className="logo">Trabajos a distancia 👏</div>
                    </Link>

                    <ul>
                        <li>
                            <Link href="/categorias">
                                <a>Categorias
                                </a>
                            </Link>
                            <ul className="dropdown">
                                {cats && cats.length > 0
                                    ? (
                                        cats.map((cat) => (
                                            <li key={`/categoria/${cat.slug}`}>
                                                <Link href={`/categoria/${cat.slug}`}>
                                                    <a>{`${cat.name}`}</a>
                                                </Link>
                                            </li>
                                        ))
                                    )
                                    : ( '' )
                                }
                            </ul>
                        </li>
                        <li>
                            <Link href="">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a>Anúnciate</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sobrenosotros">
                                <a>Sobre nosotros</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/publicar">
                                <a className="main-button">Publicar anuncio</a>
                            </Link>
                        </li>
                        <li>
                            <div className="search"></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

Header.getInitialProps = async () => {
	try {
		const res = await fetch(`${API_URL}/categories`);
        const data = await res.json();
		return { categories: data };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default Header;