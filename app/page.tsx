// 'use client' 親にuse clientを適用させると、子供のコンポーネントは全てClient Componentになる
import Link from "next/link";
import { Counter } from "./counter";
import UserList from "./users/UserList";

export const metadata = {
  metadataBase: new URL("https://localhost.com:3000"),
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline" prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      <Counter>
        <h2 className="font-bold text-lg mt-4">ユーザ一覧</h2>
        <UserList />
      </Counter>
    </div>
  );
}
