import { FaHeart } from 'react-icons/fa';

function CustomFooter() {
  return (
    <footer className="py-8 w-full bg-white flex justify-center">
      <div className="w-[80%] text-center bg-white p-8 rounded-3xl shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]">
        {/* Brand Section */}
        <p className="text-xl font-semibold text-gray-800 mb-4">
          Built by engineers, for engineers. <FaHeart className="inline text-red-600" />
        </p>
        {/* Social Links */}
        <div className="space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/mateshwari-verma-a41143168/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://notion-mateshwari.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-all duration-300"
          >
            Notion Doc
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} InterviewPro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default CustomFooter;
