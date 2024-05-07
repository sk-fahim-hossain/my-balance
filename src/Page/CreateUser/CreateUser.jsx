import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import LocalDb from '../../components/utility/LocalDB';

const CreateUser = () => {
    const {loginInLocalDb} = LocalDb()


    const handleCreateUser = (e) => {
        e.preventDefault()
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;


        
        if (userName.length < 4) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Name should be more than 4 characters.",
            });
        }
        
        
        const userInfo = {
            userName,
            userEmail,
            userPassword
        }


        loginInLocalDb(userInfo.userEmail, userInfo)

        const userBalanceInfo = {
            userInsertedId: '',
            userName,
            userEmail,
            mainBalance: 0,
            income: {
              incomeBalance: 0,
              allIncomes: [],
            },
            cost: {
              costBalance: 0,
              allCosts: [],
            },
        }


        fetch("http://localhost:4000/create-user", {
            method: "POST",
            body: JSON.stringify({
                userInfo,
                userBalanceInfo
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
                    <form className="card-body" onSubmit={handleCreateUser}>
                        <h2 className='text-2xl border-b-2 border-slate-400 w-fit pb-2'>Create User</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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

export default CreateUser;