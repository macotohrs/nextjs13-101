import React from "react";
// catch-all-segmentsの設定
// /blog/1/2/3でアクセスしたいケース
// 1. const Page = ({ params }: { params: { id: string } }) => {
// console.log(params);でどんな値が取得されるか確認 → terminal ▶︎ { id: [ '1', '2', '3' ] }
// L7のように設定ができる
const Page = ({ params }: { params: { id: string[] } }) => {
  return (
    <div className="font-medium rounded-lg text-center bg-pink-100 p-8">
      <h2 className="text-2xl text-red-600 font-bold mb-4">Dynamic Routes</h2>
      <div className="text-lg text-gray-800 mb-4">Blog ID: {params.id}</div>
      <div className="text-gray-700 mb-4">
        例えばブログの記事を表示したい場合には /blog/1、/blog/2、/blog/what-is-next.js
        などのように動的に変わるルーティングに対応させる必要があります。
      </div>
      <div className="text-gray-700 mb-4">
        Dynamic Routesを設定するために app ディレクトリ直下に blog
        ディレクトリを作成します。/blog/1、/blog/2 でアクセスするために blog
        ディレクトリの下にさらにディレクトリを作成しますが Dynamic Routes
        の場合は [] でディレクトリ名を囲みます。ここでは [id]
        ディレクトリを作成します。id は任意なので slug や blogId と設定することもできます。名前は任意ですが後ほどこの名前はコードの中で利用するので役割に応じた適切な名前をつけてください。
      </div>
      <div className="text-gray-700 mb-4">
        /blog/以下の値を変更するとその値がブラウザに表示されます。1、100
        などの数値ではなく what-is-nextjs
        などの文字列でも表示されます。
      </div>
      <div className="text-gray-700 mb-4">
        ここでは URL/blog/以下の値を取り出し表示させるだけでしたが実際のアプリケーションではこの値を利用してデータベースにアクセスしてレコードを取得したり、さらに別のサーバにアクセスを行いデータを取得してページを表示するといった設定を行います。
      </div>
      <p className="text-gray-700 mb-2">
        <a
          href="http://localhost:3000/blog/100"
          className="text-red-600 no-underline hover:underline"
        >
          http://localhost:3000/blog/100
        </a>
      </p>
      <p className="text-gray-700">
        /blog/1/test のように / をつけた場合は 404 ページが表示されます。
      </p>
    </div>
  );
};

export default Page;
