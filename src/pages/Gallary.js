import React, { Fragment } from 'react'
import t_shirt from '../images/t_shirt.jpg'

const Gallary = ({products}) => {
  return (
    <Fragment>

    <div className="container text-center">
      <div className="row py-4 ">

      {
        products.length !==0 ? 
        (
          products.map((product)=>

          <div className="col pb-3" key={product.id}>
            <div className="card" style={{"width": "19.5rem"}}>
              <img src={product.image} className="card-img-top" alt="..." style={{"maxHeight": "200px" , "minHeight": "200px"}}/>
              <div className="card-body"> 
                <h5 className="card-title">{product.title}</h5>
              </div>
            
            </div>
          </div>

          )


        )
        :
        (
          <Fragment>
          <div className="col pb-3">
          <div className="card" style={{"width": "19.5rem"}}>
          <img src={t_shirt} className="card-img-top" alt="..." style={{"maxHeight": "200px" , "minHeight": "200px"}}/>
          <div className="card-body"> 
          <h5 className="card-title">product title</h5>
          </div>
          
          </div>
          </div>
          <div className="col pb-3">
          <div className="card" style={{"width": "19.5rem"}}>
          <img src={t_shirt} className="card-img-top" alt="..." style={{"maxHeight": "200px" , "minHeight": "200px"}}/>
          <div className="card-body"> 
          <h5 className="card-title">product title</h5>
          </div>
          
          </div>
          </div>
          <div className="col pb-3">
            <div className="card" style={{"width": "19.5rem"}}>
            <img src={t_shirt} className="card-img-top" alt="..." style={{"maxHeight": "200px" , "minHeight": "200px"}}/>
            <div className="card-body"> 
              <h5 className="card-title">product title</h5>
            </div>
            
            </div>
          </div>
          <div className="col pb-3">
            <div className="card" style={{"width": "19.5rem"}}>
              <img src={t_shirt} className="card-img-top" alt="..." style={{"maxHeight": "200px" , "minHeight": "200px"}}/>
              <div className="card-body"> 
                <h5 className="card-title">product title</h5>
              </div>
            </div>
          </div>
            
          </Fragment>
        )
          

      }

      
        
      </div>
    </div>
  
    </Fragment>
  )
}

export default Gallary
