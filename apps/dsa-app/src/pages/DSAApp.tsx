import { Link } from 'react-router-dom';

const DSAApp = () => (
  <div className="min-h-screen bg-white px-4 py-12 flex items-center justify-center">
    <div className="w-full max-w-6xl space-y-16">

      {/* Header */}
      <section className="text-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          💡 Data Structures & Algorithms Prep
        </h1>
        <p className="text-lg sm:text-xl font-light text-gray-600 max-w-3xl mx-auto">
          Your last-minute revision companion — optimized to help you crack interviews with confidence.
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* What is DSA Module */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📘 What is the DSA Module?</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            A carefully curated set of topic-wise DSA questions to help software engineers quickly revise and strengthen problem-solving skills right before an interview.
          </p>
        </div>

        {/* Why Choose InterviewPro for DSA? */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">🎯 Why Choose InterviewPro for DSA?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-base leading-relaxed">
            <li>Curated set of most-asked DSA questions tagged by companies</li>
            <li>Clear and concise explanations pattern wise question list</li>
            <li><span className="font-medium">Last-minute interview prep</span> — focused and effective</li>
            <li><span className="font-medium">Continuously updated</span> content to match current trends</li>
            <li>Practice platform inspired by <span className="font-medium">LeetCode, coming soon</span></li>
          </ul>
        </div>

        {/* Data Structures Topics */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📂 Data Structures</h2>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-1">
            <li>Arrays & Strings</li>
            <li>Linked Lists</li>
            <li>Stacks & Queues</li>
            <li>Hashmaps & Sets</li>
            <li>Trees & Graphs</li>
          </ul>
        </div>

        {/* Algorithm Topics */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🔧 Algorithms</h2>
          <ul className="list-disc list-inside text-gray-600 text-base space-y-1">
            <li>Recursion & Backtracking</li>
            <li>Sorting & Searching</li>
            <li>Dynamic Programming</li>
            <li>Greedy Approaches</li>
            <li>Sliding Window & Two Pointers</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-8">
        <Link
          to="/dsa/problem-list"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition font-medium"
        >
          🔍 Start Practicing DSA Now
        </Link>
      </div>
    </div>
  </div>
);

export default DSAApp;
