import React from 'react'
import { Link } from 'react-router-dom'


const Products = ({products,deleteProduct}) => {

  return (
    <div>
        <h1 className="text-center"> products page </h1>
        <Link to="/products/add" className="btn btn-success text-end">Add New Product</Link>

        
                
                {products.length !== 0 ?
                (
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Operations</th>
                            </tr>
                        </thead>
                        <tbody>

                    {products.map((product)=>
                    
                        <tr key={product.id}>
                        
                            <th scope="row">{product.id}</th>
                            <td>{product.title}</td>
                            <td>{product.description.slice(0,50)}...</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger btn-sm ms-2" onClick={()=> deleteProduct(product.id)}>Delete</button>
                                <Link to={`/products/${product.id}`} className="btn btn-info btn-sm  ms-2">View</Link>
                                <Link to={`/products/edit/${product.id}`} className="btn btn-primary btn-sm ms-2">Edit</Link>
                            
                            </td>
                        </tr>
                    )
                    }
                        </tbody>
                    </table>
                )
                :

                (
                    <div className=" pt-5 ">
                        <h1>there is no products yet</h1>
                        <p>you can add new products </p>

                    
                    </div>
                )
                    
                }
                    
                
                
            
    </div>
  )
}

export default Products
