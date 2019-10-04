import Footer from './Footer';
import Header from './Header';
import '../utils/style.css';

const Layout = (props) => (
    <div>
        <Header />

        {props.children}

        <Footer />
    </div>
);

export default Layout;