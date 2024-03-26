import {Routes , Route } from "react-router-dom"
import './App.css';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import ProductInfo from "./pages/ProductInfo";
import EditProduct from "./pages/EditProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Gallary from "./pages/Gallary";

function App() {
      
  const [products , setProducts]=useState([])
    
  const url="http://localhost:3500"

                                        //get All products
  const fetchAPI = async ()=>{

    axios({
      method: 'get',
      url: `${url}/products`,
    })
    .then((response)=>{
      setProducts(response.data)
    })

  }
  

  useEffect(()=>{
    setTimeout(() => {
      fetchAPI()
    }, );
    

  },[])

                                                //delete product

  const deleteProduct = (productID)=>{
    Swal.fire({
        title:"are you sure to delete this product ?",
        showCancelButton:true,
    }).then(async(result)=>{

        if(result.isConfirmed){
            //delete with axios
            axios({
                method:'delete',
                url:`${url}/products/${productID}`
            }).then((response)=>{
                fetchAPI()
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "you deleted product",
                  showConfirmButton: false,
                  timer: 1500
                });
            })
        }
    })
}
  return (
    <div className="App">

      <Nav />

      <div className="row mw-100">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>

        <div className="col-10">

          <Routes>
            <Route path="/" element ={<Home />} />

            <Route path="/gallary" element ={<Gallary
                products={products}
              />} 
            />

            <Route path="/products" element ={<Products 
                products={products}
                setProducts={setProducts}
                deleteProduct={deleteProduct}
                url={url}
                fetchAPI={fetchAPI}
              />}
            />

            <Route path="/products/:id" element ={<ProductInfo />} />
            <Route path="/products/add" element ={<AddProduct />} />

            <Route path="/products/edit/:id" element ={<EditProduct
                products={products}
                setProducts={setProducts}
                url={url}
              />} 
            />

            <Route path="/categories" element ={<Categories 
              url={url}  
              
            />} />
            
          </Routes>
        </div>
      
      </div>
        

    </div>
  );
}

export default App;





