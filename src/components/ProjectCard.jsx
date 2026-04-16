function ProjectCard({ title, desc, links = [] }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default ProjectCard;
