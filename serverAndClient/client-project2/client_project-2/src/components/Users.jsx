import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise());
  return (
    <div>
      Users Page Components
      {users.map((user) => (
        <div className="p-4 m-4 bg-gray-300 rounded-[10px]" key={user.id}>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
