import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
    <Link to="/" style={{ marginRight: '10px', color: '#fff' }}>Dashboard</Link>
    <Link to="/timesheet" style={{ marginRight: '10px', color: '#fff' }}>Timesheet</Link>
    <Link to="/employees" style={{ marginRight: '10px', color: '#fff' }}>Employees</Link>
    <Link to="/projects" style={{ color: '#fff' }}>Projects</Link>
  </nav>
);

export default Navbar;
