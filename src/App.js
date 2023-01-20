import React from 'react';
import { useState } from 'react';
import menu from './images/more.png';
import close from './images/close.png';
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

  const [buttonValue,setButtonValue] = useState(0);
  const [style,setStyle] = useState();
  const btnOpen = [<button><img src={menu}  onClick={handleClickOpen} alt="open" /></button>];
  const btnClose =[<button><img src={close} onClick={handleClickClose} alt="open" /></button>];

  function handleClickOpen(){
    setButtonValue(1);
    setStyle({display:'block'})
  }
  function handleClickClose(){
    setButtonValue(0);
    setStyle({display:'none'})
  }

  return (
    <nav className={navStyle}>
      <div className='container-fluid'>
        <span className='navbar-brand fw-bold' id='title'>{title}</span>
        {buttonValue == 0 ? btnOpen : btnClose}
      </div>
      <ul className='navbar-nav nav-flex ' id='nav-ul' style={style}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
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
          {/* description */}
          Our user-friendly website makes it easy to find what you're looking for,
          whether you're looking for the perfect reusable water bottle or stylish sustainable fashion.
        </div>
      </main>
      <hr className='my-4' />
    </section>

  );
}





export default App;