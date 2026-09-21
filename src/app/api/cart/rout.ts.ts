import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Cart items fetched successfully', items: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Item added to cart', data: body });
}