import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" to="/">
          <span className="brand-gradient">SkuadUp</span>{' '}
          <span className="brand-plain">Legal</span>
        </Link>
        <nav aria-label="Primary" className="site-nav">
          <div className="nav-dropdown">
            <NavLink to="/terms" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <span className="nav-link-with-caret">
                Terms
                <span className="nav-caret" aria-hidden="true">▾</span>
              </span>
            </NavLink>
            <div className="dropdown-menu">
              <NavLink to="/terms" className="dropdown-link">Terms</NavLink>
              <NavLink to="/terms/archive" className="dropdown-link">Terms of Service Archive</NavLink>
            </div>
          </div>
          <NavLink to="/privacy" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Privacy
          </NavLink>
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
