// ✅ UserContext.tsx
import { createContext } from "react";

export interface User {
  username: string;
  password: string;
}

export interface UserContextType {
    user: User | null;
    setUser: (user: User |null) => void;
    userName: string;
    setUserName: (username: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

const UserContext = createContext<UserContextType>({
    user:null,
    setUser: () => {},
  userName: "",
  setUserName: () => {},
  password: "",
  setPassword: () => {},
});

export default UserContext;
