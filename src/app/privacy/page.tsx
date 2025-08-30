export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
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
            <a 
              href="/"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors transform hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="bg-gray-900 rounded-xl p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                At Knight Morphers, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and protect your data when you use our AI automation services.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Data We Collect</h2>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Excel Data Processing</h3>
                  <p className="text-gray-300 mb-3">
                    We collect and process data from Excel spreadsheets exclusively for automation services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Business workflow data for process optimization</li>
                    <li>Contact information for client communication automation</li>
                    <li>Process data for efficiency analysis and reporting</li>
                    <li>Performance metrics for automation improvements</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Client Meeting Automation</h3>
                  <p className="text-gray-300 mb-3">
                    Our AI systems collect meeting-related information to streamline interactions:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Meeting scheduling preferences and availability</li>
                    <li>Contact details for automated coordination</li>
                    <li>Meeting topics and agenda requirements</li>
                    <li>Follow-up tasks and action items</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Automation Workflows */}
            <section>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">AI Automation Workflows</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-4">Social Media Automation</h3>
                <p className="text-gray-300 mb-4">
                  We utilize advanced AI workflows to automate social media content creation and posting:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-red-400 font-medium">Content Generation</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• AI-powered topic selection</li>
                      <li>• Automated image sourcing</li>
                      <li>• Caption generation with trending hashtags</li>
                      <li>• Content scheduling and publishing</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-red-400 font-medium">Business Topics Automated</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• AI agents for customer service automation</li>
                      <li>• Workflow automation saving 10+ hours weekly</li>
                      <li>• Custom AI agent development</li>
                      <li>• Lead generation automation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">How We Use Your Data</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Primary Uses</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Providing AI automation services</li>
                    <li>• Processing Excel data for workflow optimization</li>
                    <li>• Automating client meeting coordination</li>
                    <li>• Generating performance reports and analytics</li>
                    <li>• Improving our automation algorithms</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-3">Data Protection</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Encrypted data transmission and storage</li>
                    <li>• Strict access controls and authentication</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Compliance with data protection standards</li>
                    <li>• Secure data deletion when no longer needed</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy Commitments */}
            <section>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Our Privacy Commitments</h2>
              <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 rounded-lg p-6 border border-red-800/30">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">No Invasive Tracking</h4>
                    <p className="text-gray-400 text-sm">We only collect data necessary for providing our automation services</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Data Minimization</h4>
                    <p className="text-gray-400 text-sm">We collect only the minimum data required for effective automation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Limited Retention</h4>
                    <p className="text-gray-400 text-sm">Data is retained only as long as necessary for service provision</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Your Rights</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">You have the following rights regarding your personal data:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-300 space-y-2">
                    <li>• Request access to your personal data</li>
                    <li>• Request correction of inaccurate data</li>
                    <li>• Request deletion of your data</li>
                  </ul>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Object to processing of your data</li>
                    <li>• Request data portability</li>
                    <li>• Withdraw consent for data processing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-red-400 mb-4">Contact Us</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400">📧</span>
                    <span className="text-white">Email: </span>
                    <a href="mailto:knightmorphers@gmail.com" className="text-red-400 hover:text-red-300 underline">
                      knightmorphers@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400">💼</span>
                    <span className="text-white">LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/knight-morphers-37a432381" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-red-400 hover:text-red-300 underline">
                      Knight Morphers Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-400">📍</span>
                    <span className="text-white">Location: Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="text-center pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Knight Morphers. All rights reserved.
            </p>
            <div className="mt-4">
              <a 
                href="/"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}