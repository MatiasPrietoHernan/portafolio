import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import '../css/home.css';

const Home = () => {
  return (
    <div className="#e0e0e0 grey lighten-2">
    <nav>
      <div className="nav-wrapper #424242 grey darken-3">
        <ul id="nav-mobile" className="right hide-on-med-and-down color">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
    <br />
    <div id="about">
      <About />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </div>
  
  )
}

export default Home