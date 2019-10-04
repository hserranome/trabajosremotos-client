import Layout from '../components/Layout'
import Link from 'next/link';

const About = (props) => {
	return (
		<Layout>
			<p>This is the about page</p>

            <Link href="/">
                <a>Homepage</a>
            </Link>
		</Layout>
	)
};

export default About;