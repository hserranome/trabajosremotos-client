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
          <i>💻</i>
          <span>Programación</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/diseno'
      >
        <a>
          <i>🎨</i>
          <span>Diseño</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/marketing'
      >
        <a>
          <i>📊</i>
          <span>Marketing</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/atencion-al-cliente'
      >
        <a>
          <i>🎧</i>
          <span>Atención <br/> al cliente</span>
        </a>
      </Link>
      <Link
        href='/categoria/[category]'
        as='/categoria/otros'
      >
        <a>
          <i>📦</i>
          <span>Otros</span>
        </a>
      </Link>
      <Link
        href='https://t.me/trabajos_remotos'
      >
        <a>
          <i>📱</i>
          <span>Grupo de <br/> Telegram</span>
        </a>
      </Link>
      <div style={{marginLeft: '2rem'}}></div>
    </div>
  </div>
)
export default CategoryMenu;