function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-grid">

        <div className="footer-brand">
          <div className="footer-logo">SNAP<span>SHOT</span></div>
          <p>
            We are a creative agency crafting bold digital experiences
            for brands that want to stand out. Let's build something
            great together.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Motion</a></li>
            <li><a href="#">Strategy</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Get monthly insights on design and tech straight to your inbox.</p>
          <div className="newsletter-row">
            <input type="email" placeholder="Your email address" />
            <button>Go</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 <span>Snapshot</span>. All rights reserved.</p>
        <p>Inspired by TemplateMo — built in React JS</p>
      </div>

    </footer>
  )
}

export default Footer