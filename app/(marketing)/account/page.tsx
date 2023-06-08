import React from "react";

const Page = () => {
  return (
    <div className="font-medium bg-red-100 p-8 rounded-lg text-center">
      <h2 className="text-2xl text-red-600 font-bold mb-4">account</h2>
      <div>静的でURLが変わらないページの設定</div>
      <span className="block mb-2">
        ブラウザからアクセスする場合は()で囲んだディレクトリはルーティングのパスに影響を与えないのでmarketingを省いて/accountでアクセスを行うことができます。
      </span>
      <p>
        <a
          href="http://localhost:3000/account"
          className="text-red-600 no-underline hover:underline"
        >
          http://localhost:3000/account
        </a>
      </p>
    </div>
  );
};

export default Page;
