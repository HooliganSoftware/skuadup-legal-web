import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<'terms' | 'privacy' | null>(null);

  const toggleMenu = (menu: 'terms' | 'privacy') => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/">
          <span className="brand-gradient">SkuadUp</span>{' '}
          <span className="brand-plain">Legal</span>
        </Link>
        <nav aria-label="Primary" className="site-nav">
          <div className={`nav-dropdown${openMenu === 'terms' ? ' is-open' : ''}`}>
            <button
              type="button"
              className={`nav-link nav-trigger${openMenu === 'terms' ? ' active' : ''}`}
              aria-expanded={openMenu === 'terms'}
              onClick={() => toggleMenu('terms')}
            >
              Terms <span className="nav-caret" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown-menu">
              <NavLink to="/terms" className="dropdown-link" onClick={() => setOpenMenu(null)}>Terms</NavLink>
              <NavLink to="/terms/archive" className="dropdown-link" onClick={() => setOpenMenu(null)}>Terms of Service Archive</NavLink>
            </div>
          </div>
          <div className={`nav-dropdown${openMenu === 'privacy' ? ' is-open' : ''}`}>
            <button
              type="button"
              className={`nav-link nav-trigger${openMenu === 'privacy' ? ' active' : ''}`}
              aria-expanded={openMenu === 'privacy'}
              onClick={() => toggleMenu('privacy')}
            >
              Privacy <span className="nav-caret" aria-hidden="true">▾</span>
            </button>
            <div className="dropdown-menu">
              <NavLink to="/privacy" className="dropdown-link" onClick={() => setOpenMenu(null)}>Privacy</NavLink>
              <NavLink to="/privacy/archive" className="dropdown-link" onClick={() => setOpenMenu(null)}>Privacy Policy Archive</NavLink>
            </div>
          </div>
          <NavLink to="/community-guidelines" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Community Guidelines
          </NavLink>
          <NavLink to="/location-policy" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Location Policy
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
