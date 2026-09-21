import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ id: 'usr_1', name: 'Developer User', email: 'dev@example.com' });
}