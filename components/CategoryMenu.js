import React from 'react';
import Link from './ActiveLink';

const CategoryMenu = () => (
  <div className="container">
    <div className="categories">
      <Link
        href='/categoria/[category]'
        as='/categoria/programacion'
      >
        <a>
					<img src='/static/images/programacion.svg' alt='icono de programacion' />
          <span>Programación</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/diseno'
      >
        <a>
					<img src='/static/images/diseno.svg' alt='icono de diseno' />
          <span>Diseño</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/marketing'
      >
        <a>
					<img src='/static/images/marketing.svg' alt='icono de marketing' />
          <span>Marketing</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/atencion-al-cliente'
      >
        <a>
					<img src='/static/images/atencion.svg' alt='icono de atencion' />
          <span>Atención <br/> al cliente</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/gamedev'
      >
        <a>
					<img src='/static/images/gamedev.svg' alt='icono de gamedev' />
          <span>GameDev</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/otros'
      >
        <a>
					<img src='/static/images/otros.svg' alt='icono de otros' />
          <span>Otros</span>
        </a>
      </Link>
      <Link
        href='https://t.me/trabajos_remotos'
      >
        <a>
					<img src='/static/images/telegram.svg' alt='icono de telegram' />
          <span>Grupo de <br/> Telegram</span>
        </a>
      </Link>
      <Link
		href='https://notionmango.com/'
      >
        <a>
					<img src='/static/images/notion.svg' alt='icono de notion' />
          <span>Plantillas de <br/> Notion</span>
        </a>
      </Link>
      <div style={{marginLeft: '2rem'}}></div>
    </div>
  </div>
)
export default CategoryMenu;