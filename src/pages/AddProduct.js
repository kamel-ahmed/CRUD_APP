import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const AddProduct = () => {
  const [title,setTitle]=useState("")
  const [price,setPrice]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState("")

  const history= useNavigate()


  const url="http://localhost:3500"


  const formSubmit =async (e)=>{
    e.preventDefault()
 
    axios.post(`${url}/products` , {
      title:title,
      price:price,
      description:description,
      category:category 
    })
    .then((data)=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You added a new product",
        showConfirmButton: false,
        timer: 1500
      });
    })

    history("/products")
  }


  return (
    <Fragment>
      <h1 className="text-center">Add New Product</h1>

      <form style={{maxWidth:"70%" , paddingLeft:"15%"}} onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-2"> Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            placeholder="product title"
            required
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-2">Price</label>
          <input 
            type="number" 
            className="form-control" 
            id="exampleInputEmail1" 
            placeholder="product price"
            required
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fs-2"> Discription</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            placeholder="product discription"
            required
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="exampleInputEmail1" className="form-label fs-2"> Category</label>

          <div className="input-group mb-3">
        
            <select className="form-select" id="inputGroupSelect02" required onChange={(e)=>setCategory(e.target.value)}>
              
              <option value="">chosse category...</option>             
              <option value="jewelery">jewelery</option>
              <option value="electronics" >electronics</option>
              <option value="electronics">men's clothing</option>
              <option value="women's_clothing">women's clothing</option>
            </select>
            
          </div>
        </div>
        


        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Fragment>
  )
}

export default AddProduct
