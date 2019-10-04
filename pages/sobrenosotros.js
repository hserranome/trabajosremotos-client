import Layout from '../components/Layout'
import Link from 'next/link';
import Head from 'next/head';

const About = (props) => {
	return (
		<Layout>
			<Head>
				<title>Sobre nosotros - Trabajos remotos</title>
			</Head>
			<p>This is the about page</p>

            <Link href="/">
                <a>Homepage</a>
            </Link>
		</Layout>
	)
};

export default About;