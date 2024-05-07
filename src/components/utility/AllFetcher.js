import { useContext, useState } from "react"
import { DataContext } from "../../Provider/DataProvider"


const AllFetcher = () => {
    const { userBalanceInfo,setUserBalanceInfo } = useContext(DataContext)
    const [userBalanceData, setUserBalanceData] = useState([])


    const addIncome = (email, incomeInfo) => {
        fetch(`http//:localhost:4000/email=${email}`, {
            method: "POST",
            body: JSON.stringify(incomeInfo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // const getUserIncome = (email) => {
    //     console.log(email, "all fetcher trigered")
    //     fetch(`http://localhost:4000/user?${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserBalanceData(data)
    //         })
    // }
    


    return {
        addIncome,
    }
}

export default AllFetcher;