import Link from './ActiveLink';
import LazyLoad from 'react-lazyload';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <div className="copy">
				<h3>&copy; <a style={{marginLeft: 0}} rel="noopener" target="_blank" href="https://www.mango.moe?ref=trabajos">Mango Milkshake</a></h3>

				{/* Social media buttons */}
				<div className="img">
					<LazyLoad once>
						<a rel="noopener" target="_blank" href="https://twitter.com/trabajos_remoto">
							<img src='/static/images/twitter.svg' alt='icono de twitter' />
						</a>
					</LazyLoad>
				</div>

				<div className="img">
					<LazyLoad once>
						<a rel="noopener" target="_blank" href="https://www.linkedin.com/company/trabajosremotos">
							<img src='/static/images/linkedin.svg' alt='icono de linkedin' />
						</a>
					</LazyLoad>
				</div>

				<div className="img">
					<LazyLoad once>
						<a rel="noopener" target="_blank" href="https://www.instagram.com/trabajos_remoto/">
							<img src='/static/images/instagram.svg' alt='icono de instagram' />
						</a>
					</LazyLoad>
				</div>

				<div className="img">
					<LazyLoad once>
						<a rel="noopener" target="_blank" href="https://t.me/trabajos_remotos">
							<img src='/static/images/telegram.svg' alt='icono de telegram' />
						</a>
					</LazyLoad>
				</div>
            </div>

			<div className="copy"></div>

            <div className="copy">
				<h3>Categorías</h3>

				<p><Link href="/categoria/programacion"><a>Programación</a></Link></p>
				<p><Link href="/categoria/diseno"><a>Diseño</a></Link></p>
				<p><Link href="/categoria/marketing"><a>Marketing</a></Link></p>
				<p><Link href="/categoria/atencion-al-cliente"><a>Atención al cliente</a></Link></p>
				<p><Link href="/categoria/otros"><a>Otros</a></Link></p>
            </div>
			
            <div className="copy">
				<h3>Sobre nosotros</h3>

				<p><Link href="/publicar"><a>Publicar anuncio</a></Link></p>
				<p><Link href="/contacto"><a>Contacto</a></Link></p>
				<p><Link href="/cookies"><a>Política de cookies</a></Link></p>
            </div>
        </div>
    </div>
)

export default Footer;