import { navLinks } from '../../data/portfolio';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">N</span>
        <span>Nawaz</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
