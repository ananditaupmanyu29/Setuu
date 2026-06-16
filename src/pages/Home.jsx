import { useState } from "react"
function Home() {
  const [showBox, setShowBox] = useState(false)
  return (
    <div className="hero">
      <div className="left">

        <h1>Welcome to House of Setuu</h1>

        <p>
            Setuu means "Bridge." A bridge that connects people,
            opportunities, and hearts.

            At Setuu, we believe that the strongest foundations
            are built not just on numbers or transactions,
            but on trust, understanding, and heart-to-heart
            connections.

            We go beyond deals to truly understand people,
            their goals, concerns, and long-term vision.

            Setuu acts as a bridge between investors,
            corporates, landowners, and opportunities,
            connecting them with clarity and confidence.

            Our approach is simple yet powerful:
            connect heart to heart, and then build value
            that lasts.
          </p>

        <button
          className="explore-btn"
          onClick={() => setShowBox(true)}
        >
          Explore
        </button>

      </div>

      <div className="right">

        <div className={`glass-box ${showBox ? "active" : ""}`}>

          <h2>With deep industry knowledge</h2>

          <p>
              Global relationships, and a people-first mindset
              Setuu brings together real estate expertise and
              business consulting under one trusted platform
              where every connection is meaningful and every
              decision is made with care.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home