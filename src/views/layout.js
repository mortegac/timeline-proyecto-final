import React from 'react'
import {useLocation} from 'react-router-dom'
import Header from '../components/header';
import HeaderMin from '../components/headerMin';
import Nav from '../components/nav';
const Layout = ({children}) => {
  let location = useLocation()
  let {pathname} = {...location}

  return (
    <div className="">
      {
        ['/'].includes(pathname) ? 
          (<Header/>) 
          : (<HeaderMin/>)        
      
      }
      <Nav/>
      <div className="screen columns is-centered" style={{marginTop: 20}}>
        <div className="column is-one-fifth"></div>
        <div className="column is-centered" >

          <ul className="timeline is-centered">
            {children}
          </ul>

        </div>
        <div className="column is-one-fifth"></div>
      </div>
    </div>
      
  )
 
}

export default Layout
