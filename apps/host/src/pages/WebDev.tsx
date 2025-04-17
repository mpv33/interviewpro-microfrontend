import React from "react";
import { Link } from "react-router-dom";

// Reusable Card Component Props
interface InfoCardProps {
  title: string;
  description: string;
  items: string[];
}

// Reusable Neomorphic Info Card
const InfoCard: React.FC<InfoCardProps> = ({ title, description, items }) => (
  <div className="bg-white p-6 rounded-2xl shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
    <p className="text-gray-600 text-base leading-relaxed mb-3">{description}</p>
    <ul className="list-disc list-inside text-gray-600 space-y-2 text-base mb-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Main WebDevApp Component
const WebDevApp: React.FC = () => {
  // Links array for more detailed sections
  const links = [
    {
      label: "JavaScript Essentials",
      icon: "🔍",
      href: "/webdev/javascript",
    },
    {
      label: "Mastering React.js",
      icon: "⚛️",
      href: "/webdev/reactjs",
    },
    {
      label: "Next.js Deep Dive",
      icon: "🌐",
      href: "/webdev/nextjs",
    },
    {
      label: "Frontend System Design",
      icon: "🧠",
      href: "/webdev/frontend-system-design",
    },
    {
      label: "Machine Coding Challenges",
      icon: "💻",
      href: "/webdev/machine-coding",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-7xl space-y-16">

        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800">
            🚀 InterviewPro WebDev – Your Frontend Interview Powerhouse
          </h1>
          <p className="text-lg sm:text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Welcome to <strong>InterviewPro WebDev</strong> — a curated hub designed to prepare you for frontend interviews at top tech companies. Whether you're targeting FAANG, startups, or product-based firms, we’ve got your back with topic-wise questions, company-specific patterns, system design, and machine coding challenges.
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto italic">
            Let’s turn your knowledge into confidence. No fluff — just what you need to crack your next frontend role.
          </p>
        </section>

        {/* Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="📘 Topic-Wise Interview Questions"
            description="Gain mastery over key frontend concepts with our structured, topic-specific interview preparation:"
            items={[
              "JavaScript: Core Concepts & Advanced Patterns",
              "React.js: Hooks, Optimization & Best Practices",
              "Next.js: SSR, Routing, SEO & API Integration",
              "Machine Coding Round Preparation",
              "Frontend System Design Concepts",
            ]}
          />

          <InfoCard
            title="🏢 Company-Specific Preparation"
            description="Explore real interview questions categorized by companies to align your preparation with industry expectations:"
            items={[
              "Amazon: Core & Advanced Frontend Patterns",
              "Google: Scalable UI & Performance Questions",
              "Atlassian: Real-World Project Scenarios",
              "Top Product-Based Companies",
              "Genuine questions with tagged company insights",
            ]}
          />

          <InfoCard
            title="🖥️ Machine Coding Challenges"
            description="Enhance your practical skills with real-world machine coding exercises frequently asked in product companies:"
            items={[
              "Nested Comment Threads",
              "File Explorer Interface",
              "URL Shortener System",
              "Real-Time Chat Application",
              "...and more hands-on projects",
            ]}
          />

          <InfoCard
            title="📚 Quick Notes & Flashcards"
            description="Revise efficiently with curated flashcards and summaries covering key concepts and patterns:"
            items={[
              "JavaScript Key Snippets",
              "React Lifecycle & Hooks Summary",
              "Next.js Architecture Notes",
              "Common Pitfalls & Best Practices",
              "Performance Optimization Cheatsheets",
            ]}
          />
        </section>

        {/* Links Section */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Explore Topics</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(({ label, icon, href }) => (
              <Link
                key={href}
                to={href}
                className="bg-white text-gray-700 px-6 py-3 rounded-xl 
                  shadow-[inset_6px_6px_10px_#d1d9e6,inset_-6px_-6px_10px_#ffffff] 
                  hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] 
                  transition-all duration-300 font-medium flex items-center justify-center space-x-2
                  transform hover:scale-105"
              >
                <span className="text-lg">{icon}</span>
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
