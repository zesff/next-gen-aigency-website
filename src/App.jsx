import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Brain,
  Zap,
  Target,
  Palette,
  Code,
  Database,
  MessageSquare,
  Users,
  BarChart3,
  BookOpen,
  Menu,
  X,
  Sparkles,
  Rocket,
  Calendar,
  Phone
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const expertise = [
    {
      icon: Brain,
      title: "Custom Local AI Models",
      description: "Host, fine-tune, and integrate open-source models (LLaMA, Mistral, etc.) for secure, private inference within internal tools and workflows.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/custom-local-ai-models"
    },
    {
      icon: Palette,
      title: "AI Content Systems", 
      description: "End-to-end infrastructure to generate professional-grade marketing content at scale, including AI-generated videos, images, ad creatives, and social media copy.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/ai-content-systems"
    },
    {
      icon: Sparkles,
      title: "Professional Marketing Content Creation",
      description: "AI-generated creative assets for advertising: realistic video spots, ad banners, product visuals, and compelling written content (hooks, headlines, bodies, and CTAs) tailored for paid media campaigns.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/professional-marketing-content-creation"
    },
    {
      icon: Target,
      title: "Lead Generation & Outreach Pipelines",
      description: "Enriched, segmented, and AI-personalized outreach flows across LinkedIn, email, voice, and messaging platforms, supporting sales and growth teams.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/lead-generation-outreach-pipelines"
    },
    {
      icon: Code,
      title: "AI Application Development & Ad Automation",
      description: "Web-based tools and dashboards that support campaign creation, analytics, and performance monitoring.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/ai-application-development-ad-automation"
    },
    {
      icon: Database,
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Context-aware pipelines that combine LLMs with vector databases and knowledge retrieval for more accurate and grounded outputs.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/retrieval-augmented-generation-rag"
    },
    {
      icon: Phone,
      title: "AI Agents (Voice & Chat)",
      description: "Multi-purpose AI-based agents for handling customer inquiries, lead qualification, internal requests, and onboarding through web, Slack, Telegram, WhatsApp, etc.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/ai-agents-voice-chat"
    },
    {
      icon: Users,
      title: "Operational AI Assistants",
      description: "AI personal assistants for team members; integrated with tools like emails, calendars, and knowledge bases for on-demand info and task automation.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/operational-ai-assistants"
    },
    {
      icon: BarChart3,
      title: "Monitoring Systems",
      description: "Event-based systems to detect anomalies, monitor performance, and trigger alerts with automated responses.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/monitoring-systems"
    },
    {
      icon: BookOpen,
      title: "Training & Knowledge Transfer",
      description: "Documentation, onboarding flows, and knowledge systems to enable team-wide adoption of AI tools and automation practices.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/training-knowledge-transfer"
    },
    {
      icon: Rocket,
      title: "Additional Deployments",
      description: "More tailored AI & automations solutions across marketing, sales, product, and ops, accelerating scale, efficiency, and AI adoption across teams.",
      calendlyLink: "https://calendly.com/alan-nextgenaigency/additional-deployments"
    }
  ]

  const tools = [
    "n8n", "Make.com", "Zapier", "HubSpot", "Supabase", "Google Apps Script", 
    "Google AI Studio", "ComfyUI", "Python", "LM Studio", "Vector Databases", 
    "APIs", "SDKs", "OpenAI", "Anthropic (Claude)", "Hugging Face", 
    "OpenRouter", "Super Agents", "Manus", "Genspark", "MiniMax", "Jasper", "LangChain"
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const openCalendlyLink = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Next Gen Aigency
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('solutions')} className="text-slate-300 hover:text-cyan-400 transition-colors">Solutions</button>
              <button onClick={() => scrollToSection('tools')} className="text-slate-300 hover:text-cyan-400 transition-colors">Tools</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-purple-500/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-slate-300 hover:text-cyan-400">About</button>
                <button onClick={() => scrollToSection('solutions')} className="block px-3 py-2 text-slate-300 hover:text-cyan-400">Solutions</button>
                <button onClick={() => scrollToSection('tools')} className="block px-3 py-2 text-slate-300 hover:text-cyan-400">Tools</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-slate-300 hover:text-cyan-400">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-cyan-500/20 to-pink-500/20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Logo */}
          <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Next Gen Aigency Logo" 
              className="w-20 h-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Next Gen Aigency
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            AI & Automation Specialists
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help businesses lay the foundation for AI by building solid structures, workflows, and documentation. Then we layer in the right tools for real impact.
          </p>

          {/* Hire us for section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-6">Hire us for:</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('solutions')}
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                AI & Automation Solution
              </Button>
              <Button 
                onClick={() => openCalendlyLink('https://calendly.com/alan-nextgenaigency/30min')}
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                Consulting
              </Button>
              <Button 
                onClick={() => openCalendlyLink('https://calendly.com/alan-nextgenaigency/full-time-opportunity')}
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                Full-Time Role
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">About Us</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Next Gen Aigency is an AI agency built on a simple truth: tools alone don't transform businesses, structure does. We specialize in helping companies that want to adopt AI but lack the foundational systems to make it work. Whether you're drowning in manual processes, missing documentation, or just unsure where to start, we step in to build the workflows, SOPs, and architecture that set the stage for AI success.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Once your operations are optimized, we carefully introduce the right AI tools—automations, assistants, data flows, and more tailored to your specific needs. Our approach is strategic, not flashy. We've helped teams streamline their work, improve decision-making, and unlock serious time and cost savings.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From small startups to growing enterprises, we've guided clients through meaningful transformations—not with hype, but with real, lasting results. At Next Gen Aigency, we don't just install AI, we make sure it sticks, scales, and serves your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Automation Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">AI & Automation Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored for modern business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-300 leading-relaxed">
                      {item.description}
                    </CardDescription>
                    <Button 
                      onClick={() => openCalendlyLink(item.calendlyLink)}
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <Calendar className="mr-2" size={16} />
                      Book a Call
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Or hire us for Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">Or hire us for</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => openCalendlyLink('https://calendly.com/alan-nextgenaigency/full-time-opportunity')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2" size={20} />
                Full-Time Role
              </Button>
              <Button 
                onClick={() => openCalendlyLink('https://calendly.com/alan-nextgenaigency/30min')}
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="mr-2" size={20} />
                Consulting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">Tools & Technologies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proficient with modern AI ecosystems and automation platforms
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-slate-800/80 to-purple-800/80 text-cyan-300 border border-purple-500/30 hover:from-slate-700/80 hover:to-purple-700/80 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-default backdrop-blur-sm"
              >
                {tool}
              </Badge>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 italic">
              Plus many other tools and integrations across the AI and automation stack.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Ready to transform your business with AI and automation? Let's discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('solutions')}
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                AI & Automation Solution
              </Button>
              <Button 
                onClick={() => openCalendlyLink('https://calendly.com/alan-nextgenaigency/30min')}
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Consulting
              </Button>
              <Button 
                onClick={() => openCalendlyLink('https://calendly.com/alan-nextgenaigency/full-time-opportunity')}
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Full-Time Roles
              </Button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400">
              © 2025 Next Gen Aigency. AI & Automation Specialists.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

