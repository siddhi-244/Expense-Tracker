import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
  const titleChangeHandler = (event) => {
      setenteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
      setenteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value };

    // });
  };

  const dateChangeHandler = (event) => {
      setenteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  // handle the submit button event 
  const submitHandler =(event) =>{
    // prevent reloading 
    event.preventDefault();
    // save the expense data 
    const expenseData={
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
    };
    //save expenses data in array by passing the data to parent component 
    props.onSaveExpenseData(expenseData);
    // after saving expense data clear all the input fields 
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };
  return (
    // expense form component - consists of input fileds + add button + cancel button 
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      {/* on cancel render the add new expense butgton only  */}
        <button type="button" onClick={props.onCancel}>Cancel</button> 
        <button type="submit">Add Expense</button>
        
      </div>
    </form>
  );
}

export default ExpenseForm;
