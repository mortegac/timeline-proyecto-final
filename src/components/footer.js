import { NavLink } from 'react-router-dom';
import {FiHome} from 'react-icons/fi';
import { NumberUno, NumberDos, NumberTres, NumberCuatro, NumberCinco, NumberSeis, NumberSiete, NumberOcho, NumberNueve, NumberCero } from '../components/icon';
const Footer = ()=>{

	return(
		<footer className="footer">

        <div className="columns">
            <div className="column"></div>
            <div className="column">
                <nav className="level is-mobile">
                  {/* <div className="navbar" style={{marginLeft: '90px'}}> */}

                    <NavLink className="navbar-item" activeClassName="is-active" to='/' exact><FiHome size={24} /></NavLink>
                    <span className="navbar-item">ETAPAS</span>
                    <NavLink className="navbar-item" activeClassName="is-active" to='/stage1' exact><NumberUno size={24} /></NavLink>
                    <NavLink className="navbar-item" activeClassName="is-active" to='/stage2' exact><NumberDos size={24} /></NavLink>
                    <NavLink className="navbar-item" activeClassName="is-active" to='/stage3' exact><NumberTres size={24} /></NavLink>
                    <NavLink className="navbar-item" activeClassName="is-active" to='/stage4' exact><NumberCuatro size={24} /></NavLink>
                    {/* <NavLink className="navbar-item" activeClassName="is-active" to='/stage5' exact><NumberCinco size={24} /></NavLink> */}
                    <NavLink className="navbar-item" activeClassName="is-active" to='/stage6' exact><NumberCinco size={24} /></NavLink>
							<NavLink className="navbar-item" activeClassName="is-active" to='/stage7' exact><NumberSeis size={24} /></NavLink>
                    <NavLink className="navbar-item" activeClassName="is-active" to='/all' exact>VER TODOS</NavLink>
                    {/* </div> */}
                </nav>
            </div>
            <div className="column"></div>
        </div>
        

        <div className="content has-text-centered">
          <p>
            <strong>4Geeks Academy</strong>
            <br />
            desarrollado por 
            <a target="_blank" href="https://www.linkedin.com/in/manuel-ortega-carcamo/">{'<Manu Ortega/>'}</a>
            <br />
            colaboradores 
            <a target="_blank" href="mailto:enaguero@gmail.com">{'<Erwin Aguero/>'}</a>
            <a target="_blank" href="mailto:labarca.manu@gmail.com">{'<Manuel Labarca/>'}</a>
            <a target="_blank" href="mailto:pablobullor@gmail.com">{'<Pablo Bullor/>'}</a>
            <a target="_blank" href="mailto:diegosl@hotmail.cl">{'<Diego Sepúlveda/>'}</a>
            <a target="_blank" href="mailto:ehiber5@hotmail.com">{'<Ehiber Graterol/>'}</a>
            
          </p>
        </div>

      </footer>
		
	)
}

export default Footer;