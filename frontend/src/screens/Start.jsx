import React, { useState } from "react";
import Register from "../components/startComponents/Register";
import Login from "../components/startComponents/Login";

const Start = () => {
  const [isUser, setIsUser] = useState("yes");
  const toggle = (decision) => {
    setIsUser(decision);
  };
  return (
    <div className=" h-screen flex flex-col align-center items-center">
      <header className="bg-transparent flex h-[150px] w-full justify-center align-center items-center">
        <img src="./images/logo.png" alt="Catalyst Logo" className="h-20 w-40" />
      </header>
        <div className="flex h-[500px] items-center flex-col gap-5">
          {isUser === "yes" ? (
            <Login onFormSwitch={toggle} />
          ) : (
            <Register onFormSwitch={toggle} />
          )}
        </div>
    </div>
  );
};

export default Start;
