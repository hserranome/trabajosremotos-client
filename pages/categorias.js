import Layout from '../components/Layout'
import CategoryList from '../modules/CategoryList';
import fetch from 'isomorphic-unfetch';

const API_URL = process.env.API_URL || 'http://localhost:1337'

const Categories = (props) => {
    const { categories, error } = props;
    
	return (
		<Layout>
            <CategoryList categories={categories} error={error} />
		</Layout>
	)
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