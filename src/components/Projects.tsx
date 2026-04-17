import { projects } from '../data/projects';

function formatProjectName(name: string) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Projects that reflect what I am learning and exploring.</h2>
        <p className="projects-intro">
          These projects show the areas I have been practicing, including AI,
          tools, web-based ideas, and programming fundamentals.
        </p>
      </div>

      <div className="project-grid project-grid-rich">
        {projects.map((project) => (
          <a
            key={project.name}
            className={`project-card project-card-link${project.highlight ? ' project-card-featured' : ''}`}
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-card-top">
              <span className="project-kicker">Featured Build</span>
              <span className="project-tech">{project.tech}</span>
            </div>

            <h3>{formatProjectName(project.name)}</h3>
            <p>{project.description}</p>

            <div className="tag-row">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-card-footer">
              <span className="project-link-label">View on GitHub</span>
              {project.stars ? (
                <span className="project-stars">* {project.stars}</span>
              ) : (
                <span className="project-arrow" aria-hidden="true">
                  {'->'}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>

      <div className="projects-cta-wrap">
        <a
          className="button button-secondary projects-cta"
          href="https://github.com/syednawazali01"
          target="_blank"
          rel="noreferrer"
        >
          See all repos on GitHub
        </a>
      </div>
    </section>
  );
}
