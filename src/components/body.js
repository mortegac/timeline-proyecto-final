import Content from './content';
const Body = ()=>{

	return(
	  <div className="columns is-centered" style={{marginTop: 20}}>
        <div className="column is-one-fifth"></div>
        <div className="column is-centered" >
          <Content/>
        </div>
        <div className="column is-one-fifth" ></div>
      </div>
		
	)
}

export default Body;