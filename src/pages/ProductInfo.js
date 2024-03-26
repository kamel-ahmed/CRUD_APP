import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductInfo = () => {
  const [productInfo , setProductInfo] = useState({})

  const {id}=useParams()
  const url="http://localhost:3500"
  
  useEffect(()=>{
    const fetchProductInfo = async ()=>{
      
      axios({
        method:'get',
        url:`${url}/products/${id}`
      }).then((response)=>{
        setProductInfo(response.data)
      })


      // try{
      //   const response = await fetch(`${url}/products/${id}`)
      //   const allDetails = await response.json()
      //   setProductInfo(allDetails)
        

      // }catch (err){
      //   alert("error")
      // }

    }
    fetchProductInfo()
    // console.log(productInfo.rating.rate)
  },[id])
  return (
    <div className="text-center mt-2">
      <h1>Product Details</h1>

      <div className="card mb-3" >
        <img src={productInfo.image} className="card-img-top pro-img" alt="product-img"/>
        <div className="card-body">
          <h2 className="card-title">Name: {productInfo.title} </h2>
          <h4> Categry: {productInfo.category}</h4>
          <p className="card-text">description: {productInfo.description}</p> 

          <h2 className="card-text text-start">price: {productInfo.price} $</h2>

          <div className='text-end'>
          
          <a href={`/products/edit/${productInfo.id}`} className="btn btn-primary btn-sm ms-2">Edit Product</a>
          </div> 
        
        </div>
      </div>
      
      
      
      
    </div>
  )
}

export default ProductInfo
