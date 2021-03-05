import {FiChevronRight} from 'react-icons/fi'


const Instructions = ()=>{

	return(
		<>
				<li className="timeline-header">
					<span className="button is-primary"><p className="has-text-dark" style={{marginRight: 10}}>INICIO </p></span>
			</li> 
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">INSTRUCCIONES</p>
					<p className="has-text-grey">Debe desarrollar un producto completo, preparar una presentación y hacer una demostración de su idea. </p><a target="_blank" href="https://fullstack-final-project-mortegac.vercel.app"><p>Considerando estos requerimientos</p></a>
					<hr/>
					<p className="has-text-weight-bold is-size-4"><FiChevronRight size={18}/>FRONTEND</p>
					<p className="has-text-grey-light">Desarrollar aplicación web que cumpla con:</p>
					
					<ol style={{marginLeft:20}}>
						<li className="list-numerated">Considerar mínimo 5 vistas HTML5 utilizando CSS3 y Bootstrap</li>
						<li className="list-numerated">Implementar autenticación de usuarios</li>
						<li className="list-numerated">Vista de Login</li>
						<li className="list-numerated">Vista de Registros de usuarios</li>
						<li className="list-numerated">Vista de Recuperación de contraseña</li>
						<li className="list-numerated">Utilizar Reactjs, Patrón Flux y React Router</li>
					</ol>

					<p className="has-text-weight-bold is-size-4" style={{marginTop: 10}}><FiChevronRight size={18}/>BACKEND</p>
					<p className="has-text-grey-light">Desarrollar una API web que cumpla con:</p>
					<ol style={{marginLeft:20}}>
						<li className="list-numerated">Autenticación OAuth</li>
						<li className="list-numerated">Integración de API de terceros</li>
						<li className="list-numerated">Realizar un CRUD</li>						
						<li className="list-numerated">Utilizar una base de datos</li>						
					</ol>

					<p className="has-text-weight-bold is-size-4" style={{marginTop: 10}}><FiChevronRight size={18}/>METODOLOGIA</p>
					<p className="has-text-grey-light">Se realizarán el proyecto utilizando metodologías ágiles</p>
					<ol style={{marginLeft:20}}>
						<li className="list-numerated">Grupos de máximo 4 integrantes</li>
						<li className="list-numerated">Creación de tablero Kanban</li>
						<li className="list-numerated">Manejo de Sprint</li>						
						<li className="list-numerated">Creación de historias de usuarios</li>						
					</ol>

					<p className="has-text-weight-bold is-size-4" style={{marginTop: 10}}><FiChevronRight size={18}/>PLANTILLA BASE</p>
					<p className="has-text-grey-light">En esta plantilla tendrás lo necesario para construir tu aplicación</p>
					<ol style={{marginLeft:20}}>
						<li className="list-numerated"><a target="_blank" href="https://github.com/4GeeksAcademy/react-flask-hello">REACT - FLASK - HELLO</a></li>
					</ol>

						
						<hr/>

					</div>
			</li>
			
		</>
	)
}

export default Instructions;
