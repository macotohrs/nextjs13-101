// 'use client' 親にuse clientを適用させると、子供のコンポーネントは全てClient Componentになる
import Link from "next/link";
import { Counter } from "./counter";
import UserList from "./users/UserList";

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline" prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      {/* Counter : client component / UserList: server component */}
      {/* client component で server component を 利用することは可能 (propsとして渡すだけ )*/}
      <Counter>
        <h2 className="font-bold text-lg mt-4">ユーザ一覧</h2>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Counter>
    </div>
  );
}
