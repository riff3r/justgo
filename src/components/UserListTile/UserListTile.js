import React from "react";

const UserListTile = ({ users }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="p-5 shadow-lg">
        <img src="" alt="" />
        <h1>First Last</h1>
        <p>Email</p>
        <p>User Name</p>
        <p>Date</p>
      </div>

      <div className="p-5 shadow-lg">
        <img src="" alt="" />
        <h1>First Last</h1>
        <p>Email</p>
        <p>User Name</p>
        <p>Date</p>
      </div>

      <div className="p-5 shadow-lg">
        <img src="" alt="" />
        <h1>First Last</h1>
        <p>Email</p>
        <p>User Name</p>
        <p>Date</p>
      </div>

      <div className="p-5 shadow-lg">
        <img src="" alt="" />
        <h1>First Last</h1>
        <p>Email</p>
        <p>User Name</p>
        <p>Date</p>
      </div>
    </div>
  );
};

export default UserListTile;
