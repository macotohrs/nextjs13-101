import Link from "next/link";

export type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch data");
  const users: User[] = await response.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {/* onClickとかないのにどうやってidをparamsとして渡しているの？？ */}
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default UserList;
