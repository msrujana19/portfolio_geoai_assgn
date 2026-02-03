import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "sheCares – Women’s Health Support Platform",
  description:
    "Women often lack accessible and reliable support during and after pregnancy, especially for emotional and postpartum care. Built a web-based health platform that combines expert-curated resources, a mood tracking tool, and an AI-powered chatbot to provide continuous, personalized, and supportive care for women.",
  tech: ["HTML", "CSS", "JavaScript", "AI Chatbot"],
      github: "https://github.com/msrujana19/sheCares-Health-care-website",
      demo: null
    },
    {
       title: "Sentiment Analysis Web App",
    description:
      "Customer reviews are unstructured and difficult to analyze at scale. Developed an NLP-based web application using transformer models to classify Amazon reviews and visualize sentiment patterns through an interactive interface.",
    tech: ["Python", "Hugging Face", "NLP", "Streamlit", "BERT"],
    github: "https://github.com/msrujana19/Sentiment-Analysis-Web-App",
    demo: null
    },
    {
      title: "Movie Recommendation System",
    description:
      "Finding relevant movies from large catalogs can be overwhelming for users. Built a recommendation system leveraging pre-trained models and embeddings from Hugging Face to suggest movies based on user preferences and similarity analysis.",
    tech: ["Python", "Hugging Face", "Machine Learning", "Pandas"],
    github: "https://github.com/msrujana19/Movie-Recommender",
    demo: null
    },
    {
      title: "Personal Portfolio Website",
    description:
      "Recruiters need a concise way to evaluate projects and skills. Designed and developed a responsive personal portfolio website to showcase technical skills, academic projects, and GitHub work.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/msrujana19/Portfolio",
    demo: null
    }
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <div className="section-label">PORTFOLIO</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-description">
          A selection of my recent projects demonstrating my skills in AI, web development, and data analysis
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header"></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="project-tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link project-link-github" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} className="project-link project-link-demo" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
