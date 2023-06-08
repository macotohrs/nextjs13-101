import Page from './page';
// default.tsxは、ローディング後に表示するコンポーネント
// ローディング後に表示するコンテンツを統一するために、"page" をインポートしている
// もし異なる内容を表示したい場合は、新しいコンポーネントを作成する必要がある
export default function Default() {
  return <Page />;
}

// 下記の場合、ローディング後Default Analytics Pageと描画される
// export default function Default() {
//   return <div className="m-4">Default Analytics Page</div>;
// }

