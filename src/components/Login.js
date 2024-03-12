import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div>
      <div className="container mt-5">
        <img src="./images/organic-badge-freeimg.png" className="img-fluid mx-auto d-block"/>
        <div className="border h-50 w-50 mx-auto d-block mt-5 p-4">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fs-5">Username or Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label fs-5">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput2"/>
            </div>
            <div className="d-flex mb-3">
                <div className="form-check flex-grow-1">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                     Remember Me
                    </label>
                </div>
                <div><button type="button" className="btn btn-primary btn-sm">Log In</button></div>
            </div>
        </div>
        <div className="text-center mt-4">
        <Link to="#" className="fs-6">Lost your password?</Link><br/>
        <Link to='/' className="fs-6"><i className="fa-solid fa-arrow-left"></i> Go To Organic Store</Link>
        </div>
    </div>
    </div>
  )
}

export default Login