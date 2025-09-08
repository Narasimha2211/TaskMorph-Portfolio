'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/mblazven', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-6000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: '15%', top: '20%', duration: '3s' },
          { left: '85%', top: '30%', duration: '4s' },
          { left: '25%', top: '70%', duration: '3.5s' },
          { left: '75%', top: '80%', duration: '4.5s' },
          { left: '45%', top: '15%', duration: '3.2s' },
          { left: '65%', top: '60%', duration: '4.2s' },
          { left: '35%', top: '90%', duration: '3.8s' },
          { left: '55%', top: '40%', duration: '4.8s' }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: `${i * 0.5}s`,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg border-b border-blue-100 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center animate-slide-in-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Knight<span className="text-blue-700">Morphers</span>
              </h1>
              <div className="ml-3 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full animate-pulse-gentle">
                <span className="text-blue-600 text-xs font-medium">AI Automation</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 animate-slide-in-right">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition duration-300 font-medium relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition duration-300 font-medium relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition duration-300 font-medium relative group">
                Case Studies
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition duration-300 font-medium relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition duration-300 font-medium relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="hidden md:block animate-slide-in-right">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 animate-bounce-gentle">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 font-semibold text-sm animate-bounce-gentle">
                🚀 AI-Powered Business Transformation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent animate-gradient-shift">
                Transform Your Business
              </span>
              <span className="block mt-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-shift animation-delay-1000">
                with AI Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
              We craft intelligent automation solutions that <span className="text-blue-600 font-semibold">revolutionize workflows</span>, 
              <span className="text-indigo-600 font-semibold"> boost productivity</span>, and 
              <span className="text-cyan-600 font-semibold"> drive unprecedented growth</span> for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-1000">
              <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/30 flex items-center space-x-3">
                <span>Start Your Transformation</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#projects" className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20 flex items-center space-x-3">
                <span>View Our Work</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-40 left-10 animate-float animation-delay-1000">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-60 right-20 animate-float animation-delay-2000">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-40 left-1/4 animate-float animation-delay-3000">
          <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/60 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white/30 to-indigo-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Our AI Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive automation services designed to transform your business operations and accelerate growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "Intelligent Process Automation",
                description: "Transform manual workflows into intelligent, self-optimizing systems that learn and adapt to your business needs.",
                features: ["Workflow Analysis", "Smart Automation", "Continuous Learning"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "📊",
                title: "AI-Powered Analytics",
                description: "Unlock actionable insights from your data with advanced machine learning algorithms and predictive modeling.",
                features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: "💬",
                title: "Conversational AI",
                description: "Deploy sophisticated chatbots and virtual assistants that provide exceptional customer experiences 24/7.",
                features: ["Natural Language Processing", "Multi-platform Support", "Smart Routing"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🔮",
                title: "Computer Vision Solutions",
                description: "Implement advanced image and video analysis for quality control, security, and operational efficiency.",
                features: ["Object Detection", "Quality Inspection", "Automated Monitoring"],
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: "⚡",
                title: "RPA Integration",
                description: "Seamlessly integrate robotic process automation with your existing systems for maximum efficiency gains.",
                features: ["System Integration", "Legacy Modernization", "Scalable Deployment"],
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: "🎯",
                title: "Custom AI Development",
                description: "Tailored AI solutions designed specifically for your unique business challenges and objectives.",
                features: ["Custom Models", "API Development", "Ongoing Support"],
                color: "from-indigo-500 to-blue-500"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-blue-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Case Studies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from our AI automation implementations across various industries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "E-commerce Giant Automation",
                company: "Major Retail Corporation",
                challenge: "Manual order processing was creating bottlenecks and delays in fulfillment",
                solution: "Implemented intelligent order routing and inventory optimization AI",
                results: ["90% reduction in processing time", "99.5% accuracy rate", "$2M annual savings"],
                tech: ["Machine Learning", "Computer Vision", "RPA"],
                image: "🛒"
              },
              {
                title: "Healthcare Workflow Optimization",
                company: "Regional Healthcare Network",
                challenge: "Patient data processing and appointment scheduling inefficiencies",
                solution: "Deployed AI-powered patient management and predictive scheduling system",
                results: ["75% faster patient onboarding", "40% reduction in wait times", "95% patient satisfaction"],
                tech: ["Natural Language Processing", "Predictive Analytics", "Automation"],
                image: "🏥"
              },
              {
                title: "Financial Services Transformation",
                company: "Investment Management Firm",
                challenge: "Risk assessment and compliance monitoring required extensive manual oversight",
                solution: "Created AI-driven risk analysis and automated compliance monitoring system",
                results: ["60% faster risk assessments", "99.9% compliance accuracy", "50% cost reduction"],
                tech: ["Deep Learning", "Pattern Recognition", "Real-time Analytics"],
                image: "💰"
              }
            ].map((study, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-blue-100 transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {study.image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-6">{study.company}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Challenge:</h4>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Solution:</h4>
                    <p className="text-slate-600">{study.solution}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-3">Key Results:</h4>
                  <div className="grid gap-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                About Knight Morphers
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We are an emerging AI automation company passionate about transforming businesses through intelligent technology solutions. As we launch our journey, we bring fresh perspectives, cutting-edge expertise, and an unwavering commitment to delivering exceptional automation solutions that drive real results for our future clients.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">🚀</div>
                  <div className="text-slate-600">Ready to Launch</div>
                </div>
                <div className="text-center p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                  <div className="text-slate-600">Commitment to Excellence</div>
                </div>
                <div className="text-center p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">∞</div>
                  <div className="text-slate-600">Growth Potential</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-slate-600">Dedicated Support</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 transform hover:scale-105 shadow-lg text-center">
                  Start Your Journey
                </a>
                <a href="https://linkedin.com/in/narasimhareddykasarla" target="_blank" rel="noopener noreferrer" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition duration-300 transform hover:scale-105 text-center">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up animation-delay-500">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Innovation First</h3>
                      <p className="text-slate-600">Fresh, cutting-edge approaches</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Passionate Team</h3>
                      <p className="text-slate-600">Driven AI enthusiasts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Future-Focused</h3>
                      <p className="text-slate-600">Building tomorrow's solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how AI automation can revolutionize your operations and drive unprecedented growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-blue-100">knightmorphers@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-blue-100">+91 8309467596</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Response Time</div>
                    <div className="text-blue-100">Within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Consultation</div>
                    <div className="text-blue-100">Free initial assessment</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-300">
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition duration-300 resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Start Your AI Transformation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Knight<span className="text-blue-400">Morphers</span>
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Transforming businesses through intelligent AI automation solutions. 
                Building the future of work, one automation at a time.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/knight-morphers/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/knightmorphers1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.48.165 4.938.31a5.493 5.493 0 00-1.987.923A5.496 5.496 0 00.924 4.92C.779 5.461.696 6.075.662 7.022.627 7.97.614 8.377.614 11.998c0 3.621.013 4.028.048 4.976.034.947.117 1.561.262 2.103a5.496 5.496 0 00.923 1.987 5.493 5.493 0 001.987.923c.542.145 1.156.228 2.103.262.948.035 1.355.048 4.976.048 3.621 0 4.028-.013 4.976-.048.947-.034 1.561-.117 2.103-.262a5.493 5.493 0 001.987-.923 5.496 5.496 0 00.923-1.987c.145-.542.228-1.156.262-2.103.035-.948.048-1.355.048-4.976 0-3.621-.013-4.028-.048-4.976-.034-.947-.117-1.561-.262-2.103a5.496 5.496 0 00-.923-1.987A5.493 5.493 0 0019.078.924c-.542-.145-1.156-.228-2.103-.262C16.027.013 15.62 0 12.017 0zm0 2.16c3.554 0 3.97.013 5.369.048.844.038 1.304.177 1.609.295.405.158.694.347.998.651.304.304.493.593.651.998.118.305.257.765.295 1.609.035 1.399.048 1.815.048 5.369 0 3.554-.013 3.97-.048 5.369-.038.844-.177 1.304-.295 1.609-.158.405-.347.694-.651.998-.304.304-.593.493-.998.651-.305.118-.765.257-1.609.295-1.399.035-1.815.048-5.369.048-3.554 0-3.97-.013-5.369-.048-.844-.038-1.304-.177-1.609-.295a2.677 2.677 0 01-.998-.651 2.677 2.677 0 01-.651-.998c-.118-.305-.257-.765-.295-1.609-.035-1.399-.048-1.815-.048-5.369 0-3.554.013-3.97.048-5.369.038-.844.177-1.304.295-1.609.158-.405.347-.694.651-.998a2.677 2.677 0 01.998-.651c.305-.118.765-.257 1.609-.295 1.399-.035 1.815-.048 5.369-.048zm0 3.675a5.503 5.503 0 100 11.005 5.503 5.503 0 000-11.005zm0 9.076a3.573 3.573 0 110-7.146 3.573 3.573 0 010 7.146zm6.101-9.31a1.286 1.286 0 11-2.572 0 1.286 1.286 0 012.572 0z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579732696012" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#services" className="hover:text-blue-400 transition duration-300">Process Automation</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition duration-300">AI Analytics</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition duration-300">Conversational AI</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition duration-300">Computer Vision</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-blue-400 transition duration-300">About Us</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
                <li><a href="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Knight Morphers. All rights reserved. Transforming businesses with AI automation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
