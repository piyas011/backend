import { User } from "@/types/user";
import { use } from "react";

const Users = ({ usersPromise }: { usersPromise: () => Promise<User[]> }) => {
  const users: User[] = use(usersPromise());

  return (
    <div>
      <h1>{users.length} </h1> <hr />
      <div>
        {users.map((user) => (
          <div key={user.id}>
            User Name :{user.name.full} <br /> User Email : {user.email} <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
