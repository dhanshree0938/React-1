import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const receivedUserObject = {
    "username":"Dhanu",
    "email":"dhanu@gmail.com",
    "mobile":"91732864213"
  }
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues:receivedUserObject
    }
  );
  const navigate = useNavigate();

  const onRegister = (formData) => {
    console.log(formData);
    // send the registration details to server
    // if successful registration is done(from server side) then
    // show login form
    navigate("/login");
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          {/* Card with shadow */}
          <div
            className="card p-4"
            style={{
              boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px"
            }}
          >
            <h2 className="mb-4 text-center">Registration Page</h2>

            <form onSubmit={handleSubmit(onRegister)}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username"  {...register('username', {
                  required: "username is required",
                  minLength: {
                    value: 3,
                    message: "username must have atleast 3 characters"
                  }
                })
                } 
                style = {errors.username ? {"border" :"solid red"}:{"border" : "solid green"}}
                />
                {errors.username &&
                  <div className="alert alert-danger" role="alert">
                    {errors.username?.message}
                  </div>
                  }  
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Id</label>
                <input type="email" className="form-control" id="email"  {...register('email',{
                  required: "Email is required",
                })
                } 
                style = {errors.username ? {"border" :"solid red"}:{"border" : "solid green"}}
                />
                {errors.email &&
                  <div className="alert alert-danger" role="alert">
                    {errors.email?.message}
                  </div>
                  }  
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"  {...register('password')} />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword"  {...register('confirm password')} />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobile" {...register('mobile')} />
              </div>

              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}
