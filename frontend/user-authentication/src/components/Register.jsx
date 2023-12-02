import React from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';

function Register() {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:5000/api/users/register',data)
        .then((res) => {
            console.log(res.data)
            reset();
        }).catch(error => console.log(error))
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 d-flex m-auto border mt-5 ">
                        <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                            <h3 className='text-center mb-5'>Registration Form</h3>
                            <div className='d-flex mb-4'>
                            <label className='form-label me-3' htmlFor='UserName'>UserName: </label>
                            <input className='form-control' type='text' id='UserName'
                            {...register("username",{required:true})}
                            />
                            </div>
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
                            <button className='btn btn-primary'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Register;