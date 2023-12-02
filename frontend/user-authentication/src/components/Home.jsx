import React from "react";
import {Link, Router} from "react-router-dom";
import Register from './Register';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Dashboard";


function Home() {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
               <nav className="d-flex justify-content-between bg-light">
                 <div className="ms-3 mt-2">
                    <h3>Users</h3>
                 </div>
                 <div className="links mt-2">
                    <Link to={'/login'}>LogIn</Link>
                    <Link to={'/register'}>SignIn</Link>
                 </div>
               </nav>
               <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path="/register" element={<Register />} />
               </Routes>
            </div>
        </div>
        </>
    )
};

export default Home;