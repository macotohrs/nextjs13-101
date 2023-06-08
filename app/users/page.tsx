import UserList from './UserList';

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      {/* @ts-expect-error Async Server Component */}
      <UserList />
      {/* page.tsxファイルのUserListタグの箇所にTypeScriptに関するメッセージがに表示されます。
      エラーの表示される原因はUserListコンポーネントがasyncを利用した非同期のServer Componentのためです。asyncを利用していないコンポーネントの場合にメッセージは表示されません。 */}
    </div>
  );
};

export default Page;