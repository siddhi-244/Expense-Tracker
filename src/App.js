import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [//demo expenses
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),//date object 
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
//app component 
function App() {
  const [expenses , setExpenses]= useState(DUMMY_EXPENSES);//states 
  //add expenses 
  const addExpenseHandler = (expense) =>(
        setExpenses( (prevExpenses) => {//add new expenes to previous data
          return [expense, ...prevExpenses];//spread operator used 
        })
  );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> {/* handle addition of new expenses and render component on addition of component */}
      <Expenses expenses={expenses}></Expenses>{/* passing the expenses array as prop to the child component  */}
    </div>
  );
}

export default App;
