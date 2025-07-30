import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: Clear user data (auth token, etc.)
    localStorage.removeItem("token"); // or sessionStorage.clear();
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="d-flex vh-100 vw-100">
      {/* Sidebar */}
      <nav className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h3 className="text-center mb-4">BuildSmart</h3>
        <ul className="nav flex-column">
          {[
            { icon: '🏠', label: 'Home', path: '/' },
            { icon: '📋', label: 'Projects', path: '/projects' },
            { icon: '👷', label: 'Employees', path: '/employees' },
            { icon: '📅', label: 'Timesheets', path: '/timesheet' },
            { icon: '⚙️', label: 'Settings', path: '/settings' },
          ].map(({ icon, label, path }) => (
            <li key={label} className="nav-item mb-3">
              <Link to={path} className="nav-link text-white d-flex align-items-center gap-2 px-3 py-2 rounded">
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content with Logout Button */}
      <div className="flex-grow-1 d-flex flex-column bg-light">
        {/* Top bar with logout */}
        <div className="d-flex justify-content-end align-items-center p-3 border-bottom bg-white shadow-sm">
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* Dynamic content */}
        <div className="p-4" style={{ overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
