import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [isEditing, setisEditing] = useState(false);//destructuring 
  //save the user entered expenses in the array with unique id 
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const startEditingHandler = () => {
    setisEditing(true);//changing states 
  };
  const stopEditingHandler = () => {
    setisEditing(false);
  }
  return (
    <div className="new-expense">
    {/* conditional rendering  if user clicks on add new expense then only show him the expense form */}
      {!isEditing ? ( 
        <button onClick={startEditingHandler}>Add New Expense</button> 
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
}

export default NewExpense;
