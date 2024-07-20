import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUser} = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setUser(response.data.user);
        // console.log(response.data.user);
        navigate("/");
        alert("login sucess");
      } else {
        alert("Incorrect credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Incorrect credentials");
    }
  };

  return (
    <div className="h-[400px] flex flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className="h-[320px] p-5 border border-black rounded-lg"
      >
        <section className="flex flex-col mb-5">
          <label htmlFor="email" className="text-black mb-2">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Your email"
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </section>

        <section className="flex flex-col mb-5">
          <label htmlFor="password" className="text-black mb-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="current-password"
            id="password"
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </section>

        <button
          type="submit"
          className="w-full p-2 bg-primary text-white rounded hover:border-2 transition duration-150"
        >
          Login
        </button>
      </form>
      <button
        onClick={() => props.onFormSwitch("no")}
        className="w-[250px] p-2 bg-primary text-white rounded hover:border-2 transition duration-150"
      >
        New? Create here
      </button>
    </div>
  );
};

export default Login;
