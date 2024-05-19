import { useContext, useState } from "react"
import { DataContext } from "../../Provider/DataProvider"


const AllFetcher = () => {
    const { userBalanceInfo,setUserBalanceInfo } = useContext(DataContext)
    const [userBalanceData, setUserBalanceData] = useState([])


    const addIncome = (email, incomeInfo) => {
        fetch(`https://my-balance-hv9tve568-fahim-hossains-projects.vercel.app?email=${email}`, {
            method: "POST",
            body: JSON.stringify(incomeInfo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    


    return {
        addIncome,
    }
}

export default AllFetcher;