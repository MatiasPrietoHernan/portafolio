import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div className="#e0e0e0 grey lighten-2">
    <nav>
    <div className="nav-wrapper #424242 grey darken-3">
      <ul id="nav-mobile" className="right hide-on-med-and-down color ">
        <li><a>Sobre mí</a></li>
        <li><a>Proyectos</a></li>
        <li><a>Contacto</a></li>
      </ul>
    </div>
  </nav>
  <br />
  <About/>
  <Projects/>
  <Contact/>
    </div>
  )
}

export default Home