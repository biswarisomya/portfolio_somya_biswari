import About from "@/app/homepage/About/About";

import Resume from "@/app/homepage/Resume/Resume";
import Projects from "@/app/homepage/Projects/Projects";
import Home from "@/app/homepage/Home/Home";
import Interests from "@/app/homepage/Interests/Interests";
import Recommendations from "@/app/homepage/Recommendations/Recommendations";
import Contact from "@/app/homepage/Contact/Contact";
import Footer from "@/app/homepage/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Interests />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
