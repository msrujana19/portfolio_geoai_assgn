import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="logo">SM</div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/srujana-m19/" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/msrujana19" className="social-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:mssrujana19@gmail.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="footer-text">© 2026 Srujana M. All rights reserved.</p>
        <p className="footer-tech">Built with React.js & Vite • Deployed on Vercel</p>
      </div>
    </footer>
  );
};

export default Footer;
