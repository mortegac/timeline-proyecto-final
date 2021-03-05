// import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {FiHome} from 'react-icons/fi'
import { NumberUno, NumberDos, NumberTres, NumberCuatro, NumberCinco, NumberSeis, NumberSiete, NumberOcho, NumberNueve, NumberCero } from './icon/';
const Nav = ()=>{

	// useEffect(() => {
	// 	window.addEventListener('DOMContentLoaded', () => {

	// 		// Get all "navbar-burger" elements
	// 		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
		
	// 		// Check if there are any navbar burgers
	// 		if ($navbarBurgers.length > 0) {
		
	// 			// Add a click event on each of them
	// 			$navbarBurgers.forEach( el => {
	// 				el.addEventListener('click', () => {
		
	// 					// Get the target from the "data-target" attribute
	// 					const target = el.dataset.target;
	// 					const $target = document.getElementById(target);
		
	// 					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
	// 					el.classList.toggle('is-active');
	// 					$target.classList.toggle('is-active');
		
	// 				});
	// 			});
	// 		}
		
	// 	});
	// }, []);

	return(
		<div className="hero is-primary">
			<nav className="navbar has-background-grey-dark">
				<div className="container">
					<div className="navbar-brand">
						<a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div class="navbar-menu" id="navMenu">
						<div className="navbar-start" style={{marginLeft: '90px'}}>

							<NavLink className="navbar-item" activeClassName="is-active" to='/' exact><FiHome size={24} /></NavLink>
							<span className="navbar-item">ETAPAS</span>
							<NavLink className="navbar-item" activeClassName="is-active" to='/stage1' exact><NumberUno size={24} /></NavLink>
							<NavLink className="navbar-item" activeClassName="is-active" to='/stage2' exact><NumberDos size={24} /></NavLink>
							<NavLink className="navbar-item" activeClassName="is-active" to='/stage3' exact><NumberTres size={24} /></NavLink>
							<NavLink className="navbar-item" activeClassName="is-active" to='/stage4' exact><NumberCuatro size={24} /></NavLink>
							{/* <NavLink className="navbar-item" activeClassName="is-active" to='/stage5' exact><NumberCinco size={24} /></NavLink> */}
							<NavLink className="navbar-item" activeClassName="is-active" to='/stage6' exact><NumberCinco size={24} /></NavLink>
							<NavLink className="navbar-item" activeClassName="is-active" to='/stage7' exact><NumberSeis size={24} /></NavLink>
						</div>
							
						<div className="navbar-end">
							<NavLink className="navbar-item" activeClassName="is-active" to='/all' exact>VER TODOS</NavLink>
						</div>

					</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav;