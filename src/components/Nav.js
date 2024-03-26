import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   
        <nav className="navbar navbar-expand-lg bg-body-tertiary " >
            <div className="container-fluid px-5" style={{fontSize:"25px"}}>
                <a className="navbar-brand ms-5" href="/" style={{fontSize:"40px"}}>Logo</a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                        <li className="nav-item ">
                            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/gallary">Gallary</Link>
                        </li>
                        
                    
                   
                    
                    </ul>
                </div>
            </div>
        </nav>
    
  )
}

export default Nav
