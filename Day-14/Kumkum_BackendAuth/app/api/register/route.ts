import { type NextRequest, NextResponse } from "next/server"
import { hashPassword, createUser, findUserByEmail, createToken } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    // Check if user exists
    const existingUser = await findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Create user
    const hashedPassword = await hashPassword(password)
    const user = await createUser({ name, email, password: hashedPassword })

    // Create JWT token
    const token = createToken(user.id)

    // Return success
    return NextResponse.json({
      message: "User created successfully",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
