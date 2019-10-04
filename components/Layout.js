import Footer from './Footer';
import Header from './Header';
import Head from 'next/head'

import '../static/css/style.css';


const Layout = (props) => (
    <div>
		<Head>
			<title>Trabajos remotos - Tu tablón de empleo remoto exclusivamente en español</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;