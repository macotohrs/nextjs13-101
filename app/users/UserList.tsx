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
  // 検索などURLパラメータを利用した場合のURLパラメータの取得方法
  const response = await fetch('http://localhost:3000/api?name=John', {
  cache: 'no-store', // キャッシュ機能を無効 (一度fetch関数が実行されるとキャッシュされるためその後fetch関数を実行するとキャッシュしたデータが利用されるためリクエストが行われない)
});
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
