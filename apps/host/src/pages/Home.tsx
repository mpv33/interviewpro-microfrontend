import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl space-y-12 text-center">

        {/* Hero Section */}
        <motion.h1
          className="text-2xl sm:text-4xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          Prepare for Your Next Big Tech Interview with InterviewPro
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A last-minute prep platform for software engineers—from entry-level to senior—with structured, focused content on JavaScript, ReactJs, NextJs,Frontend Machine Coding Challenges , DSA.
        </motion.p>

        {/* Card Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Card 1: What is InterviewPro */}
          <div className="bg-white text-gray-700 p-8 rounded-2xl shadow-[inset_8px_8px_16px_#bcc1c8,inset_-8px_-8px_16px_#ffffff]">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">What is InterviewPro?</h2>
            <p className="text-lg font-light leading-relaxed">
              InterviewPro is a structured, microfrontend-based interview preparation platform tailored for software engineers. It covers essential topics in a concise format—helping you revise efficiently, even at the last moment.
            </p>
          </div>

          {/* Card 2: Why Choose InterviewPro */}
          <div className="bg-white text-gray-700 p-8 rounded-2xl shadow-[inset_8px_8px_16px_#bcc1c8,inset_-8px_-8px_16px_#ffffff]">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Why Choose InterviewPro?</h2>
            <ul className="space-y-3 text-lg font-light text-left list-disc pl-6">
              <li><span className="text-indigo-600">✔</span> Concise and deep content for fast revision</li>
              <li><span className="text-indigo-600">✔</span> Beginner to advanced-friendly explanations</li>
              <li><span className="text-indigo-600">✔</span> Topic-wise DSA & Frontend breakdown</li>
              <li><span className="text-indigo-600">✔</span> Integrated editor for hands-on practice (coming soon)</li>
              <li><span className="text-indigo-600">✔</span> Ongoing blog updates for industry trends</li>
            </ul>
          </div>
        </motion.div>

        {/* Ready to Start CTA */}
        <motion.div
          className="bg-white text-gray-700 p-8 rounded-2xl shadow-[inset_8px_8px_16px_#bcc1c8,inset_-8px_-8px_16px_#ffffff]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Ready to Start?</h2>
          <p className="text-lg font-light mb-6">Get immediate access to InterviewPro’s comprehensive content to start your tech interview prep today!</p>
          <div className="flex justify-center space-x-6">
            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all">Get Started</button>
          </div>
        </motion.div>

        {/* Content Areas */}
        <motion.div
          className="bg-white text-gray-700 p-8 rounded-2xl shadow-[inset_8px_8px_16px_#bcc1c8,inset_-8px_-8px_16px_#ffffff]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Content Areas</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg font-light text-left">
            <li>JavaScript: Core concepts & advanced use-cases</li>
            <li>React & Next.js: Practical frontend systems</li>
            <li>DSA: Topic-wise questions & solutions</li>
            <li>Interview tips, patterns, and mock questions</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
