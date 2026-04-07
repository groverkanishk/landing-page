import { useState } from 'react'

const teamData = [
  {
    id: 1,
    initials: 'KG',
    name: 'Kanishk Grover',
    role: 'Creative Director',
    bio: '10+ years shaping brand identities for global companies. Believes great design solves real problems.',
    color: 'av-blue',
  },
  {
    id: 2,
    initials: 'DS',
    name: 'Dev Sehgal',
    role: 'Lead Developer',
    bio: 'Full-stack engineer and open-source contributor. Ships clean, performant code every single day.',
    color: 'av-teal',
  },
  {
    id: 3,
    initials: 'RG',
    name: 'Raghav Gupta',
    role: 'UX Strategist',
    bio: 'Transforms complex user journeys into delightful experiences backed by solid research.',
    color: 'av-amber',
  },
  {
    id: 4,
    initials: 'NP',
    name: 'Nina Patel',
    role: 'Motion Designer',
    bio: 'Specialist in micro-interactions and cinematic animations that make interfaces feel alive.',
    color: 'av-pink',
  },
]

function Team() {
  const [current, setCurrent] = useState(0)

  const visibleCount = 3
  const maxIndex = teamData.length - visibleCount

  function handlePrev() {
    setCurrent(current > 0 ? current - 1 : 0)
  }

  function handleNext() {
    setCurrent(current < maxIndex ? current + 1 : maxIndex)
  }

  const offset = current * (100 / visibleCount)

  return (
    <section className="team-section" id="team">

      <div className="section-head">
        <p className="section-tag">Our People</p>
        <h2 className="section-title">Meet the Team</h2>
        <div className="section-divider"></div>
        <p className="section-sub">
          A small but mighty crew of designers, engineers,
          and strategists obsessed with great work.
        </p>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={handlePrev}>&#8592;</button>

        <div className="carousel-track-outer">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {teamData.map(member => (
              <div className="team-card" key={member.id}>
                <div className={`team-avatar ${member.color}`}>
                  {member.initials}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow right" onClick={handleNext}>&#8594;</button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

    </section>
  )
}

export default Team