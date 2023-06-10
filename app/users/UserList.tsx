type User = {
  id: string;
  name: string;
  email: string;
};

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  console.log(name);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return NextResponse.json(data);
}


const UserList = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // ブラウザから/usersにアクセスするとRoute Handlersを経由してデータの取得が行われ、ユーザ一覧が表示されます。
  const response = await fetch('http://localhost:3000/api');
  if (!response.ok) throw new Error('Failed to fetch data');
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
