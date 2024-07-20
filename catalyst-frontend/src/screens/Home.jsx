import React from "react";
import Welcome from "../components/homeComponents/Welcome";
import Header from "../components/common/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('./images/catalyst-home.jpg')" }}
      >
        <Welcome />
      </div>
    </>
  );
};

export default Home;
