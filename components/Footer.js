import Link from './ActiveLink';
import LazyLoad from 'react-lazyload';
import { WEB_URL } from '../utils';

const Footer = (props) => (
	<div className="footer">
		<div className="container">
			<div className="copy big">
				<div className="inside">
					<h4>Trabajos remotos</h4>

					<p>Somos la comunidad hispanohablante más grande para encontrar empleo remoto. 🔥</p>
				</div>
			</div>

			{/* Empty copy to have more space */}
			<div className="copy small"></div>

			<div className="copy">
				<div className="inside">
					<h4>Empleos remotos</h4>

					<p><a href={`${WEB_URL}/categoria/programacion`}>Trabajos de programación</a></p>
					<p><a href={`${WEB_URL}/categoria/diseno`}>Trabajos de diseño</a></p>
					<p><a href={`${WEB_URL}/categoria/marketing`}>Trabajos de marketing</a></p>
					<p><a href={`${WEB_URL}/categoria/atencion-al-cliente`}>Trabajos de atención al cliente</a></p>
					<p><a href={`${WEB_URL}/categoria/otros`}>Otros trabajos</a></p>
				</div>
			</div>

			<div className="copy">
				<div className="inside">
					<h4>Sobre nosotros</h4>

					<p><a href={`${WEB_URL}/contacto`}>Contacto</a></p>
					<p><a href={`${WEB_URL}/recursos`}>Recursos</a></p>
					<p><a href={`${WEB_URL}/publicar`}>Publicar anuncio</a></p>
					<p><a href={`${WEB_URL}/cookies`}>Cookies</a></p>
					<p><a href={`${WEB_URL}/privacidad`}>Privacidad</a></p>
					<p><a href={`${WEB_URL}/terminos`}>Terminos y condiciones</a></p>
				</div>
			</div>
		</div>

		<div className="container copyright">
			<p>&copy; 2020 <a style={{ marginLeft: 0 }} rel="noopener" target="_blank" href="https://www.mango.moe?ref=trabajos">MangoMoe</a></p>

			<div>
				{/* Social media buttons */}
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
						<img src='/static/images/telegram2.svg' alt='icono de telegram' />
					</a>
				</div>
			</div>
		</div>
	</div>
)

export default Footer;