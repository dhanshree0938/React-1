import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(email, password);
    // send to login details to server
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card"  style={{
              boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px"
            }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
