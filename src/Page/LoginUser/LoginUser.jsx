import React from 'react';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';


const LoginUser = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;



        fetch("http://localhost:4000/create-user", {
            method: "POST",
            body: JSON.stringify({
                userName,
                userEmail,
                userPassword
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New User Added Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                e.target.reset()
            })
    }
    return (
        <div>
            <div className="w-1/4 mx-auto">
                <div className=" mx-auto border rounded-lg mt-4 bg-slate-200 shadow-lg">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h2 className='text-2xl border-b-2 border-slate-400 w-1/5 pb-2'>Login</h2>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create User</button>
                        </div>
                    </form>

                </div>
                <NavLink to="/" className="btn mt-3 shadow-md"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                    Back to Home</NavLink>
            </div>
        </div>
    );
};

export default LoginUser;