export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  Task<span className="text-purple-500">Morph</span>
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#services" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#projects" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">Case Studies</a>
                <a href="#about" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#contact" className="text-white hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Transform Your Business with
              <span className="text-purple-500 block animate-glow"> AI Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slideUp">
              TaskMorph specializes in cutting-edge AI solutions that revolutionize how your business operates. 
              From natural language database querying to advanced medical imaging AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{animationDelay: '0.5s'}}>
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105">
                Book a Free Consultation
              </a>
              <a href="#projects" className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI automation solutions to streamline your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105 animate-float">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Workflow Automation</h3>
              <p className="text-gray-300">Automate repetitive manual processes and eliminate bottlenecks in your business operations for maximum efficiency.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom AI Solutions</h3>
              <p className="text-gray-300">Build intelligent chatbots, document processing systems, and predictive models tailored to your specific needs.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 712-2h2a2 2 0 712 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 712-2h2a2 2 0 712 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Automation</h3>
              <p className="text-gray-300">Implement automated data scraping, cleaning, and reporting systems to keep your business insights current.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105 animate-float" style={{animationDelay: '1.5s'}}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Process Optimization</h3>
              <p className="text-gray-300">Combine RPA and AI technologies to optimize your business processes for maximum efficiency and cost savings.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105 animate-float" style={{animationDelay: '2s'}}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Consulting</h3>
              <p className="text-gray-300">Strategic roadmap planning for AI adoption, helping you identify opportunities and implement solutions step by step.</p>
            </div>

            {/* Service 6 */}
            <div className="bg-black border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105 animate-float" style={{animationDelay: '2.5s'}}>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Medical AI Solutions</h3>
              <p className="text-gray-300">Advanced medical imaging AI for brain tumor detection and other healthcare applications with 95%+ accuracy.</p>
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
            <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">Natural Language Database Querying</h3>
                    <p className="text-purple-400 font-semibold">Enterprise Data Solutions</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">
                      Fortune 500 company struggled with complex SQL queries taking hours of analyst time for basic data insights.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                    <p className="text-gray-300">
                      Implemented AI-powered natural language interface allowing users to query databases using plain English.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Results</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Query Time Reduction:</span>
                      <span className="text-2xl font-bold text-purple-500">90%</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-300">User Adoption Rate:</span>
                      <span className="text-2xl font-bold text-purple-500">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 - Medical Chatbot */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:border-purple-500 transition duration-300 transform hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">Medical AI Chatbot</h3>
                    <p className="text-purple-400 font-semibold">Brain Tumor Detection System</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Challenge</h4>
                    <p className="text-gray-300">
                      Hospital needed faster preliminary brain tumor screening to reduce radiologist workload and improve patient outcomes.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
                    <p className="text-gray-300">
                      Developed AI chatbot with medical image recognition capabilities for automated brain tumor detection and patient consultation.
                    </p>
                  </div>
                  
                  <div className="bg-black rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Results</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Detection Accuracy:</span>
                      <span className="text-2xl font-bold text-purple-500">95%</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-300">Screening Time Reduction:</span>
                      <span className="text-2xl font-bold text-purple-500">75%</span>
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
                Why Choose TaskMorph?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                TaskMorph is at the forefront of AI automation technology. We transform complex business challenges into streamlined, intelligent solutions that drive real growth and operational excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
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
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
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
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
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
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
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
                    At TaskMorph, we believe every business can unlock exponential growth by automating repetitive tasks. We specialize in AI-powered automation, intelligent data workflows, and smart business solutions that free up your team&apos;s time and improve efficiency.
                  </p>
                  
                  <p className="leading-relaxed">
                    Our mission is to make cutting-edge AI accessible to businesses of all sizes. From custom chatbots and document automation to predictive models and workflow optimization, we build solutions that deliver real, measurable results.
                  </p>
                  
                  <p className="leading-relaxed">
                    With a perfect blend of technical expertise and business-first thinking, we ensure our automations don&apos;t just work—they transform your operations and drive meaningful impact.
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <p className="text-lg font-semibold text-purple-400 mb-4">
                      Looking to explore how AI automation can help your business?
                    </p>
                    <a href="#contact" className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
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
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-300">hello@taskmorph.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Location</h4>
                      <p className="text-gray-300">San Francisco, CA</p>
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
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
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
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Task<span className="text-purple-500">Morph</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming businesses through intelligent automation
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">
                © 2024 TaskMorph. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
