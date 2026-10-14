import { skillsSection } from '../../data/portfolio';

export default function SkillsSection() {
  return (
    <section className="section split-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">{skillsSection.eyebrow}</p>
        <h2>{skillsSection.title}</h2>
      </div>

      <div className="split-grid">
        <article className="panel">
          <span className="panel-label">Learning Map</span>
          <ul className="skill-list">
            {skillsSection.skills.map((skill, index) => (
              <li className="skill-node" key={skill}>
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel journal-panel">
          <span className="panel-label">{skillsSection.journeyLabel}</span>
          <ul className="journey-list">
            {skillsSection.journey.map((entry, index) => (
              <li className="journey-node" key={entry}>
                <span className="journey-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
