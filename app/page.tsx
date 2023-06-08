import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-4">
      {/* prefetch : Linkコンポーネントではデフォルトからprefetchの機能が設定されています。開発環境ではリンクにカーソルを当てるとリンク先のページに関するJavaScriptファイルなどがバックグランドで自動でダウンロードされます。本番環境ではViewportに入っているリンク先のファイルがバックグランドで自動でダウンロードされます。
      
      prefect機能を利用したくないという場合はLinkコンポーネントのprefetch propsをfalseにすることで無効化できます。
      */}
      <Link href="/about" className="underline" prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
    </div>
  );
}