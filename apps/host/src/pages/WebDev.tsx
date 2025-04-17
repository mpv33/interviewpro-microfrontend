

const WebDevApp = () => (
  <div className="min-h-screen bg-[#e0e5ec] px-4 py-12 flex items-center justify-center">
    <div className="w-full max-w-6xl space-y-16">

      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          🚀 InterviewPro: Web Development
        </h1>
        <p className="text-lg sm:text-xl font-light text-gray-600 max-w-3xl mx-auto">
          Welcome to InterviewPro’s Web Development Series — a practical guide to mastering frontend interviews.
        </p>
      </section>

      {/* Neomorphic Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Frontend Interview Questions */}
        <div className="bg-[#e0e5ec] p-6 rounded-2xl shadow-neumorphic-inset">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📘 Topic-Wise Frontend Interview Questions</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Master the most frequently asked frontend interview questions, organized by topic, to build a strong foundation.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-base">
            <li>JavsScript</li>
            <li>ReactJs</li>
            <li>NextJs</li>
            <li>Frontend System design</li>
          </ul>
        </div>

        {/* Company-Specific Tags */}
        <div className="bg-[#e0e5ec] p-6 rounded-2xl shadow-neumorphic-inset">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🏢 Company-Specific Tags</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-base">
            <li>Amazon Frontend Interview Questions</li>
            <li>Google React/Frontend Interview Questions</li>
            <li>Facebook JavaScript Interview Questions</li>
            <li>Microsoft Frontend Interview Questions</li>
            <li>Advanced Frontend  Performance-related Questions</li>
          </ul>
        </div>

              {/* Machine Coding Practice */}
        <div className="bg-[#e0e5ec] p-6 rounded-2xl shadow-neumorphic-inset">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🖥️ Machine Coding Practice</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Practice common machine coding problems that are asked in frontend interviews to improve your problem-solving skills.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-base">
            <li>Nested Comments Section</li>
            <li>File Explorer</li>
            <li>URL Shortener</li>
            <li>Real-time Chat Application</li>
            <li>Online Text Editor (like Google Docs)</li>
            <li>Task Manager (like Trello)</li>
            <li>Simple E-commerce Cart</li>
          </ul>
        </div>


        {/* All Steps for Success */}
        <div className="bg-[#e0e5ec] p-6 rounded-2xl shadow-neumorphic-inset">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 All Steps for Success</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-base">
            <li>Build and Optimize Real Projects</li>
            <li>Practice Coding Challenges with a Focus on Interview Patterns</li>
            <li>Focus on System Design along with DSA</li>
            <li>Participate in Mock Interviews and Peer Reviews</li>
            <li>Stay Consistent and Revise Your Concepts Regularly</li>
          </ul>
        </div>

      </section>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/webdev"
          className="inline-block bg-[#e0e5ec] text-gray-700 px-6 py-3 rounded-xl shadow-neumorphic-button hover:shadow-neumorphic-inset transition font-medium"
        >
          🔍 Start Web Development Prep Now
        </a>
      </div>
    </div>
  </div>
);

export default WebDevApp;
