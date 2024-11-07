"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

interface UserContextType {
  users: User[];
  filteredUsers: User[];
  filterUsers: (company: string) => void;
  sortUsersByName: (asc?: boolean) => void;
  resetUsers: () => void;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUsers = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within an UsersProvider");
  }
  return context;
};

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const fetchedUsers = await data.json();
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchItems();
  }, []);

  const filterUsers = (company: string) => {
    const filtered = users.filter((user) => user.company.name === company);
    setFilteredUsers(filtered);
  };

  const sortUsersByName = (asc = true) => {
    const sorted = [...filteredUsers].sort((a, b) =>
      asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sorted);
  };

  const resetUsers = () => {
    setFilteredUsers(users);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        filteredUsers,
        filterUsers,
        sortUsersByName,
        resetUsers,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
