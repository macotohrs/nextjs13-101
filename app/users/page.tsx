import { Suspense } from 'react';
import UserList from './UserList';
import OtherUserList from './OtherUserList';

const Page = async () => {
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

// このように Suspenseタグを利用することですべてのページ上の処理が完了して一括でブラウザ上に表示されるのではなく処理が完了した"コンポーネント毎"にサーバからデータを受け取りブラウザ上に表示させることができます。この機能をStreamingと呼びます。

export default Page;

// loading.tsxを使用しないでSuspenseタグでラップする
// fallback propsにサーバ処理中にブラウザ上に表示させたいメッセージを設定

// Suspenseをコンポーネント単位でラップすることでそのコンポーネントに対するLoading設定を行うことができます。

// ※ loading.tsxを利用した場合にはページ全体に対して"自動でSuspenseが設定されている"のでページ内のいずれかのコンポーネントのデータ取得処理が行われている場合はページ全体に対してloading.tsxファイルの内容が表示されます。

