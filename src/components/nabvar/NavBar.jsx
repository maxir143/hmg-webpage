import './nabvar.css';

export default function NavBar() {
  const navItems = [
    {
      title: 'Inicio',
      href: '/inicio',
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
      {navItems.map(({ title, href }) => (
        <li className="nabvar-item">
          <button className="nabvar-button" href={href}>
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
}
