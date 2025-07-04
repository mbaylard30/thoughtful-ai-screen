import ChatInterface from '@/components/ChatInterface'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Thoughtful AI Support
          </h1>
          <p className="text-lg text-gray-600">
            Ask me anything about Thoughtful AI and I'll help you out!
          </p>
        </div>
        <ChatInterface />
      </div>
    </main>
  )
} 