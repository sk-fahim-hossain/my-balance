import { useContext } from "react";
import image from "../../../src/assets/fahim.png";
import { DataContext } from "../../Provider/DataProvider";
import Users from "../Users/Users";

const Profile = () => {
  const { userAuthData, updateUserAccount } = useContext(DataContext);
  
  

  const handleEdituserAuthData = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const password = form.password.value;

    updateUserAccount({ name, password });
    form.reset();
  };
  return (
    <div className="grid grid-cols-2">
      <div className="p-5 rounded-xl m-4 bg-white">
        <img src={image} width={200} alt="" className="shadow-lg" />
        <br />
        <form onSubmit={handleEdituserAuthData}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <br />
          <button className="btn btn-wide my-3 text-xl text-white  border-0 bg-[#0E35FF]">
            Edit
          </button>
        </form>
      </div>
      <Users></Users>
    </div>
  );
};

export default Profile;
