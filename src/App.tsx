import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage/Landing';
import Dashboard from './Pages/Budget/Budget';
import { Goals } from './Pages/Goals/Goals';
import { Income } from './Pages/Income/Income';
import { Reports } from './Pages/Reports/Reports';
import { Expenses } from './Pages/Expenses/Expenses';
import { Profile } from './Pages/Profile/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/goals' element={<Goals />} />
          <Route path='income' element={<Income />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
