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
          <ul className="skill-list">
            {skillsSection.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="panel journal-panel">
          <span className="panel-label">{skillsSection.journeyLabel}</span>
          <ul className="journey-list">
            {skillsSection.journey.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
