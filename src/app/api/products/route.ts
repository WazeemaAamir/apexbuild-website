import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: '1', name: 'Dev Pro Laptop Bag', price: 89.99, category: 'Accessories' },
    { id: '2', name: 'Mechanical Keyboard RGB', price: 129.99, category: 'Hardware' },
    { id: '3', name: 'Developer Hoodie', price: 49.99, category: 'Apparel' },
  ];
  return NextResponse.json(products);
}