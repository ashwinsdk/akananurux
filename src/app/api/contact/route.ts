import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    // Process the data (e.g., send an email, save to a database, etc.)
    return NextResponse.json({ message: 'Success' });
}
