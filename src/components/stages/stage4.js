const Stage4 = ()=>{

	return(
		<>
			<li className="timeline-header">
					<span className="button is-primary"><p className="has-text-dark" style={{marginRight: 10}}>ETAPA 4: </p> Construir API</span>
			</li>
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">FLASK</p>
					<p className="has-text-grey">Acá encontrarás algunas herramientas que te ayudarán en el proceso de desarrollo de tu API</p>
					<hr/>
					<ul>
						<li>
							<a target="_blank" href="#">
								<p className="has-text-weight-bold is-size-5">Documentación Oficial </p>
							</a>
							<a target="_blank" href="https://flask.palletsprojects.com/en/1.1.x/">
								<p className="has-text-grey-light">https://flask.palletsprojects.com/en/1.1.x/</p>
							</a>
							<a target="_blank" href="https://flask-sqlalchemy.palletsprojects.com/en/2.x/">
								<p className="has-text-grey-light">https://flask-sqlalchemy.palletsprojects.com/en/2.x/</p>
							</a>
							<a target="_blank" href="https://flask-jwt-extended.readthedocs.io/en/stable/">
								<p className="has-text-grey-light">https://flask-jwt-extended.readthedocs.io/en/stable/</p>
							</a>
							<a target="_blank" href="https://flask-email.readthedocs.io/en/latest/	">
								<p className="has-text-grey-light">https://flask-email.readthedocs.io/en/latest/	</p>
							</a>					
						</li>	
					</ul>

					</div>
			</li>
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">DEPLOY DE API EN HEROKU</p>
					<p className="has-text-grey">Aquí te dejamos un video explicando el paso a paso para realizar el deploy de tu API</p>
					<hr/>
					<ul>
						<li>
							<a target="_blank" href="https://www.loom.com/share/2d62a29ff9af48419161af489bb24610">
								<p className="has-text-weight-bold is-size-5">--> Video Explicativo</p>
							</a>
                        </li>
					</ul>

					</div>
			</li>

			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">API MOCK</p>
					<p className="has-text-grey">Recursos que permiten interactuar con APIS estáticas</p>
					<hr/>
					<ul>
						<li>
							<a target="_blank" href="https://jsonplaceholder.typicode.com">
								<p className="has-text-weight-bold is-size-5">JsonPlaceholder</p>
								<p className="has-text-grey-light">Free fake API for testing and prototyping.</p>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://reqres.in/">
								<p className="has-text-weight-bold is-size-5">Reqres.in/</p>
								<p className="has-text-grey-light">Test your front-end against a real API</p>
							</a>
						</li>
					
					</ul>

					</div>
			</li>


			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">APIS EXTERNAS</p>
					<p className="has-text-grey">Acá encontrarás algunas herramientas que te ayudarán en el proceso del diseño y desarrollo de tu base de datos</p>
					<hr/>
					<ul>
						<li>
							<a target="_blank" href="https://www.twilio.com/docs/sms/send-messages">
								<p className="has-text-weight-bold is-size-5">Twilio</p>
								<p className="has-text-grey-light">Permite enviar mensajes </p>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.whatsapp.com/business/api/?lang=es">
								<p className="has-text-weight-bold is-size-5">API de WhatsApp Business</p>
								<p className="has-text-grey-light">Impulsa tu comunicación con clientes alrededor del mundo, para que puedas contactarte con ellos a través de WhatsApp de forma simple, segura y confiable.</p>
							</a>
						</li>	
						<li>
							<a target="_blank" href="https://developers.facebook.com/">
								<p className="has-text-weight-bold is-size-5">Facebook for Developers</p>
								<p className="has-text-grey-light">Portal de desarrolladores de Facebook donde podrás acceder a API para Messenger, Instagram, Inteligencia Artificial, realidad Aumentada, entre otros</p>
							</a>
						</li>
						<li>
							<a target="_blank" href="http://www.omdbapi.com/">
								<p className="has-text-weight-bold is-size-5">The Open Movie Database</p>
								<p className="has-text-grey-light">The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.</p>
							</a>
						</li>
					</ul>

					</div>
			</li>
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">APIS COSTA RICA</p>
					<p className="has-text-grey">Acá encontrarás algunas herramientas que te ayudarán en el proceso del diseño y desarrollo de tu base de datos</p>
					<hr/>
					<ul>
						<li>
							<a target="_blank" href="https://datosabiertos.recope.go.cr/servicio-api">
								<p className="has-text-weight-bold is-size-5">API Público de RECOPE Costa Rica</p>
								<p className="has-text-grey-light">API que entrega información de valor del combustible</p>
							</a>
						</li>
						<li>
							<a target="_blank" href="https://github.com/CRLibre/API_Hacienda">
								<p className="has-text-weight-bold is-size-5">Comunidad Open Source Costa Rica</p>
								<p className="has-text-grey-light">En este repositorio estamos creando un API libre y componentes de software para simplificar el proceso de la Factura Electrónica requerido por el Ministerio de Hacienda de Costa Rica.</p>
							</a>
						</li>

						

					
					</ul>

					</div>
			</li>
		</>
	)
}

export default Stage4;
