import Users from "@/components/Users";
import { Suspense } from "react";

const HomePage = () => {
  const usersPromise = async () => {
    const data = await fetch("http://localhost:4000/users");
    return data.json();
  };

  return (
    <div className="p-5">
      Home Page
      <Suspense fallback="loading...">
        <Users usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default HomePage;
