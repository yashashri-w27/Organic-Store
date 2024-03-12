import React from 'react'
import {Link,BrowserRouter} from 'react-router-dom'
function Footer1() {
  return (
   <div>
    <div className='row bg-black text-secondary mt-5 p-5 border-bottom border-secondary'>
     <div className='col-5'>
        <img src='./images/organic-store-white-logo.png' alt=''/>
        <p className='mt-5 text-start fs-5'><b><i>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</i></b></p>
     </div> 
     <div className='col-3'>
        <h3 className='text-white mb-4'>Quick Links</h3>
        <BrowserRouter className='d-flex flex-column align-items-start'>
           <div><Link to='/About' className='text-secondary'>About</Link></div>
           <div><Link to='/Cart' className='text-secondary'>Cart</Link></div>
           <div><Link to='/Checkout' className='text-secondary'>Checkout</Link></div>
           <div><Link to='/Contact' className='text-secondary'>Contact</Link> </div>
           <div><Link to='/' className='text-secondary'>Home</Link></div>
           <div><Link to='/Account' className='text-secondary'>My Account</Link></div> 
           <div><Link to='/Shop' className='text-secondary'>Shop</Link> </div>
           <div className='mt-4'><h3 className='text-white mb-4'>Site Links</h3></div>
           <div><Link to='/Privacy' className='text-secondary'>Privacy Policy</Link></div>
           <div><Link to='/Shipping' className='text-secondary'>Shipping Details</Link></div>
           <div><Link to='/Offers' className='text-secondary'>Offers Coupons</Link></div>
           <div><Link to='/Terms' className='text-secondary'>Terms & Conditions</Link> </div>
        </BrowserRouter>
     </div> 
     <div className='col-4'>
     <h3 className='text-white mb-4 text-start'>Download Our Mobile App</h3>
     <p className='fs-5 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
     <h3 className='text-white mb-4 text-start mt-4'>Quick Links</h3>
     <div className='d-flex flex-column align-items-start'>
     <a href='#' className='text-success float-start'>Know More About Us</a>
     <a href='#' className='text-success'>Visit Store</a>
     <a href='#' className='text-success'>Let's Connect</a>
     <a href='#' className='text-success'>Locate Stores</a>
     </div>
     <img src='./images/play-store.png' alt='' className='w-25 mt-5 float-start'/>
     <img src='./images/app-store.png' alt='' className='w-25 mt-5 ms-4 float-start'/>
    </div> 
   
    </div>
    <div className='d-flex bg-black text-secondary p-5 align-items-start'>
    <div className='flex-grow-1'>
       <p className='fs-5 text-start'>Copyright &copy; 2023 | Organic Store</p>
    </div>
    <div>
      <a href='#'><i class="fa-brands fa-yelp text-secondary"></i></a>
      <a href='#'><i class="fa-brands fa-facebook text-secondary ms-4"></i></a>
      <a href='#'><i class="fa-brands fa-twitter text-secondary ms-4"></i></a>
      <a href='#'><i class="fa-brands fa-instagram text-secondary ms-4"></i></a>
    </div>
 </div>
 </div>
  )
}

export default Footer1