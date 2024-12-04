import '../css/about.css';
import userPhoto from '../assets/user.jpeg';

const About = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <img className="col circle responsive-img imagen" src={userPhoto} alt="Foto de Matias Prieto" />
        <h2 className="col">Matías Prieto</h2>
      </div>
      <p className="texto">
        Soy un estudiante de programación de 20 años cursando mi última materia. Tengo conocimientos en lenguajes como:
        JavaScript, TypeScript, C# y Python. Soy hábil con Node.js, Visual Studio Code, Pip y metodologías ágiles. Proactivo,
        con ganas de crecer, habilidades blandas amplias y disfruto trabajar en equipo.
      </p>
      <p className="texto">Tengo experiencia y me desenvuelvo con facilidad en:</p>
      <ul>
        <li className='texto'><span className='material-icons'>done_outline</span> Stack Mern</li>  
        <li className='texto'><span className='material-icons'>done_outline</span> .NET Framework</li>  
        <li className='texto'><span className='material-icons'>done_outline</span> Scrum</li>  
      </ul>
      <p className='texto'>Aprendiendo:</p>
      <ul>
        <li className='texto'><span className="material-icons">arrow_right_alt</span> Java (SpringBoot)</li>
        <li className='texto'><span className="material-icons">arrow_right_alt</span> Nest Framework</li>
      </ul>
      <h4>Educación</h4>
      <div >
          <ul>
            <li className="texto">
              <span className="material-icons">school</span> Curso de Armado y Reparación de PCs - Instituto Protuc.
            </li>
            <li className="texto">
              <span className="material-icons">school</span> Asistente Contable - Universidad Tecnológica Nacional.
            </li>
            <li className="texto">
              <span className="material-icons">school</span> Educación Secundaria: Instituto Juan Pablo II -
              Especialización en Humanidades y Ciencias Sociales.
            </li>
            <li className="texto">
              <span className="material-icons">school</span> Tecnicatura Universitaria en Programación - Universidad
              Tecnológica Nacional.
            </li>
          </ul>
        </div>
        <br />
        <br />
    </div>
  );
};

export default About;
