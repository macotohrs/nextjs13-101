'use client'// error.tsファイルはクライアント(ブラウザ)側で処理を行う必要があるためファイルの先頭に”use client”を追加する必要がある
// !!”use client”を明示的に設定することでコンポーネントがServer ComponentからClient Componentに変わる!!
// クライアント側に切り替わるので、ログは検証ツール側で確認できる
export default function Error({ error, reset }: { error: Error; reset: () => void; }) {
  console.log('error', error) 
  return (
    <div className="m-4 font-bold">
      <p>⚠️ {error.message}</p>
      <button
        className="px-2 py-1 text-white bg-blue-500 rounded-lg"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
