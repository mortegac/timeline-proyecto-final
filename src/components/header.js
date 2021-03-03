import Nav from './nav';
import logo from './ada.png';
const Header = ()=>{

	return(
		<>
		<section className="hero is-medium is-primary is-bold">
        {/* <div className="hero-head">
					<Nav/>
        </div> */}
        <div className="hero-body">
            <div className="container has-text-centered">

						<p class="title">
							<img className="size-imagen-logo" src={logo} alt="Logo"/>
							<div>
								<p className="title">PROYECTO FINAL</p>
								<p className="subtitle">Material de Apoyo</p>
							</div>
							
						</p>
            </div>
        </div>

        {/* <div className="hero-foot">
          <section className="section" style={{backgroundolor: 'transparent'}}>
              <h4 className="has-text-light has-text-centered">Porcentaje de avance 33%</h4>
              <progress className="progress is-medium" value="9" max="27"></progress>
          </section>
        </div> */}
				
    </section>
			<Nav/>
         
		</>
		
	)
}

export default Header;