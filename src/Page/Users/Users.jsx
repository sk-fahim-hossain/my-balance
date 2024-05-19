import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../../Provider/DataProvider';
import LocalDb from '../../components/utility/LocalDB';
import toast, { Toaster } from 'react-hot-toast';


const Users = () => {
    const [users, setUsers] = useState([])
    const { setUserAuthData } = useContext(DataContext)
    const { loginInLocalDb } = LocalDb()

    useEffect(() => {
        fetch('https://my-balance-ejs4c3bet-fahim-hossains-projects.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    console.log(users)

    const handleSetUser = (user) => {
        setUserAuthData(user)
        toast.success('User Selected Successfully!', {
            position: "top-right"
        })
        loginInLocalDb(user.userEmail, user)
    }

    const handleDeleteUser = (user) => {
        console.log(user)
        fetch(`https://my-balance-hv9tve568-fahim-hossains-projects.vercel.app/user?email=${user.userEmail}`, {
            method : "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className='w-full h-fit mx-auto bg-slate-100 p-4 border m-3 rounded-lg '>
            {/* <Toaster
                position="top-right"
                reverseOrder={false}
            /> */}
            User No.{users.length}
            {
                users.map((user, i) => (<div key={i}>
                    <div className='bg-slate-200 rounded-lg mt-3 p-4 flex justify-between'>
                        <div className="">
                            <p>{user.userName}</p>
                            <p>{user.userPassword}</p>
                        </div>
                        <div>
                            <button onClick={() => handleSetUser(user)} className="btn btn-accent">Select User</button>
                            <button onClick={() => handleDeleteUser(user)} className="btn bg-red-500">Delete</button>
                        </div>
                    </div>

                </div>))
            }

            <NavLink to="/create-user" className="btn btn-sm w-fit text-white mt-5 bg-blue-500  hover:bg-blue-400">~~create user</NavLink>

        </div>
    );
};

export default Users;