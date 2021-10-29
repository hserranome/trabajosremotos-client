import Link from './ActiveLink';
import LazyLoad from 'react-lazyload';
import { WEB_URL } from '../utils';

const Footer = (props) => (
	<div className="footer">
		<div className="container">
			<div className="copy">
				<div className="inside">
					<h4>Trabajos remotos</h4>

					<p>Plataforma 100% de empleo remoto para LATAM y España.</p>
				</div>
			</div>

			<div className="copy">
				<div className="inside">
					<h4>Empleos remotos</h4>

					<p><a href={`${WEB_URL}/categoria/programacion`}>Empleo remoto de programación</a></p>
					<p><a href={`${WEB_URL}/categoria/diseno`}>Empleo remoto de diseño</a></p>
					<p><a href={`${WEB_URL}/categoria/marketing`}>Empleo remoto de marketing</a></p>
					<p><a href={`${WEB_URL}/categoria/atencion-al-cliente`}>Empleo remoto de atención al cliente</a></p>
					<p><a href={`${WEB_URL}/categoria/otros`}>Otros empleos remotos</a></p>
				</div>
			</div>

			<div className="copy">
				<div className="inside">
					<h4>Sobre nosotros</h4>

					<p><a href={`${WEB_URL}/contacto`}>Contacto</a></p>
					<p><a href={`${WEB_URL}/alternativas`}>Alternativas</a></p>
					<p><a href={`${WEB_URL}/cookies`}>Cookies</a></p>
					<p><a href={`${WEB_URL}/privacidad`}>Privacidad</a></p>
					<p><a href={`${WEB_URL}/terminos`}>Terminos y condiciones</a></p>
					<p><a href={`https://analytics.mango.moe/share/5a8g1BjG/trabajosremotos.es`} target="_blank" rel="noopener">Analíticas</a></p>
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

