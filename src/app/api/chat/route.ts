import { NextRequest, NextResponse } from 'next/server'

// Hardcoded responses about Thoughtful AI
const thoughtfulAiResponses = {
  // Company information
  'what is thoughtful ai': 'Thoughtful AI is an innovative company that specializes in intelligent automation and AI-powered solutions. We help businesses streamline their operations through cutting-edge artificial intelligence technology.',
  'what does thoughtful ai do': 'Thoughtful AI develops and implements AI solutions that automate complex business processes, improve decision-making, and enhance operational efficiency. We focus on creating thoughtful, human-centered AI that augments human capabilities.',
  'company mission': 'Our mission at Thoughtful AI is to democratize access to intelligent automation, making powerful AI tools accessible to businesses of all sizes while maintaining a focus on ethical and responsible AI development.',
  'about thoughtful ai': 'Thoughtful AI is a forward-thinking company dedicated to creating AI solutions that are both powerful and responsible. We believe in building AI that enhances human potential rather than replacing it.',
  
  // AI Agents - Healthcare Focus
  'what does the eligibility verification agent (eva) do': 'EVA automates the process of verifying a patient\'s eligibility and benefits information in real-time, eliminating manual data entry errors and reducing claim rejections.',
  'what does the claims processing agent (cam) do': 'CAM streamlines the submission and management of claims, improving accuracy, reducing manual intervention, and accelerating reimbursements.',
  'how does the payment posting agent (phil) work': 'PHIL automates the posting of payments to patient accounts, ensuring fast, accurate reconciliation of payments and reducing administrative burden.',
  'tell me about thoughtful ai\'s agents': 'Thoughtful AI provides a suite of AI-powered automation agents designed to streamline healthcare processes. These include Eligibility Verification (EVA), Claims Processing (CAM), and Payment Posting (PHIL), among others.',
  'what are the benefits of using thoughtful ai\'s agents': 'Using Thoughtful AI\'s Agents can significantly reduce administrative costs, improve operational efficiency, and reduce errors in critical processes like claims management and payment posting.',
  
  // Individual agent keywords
  'eva': 'EVA is our Eligibility Verification Agent that automates the process of verifying a patient\'s eligibility and benefits information in real-time, eliminating manual data entry errors and reducing claim rejections.',
  'cam': 'CAM is our Claims Processing Agent that streamlines the submission and management of claims, improving accuracy, reducing manual intervention, and accelerating reimbursements.',
  'phil': 'PHIL is our Payment Posting Agent that automates the posting of payments to patient accounts, ensuring fast, accurate reconciliation of payments and reducing administrative burden.',
  'agents': 'Thoughtful AI provides a suite of AI-powered automation agents designed to streamline healthcare processes. These include Eligibility Verification (EVA), Claims Processing (CAM), and Payment Posting (PHIL), among others.',
  
  // Services
  'services': 'Thoughtful AI offers a range of services including AI consulting, custom AI solution development, intelligent process automation, machine learning model development, and AI strategy consulting.',
  'what services do you offer': 'We provide comprehensive AI services including strategic consulting, custom AI development, process automation, machine learning solutions, and ongoing support and maintenance.',
  'automation': 'Our intelligent automation solutions help businesses automate repetitive tasks, streamline workflows, and improve operational efficiency while maintaining quality and accuracy.',
  'consulting': 'Our AI consulting services help organizations identify opportunities for AI implementation, develop AI strategies, and navigate the complexities of AI adoption.',
  
  // Technology
  'technology': 'Thoughtful AI leverages cutting-edge technologies including machine learning, natural language processing, computer vision, and robotic process automation to deliver comprehensive AI solutions.',
  'ai solutions': 'Our AI solutions are designed to be scalable, reliable, and tailored to specific business needs. We focus on practical applications that deliver measurable value.',
  'machine learning': 'We use advanced machine learning techniques to build predictive models, automate decision-making, and extract insights from data to drive business value.',
  
  // Support and contact
  'support': 'For support, you can contact our team through our website, email us at support@thoughtfulai.com, or schedule a consultation to discuss your specific needs.',
  'contact': 'You can reach us at contact@thoughtfulai.com or visit our website to schedule a consultation. Our team is always ready to help with your AI needs.',
  'pricing': 'Our pricing is tailored to each client\'s specific needs and requirements. Please contact us for a personalized quote and to discuss how we can help your business.',
  'demo': 'We offer personalized demonstrations of our AI solutions. Please contact us to schedule a demo that\'s tailored to your specific use case and requirements.',
  
  // Getting started
  'getting started': 'Getting started with Thoughtful AI is easy! Simply contact us to schedule a consultation where we\'ll discuss your needs and how our AI solutions can help your business.',
  'implementation': 'Our implementation process is designed to be smooth and efficient. We work closely with your team to ensure seamless integration and provide comprehensive training and support.',
  'partnership': 'We believe in building long-term partnerships with our clients. Our team provides ongoing support, optimization, and evolution of AI solutions as your business grows.',
}

