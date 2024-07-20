import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);
export const useUserContext = () => {
  return useContext(UserContext);
};

const UserState = ({ children }) => {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserState };
