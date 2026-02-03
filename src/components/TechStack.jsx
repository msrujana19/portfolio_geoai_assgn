import './TechStack.css';

const TechStack = () => {
  const techStack = {
    proficient: {
      title: "Proficient",
      subtitle: "Used in projects",
      icon: "⚡",
      skills: ["Python", "JavaScript", "React.js", "TensorFlow", "PyTorch", "NLP", "PowerBI", "PostgreSQL", "GitHub", "YOLO", "GRAD-CAM", "MongoDB"]
    },
    familiar: {
      title: "Familiar",
      subtitle: "Learning and exploring",
      icon: "📚",
      skills: ["Docker", "AWS", "Google Earth Engine", "Rust", "Leaflet", "Mapbox", "TypeScript"]
    }
  };

  return (
    <section id="tech-stack">
      <div className="section-header">
        <div className="section-label">SKILLS</div>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-description">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>
      <div className="tech-stack-grid">
        {Object.entries(techStack).map(([key, category]) => (
          <div key={key} className="tech-category">
            <div className="tech-category-header">
              <div className="tech-category-icon">{category.icon}</div>
              <div>
                <h3>{category.title}</h3>
                <div className="tech-category-subtitle">{category.subtitle}</div>
              </div>
            </div>
            <div className="tech-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
