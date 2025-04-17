import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DSAApp from './pages/DSAApp';
import ProblemList from './pages/ProblemList';


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/dsa" element={<DSAApp />} />
      <Route path="/dsa/problem-list" element={<ProblemList />} />
      <Route path="*" element={<DSAApp />} /> {/* 👈 fallback */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
