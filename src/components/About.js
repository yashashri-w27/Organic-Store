import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function About() {
  return (
    <div>
      <div class="container bg-light p-5">
            <h1 class="display-3 text-center">About Us</h1>
            <div class="position-relative" style={{height: "200px"}}>
               
                <div class="position-absolute top-100 start-50 p-5 translate-middle">
                    <img src="./images/basil-leaf.png"/>
                </div>                
              </div>            
        </div>
        <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h1>We Are Your Favourite Store.</h1>
                <p class="fs-5 mt-3">Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
                <p class="fs-5">Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
            </div>
            <div class="col">
                <img src="./images/banner-01.jpg" class="img-fluid"/>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row bg-dark text-white fw-bold mt-5 mb-4 p-4">
            <div class="col"><h3>Numbers Speak For Themselves!</h3></div>
            <div class="col">
                <h1>5,000+</h1>
                <h5>Curated Products</h5>
            </div>
            <div class="col"> 
                <h1>800+</h1>
                <h5>Curated Products</h5></div>
            <div class="col">
                <h1>40+</h1>
                <h5>Product Categories</h5>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row gap-4">
            <div class="col">
            <Carousel>
      <Carousel.Item>
        <img src='./images/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./images/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./images/farming03-free-img-o9vzqvrix9ebgtwlxr5iwk27s1xblzkum1b4ivvlzc.jpg'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='./images/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg'/>
      </Carousel.Item>
    </Carousel>
    <div class="text-center mt-4">
                    <h6 class="text-warning">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </h6>
                      <p class="fs-5">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                      <div class="d-flex align-items-center justify-content-center">
                        <div class="flex-shrink-0">
                          <img src="./images/client02-free-img.png" alt="..."/>
                        </div>
                        <div class="ms-3">
                         Mila Kunis
                        </div>
                      </div>       
            </div>
          </div>
            <div class="col">
            <div class="d-flex mt-5">
                <div class="flex-shrink-0">
                  <img src="./images/organic-badge-freeimg.png" alt="..." class="img-fluid h-75 w-75"/>
                </div>
                <div class="flex-grow-1">
                  <h3 class="fw-bold">Certified Products</h3>
                  <p class="">Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <h1 class="fw-bold mt-4">We Deal With Various Quality Organic Products!</h1>
              <img src="./images/logo-leaf-new.png" class="img-fluid mt-4"/>
              <table class="table table-borderless fs-5 mt-4">
                <tbody>
                  <tr><td><i class="fa-regular fa-circle-check text-success"></i> Fresh Fruits</td><td><i class="fa-regular fa-circle-check text-success"></i> Beauty Products</td></tr>
                  <tr><td><i class="fa-regular fa-circle-check text-success"></i> Dry Fruits</td><td><i class="fa-regular fa-circle-check text-success"></i> Milk Products</td></tr>
                  <tr><td><i class="fa-regular fa-circle-check text-success"></i> Fresh Vegetables</td><td><i class="fa-regular fa-circle-check text-success"></i> Organic Honey</td></tr>
                  <tr><td><i class="fa-regular fa-circle-check text-success"></i> Dried Vegetables</td><td><i class="fa-regular fa-circle-check text-success"></i> Organic tea</td></tr>
                  <tr><td><i class="fa-regular fa-circle-check text-success"></i> Dried Vegetables</td><td></td></tr>
                </tbody>
              </table>
              <button type="button" class="btn btn1 text-white btn-lg mt-3"><i class="fa-solid fa-cart-shopping me-3"></i>  START SHOPPING</button>
            </div>
        </div>

            </div>
        </div>
    
  )
}

export default About