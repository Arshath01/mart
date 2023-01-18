import React from 'react';
import menu from './images/more.png';
import ProductCard from './Product';

const products = [
  {
    name:'Apple Airpods',
    model:'AirPods (3rd generation)',
    description:'Connectivity - Wireless',
    description2:'Battery capacity  - 5000 mAh',
    price:'Price  - $250',
  },
  {
    name:'Apple Airpods',
    model:'AirPods (3rd generation)',
    description:'Connectivity - Wireless',
    description2:'Battery capacity  - 5000 mAh',
    price:'Price  - $250',
  },
  {
    name:'Apple Airpods',
    model:'AirPods (3rd generation)',
    description:'Connectivity - Wireless',
    description2:'Battery capacity  - 5000 mAh',
    price:'Price  - $250',
  },
  {
    name:'Apple Airpods',
    model:'AirPods (3rd generation)',
    description:'Connectivity - Wireless',
    description2:'Battery capacity  - 5000 mAh',
    price:'Price  - $250',
  }

]

function App() {
  return (
    <>
      <Navbar title='E-Mart' />
      <div className='ms-3'>
        <Slogancontainer heading='Introducing Emart'subheading='Destination for the sustainable products' />
        {
          products.map((product)=>
            (
              <ProductCard product={product}/>
            )
          )
        }
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
        <ul className='navbar-nav nav-flex' id='nav-ul'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button><img src={menu}  alt="open" /></button>
      </div>
    </nav>
  );
}

function Slogancontainer({ heading, subheading }) {
  return (
    <section>
      <main className='pt-5 d-flex'>
        <div className="container  mt-4 py-3 ml-5" id='main-div'>
          <h2 className='h1 fw-bold text-dark'>{heading}</h2>
          <h1 className='h6 mb-4 text-dark'>{subheading}</h1>
          Our user-friendly website makes it easy to find what you're looking for, whether you're looking for the perfect reusable water bottle or stylish sustainable fashion.
        </div>
      </main>
      <hr className='my-4' />
    </section>

  );
}





export default App;