export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen font-bold">
      ローディング中
    </div>
  );
}
// 処理が完了するまでページ上で何も変化がないのはユーザにとって気持ちのいいものではなく離脱につながります。ページが表示されない問題を解決するためにサーバ側での処理中にブラウザ上に現在データのローディング中であることを伝えるメッセージを表示させるためusersディレクトリにloading.tsxファイルを作成します。