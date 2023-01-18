import React from 'react';
import menu from './images/more.png';

function App() {
  return (
    <>
      <Navbar title='E-Mart' />
      <div className='container'>
      <Slogancontainer
        heading='Introducing Emart'
        subheading='Destination for the sustainable products' />
      <Products/>
      </div>
    </>

  );
}

const navStyle = ['navbar fixed-top navbar-expand-lg navbar-light bg-white'];


function Navbar({ title }) {
  return (
    <nav className={navStyle}>
      <div className='container-fluid'>
        <span className='navbar-brand fw-bold' id='title'>{title}</span>
        <button><img src={menu} alt="open" /></button>
      </div>
    </nav>
  );
}

function Slogancontainer({ heading, subheading }) {
  return (
    <section>
      <main className='pt-5 d-flex'>
        <div className="container  mt-4 py-3 ml-5" id='main-div'>
          <h2 className='h1 fw-bold'>{heading}</h2>
          <h1 className='h6 mb-4'>{subheading}</h1>
          Our user-friendly website makes it easy to find what you're looking for, whether you're looking for the perfect reusable water bottle or stylish sustainable fashion.
        </div>
      </main>
      <hr className='my-4' />
    </section>

  );
}

function Products(){
  return(
    <section  className="container  mt-4 py-3 ml-5">
      <h2 className="h2">Products</h2>
      <div id="product-card" className='my-3 p-2'>
        <div id='product'>
          
        </div>
      </div>
    </section>
    
  );
}

export default App;