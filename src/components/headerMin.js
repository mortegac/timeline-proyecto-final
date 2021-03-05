import logo from './ada.png';
const HeaderMin = ()=>{

	return(
    <section className="hero is-primary">
			<div className="hero-body">


			<div className="hero is-primary">
				<div className="navbar" >
					<div className="container">

						<div class="navbar-menu">
							<div className="navbar-start" style={{marginLeft: '20px'}}>
								<div className="navbar-item" id="header">
									<img className="size-imagen-logo-min" src={logo} alt="Logo"/>
								</div>
								<div className="navbar-item">
									<div>
										<p className="title">PROYECTO FINAL</p>
										<p className="subtitle">Material de Apoyo</p>
									</div>	
								</div>
							</div>
						</div>
						

					</div>
				</div>
			</div>	
				
			</div>
		</section>
	)
}

export default HeaderMin;