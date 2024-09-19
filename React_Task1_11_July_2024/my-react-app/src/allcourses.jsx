import React from 'react';
import Data from './Data/data.json';
const AllCourses = () => {
    return (
        <div>
            <h2>All Courses</h2>
            <div className="course-list">
                <div className="course-card">
                    <img src={Data.all.find(item => item.id === 1).image} alt="Python Objects 101" />
                    <p>{Data.all.find(item => item.id === 1).title}</p>
                </div>
                <div className="course-card">
                    <img src={Data.all.find(item => item.id === 2).image} alt="Machine Learning Must" />
                    <p>{Data.all.find(item => item.id === 2).title}</p>
                </div>
                <div className="course-card">
                    <img src={Data.all.find(item => item.id === 3).image} alt="Unlocking NLP" />
                    <p>{Data.all.find(item => item.id === 3).title}</p>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;