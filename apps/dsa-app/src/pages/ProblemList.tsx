import { Link } from "react-router-dom";

function ProblemList() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🚧 DSA Practice Problems</h1>
        <p className="text-lg text-gray-600">We're working hard to bring this to you soon. Stay tuned!</p>
        <div className="text-center mt-8">
        <Link
          to="/dsa"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition font-medium"
        >
          🔍 Back DSA list
        </Link>
      </div>
      </div>
    
    
    </div>
  );
}

export default ProblemList;
