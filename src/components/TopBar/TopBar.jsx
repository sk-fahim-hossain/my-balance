import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../../Provider/DataProvider";

const TopBar = () => {

  const { userAuthData, setUserAuthData } = useContext(DataContext)

  const handleLogOut = () => {
    setUserAuthData(null)
  }

  return (
    <div className="w-full p-4 bg-[#0E35FF] text-white">
      <div className="ml-auto w-fit">

        <div className="flex justify-center items-center gap-2">
          <ul className="flex gap-3">
            {
              userAuthData?.userName ? <div className="flex items-center gap-1 bg-violet-400 p-1 rounded-md"><p>{userAuthData.userName}</p> <span title="Logout Button" onClick={handleLogOut} className="bg-red-500 px-1 rounded-full cursor-pointer hover:bg-red-600">&empty;</span></div> :
                <li><button className="btn btn-sm btn-outline text-white"><NavLink to="/login-user">Login User</NavLink></button></li>
            }
          </ul>
          <button className="btn btn-sm  justify-center items-center hover:btn-info">
            <Link to="/profile">Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
