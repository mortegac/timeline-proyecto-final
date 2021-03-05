const Stage7 = ()=>{

	return(
		<>
			<li className="timeline-header">
				<span className="button is-primary"><p className="has-text-dark" style={{marginRight: 10}}>Herramientas : </p> Para trabajar en tu equipo</span>
			</li>
			<li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">HERRAMIENTAS</p>
					<p className="has-text-grey">Listado de links a herramientas necesarias para trabajar desde tu computador</p>
					<hr/>
					<ul>
						<li>
							<a target="_blank" href="https://code.visualstudio.com/">
								<p className="has-text-weight-bold is-size-5">Visual Studio Code</p>
								<p className="has-text-grey-light">El editor gratuito más utilizado</p>
							</a>
						
						
							<br />
							<p className="has-text-grey has-text-weight-bold is-size-5">Extensiones para Visual Studio Code </p>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">
								<p className="has-text-grey-light"><b>Gitlens: </b>Amplía las características de Git de Visual Studio Code</p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">
								<p className="has-text-grey-light"><b>Prettier: </b>Permite formatear tu código</p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare">
								<p className="has-text-grey-light"><b>Liveshare: </b>Permite editar y depurar de forma colaborativa con otros usuarios en tiempo real</p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh">
								<p className="has-text-grey-light"><b>Remote-ssh: </b>Permite utilizar cualquier máquina remota con un servidor SSH como entorno de desarrollo</p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync">
								<p className="has-text-grey-light"><b>Settings Sync: </b>permite sincronizar el estado de su VSCode entre varias instancias.</p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer">
								<p className="has-text-grey-light"><b>Bracket Pair Colorizer: </b>Permite identificar los corchetes correspondientes con colores.</p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker">
								<p className="has-text-grey-light"><b>Code Spell Checker: Corrector ortográfico básico que funciona bien con código camelCase</b></p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig">
								<p className="has-text-grey-light"><b>EditorConfig: </b>Reemplazar la configuración de usuario/espacio de trabajo con la configuración que se encuentra en el archivo .editorconfig</p>
							</a>
							<a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons">
								<p className="has-text-grey-light"><b>Vscode Icons: </b>Personaliza tu entorno de trabajo e identifica más fácil tus directorios y tipos de archivos con esta extensión.</p>
							</a>

							
							
						</li>
					
						{/* <li>
							<a target="_blank" href="http://www.omdbapi.com/">
								<p className="has-text-weight-bold is-size-5">The Open Movie Database</p>
								<p className="has-text-grey-light">The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.</p>
							</a>
						</li> */}
					</ul>
					
					

					</div>
			</li>


			{/* <li className="timeline-item">
					<div className="timeline-marker is-primary"></div>
					<div className="timeline-content">
					<p className="has-text-weight-bold is-size-3">PUBLICACION</p>
					<p className="has-text-grey">Detalle </p>
					<hr/>
					<a target="_blank" href="#"><p className="heading">VERCEL</p></a>
					<a target="_blank" href="#"><p className="heading">NETLIFY</p></a>
					<a target="_blank" href="#"><p className="heading">HEROKU</p></a>
					</div>
			</li> */}
		</>
	)
}

export default Stage7;