// Generic fallback responses
const fallbackResponses = [
  'That\'s an interesting question! While I specialize in Thoughtful AI topics, I\'d be happy to help you with any questions about our company, services, or how we can assist your business.',
  'I\'m focused on helping with Thoughtful AI-related questions. Is there anything specific about our AI solutions, services, or company that I can help you with?',
  'I\'m here to assist with questions about Thoughtful AI. Feel free to ask about our services, technology, or how we can help your business with AI solutions.',
  'While I\'m designed to help with Thoughtful AI questions, I\'m always learning! Is there something specific about our AI solutions or services you\'d like to know more about?',
  'I specialize in Thoughtful AI topics. You can ask me about our AI agents like EVA, CAM, and PHIL, or about our services and company information.',
]

function findBestMatch(userMessage: string): string {
  // Input validation and sanitization
  if (!userMessage || typeof userMessage !== 'string') {
    return 'I\'m sorry, I didn\'t receive a valid message. Please try asking your question again.'
  }
  
  const message = userMessage.toLowerCase().trim()
  
  // Handle empty messages
  if (message.length === 0) {
    return 'Please ask me a question and I\'ll be happy to help!'
  }
  
  // Check for exact or partial matches in hardcoded responses
  for (const [key, response] of Object.entries(thoughtfulAiResponses)) {
    if (message.includes(key) || key.split(' ').some(word => word.length > 2 && message.includes(word))) {
      return response
    }
  }
  
  // Check for common keywords that might relate to Thoughtful AI
  const keywords = [
    'thoughtful', 'ai', 'artificial intelligence', 'automation', 'machine learning',
    'consulting', 'service', 'company', 'business', 'solution', 'technology',
    'eva', 'cam', 'phil', 'agent', 'agents', 'eligibility', 'claims', 'payment',
    'healthcare', 'verification', 'processing', 'posting', 'patient', 'benefits'
  ]
  
  if (keywords.some(keyword => message.includes(keyword))) {
    // Return a contextual response based on the keywords found
    if (message.includes('eva') || message.includes('eligibility')) {
      return thoughtfulAiResponses['eva']
    } else if (message.includes('cam') || message.includes('claims')) {
      return thoughtfulAiResponses['cam']
    } else if (message.includes('phil') || message.includes('payment')) {
      return thoughtfulAiResponses['phil']
    } else if (message.includes('agents') || message.includes('agent')) {
      return thoughtfulAiResponses['agents']
    } else if (message.includes('benefits') && message.includes('agents')) {
      return thoughtfulAiResponses['what are the benefits of using thoughtful ai\'s agents']
    } else if (message.includes('service') || message.includes('help')) {
      return thoughtfulAiResponses['services']
    } else if (message.includes('company') || message.includes('about')) {
      return thoughtfulAiResponses['about thoughtful ai']
    } else if (message.includes('technology') || message.includes('ai')) {
      return thoughtfulAiResponses['technology']
    } else if (message.includes('contact') || message.includes('reach')) {
      return thoughtfulAiResponses['contact']
    } else if (message.includes('start') || message.includes('begin')) {
      return thoughtfulAiResponses['getting started']
    }
  }
  
  // Return a random fallback response
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      )
    }
    
    // Find the best response for the user's message
    const response = findBestMatch(message)
    
    // Add a small delay to simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 