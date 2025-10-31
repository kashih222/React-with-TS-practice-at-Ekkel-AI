import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile: React.FC = () => {
  const {user} = useContext(UserContext);

  return (
    <div className="h-[400px] w-[300px] bg-black text-white flex flex-col items-center justify-center font-bold text-center rounded-sm">
      {user ? (
        <>
          <h1 className="text-2xl mb-2">Welcome Back 👋</h1>
          <p className="text-lg">Username: {user.username}</p>
          <p className="text-sm text-gray-400">Password: {user.password}</p>
        </>
      ) : (
        <h1 className="text-xl text-gray-400">No user logged in</h1>
      )}
    </div>
  );
};

export default Profile;
