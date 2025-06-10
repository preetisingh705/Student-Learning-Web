import Landing  from "../Landing/Landing";
import Courses from "../Courses/Courses";
import Services from "../Services/Services";
import Events from "../Events/Events";
import Mentor from "../Mentor/Mentor";
import About from "../About/About"
import Contact from "../Contact/conatct";

function Home() {
 

  return (
    <div className="">
    <Landing />
    <Courses  />
    <Mentor />
    <Events />
    <Services />
    <About />
    <Contact />
    </div>
  )
}

export default Home;