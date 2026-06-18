import { Link } from "react-router-dom";
import { FaLessThan, FaGreaterThan  } from "react-icons/fa";

function HomeServices() {
  return (
    <section id="services" className="container-fluid services-container section-bg">
      <div className="section-title text-center m-5">
        <h2>Services That Empower You</h2>
        <p>From design to deployment — we build scalable, innovative digital experiences.</p>
      </div>

      <div className="row ms-5 me-5">
        <div className="col-12 col-md-6 col-lg-4 m-4">
          {/* card1 */}
          <div className="card rounded-5 border-0 shadow" style={{ width: '370px' }}>
            <img className="card-img-top rounded-5" 
              src="src/assets/images/web solutions.png" 
              alt="Card image" 
            />

            <div className="card-body ms-5 me-5 text-center">
              <div className="card-icon mb-3">
                <FaLessThan className="card-icon-left" />
                <FaGreaterThan className="card-icon-right" />
              </div>

              <div className="card-title">
                <h4>Web Solutions</h4>
                <p>High-performance websites and enterprise applications but with modern technology.</p>
              </div>
        
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          {/* card2 */}
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          {/* card3 */}
        </div>

      </div>
    </section>
  )
}

export default HomeServices
