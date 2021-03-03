
const Footer = ()=>{

	return(
		<footer className="footer">

        <div className="columns">
            <div className="column"></div>
            <div className="column">
                <nav className="level is-mobile">
                    {/* <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Clases</p>
                        <p className="title">27</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Realizadas</p>
                        <p className="title">9</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">Faltantes</p>
                        <p className="title">18</p>
                      </div>
                    </div> */}
                    
                  </nav>
            </div>
            <div className="column"></div>
        </div>
        

        <div className="content has-text-centered">
          <p>
            <strong>4Geeks Academy</strong> desarrollado por 
            <a href="https://www.linkedin.com/in/manuel-ortega-carcamo/">{'<Manu Ortega/>'}</a>
          </p>
        </div>

      </footer>
		
	)
}

export default Footer;