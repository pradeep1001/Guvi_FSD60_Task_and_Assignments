import React from 'react';
import Data from './Data/data.json';
import './Career.css';

const Career = () => {
    return (
        <div className="career-container">
            <h2>Career</h2>
            <div className="course-list">
                <div className="course-card">
                    <img src={Data.Career.find(item => item.id === 1).image} alt="Top 10 UI/UX Project Ideas for Beginners" />
                    <div className="course-content">
                        <span className="views">27850</span>
                        <p>{Data.Career.find(item => item.id === 1).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.Career.find(item => item.id === 2).image} alt="10 Best Skills Required to Become a UI/UX Designer" />
                    <div className="course-content">
                        <span className="views">21191</span>
                        <p>{Data.Career.find(item => item.id === 2).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.Career.find(item => item.id === 3).image} alt="UI/UX Syllabus | Complete Curriculum 2024" />
                    <div className="course-content">
                        <span className="views">18151</span>
                        <p>{Data.Career.find(item => item.id === 3).title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;