export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
            {/* Navigation */}
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                Knight<span className="text-red-500">Morphers</span>
              </h1>
              <div className="ml-3 px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-full">
                <span className="text-red-400 text-xs font-medium">AI Automation</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-red-400 transition duration-300 font-medium">Home</a>
              <a href="#services" className="text-gray-300 hover:text-red-400 transition duration-300 font-medium">Services</a>
              <a href="#case-studies" className="text-gray-300 hover:text-red-400 transition duration-300 font-medium">Case Studies</a>
              <a href="#about" className="text-gray-300 hover:text-red-400 transition duration-300 font-medium">About</a>
              <a href="#contact" className="text-gray-300 hover:text-red-400 transition duration-300 font-medium">Contact</a>
            </div>
            <div className="hidden md:block">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
            {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-20"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-breathe"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-red-800/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-600/5 to-transparent rounded-full blur-3xl animate-pulse-red"></div>
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-red-700/8 rounded-full blur-3xl animate-breathe" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeIn">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                Transforming Business with AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="inline-block animate-fadeIn">Intelligent</span>
              <span className="block text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text animate-gradient animate-fade-in-delay">
                Automation
              </span>
              <span className="block text-gray-300 text-3xl md:text-5xl lg:text-6xl font-light animate-slideUp">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Knight Morphers delivers cutting-edge AI automation that transforms your business operations. 
              From intelligent workflows to predictive analytics, we build solutions that drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="#contact" className="group inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/30">
                Start Your Transformation
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:bg-gray-900/70 animate-float">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-3 animate-pulse-red">95%</div>
                <div className="text-gray-400 text-lg font-medium">Accuracy Rate</div>
                <div className="text-gray-500 text-sm mt-2">AI Model Performance</div>
              </div>
              <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:bg-gray-900/70 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-3 animate-pulse-red">90%</div>
                <div className="text-gray-400 text-lg font-medium">Time Saved</div>
                <div className="text-gray-500 text-sm mt-2">Process Automation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI 
              <span className="text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From intelligent automation to predictive analytics, we deliver enterprise-grade AI solutions 
              that transform your business operations and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105 animate-fadeIn glass-effect card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-4 animate-float-subtle group-hover:animate-pulse-red">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-2 group-hover:animate-shimmer">Workflow Automation</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Automate repetitive manual processes and eliminate bottlenecks in your business operations for maximum efficiency.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </div>

            {/* Service 2 */}
            <div className="group bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105 animate-fade-in-delay glass-effect card-hover" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4 animate-float-subtle group-hover:animate-pulse-red">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-2 group-hover:animate-shimmer">Custom AI Solutions</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Build intelligent chatbots, document processing systems, and predictive models tailored to your specific needs.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </div>

            {/* Service 3 */}
            <div className="group bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105 animate-slideUp glass-effect card-hover" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center mb-4 animate-float-subtle group-hover:animate-pulse-red">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 712-2h2a2 2 0 712 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 712-2h2a2 2 0 712 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-2 group-hover:animate-shimmer">Data Automation</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Implement automated data scraping, cleaning, and reporting systems to keep your business insights current.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </div>

            {/* Service 4 */}
            <div className="group bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105 animate-fadeIn glass-effect card-hover" style={{animationDelay: '0.6s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-4 animate-float-subtle group-hover:animate-pulse-red">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-2 group-hover:animate-shimmer">Process Optimization</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Combine RPA and AI technologies to optimize your business processes for maximum efficiency and cost savings.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </div>

            {/* Service 5 */}
            <div className="group bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105 animate-fade-in-delay glass-effect card-hover" style={{animationDelay: '0.8s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4 animate-float-subtle group-hover:animate-pulse-red">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-2 group-hover:animate-shimmer">AI Consulting</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Strategic roadmap planning for AI adoption, helping you identify opportunities and implement solutions step by step.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </div>

            {/* Service 6 */}
            <div className="group bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105 animate-slideUp glass-effect card-hover" style={{animationDelay: '1s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center mb-4 animate-float-subtle group-hover:animate-pulse-red">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-2 group-hover:animate-shimmer">Medical AI Solutions</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Advanced medical imaging AI for brain tumor detection and other healthcare applications with 95%+ accuracy.</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from our AI automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 - Natural Language DB Querying */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">Natural Language Database Querying</h3>
                    <p className="text-red-400 font-semibold">Enterprise Data Solutions</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">
                      Fortune 500 company struggled with complex SQL queries taking hours of analyst time for basic data insights.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Solution</h4>
                    <p className="text-gray-300">
                      Implemented AI-powered natural language interface allowing users to query databases using plain English.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Results</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Query Time Reduction:</span>
                      <span className="text-2xl font-bold text-red-500">90%</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-300">User Adoption Rate:</span>
                      <span className="text-2xl font-bold text-red-500">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Medical Chatbot */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:border-red-500 transition duration-300 transform hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">Medical AI Chatbot</h3>
                    <p className="text-red-400 font-semibold">Brain Tumor Detection System</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">
                      Hospital needed faster preliminary brain tumor screening to reduce radiologist workload and improve patient outcomes.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Solution</h4>
                    <p className="text-gray-300">
                      Developed AI chatbot with medical image recognition capabilities for automated brain tumor detection and patient consultation.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Results</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Detection Accuracy:</span>
                      <span className="text-2xl font-bold text-red-500">95%</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-300">Screening Time Reduction:</span>
                      <span className="text-2xl font-bold text-red-500">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Knight Morphers?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Knight Morphers is at the forefront of AI automation technology. We transform complex business challenges into streamlined, intelligent solutions that drive real growth and operational excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Rapid Implementation</h3>
                    <p className="text-gray-300">Get your AI solutions up and running quickly with our proven deployment methodologies and extensive experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 712-2h2a2 2 0 712 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 712-2h2a2 2 0 712 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Measurable ROI</h3>
                    <p className="text-gray-300">Our solutions deliver quantifiable results - from 90% time savings to 95% accuracy improvements in critical processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Business-First Approach</h3>
                    <p className="text-gray-300">We understand your business needs first, then design AI solutions that align with your goals and scale with your growth.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Ongoing Support</h3>
                    <p className="text-gray-300">From initial consultation to post-deployment optimization, we&apos;re with you every step of your automation journey.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-black rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    At Knight Morphers, we believe every business can unlock exponential growth by automating repetitive tasks. We specialize in AI-powered automation, intelligent data workflows, and smart business solutions that free up your team&apos;s time and improve efficiency.
                  </p>
                  
                  <p className="leading-relaxed">
                    Our mission is to make cutting-edge AI accessible to businesses of all sizes. From custom chatbots and document automation to predictive models and workflow optimization, we build solutions that deliver real, measurable results.
                  </p>
                  
                  <p className="leading-relaxed">
                    With a perfect blend of technical expertise and business-first thinking, we ensure our automations don&apos;t just work—they transform your operations and drive meaningful impact.
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <p className="text-lg font-semibold text-red-400 mb-4">
                      Looking to explore how AI automation can help your business?
                    </p>
                    <a href="#contact" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
                      Let&apos;s Talk
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Started Today</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with AI automation? Let&apos;s discuss your project.
            </p>
          </div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-300">taskmorphers@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+91 8309467596</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <form className="bg-gray-900 rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <h3 className="text-3xl font-bold text-white">
                  Knight<span className="text-red-500">Morphers</span>
                </h3>
                <div className="ml-3 px-3 py-1 bg-red-600/10 border border-red-500/20 rounded-full">
                  <span className="text-red-400 text-xs font-medium">AI Automation</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Transforming businesses through intelligent automation and cutting-edge AI solutions. 
                We help companies achieve operational excellence and sustainable growth.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-red-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Services</a></li>
                <li><a href="#case-studies" className="text-gray-400 hover:text-red-400 transition-colors">Case Studies</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Workflow Automation</span></li>
                <li><span className="text-gray-400">Custom AI Solutions</span></li>
                <li><span className="text-gray-400">Data Analytics</span></li>
                <li><span className="text-gray-400">AI Consulting</span></li>
                <li><span className="text-gray-400">Medical AI</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Knight Morphers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
