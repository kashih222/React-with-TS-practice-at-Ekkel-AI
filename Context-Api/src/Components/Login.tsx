import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Login: React.FC = () => {
  const {setUser, userName, setUserName, password, setPassword} = useContext(UserContext);

  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ userName, password });

    // ✅ Update context correctly
    if (setUser) {
      setUser({username: userName, password: password});
    }
  };

  return (
    <div className="bg-black text-white h-[400px] w-[300px] rounded-sm flex flex-col items-center justify-evenly">
      <h1 className="py-2 px-4 font-bold text-2xl">Login</h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-4"
      >
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border rounded-sm px-6 py-2 outline-none"
          type="text"
          placeholder="Enter Username"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-sm px-6 py-2 outline-none"
          type="password"
          placeholder="Enter Password"
        />

        <button
          type="submit"
          className="border py-2 px-4 rounded-sm hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
