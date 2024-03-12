import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Home() {
  return (
    <div>
    <div className='container'>
    <div className='row mt-5'>
        <div className='col'>
            <img src='./images/organic-products-hero.png' alt=''/>
        </div>
        <div className='col text-start'>
        <img src='./images/logo-leaf-new.png' alt='' className='mt-4'/>
        <h5 className='mt-3'>Best Quality Products</h5>
        <h1 className='display-4 fw-bold'>Join The Organic Movement!</h1>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <Button variant="success" className='mt-4 p-3'><i class="fa-solid fa-cart-shopping me-2"></i> SHOP NOW</Button>{' '}
        </div>
    </div>
    </div>
    <div className='container-fluid'>
    <div className='row bg-black gap-2 align-items-center p-4'>
      <div className='col'>
      <Card style={{ width: '18rem' }} className='bg-dark text-white p-3'>
      <Card.Body className='d-flex justify-content-evenly'>
      <i class="fa-solid fa-truck text-success fs-3"></i>
      <div>
        <Card.Title className='fs-4'>Free Shipping</Card.Title>
        <Card.Subtitle className="mb-2 fs-5">Above $5 only</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
      </div>
      <div className='col'>
      <Card style={{ width: '18rem' }} className='bg-dark text-white p-3'>
      <Card.Body className='d-flex justify-content-evenly'>
      <i class="fa-regular fa-address-book text-success fs-3"></i>
      <div>
        <Card.Title className='fs-4'>Certified Organic</Card.Title>
        <Card.Subtitle className="mb-2 fs-5">100% Guarantee</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
        </div>
        <div className='col'>
        <Card style={{ width: '18rem' }} className='bg-dark text-white p-3'>
      <Card.Body className='d-flex justify-content-evenly'>
      <i class="fa-regular fa-money-bill-1 text-success fs-3"></i>
      <div>
        <Card.Title className='fs-4'>Huge Savings</Card.Title>
        <Card.Subtitle className="mb-2 fs-5">At Lowest Price</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
        </div>
        <div className='col'>
        <Card style={{ width: '18rem' }} className='bg-dark text-white p-3'>
      <Card.Body className='d-flex justify-content-evenly'>
      <i class="fa-solid fa-recycle text-success fs-3"></i>
      <div>
        <Card.Title className='fs-4'>Easy Returns</Card.Title>
        <Card.Subtitle className="mb-2 fs-5">No Questions Asked</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
        </div>
    </div>
   </div>
   {/* best selling products */}
   <div className='container text-center mt-5'>
    <h1 className='fw-bold'>Best Selling Products</h1>
    <img src='./images/logo-leaf-new.png' alt=''/>
    <CardGroup className='mt-4 gap-4'>
      <Card className='border-0'>
        <Card.Img variant="top" src="./images/coffee-asorted-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Groceries</h5>
          <Card.Title>Assorted Coffee</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p>£35.00</p>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='border-0'>
      <Card.Img variant="top" src="./images/sanitizer-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Groceries</h5>
          <Card.Title>Hand Sanitizer</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p>£15.00</p>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='border-0'>
      <Card.Img variant="top" src="./images/red-chillies-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Groceries</h5>
          <Card.Title>Handpicked Red Chillies</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p>£19.00</p>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='border-0'>
      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success rounded-circle">
    <span>Sale!</span>
  </span>
      <Card.Img variant="top" src="./images/edible-oil-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Groceries</h5>
          <Card.Title>Natural Edible Oil</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p><s className='text-muted'>£34.00</s> £25.00</p>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
   </div>
   <div className='bg-light'>
    <img src='./images/basil-leaf.png' alt=''/>
    <div className='container'>
    <CardGroup className='gap-4 mt-4'>
      <Card className='backimg1 border-0 shadow'>
       
        <Card.Body>
          <Card.Title className='fs-3'>Farm Fresh Fruits</Card.Title>
          <Card.Text className='text-center fs-5'>
          Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.
          </Card.Text>
          <Button variant="success" className='float-start m-4'>SHOP NOW <i class="fa-solid fa-arrow-right"></i></Button>{' '}
         
        </Card.Body>
        
      </Card>
      <Card className='backimg2 border-0 shadow'>
       
        <Card.Body>
        <Card.Title className='fs-3'>Fresh Vegetables</Card.Title>
          <Card.Text className='text-center fs-5 mb-3'>
          Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.
          </Card.Text>
          <Button variant="success" className='float-start m-4'>SHOP NOW <i class="fa-solid fa-arrow-right"></i></Button>{' '}
        </Card.Body>
        
      </Card>
      <Card className='backimg3 border-0 shadow'>
        
        <Card.Body>
        <Card.Title className='fs-3'>Organic Legume</Card.Title>
          <Card.Text className='text-center fs-5 mb-3'>
          Phasellus sed urna mattis, viverra libero sed, aliquam est.
          </Card.Text>
          <Button variant="success" className='float-start m-4'>SHOP NOW <i class="fa-solid fa-arrow-right"></i></Button>{' '}
        </Card.Body>
        
      </Card>
    </CardGroup>
    </div>
    <div className='bg-black text-white d-flex align-items-center justify-content-evenly mt-4 p-4'>
      <h2>Get 25% Off On Your First Purchase!</h2>
      <Button variant="success" className='mt-4'><i class="fa-solid fa-cart-shopping me-2"></i> SHOP NOW</Button>{' '}
    </div>
    <i class="fa-solid fa-caret-down fs-1 bottom-0 text-black translate-middle"></i>
    <h3 className='mt-2'>Try It For Free. No Registration Needed.</h3>
   </div>
   {/* Trending products */}
   <div className='container text-center mt-5'>
    <h1 className='fw-bold'>Trending Products</h1>
    <img src='./images/logo-leaf-new.png' alt=''/>
    <CardGroup className='mt-4 gap-4'>
      <Card className='border-0'>
        <Card.Img variant="top" src="./images/coffee-asorted-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Groceries</h5>
          <Card.Title>Assorted Coffee</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p>£35.00</p>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='border-0'>
      
      <Card.Img variant="top" src="./images/orage-juice-kariz-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Juice</h5>
          <Card.Title>Fresh Organic Juice</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p>£18.00</p>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='border-0'>
      <Card.Img variant="top" src="./images/sanitizer-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Groceries</h5>
          <Card.Title>Hand Sanitizer</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p>£15.00</p>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='border-0'>
      <Card.Img variant="top" src="./images/red-chillies-300x300.jpg" />
        <Card.Body>
          <h5 className='text-muted'>Groceries</h5>
          <Card.Title>Handpicked Red Chillies</Card.Title>
          <Card.Text>
           <p><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
           <p>£19.00</p>
          </Card.Text>
        </Card.Body>
        
      </Card>
     
    </CardGroup>
   </div>
   <div className='container text-center mt-5'>
    <h1 className='fw-bold'>Customer Reviews</h1>
    <img src='./images/logo-leaf-new.png' alt=''/>
    <div className='container'>
      <div className='row mt-5 align-items-end'>
        <div className='col'>
              <Card className='border-0 shadow mt-5'>
                <Card.Body>
                  <Card.Title>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </Card.Title>

                  <Card.Text className='mt-4'>
                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </Card.Text>
                  <div class="d-flex align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                      <img src="./images/client02-free-img.png" alt="..." />
                    </div>
                    <div class="ms-3">
                      Mila Kunis
                    </div>
                  </div>
                </Card.Body>
              </Card>
        </div>
        <div className='col'>
              <Card className="bg-dark text-white border-0 shadow" style={{height:'22rem'}}>
                <Card.Img src="./images/sydney-rae-668606-unsplash.jpg" alt="Card image"  className="opacity-50" style={{height:'22rem'}}/>
                <Card.ImgOverlay>
                  <Card.Title className='fs-2 fw-bolder'>Deal Of The Day 15% Off On All Vegetables!</Card.Title>
                  <Card.Text>
                  I am text block. Click edit button to change this tex em ips.
                  </Card.Text>
                  <Button variant="success" className='m-4'>SHOP NOW <i class="fa-solid fa-arrow-right"></i></Button>{' '}
                </Card.ImgOverlay>
              </Card>
        </div>
        <div className='col'>
        <Card className='border-0 shadow mt-5'>
                <Card.Body>
                  <Card.Title>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                    <i class="fa-solid fa-star text-warning"></i>
                  </Card.Title>

                  <Card.Text className='mt-4'>
                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </Card.Text>
                  <div class="d-flex align-items-center justify-content-center">
                    <div class="flex-shrink-0">
                      <img src="./images/client01-free-img.png" alt="..." />
                    </div>
                    <div class="ms-3">
                      Mike Sendler
                    </div>
                  </div>
                </Card.Body>
              </Card>
        </div>
      </div>
    </div>
    </div>
    <div className='container'>
      <div className='d-flex mt-5 align-items-center'>
        <div><h3>Featured Brands:</h3></div>
        <div><img src='./images/logo-4.svg' alt=''/></div>
        <div><img src='./images/logo-5.svg' alt=''/></div>
        <div><img src='./images/logo-2.svg' alt=''/></div>
        <div><img src='./images/logo-3.svg' alt=''/></div>
        <div><img src='./images/logo-1.svg' alt=''/></div>
      </div>
    </div>
    </div>
  )
}

export default Home