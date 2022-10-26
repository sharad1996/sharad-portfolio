import Empplan from '../assets/empplan/empplan-login.png'
import Koo from '../assets/koo/koo-home.png'
import Costco from '../assets/costco/costco-home.png'

function Portfolio({ PortfolioData }) {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>{PortfolioData.description}</p>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={Empplan}
                style={{ height: '210px', width: '350px' }}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="https://www.empplan.com/"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={Koo}
                style={{ height: '210px', width: '350px' }}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="https://www.kooapp.com"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={Costco}
                style={{ height: '210px', width: '350px' }}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-links">
                <a
                  href="https://www.costco.com/"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;
