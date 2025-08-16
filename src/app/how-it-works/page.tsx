import React from "react";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How QueryLens Works
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Transform your natural language questions into powerful SQL queries
            in just three simple steps
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Ask Your Question
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Type your question in plain English, just like you&apos;d ask
                  a colleague. No need to worry about SQL syntax!
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">Example:</p>
                  <p className="text-gray-600 italic">
                    "Show me all users from India who signed up last month"
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  AI Magic Happens
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our advanced AI analyzes your question and generates the
                  perfect SQL query. Watch the magic unfold in real-time!
                </p>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg">
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Use Your SQL
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Copy the generated SQL and use it in your favorite database
                  tool. It&apos;s ready to run immediately!
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-green-400 font-mono text-sm">
                    SELECT * FROM users WHERE country = &apos;India&apos; AND
                    created_at &gt;= &apos;2024-01-01&apos;;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Learning SQL Has Never Been This Fun
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  No Syntax Memorization
                </h3>
                <p className="text-gray-600">
                  Focus on what you want to know, not how to write SQL. Our AI
                  handles the technical details.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Lightning Fast Results
                </h3>
                <p className="text-gray-600">
                  Get your SQL queries in seconds. No more waiting or struggling
                  with complex syntax.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Learn by Example
                </h3>
                <p className="text-gray-600">
                  See how your questions translate to SQL. Perfect for learning
                  and understanding database concepts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Secure & Private
                </h3>
                <p className="text-gray-600">
                  Your queries stay private. We don&apos;t store your data or
                  questions for maximum security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Ready to Try It Yourself?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Start transforming your questions into SQL queries today!
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Start Querying Now
          </Link>
        </div>
      </div>
    </main>
  );
}
