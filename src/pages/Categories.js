import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = ({url}) => {

  const [categories,setCategories] = useState([])


  useEffect(()=>{
    fetchCategories()
  },[])

  const fetchCategories = () =>{
    axios({
      method:'get',
      url:`${url}/categories`
    }).then((response)=>{
      setCategories(response.data)
      
    })


  }


  return (
    <div className="text-center">
      <h1>Categories Page</h1>


      
      {categories.length !== 0 ?
        (
          categories.map((category)=>
            <div className="container-fluid display-flex" key={category.id}>

              <ul className="navbar-nav flex-column ">
                <li className="nav-item m-3" > 
                  <p className="nav-link active bg-primary-subtle fs-5 rounded " aria-current="page">{category.name}</p>
                </li>
              </ul>
          
            </div>
          )

        )
        :
        (
          <div className="container-fluid display-flex" >

            <ul className="navbar-nav flex-column ">
              <li className="nav-item m-3" > 
                <p className="nav-link active bg-primary-subtle fs-5 rounded " aria-current="page">there is no categories</p>
              </li>
            </ul>
          
          </div>
        )
        
       }
      
      
    </div>
  )
}

export default Categories
