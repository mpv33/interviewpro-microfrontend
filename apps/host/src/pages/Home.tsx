import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl space-y-16 text-center">
        {/* Hero Section */}
        <HeroSection />

        {/* Info Cards: What & Why */}
        <InfoCards />

        {/* Content Areas */}
        <ContentAreas />

         {/* Call to Action */}
         <CallToAction />
      </div>
    </div>
  );
}

const HeroSection = () => (
  <div>
    <motion.h1
      className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 80 }}
    >
      Master Your Tech Interviews, Last-Minute
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Accelerate your interview prep with InterviewPro—your go-to resource for mastering DSA, system design, and frontend technologies in record time.
    </motion.p>
  </div>
);

const InfoCards = () => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* What is InterviewPro */}
    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-left">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">📘 What is InterviewPro?</h2>
      <p className="text-base text-gray-700 leading-relaxed">
        InterviewPro is a next-gen platform that offers concise, structured, and practical interview prep. Perfect for last-minute revisions and focused learning.
      </p>
    </div>

    {/* Why InterviewPro */}
    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-left">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">🎯 Why InterviewPro?</h2>
      <ul className="space-y-3 text-base text-gray-700 list-disc pl-5">
        <li>🔥 Clear and concise explanations for quick understanding</li>
        <li>🧠 From beginners to senior-level content</li>
        <li>🧩 In-depth breakdowns of DSA & frontend interview topics</li>
        <li>💻 Hands-on coding challenges similar Leetcode (coming soon)</li>
      </ul>
    </div>
  </motion.div>
);

const CallToAction = () => (
  <motion.div
    className="bg-indigo-600 text-white p-10 rounded-xl text-center shadow-md"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl font-bold mb-3">Get Ready to Ace Your Interviews</h2>
    <p className="text-base mb-6">Join thousands of engineers who trust InterviewPro for their prep. Start now and level up your interview game.</p>
    <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-100 transition duration-300">
    <Link to={'/dsa'}>  Start Now</Link>   
    </button>
  </motion.div>
);

const ContentAreas = () => (
  <motion.div
    className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-indigo-700 mb-2 text-center">
      Explore Core Content Areas
    </h2>
    <div className="h-1 w-16 bg-indigo-500 mx-auto rounded-full mb-8"></div>

    <p className="text-base text-gray-600 mb-10 text-center max-w-3xl mx-auto">
      Every module is crafted for fast, effective comprehension and real-world interview relevance.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {[
        {
          title: '📌 JavaScript Core',
          items: ['Closures, Scopes, Hoisting', 'Event Loop & Async JS', 'Memory Management & Prototypes'],
        },
        {
          title: '⚛️ ReactJs',
          items: ['Hooks, State & Context', 'Component Design Patterns', 'Performance Optimization'],
        },
        {
          title: '🌐 NextJs',
          items: ['Routing, SSR, SSG', 'API Routes & Middleware', 'SEO Best Practices'],
        },
        {
          title: '🧠 DSA',
          items: ['Arrays, Trees, Graphs, DP', 'Pattern-based Question Sets', 'Code & Complexity Analysis'],
        },
        {
          title: '📁 Machine Coding Challenges',
          items: ['File Explorer & Nested comments', 'Search Systems', 'Shopping Cart & Pagination'],
        },
        {
          title: '🧩 Frontend System Design',
          items: ['UI Architecture', 'Lazy Loading & Code Splitting', 'Whiteboard Challenges'],
        },
      ].map(({ title, items }, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">{title}</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <p className="text-sm text-gray-500">
        🚀 Coming soon: A coding platform for practice and progress tracking in InterviewPro DSA.
      </p>
    </div>
  </motion.div>
);
