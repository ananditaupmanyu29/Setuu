import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp
} from "react-icons/fa"

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">

            <img
              src="/Logo.png"
              alt="logo"/>

            <div>
              <h2>Setuu</h2>
              <span>
                REAL ESTATE CONSULTANTS
              </span>
            </div>
          </div>

          <p>
            Transforming real estate investments through
            strategic advisory and data-driven insights
            since 2005. Your trusted partner in
            property excellence.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/setuu/"
              target="_blank">
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/setuu.realestate?igsh=MW80eWV2NXRsbmwwcQ=="
              target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h2>Contact Info</h2>
          <div className="contact-box">

            <a
              href="https://maps.google.com/?q=Vipul Plaza Sector 81 Faridabad"
              target="_blank">

              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
            </a>

            <div>
                <h3>Office Address</h3>

              <p>
                C-629, 6th Floor,
                Vipul Plaza, Sector-81,
                Faridabad, Haryana, India
              </p>
            </div>
          </div>

          <div className="contact-box">
            <div className="icon-box">
              <FaWhatsapp />
            </div>
            <div>
              <h3>WhatsApp</h3>
              <p>+91 92050 55070</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Setuu Real Estate Pvt. Ltd.
        </p>

        <div className="footer-links-bottom">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer