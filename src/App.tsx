import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './features/pages/LandingPage';
import { BrainDump } from './features/pages/Braindump';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/brain-dump' element={<BrainDump />} />
      </Routes>
    </Router>
  );
}

export default App;
