import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage/Landing';
import Dashboard from './Pages/Budget/Budget';
import { Goals } from './Pages/Goals/Goals';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goals' element={<Goals />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
