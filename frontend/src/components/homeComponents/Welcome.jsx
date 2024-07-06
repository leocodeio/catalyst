import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h1>Welcome to Catalyst - {user.name}</h1>
      ) : (
        <h1>Please login first</h1>
      )}
      <Link to="/" >
        <AiOutlineLogin style={{ color: '#ffed00',backgroundColor: 'black',borderRadius:"50px",padding:"3px",width:"25px",height:"25px" }} />
      </Link>
    </div>
  );
};

export default Welcome;
