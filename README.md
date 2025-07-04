# Thoughtful AI Support Agent

A modern, responsive customer support AI agent built with Next.js, TypeScript, and TailwindCSS. This application provides intelligent customer support for Thoughtful AI with hardcoded responses for common questions and fallback responses for general inquiries.

## Features

- **Conversational AI Interface**: Clean, modern chat interface with real-time messaging
- **Intelligent Response System**: Hardcoded responses for Thoughtful AI-specific questions
- **Fallback Responses**: Generic responses for non-Thoughtful AI questions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript Support**: Full type safety throughout the application
- **Modern UI**: Built with TailwindCSS for a polished user experience

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd thoughtful-ai-screen
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Start a Conversation**: The AI agent will greet you when you first load the page
2. **Ask Questions**: Type any question about Thoughtful AI in the chat input
3. **Get Responses**: The agent will provide relevant information about:
   - Company information and mission
   - AI Agents (EVA, CAM, PHIL) and their capabilities
   - Services offered
   - Technology and AI solutions
   - Contact and support information
   - Getting started guidance

### Example Questions

Try asking questions like:
- "What is Thoughtful AI?"
- "Tell me about Thoughtful AI's agents"
- "What does EVA do?"
- "How does CAM work?"
- "What are the benefits of using your agents?"
- "What services do you offer?"
- "How can I get started?"
- "What technology do you use?"
- "How can I contact support?"

## Architecture

- **Frontend**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom design system
- **API**: Next.js API routes for chat functionality
- **Agent Logic**: Hardcoded response matching with intelligent fallbacks
- **TypeScript**: Full type safety and better developer experience

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts    # Chat API endpoint
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   └── ChatInterface.tsx    # Main chat component
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Adding New Responses

To add new hardcoded responses, edit the `thoughtfulAiResponses` object in `src/app/api/chat/route.ts`:

```typescript
const thoughtfulAiResponses = {
  'your question key': 'Your response here',
  // Add more responses...
}
```

### Modifying Fallback Responses

Update the `fallbackResponses` array in the same file to customize generic responses.

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Replit** (Recommended for code review): Fork this repl and click "Run"
- **Vercel**: `vercel deploy`
- **Netlify**: Connect your repository and deploy
- **Docker**: Build and deploy using the included Dockerfile (if added)

### Replit Deployment

1. Fork this repl or import from GitHub
2. Click the "Run" button
3. The app will be available at your repl's URL
4. Share the repl URL for immediate code review

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.