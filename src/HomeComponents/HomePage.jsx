import HomeServices from "./HomeServices"


function HomePage() {
  return (
    <>
    <section className="home-page min-vh-100">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <h1>Turning Vision into Digital Reality</h1>
            <h5 className="pt-4 pb-3">We craft digital experiences that inspire trust, accelerate growth, and shape a connected future.</h5>
            <button className="btn btn1 btn-warning border-0 rounded-3 px-4 py-2 text-white me-3 fw-bold mt-4">
              Start Your Project
            </button>

            <button className="btn btn2 rounded-3 px-4 py-2 text-white bg-danger fw-bold mt-4">
              See Our Work
            </button>
          </div>  
        </div>
      </div>
    </section>
    
    <HomeServices />
  
  </>  
  )
}

export default HomePage
