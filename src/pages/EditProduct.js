import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'

import Swal from 'sweetalert2'

const EditProduct = ({products, setProducts , url}) => {

    const [editTitle,setEditTitle]=useState("")
    const [editPrice,setEditPrice]=useState("")
    const [editDescription,setEditDescription]=useState("")
    const [editCategory,setEditCategory]=useState("")
    const [editImage,setEditImage]=useState("")

    const {id}=useParams()
    const product = products.find((product)=>(product.id)===id)

    const history =useNavigate()

    useEffect(()=>{
        
        if(product){
            setEditTitle(product.title)
            setEditPrice(product.price)
            setEditDescription(product.description)
            setEditCategory(product.category)
            setEditImage(product.image)

        }

    },[ product, setEditTitle, setEditPrice, setEditDescription, setEditCategory])


    const submitEdit = ()=>{
        axios.put(`${url}/products/${id}`,{
            title:editTitle,
            price:editPrice,
            description:editDescription,
            category:editCategory,
            image:editImage
        }).then((data)=>{
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Edit product successed",
              showConfirmButton: false,
              timer: 1500
            });
            history(`/products/${id}`);
            
          }).catch ((error)=>{
            console.error("error edit product", error)
            alert("there is something error")
          })

          
          

    }

  return (
    <Fragment>
      <h1 className="text-center">Edit Product</h1>

        {editTitle && 
            
            <form style={{maxWidth:"70%" , paddingLeft:"15%"}} onSubmit={(e)=>e.preventDefault()}>
            <img src={product.image} className="card-img-top pro-img rounded " alt="product-img"/>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-2">Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="product title"
                    value={editTitle}
                    onChange={(e)=>setEditTitle(e.target.value)}

                    
                />
            </div>
                
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-2">Price</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="product price"
                    value={editPrice}
                    onChange={(e)=>setEditPrice(e.target.value)}
                    
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fs-2"> Discription</label>
                <textarea 
                    rows="5"
                    className="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="product discription"
                    value={editDescription}
                    onChange={(e)=>setEditDescription(e.target.value)}
                    
                />
            </div>

        
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label fs-2"> Category</label>

                <div className="input-group mb-3">
                
                    <select className="form-select" id="inputGroupSelect02" value={editCategory} onChange={(e)=>setEditCategory(e.target.value)}>
                    
                    <option value="jewelery" >jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    </select>
                    
                </div>

                <button type="submit edit" className="btn btn-primary m-5" onClick={submitEdit}>Submit Edit</button>
                <Link to={`/products/${id}`} type="submit edit" className="btn btn-danger " >cancel</Link>

            </div>
        


                
        </form>
            
    
        }
        
        
                
        
      
    </Fragment>
  )
}

export default EditProduct





