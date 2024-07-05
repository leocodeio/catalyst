import React, { useState } from "react";
import Register from "../components/startComponents/Register";
import Login from "../components/startComponents/Login";

const Start = () => {
  const [isUser, setIsUser] = useState("yes");
  const toggle = (decision) => {
    setIsUser(decision);
  };
  return (
    <div className="h-svh w-svw">
      <header className="bg-transparent flex h-15 w-full justify-center align-center items-center">
        <img src="./images/logo.png" alt="Catalyst Logo" className="h-20 w-40" />
      </header>
      <div className="flex flex-col h-auto w-11/12 bg-white p-10 rounded mx-auto my-10 text-black gap-10 md:w-3/4">
        <div className="flex h-[500px] items-center justify-center flex-col gap-5">
          {isUser === "yes" ? (
            <Login onFormSwitch={toggle} />
          ) : (
            <Register onFormSwitch={toggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Start;
