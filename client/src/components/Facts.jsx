function Facts({ factsData }) {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>{factsData.description}</p>
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="10"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Happy Clients</strong> {factsData.client}
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Projects</strong> {factsData.projects}
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Hours Of Support</strong> {factsData.support}
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Hard Workers</strong> {factsData.workers}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facts;
