import Link from './ActiveLink';
import LazyLoad from 'react-lazyload';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <div className="copy">
				<p className="strong">&copy; <a style={{marginLeft: 0}} rel="noopener" target="_blank" href="https://www.mango.moe">Mango Milkshake</a></p>
				<p><Link href="/cookies"><a>Política de cookies</a></Link></p>
            </div>

            <div className="social">
				<a href="mailto:contacto@trabajosremotos.es" aria-label="Email"  className="img">
					<LazyLoad once>
						<img src="/static/images/mail.svg" alt="icono correo" />
					</LazyLoad>
				</a>
				<a href="https://twitter.com/trabajos_remoto" aria-label="Twitter"  rel="noopener" target="_blank" className="img">
					<LazyLoad once>
						<img src="/static/images/twitter.svg" alt="Icono Twitter" />
					</LazyLoad>
				</a>
            </div>
        </div>
    </div>
)

export default Footer;