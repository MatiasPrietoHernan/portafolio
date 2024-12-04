import userPhoto from '../assets/user.jpeg'

const Projects = () => {
    return (
        <>
        <div className="container">
        <h3>Proyectos</h3>
            <div className="row">
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Agenda simple</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Control de Stock simple</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Aplicación de Clima</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Aplicacación de reservas de bar Vaca's Food</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Alta, baja, modificación Vaca's Food (Bar)</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Esperanza (Centro Psiquiátrico)</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Agenda compleja</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Dashboard en streamlit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects