import Link from './ActiveLink';

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
                <a href="mailto:contacto@trabajosremotos.es" className="img"><img src="/static/images/mail.svg" alt="icono twitter" /></a>
                <a href="https://twitter.com/trabajos_remoto" target="_blank" className="img"><img src="/static/images/twitter.svg" alt="icono twitter" /></a>
            </div>
        </div>
    </div>
)

export default Footer;