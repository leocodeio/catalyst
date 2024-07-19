import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { useUserContext } from "../../context/UserContext";

const Header = () => {
  const { user, setUser } = useUserContext();

  const loginIconStyle = {
    color: "#ffed00",
    backgroundColor: "black",
    borderRadius: "50px",
    padding: "3px",
    width: "30px",
    height: "30px",
    transform: user ? "" : "scaleX(-1)",
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
  };

  return (
    <div className="header-glass-effect fixed w-full flex items-center justify-between h-[75px] shadow-md z-50 px-8">
      <div>
        <img
          src="./images/logo.png"
          alt="Catalyst"
          className="h-[75px] w-[150px]"
        />
      </div>
      {user ? (
        <Link onClick={handleLogout} className="flex align-center gap-2" to="/">
          Logn/LogOut
          <AiOutlineLogin style={loginIconStyle} />
        </Link>
      ) : (
        <Link className="flex align-center gap-2" to="/start">
          Logn/LogOut
          <AiOutlineLogin style={loginIconStyle} />
        </Link>
      )}
    </div>
  );
};

export default Header;
