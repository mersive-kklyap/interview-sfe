interface UserCardProps {
  user: {
    name: string;
    email: string;
    company: {
      name: string;
    };
  };
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="border p-4 rounded-lg hover:bg-gray-50">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">Company: {user.company.name}</p>
      <p className="text-gray-800 font-semibold">Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
