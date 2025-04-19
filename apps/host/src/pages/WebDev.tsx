import React from "react";
import { Link } from "react-router-dom";

interface InfoCardProps {
  title: string;
  description: string;
  items: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, items }) => (
  <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 transition-transform hover:scale-[1.02] hover:shadow-xl">
    <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const WebDevApp: React.FC = () => {
  const links = [
    { label: "JavaScript Essentials", icon: "🔍", href: "/webdev/javascript" },
    { label: "Mastering React.js", icon: "⚛️", href: "/webdev/reactjs" },
    { label: "Next.js Deep Dive", icon: "🌐", href: "/webdev/nextjs" },
    { label: "Frontend System Design", icon: "🧠", href: "/webdev/frontend-system-design" },
    { label: "Machine Coding Challenges", icon: "💻", href: "/webdev/machine-coding" },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-7xl space-y-16">

        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800">
            🚀 InterviewPro WebDev – Your Frontend Interview Powerhouse
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to <strong>InterviewPro WebDev</strong> — a curated hub for frontend interviews at top tech companies.
            Whether you're targeting FAANG, startups, or product-based firms — we’ve got your back.
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto italic">
            Let’s turn your knowledge into confidence. No fluff — just what you need to crack your next frontend role.
          </p>
        </section>

        {/* Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="📘 Topic-Wise Interview Questions"
            description="Master key frontend concepts with structured preparation:"
            items={[
              "JavaScript: Core Concepts & Advanced Patterns",
              "React.js: Hooks & Best Practices",
              "Next.js: SSR, Routing & API Integration",
              "Machine Coding Rounds",
              "System Design Basics",
            ]}
          />
          <InfoCard
            title="🏢 Company-Specific Preparation"
            description="Get real interview questions categorized by companies:"
            items={[
              "Amazon: Advanced Frontend Patterns",
              "Google: Scalable UI Challenges",
              "Atlassian: Real-World Scenarios",
              "Top Product Companies",
              "Company-tagged insights",
            ]}
          />
          <InfoCard
            title="🖥️ Machine Coding Challenges"
            description="Practice real-world coding challenges often asked in interviews:"
            items={[
              "Comment Thread UI",
              "File Explorer UI",
              "URL Shortener",
              "Real-Time Chat App",
              "More mini-projects...",
            ]}
          />
          <InfoCard
            title="📚 Quick Notes & Flashcards"
            description="Fast-track your revision with summaries & cheatsheets:"
            items={[
              "JS Snippets",
              "React Hooks Overview",
              "Next.js Notes",
              "Common Pitfalls",
              "Performance Tips",
            ]}
          />
        </section>

        {/* Links Section */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Explore Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map(({ label, icon, href }) => (
              <Link
                key={href}
                to={href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default WebDevApp;
