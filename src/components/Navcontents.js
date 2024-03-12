import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Groceries from './Groceries';
import Juice from './Juice';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Login from './Login';
import Everything from './Everything';
// import Everything1 from './Everything1';
import Dropdown from 'react-bootstrap/Dropdown';
import { Cartstate } from './Context';
import { Button } from 'react-bootstrap';
function Navcontents() {
  const {state:{cart},dispatch}=Cartstate()
  return (
    <BrowserRouter>
       <Navbar bg="white" data-bs-theme="light">
        <Container>
          <Navbar.Brand><Nav.Link><Link to='/'><img src='./images/organic-store-logo5.svg' alt=''/></Link></Nav.Link></Navbar.Brand>
          <Nav className="me-auto">
          
            <Nav.Link><Link to='/Everything'>Everything</Link></Nav.Link>
            <Nav.Link><Link to='/Groceries'>Groceries</Link></Nav.Link>
            <Nav.Link style={{marginRight:"300px"}}><Link to='/Juice'>Juice</Link></Nav.Link>
            <Nav.Link><Link to='/About'>About</Link></Nav.Link>
            <Nav.Link><Link to='/Contact'>Contact</Link></Nav.Link>
            <Nav.Link>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <i class="fa-solid fa-basket-shopping text-white"></i> <sup className='rounded-circle bg-success text-white p-1'>{cart.length}</sup>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {(cart.length>0)?(<>{cart.map((prod)=>(
        <div className="d-flex flex-row justify-content-evenly align-items-center" style={{width:"18rem"}}>
          <div><img src={prod.image} alt={prod.name} className='img-fluid' height="80" width="80"/></div>
          <div>{prod.name}</div>
          <div>{prod.price}</div>
          <div><i class="fa-solid fa-trash" onClick={()=>dispatch({
          type:"removefromcart",
          payload:prod,
        })}></i>
        
        </div>
        </div>
        ))}<Link to="/Cart">
        <Button variant='primary'>Go To Cart </Button>
      </Link></>):(<span>cart is empty</span>)}
        
        
      </Dropdown.Menu>
    </Dropdown>

              </Nav.Link>
            <Nav.Link><Link to='/Login'><i class="fa-solid fa-user"></i></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Everything' element={<Everything/>}/>
        {/* <Route path='/Everything1' element={<Everything1/>}/> */}
        <Route path='/Groceries' element={<Groceries/>}/>
        <Route path='/Juice' element={<Juice/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navcontents