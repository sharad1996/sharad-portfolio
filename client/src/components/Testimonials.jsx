import Empplan from "../assets/clients/client-empplan.jpeg";
import Koo from "../assets/clients/client-koo.jpeg";

function Testimonials({ testimonialData }) {

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>{testimonialData.description}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }} id="carouselExample1" className="carousel slide z-depth-1-half" data-ride="carousel">
          <div style={{ width: '75%' }} className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="testimonial-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonialData.feedBacks[0].description}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Koo} className="testimonial-img" alt="" />
                <h3>{testimonialData.feedBacks[0].clientName}</h3>
                <h4>{testimonialData.feedBacks[0].clientDesignation}</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonialData.feedBacks[1].description}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={Empplan} className="testimonial-img" alt="" />
                <h3>{testimonialData.feedBacks[1].clientName}</h3>
                <h4>{testimonialData.feedBacks[1].clientDesignation}</h4>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExample1" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample1" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
