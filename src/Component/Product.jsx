import React, { useEffect, useState } from 'react'

function Product({cart}) {
    const [Updatevalue, setUpdatevalue] = useState([])
  

    useEffect(() => {
        setUpdatevalue(cart)
    }, [cart])
    
    return (
    <>
        {
            Updatevalue.map((x,i)=>{
             return(
                <div className='px-0 py-2' style={{border:'2px solid black'}}>
                    <span>{x.id}</span>
                    <img src={x.image} alt="" width={100} height={80} style={{objectFit:'contain'}} />
                    <h4>{x.title}</h4>
                    <button className='btn btn-warning px-3 ms-2'
                        onClick={() => {
                            const _CART = Updatevalue.map((item, index) => {
                                return i === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                            })
                            setUpdatevalue(_CART)
                        }}
                    
                    
                    >-</button>
                    <span className='fs-4'> {x.quantity} </span>
                    <button className='btn btn-warning px-3 ms-2 me-2'

                        onClick={() => {
                            const _CART = Updatevalue.map((item, index) => {
                                return i === index ? { ...item, quantity: item.quantity + 1 } : item
                            })
                            setUpdatevalue(_CART)
                        }}


                    >+</button>
                    <h5 style={{color:'red'}} className='mt-2'> Price = {x.price * x.quantity} $ </h5>
                </div>
             )   
            })
        }

        <h4 style={{textAlign:'right'}} className='px-5 mt-1 text-danger'> Total = 
             {
                Updatevalue.map(x => x.price * x.quantity ).reduce((total,value)=> total + value ,0)
            } $
        </h4>
    </>
  )
}

export default Product