import { contactSection } from '../../data/portfolio';

export default function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-card">
        <p className="eyebrow">{contactSection.eyebrow}</p>
        <h2>{contactSection.title}</h2>
        <p>{contactSection.description}</p>

        <div className="contact-links">
          {contactSection.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
