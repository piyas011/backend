import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const usersData = use(usersPromise());
  console.log(usersData);
  return (
    <div>
      Users Components
      <h1>User : {usersData.length}</h1>
      {usersData.map((user) => (
        <div className="m-5 bg-gray-300 rounded-[10px] p-5" key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
