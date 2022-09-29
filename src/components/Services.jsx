function Services({ servicesData }) {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>{servicesData.description}</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i className="bi bi-briefcase"></i>
            </div>
            <h4 className="title">
              <a href="">{servicesData.title}</a>
            </h4>
            <p className="description">{servicesData.servicesDescriptionOne}</p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon">
              <i className="bi bi-card-checklist"></i>
            </div>
            <h4 className="title">
              <a href="">{servicesData.title}</a>
            </h4>
            <p className="description">{servicesData.servicesDescriptionTwo}</p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
            <h4 className="title">
              <a href="">{servicesData.title}</a>
            </h4>
            <p className="description">
              {servicesData.servicesDescriptionThree}
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon">
              <i className="bi bi-binoculars"></i>
            </div>
            <h4 className="title">
              <a href="">{servicesData.title}</a>
            </h4>
            <p className="description">
              {servicesData.servicesDescriptionFour}
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon">
              <i className="bi bi-brightness-high"></i>
            </div>
            <h4 className="title">
              <a href="">{servicesData.title}</a>
            </h4>
            <p className="description">
              {servicesData.servicesDescriptionFive}
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon">
              <i className="bi bi-calendar4-week"></i>
            </div>
            <h4 className="title">
              <a href="">{servicesData.title}</a>
            </h4>
            <p className="description">{servicesData.servicesDescriptionSix}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
