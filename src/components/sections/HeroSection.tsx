import { focusCard, heroContent } from '../../data/portfolio';

export default function HeroSection() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1>{heroContent.title}</h1>
        <p className="hero-text">{heroContent.description}</p>

        <div className="hero-actions">
          <a className="button button-primary" href={heroContent.primaryAction.href}>
            {heroContent.primaryAction.label}
          </a>
          <a className="button button-secondary" href={heroContent.secondaryAction.href}>
            {heroContent.secondaryAction.label}
          </a>
        </div>
      </div>

      <aside className="hero-card">
        <div className="card-badge">{focusCard.eyebrow}</div>
        <h2>{focusCard.title}</h2>
        <p>{focusCard.description}</p>

        <ul className="stat-list">
          {focusCard.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.label}</strong>
              <span>{stat.value}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
