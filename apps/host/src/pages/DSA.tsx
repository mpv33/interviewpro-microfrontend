// src/pages/DSA.jsx
import React from 'react';

const RemoteDSAApp = React.lazy(() => import('dsa/DSAApp'));

export default function DSA() {
  return (
    <div className="p-4">
      <RemoteDSAApp />
    </div>
  );
}
