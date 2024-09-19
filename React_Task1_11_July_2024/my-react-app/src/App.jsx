import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import AllCourses from './allcourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="nav-links">
                        <NavItem to="/" label="All" />
                        <NavItem to="/full-stack-development" label="Full Stack Development" />
                        <NavItem to="/data-science" label="Data Science" />
                        <NavItem to="/cyber-security" label="Cyber Security" />
                        <NavItem to="/career" label="Career" />
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<AllCourses />} />
                    <Route path="/full-stack-development" element={<FullStackDevelopment />} />
                    <Route path="/data-science" element={<DataScience />} />
                    <Route path="/cyber-security" element={<CyberSecurity />} />
                    <Route path="/career" element={<Career />} />
                </Routes>
            </div>
        </Router>
    );
}

function NavItem({ to, label }) {
    let location = useLocation();
    return (
        <li>
            <Link to={to} className={location.pathname === to ? 'active' : ''}>{label}</Link>
        </li>
    );
}

export default App;