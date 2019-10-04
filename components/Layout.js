import Footer from './Footer';
import Header from './Header';
import '../static/css/style.css';


const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;