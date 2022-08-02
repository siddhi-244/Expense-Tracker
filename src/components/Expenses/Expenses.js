import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");//destructuring 
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);//set the filtered year inorder to show expenses of that year only 
  };
  const filteredExpenses=props.expenses.filter( (expense) => { //show the expenses of filtered year 
    return expense.date.getFullYear().toString() === filteredYear; //return expenses of selected year 
  });
  
  return (
    // expense component - consists of filter component, chart and expense card component 
    <div>
      <Card className="expenses">
      {/* Filter expenses based on year  */}
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* pass the filtered expenses to expense list component  */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
