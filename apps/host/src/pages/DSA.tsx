import React, { useEffect, Suspense } from 'react';

// Lazy load the remote component
const RemoteDSAApp = React.lazy(() => import('dsa/DSAApp'));

// Utility function to dynamically load CSS
const dynamicLoadingCss = (cssPaths: string[]): void => {
  cssPaths.forEach((href: string) => {
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  });
};

const DSA: React.FC = () => {
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_DSA_REMOTE_URL;
    const cssPath = `${baseUrl}/assets/index.css`; // Adjust path if necessary
    dynamicLoadingCss([cssPath]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<div className="text-center text-gray-600">Loading DSA Module...</div>}>
        <RemoteDSAApp />
      </Suspense>
    </div>
  );
};

export default DSA;
