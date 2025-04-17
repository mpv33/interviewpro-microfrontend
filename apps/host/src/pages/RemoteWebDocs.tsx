import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NeomorphicLoader from "../components/Loader";

// Dynamic Iframe Component with Path Prop
export default function RemoteWebApp() {
  const { path } = useParams(); // Extract the dynamic path from the URL
  const [isLoading, setIsLoading] = useState(true);

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false); // Set loading to false once iframe is loaded
  };

  return (
    <div className="h-[calc(100vh-80px)] relative">
      {/* Show loading spinner while iframe is loading */}
      {isLoading && (
        <NeomorphicLoader />
      )}
      
      <iframe
        src={`https://interviewproinfo-webdev.vercel.app/${path}`} // Dynamic path based on the URL parameter
        title={`InterviewPro Web Dev - ${path}`}
        className="w-full h-full border-0"
        onLoad={handleIframeLoad} // Set loading to false when iframe is loaded
        loading="lazy" // Native lazy loading
      />
    </div>
  );
}
