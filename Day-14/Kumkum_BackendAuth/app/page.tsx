import { SimpleAuth } from "@/components/simple-auth"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Authentication Basics</h1>
        </div>

        <SimpleAuth />
      </div>
    </div>
  )
}
