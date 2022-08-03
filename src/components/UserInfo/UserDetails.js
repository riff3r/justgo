import React from "react";

const UserDetails = ({ user }) => {
  const {
    picture: { large },
    name: { first, last },
    email,
    login: { username },
    registered: { date },
  } = user;

  const newDate = new Date(date);
  const registeredDate = newDate.toISOString().substring(0, 10);

  return (
    <tr className="border-l border-r">
      <td className="flex items-center gap-5">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={large} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{first + " " + last}</h3>
          <p>{email}</p>
        </div>
      </td>

      <td>{registeredDate}</td>

      <td>{username}</td>
    </tr>
  );
};

export default UserDetails;
