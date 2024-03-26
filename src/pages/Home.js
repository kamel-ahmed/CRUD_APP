import React from 'react'

const Home = () => {
  return (
    
    <div className="container d-flex flex-column ">

      <header className="bg-primary-subtle p-4 text-center w-100">
        <h1>Welcome to  CRUD App</h1>
      </header>

      <main className="py-4">
        <section className="mb-5">
          <h2>About Us</h2>
          <p>This is a simple React app created to get and view API  <span><a href="/products">Get All Products</a></span>.
          and <span><a href="/categories"> Get All Categories</a></span> Data <br/> In JSON-Server.
          </p>
        </section>

        <section className="mb-4">
          <h2>Features</h2>
          <ul>
            <li>Easy to use</li>
            <li>Fast rendering</li>
            <li>Component-based architecture</li>
          </ul>
        </section>
      </main>

      
    </div>
  )
}

export default Home
