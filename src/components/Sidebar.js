import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Fragment>
        <ul className="list-unstyled">
            <li><Link to="/products">Get All Products</Link></li>
            <li><Link to="/categories">Get All categories</Link></li>
            
        </ul>

    </Fragment>
   
  )
}

export default Sidebar
