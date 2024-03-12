import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
function Contact() {
  return (
    <div>
     <div class="container bg-light p-5">
            <h1 class="display-3 text-center">Get In Touch</h1>
            <div class="position-relative" style={{height: "150px"}}>
               
                <div class="position-absolute top-50 start-50 p-5 translate-middle">
                    <img src="images/basil-leaf.png"/>
                </div>                
              </div>
            
        </div>
        <div class="container shadow p-3" style={{marginTop: "-100px"}}>
        <div class="row mt-5 mb-4">
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title"><i class="fa-solid fa-phone-flip text-success"></i></h3>
                  <p class="card-text fs-5">+123 456 7890 <br/>
                    +123 456 7890</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card text-center">
                <div class="card-body">
                  <h3 class="card-title"><i class="fa-regular fa-envelope text-success"></i></h3>
                  <p class="card-text fs-5">info@example.com<br/>support@example.com</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
                <div class="card text-center">
                  <div class="card-body">
                    <h3 class="card-title"><i class="fa-solid fa-location-dot text-success"></i></h3>
                    <p class="card-text fs-5">1569 Ave, New York,<br/>
                        NY 10028, USA</p>
                  </div>
                </div>
              </div>
          </div>
    </div>
      <div class="container text-center mt-5">
        <h1 class="display-3">Frequently Asked Questions</h1>
        <img src="images/logo-leaf-new.png" class="img-fluid" />
        <div class="row mt-5">
          <div class="col">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>                 
                  <h5 class="fw-bold">Pulvinar nostrud class cum facilis?</h5>                  
                </Accordion.Header>
                <Accordion.Body>I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>                  
                  <h5 class="fw-bold">Pon excepturi numquam, facilis?</h5>                
                </Accordion.Header>                
                <Accordion.Body>I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.</Accordion.Body>                
              </Accordion.Item>

              <Accordion.Item eventKey='2'>
                <Accordion.Header>                 
                  <h5 class="fw-bold">Pon excepturi numquam, facilis?</h5>                  
                </Accordion.Header>                
                <Accordion.Body>I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.</Accordion.Body>                
              </Accordion.Item>
              </Accordion>
              </div>
              <div class="col">                
                <Accordion defaultActiveKey="3" flush>
                <Accordion.Item eventKey='3'>
                  <Accordion.Header>                    
                    <h5 class="fw-bold">Pon excepturi numquam, facilis?</h5>                   
                  </Accordion.Header>                 
                  <Accordion.Body>I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.</Accordion.Body>                  
                </Accordion.Item>

                <Accordion.Item eventKey='4'>
                  <Accordion.Header>                    
                    <h5 class="fw-bold">Consequat nesciunt fusce facilisi?</h5>                   
                  </Accordion.Header>                 
                  <Accordion.Body>I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nec ullamcorper mattis, pulvinar dapibus leo.</Accordion.Body>                 
                </Accordion.Item>

                <Accordion.Item eventKey='5'>
                  <Accordion.Header>                  
                    <h5 class="fw-bold">Consequat nesciunt fusce facilisi?</h5>                  
                  </Accordion.Header>                  
                  <Accordion.Body>I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nec ullamcorper mattis, pulvinar dapibus leo.</Accordion.Body>                  
                </Accordion.Item>
             
            </Accordion>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Contact