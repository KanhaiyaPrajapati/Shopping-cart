import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header(props) {
  return (
    <>
        <div className='d-flex justify-content-between header'>
            <div>
                <h1 className='text-white px-5 py-3' onClick={()=>props.handleshow(false)} style={{cursor:'pointer'}}>Shopping Cart</h1>
            </div>
            <div className='text-white px-5 py-3 pt-3 fs-2'> Cart 
             <AddShoppingCartIcon onClick={()=>props.handleshow(true)} className='ms-1 me-1' style={{cursor:'pointer'}} /><sup> { props.count } </sup>  
            </div>
        </div>    
    </>

  )
}

export default Header