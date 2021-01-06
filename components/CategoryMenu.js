import React from 'react';
import { WEB_URL } from '../utils';

const CategoryMenu = () => (
	<div className="container">
		<div className="categories">
			<a href={`${WEB_URL}categoria/programacion`} >
				<img src='/static/images/programacion.svg' alt='icono de programacion' />
				<span>Programación</span>
			</a>
			<a href={`${WEB_URL}categoria/diseno`}>
				<img src='/static/images/diseno.svg' alt='icono de diseno' />
				<span>Diseño</span>
			</a>
			<a href={`${WEB_URL}categoria/marketing`}>
				<img src='/static/images/marketing.svg' alt='icono de marketing' />
				<span>Marketing</span>
			</a>
			<a href={`${WEB_URL}categoria/atencion-al-cliente`}>
				<img src='/static/images/atencion.svg' alt='icono de atencion' />
				<span>Atención <br /> al cliente</span>
			</a>
			<a href={`${WEB_URL}categoria/gamedev`}>
				<img src='/static/images/gamedev.svg' alt='icono de gamedev' />
				<span>GameDev</span>
			</a>
			<a href={`${WEB_URL}categoria/otros`}>
				<img src='/static/images/otros.svg' alt='icono de otros' />
				<span>Otros</span>
			</a>
			<a href='https://t.me/trabajos_remotos'>
				<img src='/static/images/telegram.svg' alt='icono de telegram' />
				<span>Grupo de <br /> Telegram</span>
			</a>
			<a href='https://notionmango.com/'>
				<img src='/static/images/notion.svg' alt='icono de notion' />
				<span>Plantillas de <br /> Notion</span>
			</a>
			<div style={{ marginLeft: '2rem' }}></div>
		</div>
	</div>
)
export default CategoryMenu;