import React, { useContext, useEffect, useState } from 'react';
import LocalDb from '../../components/utility/LocalDB';
import { DataContext } from '../../Provider/DataProvider';
import { Navigate, useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const { userAuthData, userBalanceInfo, setUserBalanceInfo, } = useContext(DataContext);
    const { loginInfoFromLocalDb } = LocalDb();
    const user = loginInfoFromLocalDb(userAuthData?.userEmail);
    const [dashboardData, setDashboardData] = useState({})

    const navigate = useNavigate();


    if (!user) {
        const result = alert('Create user or Select any user')
        return <Navigate to="/profile" replace={true}></Navigate>

    } else {
        useEffect(() => {
            fetch(`https://my-balance-l5kqes6ka-fahim-hossains-projects.vercel.app/user?${user.userEmail}`)
                .then(res => res.json())
                .then(data => {
                    setUserBalanceInfo(data)
                    setDashboardData(data)
                    console.log(data && data)
                })
        }, [])

        const allIncomesBalance = dashboardData?.income?.allIncomes?.length
        // console.log(arr)

        return (
            <div className='p-4'>
                <h2 className='text-3xl'>{user && 'Welcome'} <span className='text-green-500'>{user && user.userName}</span></h2>
                <p>Dashboard</p>

                <div className=' border border-dashed'></div>
                <div>
                    {dashboardData && <>


                        <p>Name: {dashboardData?.userName}</p>
                        <p>Email: {dashboardData?.userEmail}</p>
                        <p className='text-red-500'>Main Balance: {dashboardData?.mainBalance}</p>
                        <p className='text-green-500'>income Balance: {dashboardData?.income?.incomeBalance}</p>
                        <p className='text-green-500'>income No.: {dashboardData && allIncomesBalance}</p>

                    </>}
                </div>
            </div>
        );
    }


};

export default Dashboard;