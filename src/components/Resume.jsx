function Resume({ resumeData }) {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>{resumeData.description}</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>{resumeData.profileDetail.name}</h4>
              <p>
                <em>{resumeData.profileDetail.aboutProfile}</em>
              </p>
              <ul>
                <li>{resumeData.profileDetail.location}</li>
                <li>{resumeData.profileDetail.call}</li>
                <li>{resumeData.profileDetail.email}</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>{resumeData.education.graduateCourse}</h4>
              <h5>{resumeData.education.YOP}</h5>
              <p>
                <em>{resumeData.education.college}</em>
              </p>
              <p>{resumeData.education.collegeDetail}</p>
            </div>
            <div className="resume-item">
              <h4>{resumeData.education.graduateCourse}</h4>
              <h5>{resumeData.education.YOP}</h5>
              <p>
                <em>{resumeData.education.college}</em>
              </p>
              <p>{resumeData.education.collegeDetail}</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>{resumeData.experience.profile}</h4>
              <h5>{resumeData.experience.year}</h5>
              <p>
                <em>{resumeData.experience.project} </em>
              </p>
              <ul>
                <li>{resumeData.experience.companyOne}</li>
                <li>{resumeData.experience.companyTwo}</li>
                <li>{resumeData.experience.companyThree}</li>
                <li>{resumeData.experience.companyFour}</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>{resumeData.experience.profile}</h4>
              <h5>{resumeData.experience.year}</h5>
              <p>
                <em>{resumeData.experience.project} </em>
              </p>
              <ul>
                <li>{resumeData.experience.companyOne}</li>
                <li>{resumeData.experience.companyTwo}</li>
                <li>{resumeData.experience.companyThree}</li>
                <li>{resumeData.experience.companyFour}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
