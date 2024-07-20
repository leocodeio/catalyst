import React, { useState } from "react";
import axios from 'axios';

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [passStep, setPassStep] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/signup', { name, email,phone, password });
      console.log(response.data);
      props.onFormSwitch('yes');
      alert("Signup success!!");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-[400px] flex flex-col gap-5">
      {passStep ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="h-[320px] p-5 border border-black rounded-lg"
          >
            <section className="flex flex-col mb-5">
              <label htmlFor="password" className="text-black mb-1">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Your password"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </section>
            <section className="flex flex-col mb-5">
              <label htmlFor="re-enter Password" className="text-black mb-1">
                re-enter Password
              </label>
              <input
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                type="text"
                placeholder="re-enter Password"
                required
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
            </section>
            <button
              type="submit"
              className="w-full p-2 bg-primary text-white rounded hover:border-2 transition duration-150"
            >
              Sign Up
            </button>
          </form>
        </>
      ) : (
        <form
          onSubmit={() => {
            setPassStep(true);
          }}
          className="h-[320px] px-5  py-2 border border-black rounded-lg"
        >
          <section className="flex flex-col mb-2">
            <label htmlFor="name" className="text-black mb-1">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              required
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
          </section>

          <section className="flex flex-col mb-2">
            <label htmlFor="email" className="text-black mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email"
              required
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
          </section>

          <section className="flex flex-col mb-2">
            <label htmlFor="phone" className="text-black mb-1">
              Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="phone number"
              required
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
          </section>

          <button
            type="submit"
            className="w-full p-2 bg-primary text-white rounded hover:border-2 transition duration-150"
          >
            Confirm
          </button>
        </form>
      )}

      <button
        onClick={() => props.onFormSwitch("yes")}
        className="w-[250px] p-2 bg-primary text-white rounded hover:border-2 transition duration-150"
      >
        have an account? Log in here
      </button>
    </div>
  );
};

export default Register;
