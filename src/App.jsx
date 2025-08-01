import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Brain, 
  Network, 
  Cpu, 
  Database, 
  Bot, 
  TrendingUp, 
  Code, 
  Zap,
  GitBranch,
  Settings,
  Target,
  Layers,
  ChevronRight,
  BookOpen,
  Lightbulb,
  Rocket
} from 'lucide-react'
import './App.css'

// Import images
import neuralNetworkImg from './assets/MrJshSJncYR7.jpg'
import cnnArchitectureImg from './assets/NjklcU11uR4d.jpeg'
import transformerImg from './assets/dKwL1PIxQDRs.png'
import ragArchitectureImg from './assets/iQVVBnYOkjFz.jpg'
import agentArchitectureImg from './assets/yWIblKwRWKfr.png'
import mlPipelineImg from './assets/igTH644SVCGB.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('foundations')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    {
      id: 'foundations',
      title: 'ML & Deep Learning Foundations',
      icon: Brain,
      description: 'Historical evolution and core concepts with business applications',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'architectures',
      title: 'Core Architecture Evolution',
      icon: Network,
      description: 'From CNN to Transformer with practical implementations',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'practice',
      title: 'Theory to Practice',
      icon: Code,
      description: 'Model training, deployment, and RAG technology',
      color: 'from-pink-500 to-red-600'
    },
    {
      id: 'agents',
      title: 'Building AI Agents',
      icon: Bot,
      description: 'ReAct framework and reinforcement learning optimization',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'future',
      title: 'Future Possibilities',
      icon: Rocket,
      description: 'Implementation areas and business strategies',
      color: 'from-orange-500 to-yellow-600'
    }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 text-blue-300 border-blue-300">
              Advanced ML Technology Sharing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Machine Learning
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Technology Sharing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive ML knowledge system from foundations to cutting-edge applications, 
              designed for technical teams with practical business implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {sections.map((section, index) => (
              <Card 
                key={section.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => scrollToSection(section.id)}
              >
                <CardContent className="p-4 text-center">
                  <section.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                  <h3 className="text-sm font-semibold text-white mb-1">{section.title}</h3>
                  <p className="text-xs text-gray-300">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
            onClick={() => scrollToSection('foundations')}
          >
            Start Learning <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">ML Tech Sharing</div>
            <div className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm transition-colors ${
                    activeSection === section.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: ML & Deep Learning Foundations */}
      <section id="foundations" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-300 border-blue-300">
              Section 1
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ML & Deep Learning Foundations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the historical evolution and core concepts with practical business applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src={neuralNetworkImg} 
                alt="Neural Network Architecture" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <GitBranch className="mr-2 w-5 h-5" />
                    Historical Evolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Symbolism vs Connectionism</h4>
                      <p className="text-sm">The victory of connectionism approach in modern AI, with practical business implications for rule-based vs data-driven systems.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Key Milestones</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 1986: Backpropagation algorithm popularization</li>
                        <li>• 2012: AlexNet ImageNet breakthrough</li>
                        <li>• Modern: Three pillars - Deep networks, Big data, GPU computing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="concepts" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
              <TabsTrigger value="concepts" className="text-white data-[state=active]:bg-blue-500">Core Concepts</TabsTrigger>
              <TabsTrigger value="training" className="text-white data-[state=active]:bg-purple-500">Training Process</TabsTrigger>
              <TabsTrigger value="components" className="text-white data-[state=active]:bg-pink-500">Key Components</TabsTrigger>
            </TabsList>
            
            <TabsContent value="concepts" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Machine Learning</CardTitle>
                    <CardDescription className="text-gray-300">
                      Automatic pattern learning from data for prediction and decision-making
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm">
                      Instead of giving computers a "Cat Recognition Manual" (rules), 
                      we show them thousands of cat photos (data) and let them learn "what is a cat".
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Neural Networks</CardTitle>
                    <CardDescription className="text-gray-300">
                      Mathematical models mimicking biological brain structure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm">
                      Interconnected "neurons" arranged in layers (input, hidden, output) 
                      performing weighted sum → activation computations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="training" className="mt-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Training Process: "Guess → Check Gap → Adjust" Loop</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Forward Propagation</h4>
                      <p className="text-sm mb-4">
                        Data flows from input layer to output layer, performing "weighted sum → activation" 
                        at each layer to generate predictions.
                      </p>
                      <p className="text-xs text-gray-400">
                        Analogy: Student attempts a problem based on current knowledge
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Backpropagation</h4>
                      <p className="text-sm mb-4">
                        Calculate prediction error using loss function, then propagate this error 
                        backward to update each parameter's contribution.
                      </p>
                      <p className="text-xs text-gray-400">
                        Analogy: Teacher provides feedback, student reflects on knowledge gaps
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="components" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Activation Functions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-2">Introduce non-linearity for complex pattern learning</p>
                    <ul className="text-xs space-y-1">
                      <li>• ReLU: Most commonly used</li>
                      <li>• Sigmoid: Output probability</li>
                      <li>• Tanh: Centered around zero</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Loss Functions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-2">Quantify prediction vs reality gap</p>
                    <ul className="text-xs space-y-1">
                      <li>• MSE: Regression tasks</li>
                      <li>• Cross-Entropy: Classification</li>
                      <li>• Custom: Domain-specific</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Optimizers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-2">Parameter update strategies</p>
                    <ul className="text-xs space-y-1">
                      <li>• SGD: Basic gradient descent</li>
                      <li>• Adam: Adaptive + momentum</li>
                      <li>• Learning rate scheduling</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section 2: Core Architecture Evolution */}
      <section id="architectures" className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-purple-300 border-purple-300">
              Section 2
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Architecture Evolution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From CNN to Transformer with practical business implementations
            </p>
          </div>

          <div className="space-y-16">
            {/* CNN Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Layers className="mr-2 w-5 h-5" />
                      Convolutional Neural Networks (CNN)
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Image processing specialists with business applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-300 mb-2">Core Innovations</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Local Receptive Fields:</strong> Focus on image regions</li>
                          <li>• <strong>Parameter Sharing:</strong> Same filter across image</li>
                          <li>• <strong>Pooling:</strong> Downsampling for efficiency</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-2">Business Applications</h4>
                        <ul className="text-sm space-y-1">
                          <li>• OCR text recognition systems</li>
                          <li>• Medical image analysis</li>
                          <li>• Quality control in manufacturing</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <img 
                  src={cnnArchitectureImg} 
                  alt="CNN Architecture" 
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Transformer Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={transformerImg} 
                  alt="Transformer Architecture" 
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Zap className="mr-2 w-5 h-5" />
                      Transformer & Attention Mechanism
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Revolutionary architecture dominating modern AI
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-300 mb-2">Multi-Head Attention</h4>
                        <p className="text-sm">
                          Parallel attention "heads" learning different relationship patterns 
                          (grammar, semantics, syntax) for comprehensive understanding.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-2">Business Impact</h4>
                        <ul className="text-sm space-y-1">
                          <li>• BERT: Text understanding tasks</li>
                          <li>• GPT: Content generation</li>
                          <li>• ViT: Image classification</li>
                          <li>• Highly parallelizable training</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Theory to Practice */}
      <section id="practice" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-pink-300 border-pink-300">
              Section 3
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From Theory to Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Model training, deployment, and RAG technology implementation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src={ragArchitectureImg} 
                alt="RAG Architecture" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="mr-2 w-5 h-5" />
                    RAG Technology
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Retrieval-Augmented Generation for enhanced AI capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Core Workflow</h4>
                      <ol className="text-sm space-y-1">
                        <li>1. <strong>Retrieve:</strong> Search relevant information</li>
                        <li>2. <strong>Augment:</strong> Combine with user query</li>
                        <li>3. <strong>Generate:</strong> LLM produces informed response</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Business Benefits</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduces hallucination</li>
                        <li>• Updates knowledge easily</li>
                        <li>• Traceable information sources</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="hyperparams" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
              <TabsTrigger value="hyperparams" className="text-white data-[state=active]:bg-pink-500">Hyperparameter Tuning</TabsTrigger>
              <TabsTrigger value="peft" className="text-white data-[state=active]:bg-red-500">PEFT Techniques</TabsTrigger>
              <TabsTrigger value="deployment" className="text-white data-[state=active]:bg-orange-500">Deployment</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hyperparams" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Learning Rate</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-2">Most critical hyperparameter</p>
                    <ul className="text-xs space-y-1">
                      <li>• Too high: Oscillation/divergence</li>
                      <li>• Too low: Slow convergence</li>
                      <li>• Use learning rate scheduling</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Batch Size</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-2">Samples per training iteration</p>
                    <ul className="text-xs space-y-1">
                      <li>• Large: Stable but may overfit</li>
                      <li>• Small: Noisy but generalizes</li>
                      <li>• Memory constraints</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Configuration Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-2">Engineering best practices</p>
                    <ul className="text-xs space-y-1">
                      <li>• Single config file (YAML/JSON)</li>
                      <li>• Version control integration</li>
                      <li>• Experiment tracking</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="peft" className="mt-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Parameter-Efficient Fine-tuning (PEFT)</CardTitle>
                  <CardDescription className="text-gray-300">
                    Cost-effective adaptation of large models
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">LoRA (Low-Rank Adaptation)</h4>
                      <p className="text-sm mb-4">
                        Freeze original weights W, add trainable low-rank matrices A and B. 
                        During inference: W + BA provides adapted behavior.
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• &lt;1% parameters to train</li>
                        <li>• Significant memory savings</li>
                        <li>• Easy model distribution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Local Deployment Benefits</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Data security and privacy</li>
                        <li>• Customization for specific domains</li>
                        <li>• Cost control for high-volume usage</li>
                        <li>• Reduced API dependencies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="deployment" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Vector Databases</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-4">
                      Specialized storage for semantic embeddings with fast similarity search
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Faiss:</strong> Facebook's library</li>
                      <li>• <strong>Milvus:</strong> Open-source vector DB</li>
                      <li>• <strong>Pinecone:</strong> Managed service</li>
                      <li>• <strong>ChromaDB:</strong> Lightweight option</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">RAG Fine-tuning</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <p className="text-sm mb-4">
                      Optimize retrieval and generation components
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Retriever:</strong> Contrastive learning</li>
                      <li>• <strong>Generator:</strong> Context utilization</li>
                      <li>• <strong>RA-DIT:</strong> Joint optimization</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section 4: Building AI Agents */}
      <section id="agents" className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-red-300 border-red-300">
              Section 4
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building AI Agents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ReAct framework and reinforcement learning optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Bot className="mr-2 w-5 h-5" />
                    AI Agent Architecture
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    From passive models to active systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Paradigm Shift</h4>
                      <p className="text-sm">
                        Traditional: "Question → Answer" (passive)
                        <br />
                        Agent: "Goal → Plan → Act → Reflect" (active)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Core Analogy</h4>
                      <p className="text-sm">
                        LLM = Brilliant but paralyzed brain
                        <br />
                        Agent = Brain + Senses + Limbs + Memory
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <img 
                src={agentArchitectureImg} 
                alt="AI Agent Architecture" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <Tabs defaultValue="react" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
              <TabsTrigger value="react" className="text-white data-[state=active]:bg-red-500">ReAct Framework</TabsTrigger>
              <TabsTrigger value="components" className="text-white data-[state=active]:bg-orange-500">Core Components</TabsTrigger>
              <TabsTrigger value="frameworks" className="text-white data-[state=active]:bg-yellow-500">Implementation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="react" className="mt-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">ReAct: Reason + Act Framework</CardTitle>
                  <CardDescription className="text-gray-300">
                    Continuous loop of reasoning and action
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-blue-300 mb-1">Reason</h4>
                      <p className="text-xs">Analyze situation and plan next step</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-purple-300 mb-1">Act</h4>
                      <p className="text-xs">Execute action using available tools</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-pink-300 mb-1">Observe</h4>
                      <p className="text-xs">Receive and process tool results</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-red-300 mb-1">Reflect</h4>
                      <p className="text-xs">Evaluate progress and adjust strategy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="components" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Planning Module</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="text-sm space-y-1">
                      <li>• Zero-shot planning</li>
                      <li>• Few-shot with examples</li>
                      <li>• Chain-of-Thought (CoT)</li>
                      <li>• Tree-of-Thoughts (ToT)</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Tool Integration</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="text-sm space-y-1">
                      <li>• Search engines</li>
                      <li>• Code execution</li>
                      <li>• Database queries</li>
                      <li>• Enterprise APIs</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Memory Systems</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <ul className="text-sm space-y-1">
                      <li>• Short-term: Context window</li>
                      <li>• Long-term: Vector database</li>
                      <li>• Experience replay</li>
                      <li>• Cross-session learning</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="frameworks" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Popular Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-300 mb-1">LangChain/LangGraph</h4>
                        <p className="text-sm">Comprehensive "Swiss Army knife" with mature ecosystem</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">LlamaIndex</h4>
                        <p className="text-sm">RAG-focused with strong data integration capabilities</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-300 mb-1">AutoGen</h4>
                        <p className="text-sm">Microsoft's multi-agent collaboration framework</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">Reinforcement Learning</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-300 mb-1">Environment Simulation</h4>
                        <p className="text-sm">High-fidelity sandboxes for safe training</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-300 mb-1">Reward Design</h4>
                        <p className="text-sm">Outcome-based, process-based, and preference learning</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-pink-300 mb-1">RLHF</h4>
                        <p className="text-sm">Human feedback for reward model training</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section 5: Future Possibilities */}
      <section id="future" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-orange-300 border-orange-300">
              Section 5
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Future Possibilities & Implementation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic implementation areas and business considerations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src={mlPipelineImg} 
                alt="ML Pipeline" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Rocket className="mr-2 w-5 h-5" />
                    Implementation Strategy
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    From concept to production deployment
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">Key Application Areas</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Customer service automation</li>
                        <li>• Document processing and analysis</li>
                        <li>• Code generation and review</li>
                        <li>• Data analysis and insights</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Success Factors</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Clear ROI measurement</li>
                        <li>• Gradual implementation approach</li>
                        <li>• Team skill development</li>
                        <li>• Risk management strategies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Technology Trends</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="text-sm space-y-2">
                  <li>• Multimodal AI integration</li>
                  <li>• Edge computing deployment</li>
                  <li>• Federated learning adoption</li>
                  <li>• Automated ML pipelines</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Business Considerations</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="text-sm space-y-2">
                  <li>• Data privacy and security</li>
                  <li>• Regulatory compliance</li>
                  <li>• Cost-benefit analysis</li>
                  <li>• Change management</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-sm">Team Development</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="text-sm space-y-2">
                  <li>• ML engineering skills</li>
                  <li>• Data science capabilities</li>
                  <li>• DevOps for ML (MLOps)</li>
                  <li>• Continuous learning culture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Implement ML in Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            This comprehensive guide provides the foundation for understanding and implementing 
            machine learning technologies in your technical team and business operations.
          </p>
          <div className="text-gray-400 text-sm">
            <p>ML Technology Sharing | Built for Technical Teams</p>
            <p className="mt-2">Comprehensive knowledge from foundations to cutting-edge applications</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

