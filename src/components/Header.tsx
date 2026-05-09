import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/terms', label: 'Terms' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/community-guidelines', label: 'Community Guidelines' },
  { to: '/location-policy', label: 'Location Policy' }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/">SkuadUp Legal</Link>
        <nav aria-label="Primary" className="site-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
