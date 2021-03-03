const Nav = ()=>{

	return(
		<div className="hero is-primary">
			<nav className="navbar has-background-grey-dark">
			{/* <nav className="navbar is-fixed-top has-background-grey-dark"> */}
				<div className="container">
					{/* <div className="navbar-brand">
						<a className="navbar-item">
								<h1 className="has-text-white">4Geeks Academy</h1>
						</a>
						<span className="navbar-burger burger" data-target="navbarMenuHeroA">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div> */}
					<div className="navbar-menu">
						<div className="navbar-end">
							<a href="#uno" className="navbar-item is-active">INSTRUCCIONES</a>
							<a href="#uno" className="navbar-item">ETAPA 1</a>
							<a href="#dos" className="navbar-item">ETAPA 2</a>
							<a href="#tres" className="navbar-item">ETAPA 3</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav;