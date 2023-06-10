import { NextResponse } from 'next/server';

// GETリクエストの動作確認
export function GET() {
  return NextResponse.json({ name: 'John Doe' });
}

