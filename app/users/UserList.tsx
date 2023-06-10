type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = async () => {
  const response = await fetch("http://localhost:3000/api", {
    next: { revalidate: 5 }, // キャッシュ
  });
  if (!response.ok) throw new Error("Failed to fetch data");
  const users: User[] = await response.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
export default UserList;
