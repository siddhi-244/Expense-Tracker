import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) =>{
    
    props.onFilterChange(event.target.value); //pass the selected year to parent component 
  }
  // filter year component 
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler}  value={props.selected}>
        {/* the years that can be filtered  */}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;