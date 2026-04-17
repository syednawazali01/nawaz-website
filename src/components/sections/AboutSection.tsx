import { aboutContent } from '../../data/portfolio';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="section-heading">
        <p className="eyebrow">{aboutContent.eyebrow}</p>
        <h2>{aboutContent.title}</h2>
      </div>

      <div className="about-grid">
        <article className="panel">
          <p>{aboutContent.summary}</p>
        </article>

        <article className="panel compass-panel">
          <span className="panel-label">{aboutContent.northStarLabel}</span>
          <p>{aboutContent.northStarText}</p>
        </article>
      </div>
    </section>
  );
}
