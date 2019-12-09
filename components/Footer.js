import Link from './ActiveLink';
import LazyLoad from 'react-lazyload';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <div className="copy">
                <p className="strong">&copy; 2019</p>
				<p><Link href="/anunciate"><a>Anúnciate</a></Link></p>
				<p><Link href="/sobrenosotros"><a>Sobre nosotros</a></Link></p>
				<p><Link href="/cookies"><a>Política de cookies</a></Link></p>
            </div>

            <div className="social">
				<a href="https://twitter.com/trabajos_remoto" aria-label="Twitter" rel="noopener" target="_blank" className="img">
					<LazyLoad once>
						<img src="/static/images/twitter.svg" alt="Icono Twitter" />
					</LazyLoad>
				</a>
            </div>
        </div>
    </div>
)

export default Footer;