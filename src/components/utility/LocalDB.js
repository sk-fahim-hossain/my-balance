import { useContext } from "react"
import { DataContext } from "../../Provider/DataProvider"


const LocalDb = () => {
    const {setUserAuthData} = useContext(DataContext)


    const loginInLocalDb = (email, userAuthInfo) => {
        localStorage.setItem(email, JSON.stringify(userAuthInfo))
        setUserAuthData(userAuthInfo)
        console.log('user in localDb')
    }

    const loginInfoFromLocalDb = (email) => {
        const userInfo = localStorage.getItem(email)
        const parsedData = JSON.parse(userInfo)
        return parsedData;
    }


    const logOutFromLocalDb = () => {

    }


    return {
        loginInLocalDb,
        loginInfoFromLocalDb,
        logOutFromLocalDb
    }

}


export default LocalDb;