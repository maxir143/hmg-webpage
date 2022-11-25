import { Link } from 'react-router-dom';
import './nabvar.css';

export default function NavBar() {
  const navItems = [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Contáctanos',
      href: '/contact',
    },
    {
      title: 'Galería',
      href: '/galery',
    },
    {
      title: 'Nuevas Tecnologías',
      href: '/new-technologies',
    },
  ];
  return (
    <ul className="nabvar">
      <img src="/public/images/logo/sm-logo.png" alt="" />
      <div className='nabvar-items'>
        {navItems.map(({ title, href }, index) => (
          <li key={index} className="nabvar-item">
            <Link className="nabvar-button" to={href}>
              {title}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
}
