import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0e5ec] flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl space-y-12 text-center">

        <motion.h1
          className="text-2xl sm:text-4xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prepare for Your Next Big Tech Interview with InterviewPro
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A last-minute prep platform for software engineers—from entry-level to senior—with structured, focused content on JavaScript, React, Next.js, and DSA.
        </motion.p>

        {/* What is InterviewPro */}
        <motion.div
          className="bg-[#e0e5ec] text-gray-700 p-8 rounded-2xl shadow-[inset_8px_8px_16px_#bcc1c8,inset_-8px_-8px_16px_#ffffff]"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">What is InterviewPro?</h2>
          <p className="text-lg font-light leading-relaxed">
            InterviewPro is a structured, microfrontend-based interview preparation platform tailored for software engineers. It covers essential topics in a concise format—helping you revise efficiently, even at the last moment.
          </p>
        </motion.div>

        {/* Why Choose InterviewPro */}
        <motion.div
          className="bg-[#e0e5ec] text-gray-700 p-8 rounded-2xl shadow-[inset_8px_8px_16px_#bcc1c8,inset_-8px_-8px_16px_#ffffff]"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Why Choose InterviewPro?</h2>
          <ul className="space-y-3 text-lg font-light text-left list-disc pl-6">
            <li>Concise and deep content for fast revision</li>
            <li>Beginner to advanced-friendly explanations</li>
            <li>Topic-wise DSA & Frontend breakdown</li>
            <li>Integrated editor for hands-on practice (coming soon)</li>
            <li>Ongoing blog updates for industry trends</li>
          </ul>
        </motion.div>

        {/* Content Areas */}
        <motion.div
          className="bg-[#e0e5ec] text-gray-700 p-8 rounded-2xl shadow-[inset_8px_8px_16px_#bcc1c8,inset_-8px_-8px_16px_#ffffff]"
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

        {/* Footer */}
        <motion.div
          className="text-center text-gray-600 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg font-semibold">Built by engineers, for engineers.</p>
          <p className="mt-1 text-sm">&copy; 2025 InterviewPro. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
