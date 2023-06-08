type User = {
  id: string;
  name: string;
  email: string;
};

const Page = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // usersページへのリンクをクリックします。クリックして5秒間何も画面に変化はありません。5秒経過するとユーザ一覧が表示されます。このことからServer Componentでの処理が完了するまでページが表示されないことがわかりました。
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();
  console.log(users);
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;