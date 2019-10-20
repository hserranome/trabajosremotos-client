import CategoryList from '../modules/CategoryList';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import { API_URL } from '../utils';


const Categories = (props) => {
    const { categories, error } = props;
    
	return (
		<div>
			<Head>
				<title>Trabajos remotos - Categorías</title>

				<meta name="robots" content="all" />
				<meta property="og:title" content="Trabajos remotos" />
				<meta name="twitter:title" content="Trabajos remotos" />
			</Head>

			<CategoryList categories={categories} error={error} />
		</div>
	);
};

Categories.getInitialProps = async () => {
	try {
		const res = await fetch(`${API_URL}/categories`);
        const data = await res.json();
		return { categories: data };
	} catch (error) {
		console.error(error)
		return { error }
	}
};

export default Categories;