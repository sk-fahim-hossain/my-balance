import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='text-center my-3 '>
                <h2 className='text-green-500 text-5xl py-3 mb-3'>Welcome to My Balance</h2>
                <p className='text-xl text-blue-700 font-semibold'>To Enjoy in Your Wealthy Life Goto Profile First. <br></br>
                    Select or Create Your User
                </p>
                <NavLink className="btn" to="/profile">Profile</NavLink>
            </div>
        </div>
    );
};

export default Home;