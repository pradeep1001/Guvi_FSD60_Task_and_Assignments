import React from 'react';


function Filter({ filter, setFilter }) {
  const span1 = {
    marginRight:'896px', 
    fontSize: '16px',
    fontWeight: 'bold'
  };
  
    const span2 = { 
      fontSize: '16px',
      fontWeight: 'bold'
    };
  return (
    <div className="filter">
      <span style={span1}>My Todos</span>
      <span style={span2}>Status Filter:</span>
      <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        style={{backgroundColor: '#FE7F7F',
          color:"#FFFFFF"
        }}
      >
        <option value="All">All</option>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}

export default Filter;
