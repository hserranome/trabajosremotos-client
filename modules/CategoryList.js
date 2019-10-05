import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const API_URL = process.env.API_URL || 'http://localhost:1337'

function CategoryList (props) {
	const { categories } = props;
	const [cats, setCategory] = useState(categories || []);

	return (
		<div className="container">
			<div className="trabajos">
				{cats && cats.length > 0
					? (
						cats.map((cat) => (
                            <div key={`/categoria/${cat.slug}`} className="trabajo categoria">
                                <Link href={`/categoria/${cat.slug}`}>
                                    <a>
                                        <img src={`${API_URL}${cat.image.url}`} alt="icono programacion" />
                                        <p>{`${cat.description}`}</p>
                                        <h2 className="prata">{`${cat.name}`}</h2>
                                    </a>
                                </Link>
                            </div>
						))
					)
					: (
						<div className="empty-message">No se han encontrado categorías</div>
					)
				}
			</div>
		</div>
	)
}

export default CategoryList;
