import Link from 'next/link';
// Linkコンポーネントを利用することでページ間をスムーズに移動することができます。aboutページから/(ルート)ページに移動できるようにLinkコンポーネントを利用して設定を行います。Linkコンポーネントを利用するためにはnext/linkのimportが必要となります。Linkコンポーネントではhref propsに移動先のページのURLを設定します。
const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/users" className="underline">
        User
      </Link>
    </div>
  );
};

export default Page;
