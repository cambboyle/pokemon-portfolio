import './styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <div className="footer-credits">
          <p>Created with React and nostalgia.</p>
          <p className="save-text"> Game Saved! Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
