import { NextResponse } from 'next/server';

// Route Handlersからのデータ取得
// JSONPlaceHolderからデータを取得することも可能
export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return NextResponse.json(data);
}