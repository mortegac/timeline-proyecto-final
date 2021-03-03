


const Content = ()=>{

	return(

		<ul className="timeline is-centered">
			<li className="timeline-header">
					<span className="button is-primary"><p className="has-text-dark" style={{marginRight: 10}}>INICIO </p></span>
			</li> 
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">INSTRUCCIONES</p>
					<p className="has-text-grey">Debe desarrollar un producto completo, preparar una presentación y hacer una demostración de su idea. </p><a href="https://fullstack-final-project-mortegac.vercel.app"><p>Considerando estos requerimientos</p></a>
					<hr/>
					<p className="has-text-weight-bold is-size-4">FRONTEND</p>
					<p className="has-text-grey-light">Desarrollar aplicación web que cumpla con:</p>
					
					<ol>
						<li className="list-numerated">Considerar mínimo 5 vistas HTML5 utilizando CSS3 y Bootstrap</li>
						<li className="list-numerated">Implementar autenticación de usuarios</li>
						<li className="list-numerated">Vista de Login</li>
						<li className="list-numerated">Vista de Registros de usuarios</li>
						<li className="list-numerated">Vista de Recuperación de contraseña</li>
						<li className="list-numerated">Utilizar Reactjs, Patrón Flux y React Router</li>
					</ol>

					<p className="has-text-weight-bold is-size-4" style={{marginTop: 10}}>BACKEND</p>
					<p className="has-text-grey-light">Desarrollar una API web que cumpla con:</p>
					<ol>
						<li className="list-numerated">Autenticación OAuth</li>
						<li className="list-numerated">Integración de API de terceros</li>
						<li className="list-numerated">Realizar un CRUD</li>						
						<li className="list-numerated">Utilizar una base de datos</li>						
					</ol>

					<p className="has-text-weight-bold is-size-4" style={{marginTop: 10}}>METODOLOGIA</p>
					<p className="has-text-grey-light">Se realizarán el proyecto utilizando metodologías ágiles</p>
					<ol>
						<li className="list-numerated">Grupos de máximo 3 integrantes</li>
						<li className="list-numerated">Creación de tablero Kanban</li>
						<li className="list-numerated">Manejo de Sprint</li>						
						<li className="list-numerated">Creación de historias de usuarios</li>						
					</ol>

					</div>
			</li>
			<li className="timeline-header">
					<span className="button is-primary"><p className="has-text-dark" style={{marginRight: 10}}>ETAPA 1: </p> Diseñar la idea del proyecto</span>
			</li> 
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">WIREFRAME</p>
					<p className="has-text-grey">Un wireframe es una guía visual que representa el esqueleto o estructura de un sitio o aplicación.  A continuación tienes algunas aplicaciones que te ayudarán para construirlo</p>
					<hr/>
					<a href="https://balsamiq.com/wireframes/"><p className="heading">Balsamiq</p></a>
					<a href="https://www.mockflow.com/"><p className="heading">Aplicación Mockflow</p></a>
					<a href="https://www.figma.com/wireframe-tool/"><p className="heading">Figma</p></a>
					</div>
			</li>
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold sub-title is-size-3">HISTORIAS DE USUARIOS</p>
					<p className="has-text-grey">Para desarrollar nuestra idea utilizaremos metodología ágiles. Para identificar y planificar las tareas que nos comprometeremos a realizar utilizaremos un tablero Kanban</p>
					<hr/>
					<a href="https://trello.com/"><p className="heading">Trello</p></a>
					<a href="https://www.github.com/"><p className="heading">Github Project</p></a>
					</div>
			</li>
			
			<li className="timeline-header">
					<span className="button is-primary"><p className="has-text-dark" style={{marginRight: 10}}>ETAPA 2: </p> Construir Vistas</span>
			</li> 
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">Plantilla base</p>
					<p className="has-text-grey">Utilizar el siguiente boilerplate que incluye el FrontEnd y Backend </p>
					<hr/>
					<a href="https://github.com/4GeeksAcademy/react-flask-hello"><p className="heading">react-flask-hello</p></a>
					
					</div>
			</li>
		</ul>
	)

}

export default Content;