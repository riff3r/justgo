import React from "react";
import UserDetails from "./UserDetails";

const UserInfo = ({ users }) => {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration Date</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserDetails user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
