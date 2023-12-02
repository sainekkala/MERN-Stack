import React from 'react';
import{useForm} from "react-hook-form";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/api/users/login',data)
    .then((res) => {
      console.log(res.data)
      navigate('/')
    }).catch(error => console.log(error))
  };
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 d-flex m-auto border mt-5 ">
            <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
              <h3 className='text-center mb-5'>Login Form</h3>
             <div className='d-flex mb-4'>
              <label className='form-label me-5' htmlFor='email'>Email: </label>
              <input className='form-control' type='text' id='email'
              {...register("email",{required:true})}
              />
             </div>
              <div className='d-flex'>
              <label className='form-label me-4' htmlFor='password'>Password: </label>
              <input className="form-control" type='text' id='password'
              {...register("password",{required:true})}
               />
              </div>
              <div className='mt-5 text-center'>
              <button className='btn btn-primary'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
