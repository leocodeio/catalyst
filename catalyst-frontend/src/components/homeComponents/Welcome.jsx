import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Welcome = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-black bg-opacity-45 text-primary flex flex-col items-center justify-center text-center p-4 rounded-lg">
      {user ? (
        <h1 className="text-2xl mb-4">Welcome to Catalyst - {user.name}</h1>
      ) : (
        <h1 className="text-2xl mb-4">Welcome to Catalyst</h1>
      )}
      <h2 className="mb-4">
        Reach out to us at <br /> +919603028848
      </h2>
      <p className="mt-4">Thank you for staying connected!</p>
    </div>
  );
};

export default Welcome;
