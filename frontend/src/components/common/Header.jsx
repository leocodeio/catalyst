import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-glass-effect fixed w-full flex items-center justify-between h-[75px] shadow-md z-50 px-8">
      <div>
        <img
          src="./images/logo.png"
          alt="Catalyst"
          className="h-[75px] w-[150px]"
        />
      </div>
      <Link to="/start">
        <AiOutlineLogin
          style={{
            color: "#ffed00",
            backgroundColor: "black",
            borderRadius: "50px",
            padding: "3px",
            width: "30px",
            height: "30px",
          }}
        />
      </Link>
    </div>
  );
};

export default Header;
