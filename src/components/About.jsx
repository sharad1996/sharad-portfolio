function About({ aboutData }) {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          {aboutData.description && <p>{aboutData.description}</p>}
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={aboutData.profileImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{aboutData.designation}</h3>
            <p className="fst-italic">
              {aboutData.designationDesc}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span></span>{aboutData.birthday}</li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{aboutData.website}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{aboutData.phone}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{aboutData.address}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{aboutData.age}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{aboutData.degree}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{aboutData.email}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{aboutData.jobType}:</strong> <span>{aboutData.availability}</span></li>
                </ul>
              </div>
            </div>
            <p>
              {aboutData.qualities}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
