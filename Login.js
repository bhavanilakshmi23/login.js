import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
function Login() {
 
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  function handlesubmit (event){
    event.preventDefault();
    axios.post('http://localhost:3000//login',{email,password})
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

  }
  return (
  
    <div className='d-flex  vh-100 justify-content-center align-items-center bg-info'>
      <div className='p-3 bg-light w-30'>
        <h3  class='text-center  text-decoration-underline'>Login</h3>
        <form onSubmit={handlesubmit}>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="youremail@gmail.com" className='form-control'
            onChange={e=>setEmail(e.target.value)}/>
          </div>

          <div className='mb-3'>
            <label htmlFor="password">password</label>
            <input type="password" placeholder="*********" className='form-control'
            onChange={e=>setPassword(e.target.value)}/>
          </div>
          <button type="submit" className='btn btn-primary' >Login</button>
          <hr/>
          <span class="psw">Forgot <a href="#">password?</a></span><br/>
          <div>Don't have an account? <button className='btn btn-primary'>Register here</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login
