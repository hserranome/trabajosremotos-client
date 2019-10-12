import CategoryList from '../modules/CategoryList';
import fetch from 'isomorphic-unfetch';

import { API_URL } from '../utils';


const Categories = (props) => {
    const { categories, error } = props;
    
	return <CategoryList categories={categories} error={error} />;
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