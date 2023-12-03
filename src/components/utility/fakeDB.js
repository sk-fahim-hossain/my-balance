// use local storage to manage cart data
const addToDb = (updatedUser) => {
  let userAccount = getUser();

  localStorage.setItem("user-detail", JSON.stringify(updatedUser));
  console.log(updatedUser);
};

const removeFromDb = (id) => {
  const shoppingCart = getUser();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("user-detail", JSON.stringify(shoppingCart));
  }
};

const getUser = () => {
  //edited for myBalance
  let newUser = {
    userId: 556,
    name: "",
    password: "",
    mainBalance: "0",
    income: {
      incomeBalance: "0",
      allIncomes: [],
    },
    cost: {
      costBalance: "0",
      allCosts: [],
    },
  };

  //get the user-details  from local storage
  const savedUser = localStorage.getItem("user-details");
  if (savedUser) {
    newUser = JSON.parse(savedUser);
  }
  return newUser;
};

//edited for myBalance
const deleteUserDetails = () => {
  localStorage.removeItem("user-details");
};

export { addToDb, removeFromDb, getUser, deleteUserDetails };
