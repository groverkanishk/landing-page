function HeroSection() {
  return (
    <section className="hero" id="home">

      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-tag">Creative Agency</div>

        <h1>
          We Create <span>Bold</span><br />
          Digital Experiences
        </h1>

        <p>
          Award-winning design and development studio crafting
          products that people love and businesses rely on.
        </p>

        <div className="hero-btns">
          <button className="btn-fill">View Our Work</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>

    </section>
  )
}

export default HeroSection