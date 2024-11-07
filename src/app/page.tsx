"use client";
import { useUsers } from "../context/UsersContext";
import UserCard from "../components/UserCard";

export default function Home() {
  const { users, error } = useUsers();

  if (error) {
    return <p className="text-red-500 font-semibold">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        User List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
