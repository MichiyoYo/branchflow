import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { BrainDump } from './pages/Braindump';
import { TaskBoard } from './pages/TaskBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/brain-dump' element={<BrainDump />} />
        <Route path='/board' element={<TaskBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
