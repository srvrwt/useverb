import Logo from "/Logo-UseVerb.webp";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-menu">
        <div className="site-info">
          <a href="/" className="logo">
            <img src={Logo} alt="Useverb" />
          </a>
          <p>
            Join retail, hospitality, and people-focused businesses cutting
            their recruitment costs while finding better local talent
          </p>
        </div>
        <div className="footer-menu-wrap">
          <ul className="footer-nav">
            <li>
              <h5>Quick Links</h5>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>

            <li>
              <a href="/">Job Seeker</a>
            </li>
          </ul>
          <ul className="footer-nav">
            <li>
              <h5>Privacy</h5>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Useverb™ Inc. All rights reserved.</p>
        <Social />
      </div>
    </footer>
  );
}
