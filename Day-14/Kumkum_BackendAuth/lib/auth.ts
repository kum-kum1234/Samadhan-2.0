export interface User {
  id: string
  email: string
  name: string
  password: string
}

// Simple in-memory users storage
const users: User[] = []

// Simple hash function (for demo purposes only)
export async function hashPassword(password: string): Promise<string> {
  // Simple base64 encoding for demo (NOT secure for production)
  return btoa(password + "salt")
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const hashed = await hashPassword(password)
  return hashed === hashedPassword
}

// Create simple JWT-like token
export function createToken(userId: string): string {
  const payload = {
    userId,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  }
  // Simple base64 encoding for demo (NOT secure for production)
  return btoa(JSON.stringify(payload))
}

// Verify simple token
export function verifyToken(token: string): { userId: string } | null {
  try {
    const payload = JSON.parse(atob(token))
    if (payload.exp < Date.now()) {
      return null // Token expired
    }
    return { userId: payload.userId }
  } catch {
    return null
  }
}

// Database functions
export async function findUserByEmail(email: string): Promise<User | null> {
  return users.find((user) => user.email === email) || null
}

export async function findUserById(id: string): Promise<User | null> {
  return users.find((user) => user.id === id) || null
}

export async function createUser(userData: Omit<User, "id">): Promise<User> {
  const user: User = {
    id: Date.now().toString(),
    ...userData,
  }
  users.push(user)
  return user
}
