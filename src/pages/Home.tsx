import { Link } from 'react-router-dom';

const legalLinks = [
  { to: '/terms', label: 'Terms of Service' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/community-guidelines', label: 'Community Guidelines' },
  { to: '/location-policy', label: 'Location Policy' }
];

export default function Home() {
  return (
    <section className="shell home-page">
      <h1>SkuadUp Legal Center</h1>
      <p>Review SkuadUp&apos;s Terms of Service, Privacy Policy, Community Guidelines, and Location Policy.</p>
      <ul className="home-links">
        {legalLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
        <li>
          <a href="mailto:support@skuadup.com">Contact Support</a>
        </li>
      </ul>
    </section>
  );
}
