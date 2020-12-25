import Link from './ActiveLink';
import LazyLoad from 'react-lazyload';

const Footer = (props) => (
    <div className="footer">
      <div className="container">
        <div className="copy">
				<h3>&copy; <a style={{marginLeft: 0}} rel="noopener" target="_blank" href="https://www.mango.moe?ref=trabajos">MangoMoe</a></h3>

				{/* Social media buttons */}
				<div className="img">
					<a rel="noopener" target="_blank" href="https://twitter.com/trabajos_remoto">
						<img src='/static/images/twitter.svg' alt='icono de twitter' />
					</a>
				</div>

				<div className="img">
					<a rel="noopener" target="_blank" href="https://www.linkedin.com/company/trabajosremotos">
						<img src='/static/images/linkedin.svg' alt='icono de linkedin' />
					</a>
				</div>

				<div className="img">
					<a rel="noopener" target="_blank" href="https://www.instagram.com/trabajos_remoto/">
						<img src='/static/images/instagram.svg' alt='icono de instagram' />
					</a>
				</div>

				<div className="img">
					<a rel="noopener" target="_blank" href="https://t.me/trabajos_remotos">
						<img src='/static/images/telegram.svg' alt='icono de telegram' />
					</a>
				</div>

				<div className="img">
          <a rel="noopener" target="_blank" href="https://www.facebook.com/trabajosremoto/">
						<img src='/static/images/facebook.svg' alt='icono de facebook' />
					</a>
				</div>
      </div>

			{/* Empty copy to have more space */}
			<div className="copy"></div>
			
			<div className="copy">
				<div className="inside">
					<h4>Empleos remotos</h4>

					<p><Link href="/categoria/programacion"><a>Trabajos de programación</a></Link></p>
					<p><Link href="/categoria/diseno"><a>Trabajos de diseño</a></Link></p>
					<p><Link href="/categoria/marketing"><a>Trabajos de marketing</a></Link></p>
					<p><Link href="/categoria/atencion-al-cliente"><a>Trabajos de atención al cliente</a></Link></p>
					<p><Link href="/categoria/otros"><a>Otros trabajos</a></Link></p>
				</div>
			</div>
			
			<div className="copy">
				<div className="inside">
					<h4>Sobre nosotros</h4>

					<p><Link href="/contacto"><a>Contacto</a></Link></p>
					<p><Link href="/publicar"><a>Publicar anuncio</a></Link></p>
					<p><Link href="/cookies"><a>Política de cookies</a></Link></p>
					<p><Link href="/privacidad"><a>Política de privacidad</a></Link></p>
					<p><Link href="/terminos"><a>Terminos y condiciones</a></Link></p>
				</div>
			</div>
			</div>
    </div>
)

export default Footer;