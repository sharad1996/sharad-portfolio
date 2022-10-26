function Hero({ ProfileDetails }) {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>{ProfileDetails.name}</h1>
        <p>I'm <span className="typed" data-typed-items="Coder, Developer, Freelancer, Contractor"></span></p>
      </div>
    </section>
  );
}

export default Hero;
