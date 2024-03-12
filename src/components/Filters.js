import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Cartstate } from './Context';
function Filters() {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    // const {dispatch,state:{sort}}=Cartstate()
  return (
    <div>
             <Form className="d-flex p-4">
            <Form.Control
              type="search"
              placeholder="Search Products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">&gt;</Button>
          </Form>
          <h4 className='text-dark'>Filter By Price</h4>
          <input type='range' min="10" max="40" step="1" value={count}
            onChange={(e) => setCount(e.target.value)} /><br /><br />
          <input type='text' value={"£" + count} className='w-25' />
          <input type='text' value={"£" + count1} className='w-25 ms-2' /><br /><br />
          <div className='text-start ms-5'>
            <Link to='/Groceries' className='text-success'>
              Groceries <span className='text-dark'>(10)</span></Link><br />
            <Link to='/Juice' className='text-success'>
              Juice <span className='text-dark'>(9)</span></Link>
          </div>
          <Card className='border-0 mt-5 mx-auto d-block bg-light' style={{ width: "16rem" }}>
            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success rounded-circle">
              <span>Sale!</span>
            </span>
            <Card.Img variant="top" src="./images/edible-oil-300x300.jpg" />
            <Card.Body>
              <Card.Title className='text-success'>Natural Edible Oil</Card.Title>
              <Card.Text>
                <p><s className='text-muted'>£34.00</s> £25.00</p>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card className='border-0 mx-auto d-block bg-light' style={{ width: "16rem" }}>
            <Card.Img variant="top" src="./images/sanitizer-300x300.jpg" />
            <Card.Body>
              <Card.Title className='text-success'>Hand Sanitizer</Card.Title>
              <Card.Text>
                <p>£15.00</p>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card className='border-0 mx-auto d-block bg-light' style={{ width: "16rem" }}>
            <Card.Img variant="top" src="./images/wheat-300x300 (1).jpg" />
            <Card.Body>
              <Card.Title className='text-success'>Wheat From Organic Farms</Card.Title>
              <Card.Text>
                <p>£34.00</p>
              </Card.Text>
            </Card.Body>

          </Card>
    </div>
  )
}

export default Filters