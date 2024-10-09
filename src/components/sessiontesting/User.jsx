// UserAvatar.js
import React from "react";

const UserAvatar = ({ user }) => {
  if (!user) return null;
  // console.log("user is" + user);
  return (
    <div>
      <img src={user.img} alt="User Avatar" />
      <h1 className="text-white">{user.name}</h1>
    </div>
  );
};

export default UserAvatar;
