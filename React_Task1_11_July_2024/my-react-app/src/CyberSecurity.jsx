import React from 'react';
import Data from './Data/data.json';
import './CyberSecurity.css';

const CyberSecurity = () => {
    return (
        <div className="cyber-security-container">
            <h2>Cyber Security</h2>
            <div className="course-list">
                <div className="course-card">
                    <img src={Data.CyberSecurity.find(item => item.id === 1).image} alt="What Is Hacking? Types of Hacking & More" />
                    <div className="course-content">
                        <span className="views">4273</span>
                        <p>{Data.CyberSecurity.find(item => item.id === 1).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.CyberSecurity.find(item => item.id === 2).image} alt="8 Different Types of Cybersecurity and Threats Involved" />
                    <div className="course-content">
                        <span className="views">2503</span>
                        <p>{Data.CyberSecurity.find(item => item.id === 2).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.CyberSecurity.find(item => item.id === 3).image} alt="What is Cybersecurity? Importance and its uses & the growing challenges in 2023!" />
                    <div className="course-content">
                        <span className="views">2226</span>
                        <p>{Data.CyberSecurity.find(item => item.id === 3).title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyberSecurity;