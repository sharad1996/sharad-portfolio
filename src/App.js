import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import {
  AboutData,
  ProfileDetails,
  ContactData,
  FactsData,
  ServicesData,
  SkillsData,
  TestimonialData,
  ResumeData,
  PortfolioData,
} from "./constant";

function App() {
  return (
    <div className="App">
      <Header ProfileDetails={ProfileDetails} />
      <Hero ProfileDetails={ProfileDetails} />
      <main id="main">
        <About aboutData={AboutData} />
        <Facts factsData={FactsData} />
        <Skills skillsData={SkillsData} />
        <Resume resumeData={ResumeData} />
        <Services servicesData={ServicesData} />
        <Testimonials testimonialData={TestimonialData} />
        <Portfolio PortfolioData={PortfolioData} />
        <Contact contactData={ContactData} />
      </main>
    </div>
  );
}

export default App;
