import  { useState } from 'react';
import agendaSimple from '../assets/AgendaSimple.jpeg'
import climaApp from '../assets/ClimaApp.jpeg'
import crudBasico from '../assets/CrudBasico.jpeg'
import dashboardStreamlit from '../assets/DashboardStreamlit.jpeg'
import supermercado from '../assets/SupermercadoVacasFood.jpeg'
import esperanza from '../assets/Esperanza.jpeg'
import entrenamientoVentas from '../assets/entrenamientoVentas.jpeg'
import PypSevero from '../assets/PypSevero.jpeg'
import Polirubro from '../assets/Polirubro.png'
import '../css/projects.css';

const Projects = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (index:any) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const projects = [
        {
            title: "Agenda Básica",
            link: "https://incandescent-piroshki-70c29b.netlify.app/",
            description: "En este primer proyecto hice una agenda que solo muestra Contacto y que permite clasificar y desclasificar como favorito",
            image: agendaSimple
        },
        {
            title: "Crud Básico",
            link: "https://abmproductos.netlify.app/",
            description: "Este segundo proyecto hice un crud básico de un inventario",
            image: crudBasico
        },
        {
            title: "Aplicación de Clima",
            link: "https://climamatiasprieto.netlify.app/",
            description: "En este proyecto se logró hacer una petición a una api para que se traiga información de los climas en tiempo real",
            image: climaApp
        },
        {
            title: "Esperanza (Centro Psiquiátrico)",
            link: "https://github.com/MatiasPrietoHernan/Esperanza-psiquiatria",
            description: "Este proyecto se hizo para llevar el control de los pacientes psiquiátricos, sus progreso, su historial. Además tiene asignación de turnos.",
            image: esperanza
        },
        {
            title: "Dashboard en streamlit",
            link: "https://rtje9hegpctq33mfrcq6ed.streamlit.app/",
            description: "Este dashboard se diseñó para llevar analizar datos de diversas sucursales en distintos productos. Se usó pandas, matplotlib, y numpy",
            image: dashboardStreamlit
        },
        {
            title: "Pyp Severo (Tienda de panadería)",
            link: "https://pasteleria-frontend.onrender.com/",
            description: "Esta tienda se hizo en conjunto con otros compañeros, permite comprar productos desde una tienda integrando la api de mercado pago.",
            image: PypSevero
        },
        {
            title: "Supermercado Vaca's Food",
            link: "https://supermercadovacasfood.netlify.app//",
            description: "Lo que hace esta aplicación es un ABM de productos, permitiendo comprar y generando una factura de compra.",
            image: supermercado
        },
        {
            title: "Estimación de ventas diarias",
            link: "https://matiasiaprieto.streamlit.app/",
            description: "Lo que hace esta aplicación es estimar las ventas según un csv",
            image: entrenamientoVentas
        },
        {
            title: "Polirubro (POS)",
            link: "https://github.com/AugusRojas/PolirubroNuevo",
            description: "Esta aplicación fue desarrollada junto a compañeros de facultad. Lo que hace es registrar las ventas y pagos, así como impresión de ticket, control de stock e historial de ventas de un drugstore",
            image: Polirubro
        }
    ];

    return (
        <div className="container">
            <h3>Proyectos</h3>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col s3" key={index}>
                        <div
                            className={`card ${expandedCard === index ? "expanded" : "small"}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                <img src={project.image} alt="User Photo" className='responsive-img' />
                            </div>
                            <div className="card-content">
                                <h6>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.title}
                                    </a>
                                </h6>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
