import React from 'react';
import Data from './Data/data.json';
import './DataScience.css';

const DataScience = () => {
    return (
        <div className="datascience-container">
            <h2>Data Science</h2>
            <div className="course-list">
                <div className="course-card">
                    <img src={Data.DataScience.find(item => item.id === 1).image} alt="Top 100+ Manual Testing Interview Questions and Answers" />
                    <div className="course-content">
                        <span className="views">31258</span>
                        <p>{Data.DataScience.find(item => item.id === 1).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.DataScience.find(item => item.id === 2).image} alt="The 8 Essential Skills for a Successful Automation Tester" />
                    <div className="course-content">
                        <span className="views">13801</span>
                        <p>{Data.DataScience.find(item => item.id === 2).title}</p>
                    </div>
                </div>
                <div className="course-card">
                    <img src={Data.DataScience.find(item => item.id === 3).image} alt="7 Best Automation Testing Project Ideas" />
                    <div className="course-content">
                        <span className="views">11529</span>
                        <p>{Data.DataScience.find(item => item.id === 3).title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataScience;