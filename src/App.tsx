import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage/Landing';
import Dashboard from './Pages/Budget/Budget';
import { Goals } from './Pages/Goals/Goals';
import { Income } from './Pages/Income/Income';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='income' element={<Income />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
