import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from './Component/Header';
import CartListing from './Component/CartListing';
import Product from './Component/Product';

function App() {
  const [arr, setarr] = useState([])
  const [cart, setcart] = useState([])
  const [showcart, setshowcart] = useState(false)
  

  let addtocart = (data) =>{
  setcart([...cart,{...data,quantity:1}])
  console.log(data);
  }

  const handleshow = (value) =>{
    setshowcart(value)
  }

  return (
   <>

    <Header count = {cart.length} handleshow={handleshow}/>
    {
      showcart ?
      <Product cart={cart}/>
      :
      <CartListing arr={arr} setarr={setarr} addtocart={addtocart}/>
    }

    </>
  );
}
export default App;
