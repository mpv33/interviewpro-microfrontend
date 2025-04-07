import React, { Suspense } from 'react';

const RemoteDSAApp = React.lazy(() => import('dsa/DSAApp'));

function App() {
  return (
    <div>
      <p className='text-4xl'>Host Application</p>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteDSAApp />
      </Suspense>
    </div>
  );
}

export default App;
