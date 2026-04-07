function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-logo">
            SNAP <span>SHOT</span>
        </div>

        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>

        <button className="nav-btn">Get in touch</button>
    </nav>
  );
}

export default Navbar;