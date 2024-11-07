"use client";
import { useUsers } from "../context/UsersContext";
import UserCard from "../components/UserCard";

export default function Home() {
  const { filterUsers, filteredUsers, sortUsersByName, resetUsers, error } =
    useUsers();

  const handleFilterCompany = (company: string) => {
    filterUsers(company);
  };

  const handleSort = (ascending: boolean) => {
    sortUsersByName(ascending);
  };

  const handleReset = () => {
    resetUsers();
  };

  if (error) {
    return <p className="text-red-500 font-semibold">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        User List
      </h1>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleSort(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none transition-transform duration-200 transform hover:scale-105"
        >
          Sort by Name (Asc)
        </button>
        <button
          onClick={() => handleSort(false)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none transition-transform duration-200 transform hover:scale-105"
        >
          Sort by Name (Desc)
        </button>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => handleFilterCompany("Johns Group")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none transition-transform duration-200 transform hover:scale-105"
        >
          Filter by Johns Group
        </button>
        <button
          onClick={() => handleFilterCompany("Deckow-Crist")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none transition-transform duration-200 transform hover:scale-105"
        >
          Filter by Deckow-Crist
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:outline-none transition-transform duration-200 transform hover:scale-105"
        >
          Reset Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
