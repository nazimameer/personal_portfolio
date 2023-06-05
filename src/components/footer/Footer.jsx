import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Nazim Ameer</h2>
      
        <div className="footer__social">
          <a
            href="https://twitter.com/Nazim1056241412"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-twitter-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nazimameer/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/nazimameer"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
            © Nazim Ameer. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
