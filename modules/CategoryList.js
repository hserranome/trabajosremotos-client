import React, { useState } from 'react';
import Link from 'next/link'
import LazyLoad from 'react-lazyload';

import { API_URL } from '../utils';


function CategoryList (props) {
	const [categories] = useState(props.categories || []);

	return (
		<div className="container">
			<div className="trabajos">
				{categories && categories.length > 0
					? (
						categories.map((cat) => (
                            <div key={`/categoria/${cat.slug}`} className="trabajo categoria">
								<Link 
									href='/categoria/[category]'
									as={`/categoria/${cat.slug}`}
								>
                                    <a>
										<LazyLoad once>
                                        	<img
												src={`${API_URL}${cat.image.url}`}
												alt="icono programacion"
											/>
										</LazyLoad>
                                        <div className="categoria contenido">
											<p>{`${cat.description}`}</p>
											<h2>{`${cat.name}`}</h2>
										</div>
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
