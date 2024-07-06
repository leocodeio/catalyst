import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserState=({children})=>{
  const [user, setUser] = useState(null);
  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserState};