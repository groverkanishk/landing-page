const featuresData = [
  {
    id: 1,
    number: '01',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces crafted with deep user research, accessibility standards, and pixel-perfect execution.',
  },
  {
    id: 2,
    number: '02',
    title: 'Web Development',
    description: 'Performant, scalable web apps built with modern frameworks. Clean code, fast load times, and seamless integrations.',
  },
  {
    id: 3,
    number: '03',
    title: 'Brand Strategy',
    description: 'From visual identity to tone of voice — we shape brands that resonate with audiences and stand the test of time.',
  },
  {
    id: 4,
    number: '04',
    title: 'Motion & Animation',
    description: 'Micro-interactions and cinematic sequences that breathe life into interfaces and elevate every user touchpoint.',
  },
  {
    id: 5,
    number: '05',
    title: 'SEO & Analytics',
    description: 'Data-driven growth strategies that improve visibility, drive qualified traffic, and turn visitors into loyal customers.',
  },
  {
    id: 6,
    number: '06',
    title: 'Mobile Apps',
    description: 'Cross-platform React Native apps with native feel. Shipped to the App Store and Play Store on time, every time.',
  },
]

function Features() {
  return (
    <section className="features-section" id="about">

      <div className="section-head">
        <p className="section-tag">What We Do</p>
        <h2 className="section-title">Our Core Services</h2>
        <div className="section-divider"></div>
        <p className="section-sub">
          We blend strategy, design, and technology to deliver
          exceptional digital products for forward-thinking companies.
        </p>
      </div>

      <div className="features-grid">
        {featuresData.map(feature => (
          <div className="feat-card" key={feature.id}>
            <div className="feat-number">{feature.number}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Features