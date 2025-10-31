import React, { useState, ReactNode } from "react";
import UserContext, { User, UserContextType } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null)

  const value: UserContextType = {
    user,
    setUser,
  userName,
  setUserName,
  password,
  setPassword,
};

  return <UserContext.Provider value={value}>
            {children}
         </UserContext.Provider>;
};

export default UserContextProvider;
