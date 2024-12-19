import '../css/contact.css';


const Contact = () => {
  return (
    <>
      <footer className="page-footer #424242 grey darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contacto</h5>
                <p className="grey-text text-lighten-4">Dirección: Argentina, San Miguél de Tucuman, Pasaje Misiones 171</p>
                <p className="grey-text text-lighten-4">Teléfono: +54 3816079212</p>
                <p className="grey-text text-lighten-4">Mails: matiasprietohernan@gmail.com</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/MatiasPrietoHernan" target='_blank'>Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!" target='_blank'>Linkedin</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/mattiprieto00" target='_blank'>Instagram</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://wa.me/+543816079212" target='_blank'>Whatsapp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
          </div>
        </footer>
            
    </>
  )
}

export default Contact