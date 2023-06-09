// 'use client' 親にuse clientを適用させると、子供のコンポーネントは全てClient Componentになる
import Link from "next/link";
import { Counter } from "./counter";

export default function Home() {
  return (
    <div className="m-4">
      <Link href="/about" className="underline" prefetch={false}>
        About
      </Link>
      <h1 className="text-2xl">Home</h1>
      <Counter />
    </div>
  );
}
