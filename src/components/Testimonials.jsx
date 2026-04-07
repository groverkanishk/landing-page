const galleryData = [
  {
    id: 1,
    title: 'Dashboard UI',
    backTitle: 'Analytics Dashboard',
    description: 'Real-time SaaS dashboard with 40+ chart types, dark mode, and full mobile support.',
  },
  {
    id: 2,
    title: 'Brand Identity',
    backTitle: 'Nexus Rebrand',
    description: 'Complete visual identity overhaul for a fintech startup — logo, palette, and design system.',
  },
  {
    id: 3,
    title: 'Mobile App',
    backTitle: 'Pulse Fitness App',
    description: 'Cross-platform fitness tracker with AI coaching, custom workouts, and wearable sync.',
  },
  {
    id: 4,
    title: 'E-Commerce',
    backTitle: 'Luxe Store',
    description: 'High-conversion fashion store with 3D product previews and one-tap checkout.',
  },
  {
    id: 5,
    title: 'CMS Platform',
    backTitle: 'ContentFlow CMS',
    description: 'Headless CMS with drag-and-drop builder, multi-language support, and real-time preview.',
  },
  {
    id: 6,
    title: 'Data Viz',
    backTitle: 'Market Intel Tool',
    description: 'Interactive market research platform with dynamic charts and exportable reports.',
  },
]

function Testimonials() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="section-head">
        <p className="section-tag">Our Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="section-sub">
          Hover over each project to reveal details.
          Six carefully selected works from our recent portfolio.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryData.map(item => (
          <div className="flip-wrap" key={item.id}>
            <div className="flip-inner">

              <div className="flip-front">
                <span>{item.title}</span>
              </div>

              <div className="flip-back">
                <h4>{item.backTitle}</h4>
                <p>{item.description}</p>
                <button className="flip-btn">View Case Study</button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Testimonials