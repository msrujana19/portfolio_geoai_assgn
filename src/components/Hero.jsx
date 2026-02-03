import './Hero.css';
import profilePhoto from "../photo/profile.jpg";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">GEOAI INTERN</div>
          <h1>Srujana M</h1>
          <div className="hero-role">Gesix GeoAI Intern</div>
          <p className="hero-description">
            Passionate about leveraging AI and geospatial technologies to solve real-world challenges. 
            Experienced in machine learning, computer vision, and GIS applications for environmental 
            and urban planning solutions.
          </p>
          <div className="hero-buttons">
            <a 
              href="#projects" 
              className="btn btn-primary" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              View My Projects <i className="fas fa-arrow-right"></i>
            </a>
            <a href="/resume.pdf" className="btn btn-secondary">
              Download Resume <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-bg"></div>
          <img 
  src={profilePhoto}
  alt="My professional headshot"
  className="hero-image"
/>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
