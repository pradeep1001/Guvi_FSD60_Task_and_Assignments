import React from 'react';
import Data from './Data/data.json';
import './FullStackDevelopment.css';

const FullStackDevelopment = () => {
    return (
        <div className="full-stack-container">
            <h2>Full Stack Development</h2>
            <div className="course-list">
                <div className="course-card">
                    <img src={Data.FullStackDevelopment.find(item => item.id === 1).image} alt="Top 10 Full-Stack Developer Frameworks in 2024" />
                    <div className="course-content">
                        <span className="views">11968</span>
                        <p>{Data.FullStackDevelopment.find(item => item.id === 1).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.FullStackDevelopment.find(item => item.id === 2).image} alt="Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]" />
                    <div className="course-content">
                        <span className="views">11427</span>
                        <p>{Data.FullStackDevelopment.find(item => item.id === 2).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.FullStackDevelopment.find(item => item.id === 3).image} alt="6 Essential Prerequisites For Learning ReactJS" />
                    <div className="course-content">
                        <span className="views">10567</span>
                        <p>{Data.FullStackDevelopment.find(item => item.id === 3).title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullStackDevelopment;