import axios from 'axios'
import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import Product from './Product'

function CartListing({arr,setarr,addtocart}) {
  useEffect(() => {
    getapi()
  }, [])

  let getapi = () =>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      console.log(res.data);
      setarr([...res.data])
    }).catch((err)=>{
      console.log(err);
    })
  }
return (
   <>
   <div className='flex-container'>
    {
      arr.map((x,i)=>{
        return <div key={i} className='card-container px-3 py-3'>
        <Card style={{ width: '25rem' }} >
       <Card.Text>{x.id}</Card.Text>   
      <Card.Img variant="top" src={x.image} width={100} height={100} style={{objectFit:'contain'}} className='my-3' />
      <Card.Body>
        <Card.Title>{x.title}</Card.Title>
        <Card.Text>Price :- {x.price}</Card.Text>
        <Card.Text>desc :- Shopping Cart {}</Card.Text>
        <Card.Text> Cate :- {x.category}</Card.Text>
        <Card.Text>Rating :- ***{}</Card.Text>
        <div className='text-center'>
          <Button variant="primary" onClick={()=>addtocart(x)}>Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
        </div>
      })
    }
    </div>
   </>
  )
}

export default CartListing