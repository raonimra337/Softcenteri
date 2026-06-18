
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <section>
        <div className="container-fluid p-0">

            {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
            <div className="container-fluid ps-5 pe-5 p-1">
                <div className='ps-5 pe-4'>
                    <Link to="/" className= "navbar-brand d-flex align-items-center fs-5 fw-bold text-white">
                        <img 
                            src= 'src/assets/images/softcenteric-logo-white.png'
                            alt="Logo" 
                            width="35"
                            className="d-inline-block align-text-top me-2"
                        />
                        Softcentric
                    </Link>
                </div>
                    
                <button
                    className="navbar-toggler shadow"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto gap-1 ">
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="/">
                                Home
                            </Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/services">
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/technologies">
                                Technologies
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/industries">
                                Industries
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/team">
                                Team
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/portfolio">
                                Portfolio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">
                                About
                            </Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="btn rounded-3 px-4 py-2 text-dark bg-white fw-semibold">
                                Contact Us
                            </button>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        </div>
        
      
    </section>
  )
}

export default Navbar

