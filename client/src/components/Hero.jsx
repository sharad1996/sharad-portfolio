import Typed from 'react-typed';

function Hero({ ProfileDetails }) {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>{ProfileDetails.name}</h1>
        <p>I'm <span>
          <Typed
            strings={['Full Stack Developer', 'Freelancer', 'Contractor']}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </span></p>
      </div>
    </section>
  );
}

export default Hero;
