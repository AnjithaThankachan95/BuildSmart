// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Project';
import Employees from './pages/Employee';
import Timesheet from './pages/Timesheet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This layout wraps all the pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="employees" element={<Employees />} />
          <Route path="timesheet" element={<Timesheet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
