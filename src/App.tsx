import React from 'react';
import { Mic, Video, FileText, Mail, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  { icon: Mic, title: 'Audio Transcription', description: 'Accurate transcription of your meetings' },
  { icon: Video, title: 'Multi-Platform Integration', description: 'Works with Zoom, Teams, and Google Meet' },
  { icon: FileText, title: 'Smart Summaries', description: 'AI-powered meeting summaries' },
  { icon: CheckCircle, title: 'Action Item Tracking', description: 'Automatically extract and track action items' },
  { icon: Mail, title: 'Follow-up Emails', description: 'Automated emails with next steps' },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Mic className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">MeetSmart</span>
          </div>
          <div className="flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Transform Your Meetings with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Automatically summarize, track action items, and follow up on your video conferences.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter</h3>
                <p className="text-4xl font-bold text-gray-900 mb-6">$19<span className="text-xl font-normal text-gray-600">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Up to 10 meetings/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic summaries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Email follow-ups</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Choose Starter
                </a>
              </div>
              <div className="bg-blue-600 p-8 rounded-lg shadow-md w-full max-w-sm text-white">
                <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-6">$49<span className="text-xl font-normal opacity-75">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    <span>Unlimited meetings</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    <span>Advanced AI summaries</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    <span>Action item tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-2" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Choose Pro
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Get in Touch
            </h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Mic className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">MeetSmart</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2024 MeetSmart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;