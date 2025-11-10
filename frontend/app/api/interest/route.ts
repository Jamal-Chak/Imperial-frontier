import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  console.log('New interest recorded:', data)

  // You can later connect this to a DB or send an email notification
  // e.g., await db.insert('interests', data)

  return NextResponse.json({ message: 'Interest recorded successfully!' })
}
