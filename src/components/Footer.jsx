import './Footer.css';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="logo">SM</div>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/srujana-m19/"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/msrujana19"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:mssrujana19@gmail.com"
            className="social-link"
            aria-label="Send email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-text">© 2026 Srujana M. All rights reserved.</p>
        <p className="footer-tech">
          Built with React & Vite • Deployed on Vercel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
