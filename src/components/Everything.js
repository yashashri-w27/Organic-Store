import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination';
import Filters from './Filters';
import { Cartstate } from './Context';
function Everything() {  
const {state:{data,cart,category,sort},dispatch}=Cartstate()
console.log(cart)
 const transformProducts=()=>{
  let sortedProducts=data
  if(category)
  {
    sortedProducts=sortedProducts.filter((prod)=>prod.category!=="Groceries")
  }
  if (sort){
    sortedProducts=sortedProducts.sort((a,b)=>sort==="lowtohigh"?a.price-b.price:b.price-a.price)
  }
  return sortedProducts
 }
  return (
    <div>
      <div className='row bg-light text-secondary'>
        <div className='col-3 border-end border-secondary'>
          <Filters/>
        </div>
        <div className='col-9 p-4'>
          <Breadcrumb>
            <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>

            <Breadcrumb.Item active className='s'>Shop</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className='text-success text-start display-3 fw-bold'>Shop</h1>
          <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <div className='flex-grow-1 fs-5 text-start'><p>Showing 1-9 of 12 results</p></div>
            <div>
              <Form.Select aria-label="Default select example" className='border-0 fs-5 text-muted' onChange={()=>dispatch({
                    type:"sortbyprice",
                    payload:"lowtohigh"
                })}>
                <option>Default Sorting</option>
                <option value="1">Sort by popularity</option>
                <option value="2">Sort by average rating</option>
                <option value="3">Sort by latest</option>
                <option value="4" selected={sort==="lowtohigh"?true:false}>Sort by price: low to high</option>
                <option value="5" selected={sort==="hightolow"?true:false}>Sort by latest: high to low</option>
              </Form.Select>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-sm-3 g-4 mt-3'>
            {
              transformProducts().map((item, index) => {
                return (
                  <Card className='border-0' key={index}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <h5 className='text-muted'>{item.category}</h5>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
                        <div className='d-flex align-items-center justify-content-evenly'>
                        <p className='me-4'>£{item.price}</p>
                        {
                          cart.some((p)=>p.id===item.id)?(<Button variant="danger"
                           onClick={()=>dispatch({
                            type:"removefromcart",
                            payload:item
                           })}>Remove </Button>):(
                        <Button variant="success" disabled={!item.stock} onClick={()=>dispatch({
                          type:"addtocart",
                          payload:item
                        })}
                        ><i class="fa-solid fa-cart-shopping"></i>
                        </Button>)
                        }
                        </div>
                      </Card.Text>
                    </Card.Body>

                  </Card>
                )
              })
            }
          </div>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item> <Link to='/Everything' className='text-success'>
              1</Link></Pagination.Item>
            <Pagination.Item><Link to='/Everything1' className='text-success'>
              2</Link></Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </div>
  )
}

export default Everything