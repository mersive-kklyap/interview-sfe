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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const fetchedUsers = await data.json();
        setUsers(fetchedUsers);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchItems();
  }, []);


  return (
    <UserContext.Provider
      value={{
        users,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
