import { useEffect, useState } from "react"

function About() {

  const images = [
    "/Day.avif",
    "/Night.jpg",
    "/Sun.jpg",
    "/Night.avif"
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )

    }, 10000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="about-page" id="about">

      <div
        className="about-hero"
        style={{
          backgroundImage: `url(${images[currentImage]})`
        }}
      >

        <div className="about-overlay">
          <div className="about-hero-content">
            <span className="about-tag">
              ABOUT SETUU
            </span>

            <h1>
              Building Bridges That Create
              Meaningful Connections
            </h1>

            <p>
              Setuu represents the idea of a bridge —
              connecting people, opportunities,
              businesses, and investments through
              trust-driven relationships.
            </p>

            <p>
              We believe successful real estate and
              business consulting goes beyond transactions.
              It is about understanding aspirations,
              long-term goals, and creating partnerships
              that generate sustainable value.
            </p>

            <p>
              Our expertise spans strategic consulting,
              investment advisory, land opportunities,
              corporate solutions, and real estate
              development guidance tailored to every client.
            </p>

          </div>
        </div>
      </div>

      <div className="about-content">

        <div className="about-container">
          <div className="about-left">

            <p>
              Setuu delivers premium real estate consulting,
              strategic planning, and investment advisory
              services designed for modern businesses and
              forward-thinking investors.
            </p>

            <p>
              We focus on transparency, trust,
              and long-term partnerships that create
              sustainable growth and meaningful value.
            </p>

          </div>
          <div className="about-right">
            <div className="about-box">
              <h2>Our Vision</h2>

              <p>
                To become a trusted platform that connects
                people and opportunities while creating
                long-lasting impact through transparency,
                integrity, and innovation.
              </p>

            </div>
            <div className="about-box">

              <h2>Our Mission</h2>

              <p>
                To simplify complex investment and real
                estate decisions with strategic guidance,
                market expertise, and meaningful
                client relationships.
              </p>

            </div>
            <div className="about-box">

              <h2>Why Setuu?</h2>

              <p>
                We combine industry knowledge,
                professional excellence, and a
                people-first approach to help clients
                make confident and future-focused decisions.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About