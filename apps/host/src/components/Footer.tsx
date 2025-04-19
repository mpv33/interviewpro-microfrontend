import { FaHeart, FaLinkedin, FaInstagram } from 'react-icons/fa';

function CustomFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {/* Brand Section */}
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-gray-900">InterviewPro</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Empowering engineers to ace interviews — efficiently and confidently.
            Crafted with modern micro frontend architecture — React.js, Vite, Next.js, Tailwind CSS.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Powered by Mateshwari — a vision built by engineers, for engineers
            <span className="text-red-600 ml-1 inline-block align-middle">
              <FaHeart />
            </span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="/dsa" className="hover:text-indigo-600 transition">DSA Sheet</a></li>
            <li><a href="/webdev" className="hover:text-indigo-600 transition">Web Development</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
          <p className="text-sm">
            <a href="mailto:mateshwari33@gmail.com" className="hover:underline">
              mateshwari33@gmail.com
            </a>
          </p>
          <div className="flex justify-center sm:justify-start gap-5 text-xl mt-3">
            <a
              href="https://www.linkedin.com/in/mateshwari-verma-a41143168/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_mpverma_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} InterviewPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default CustomFooter;
