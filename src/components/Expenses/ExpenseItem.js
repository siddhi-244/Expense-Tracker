import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
   
  return (
    <li>
    <Card className="expense-item">
    {/* render date component first then add item description and then amount of item and pass all the data recived from props  */}
      <ExpenseDate date={props.date}/>  
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div> 
    </Card>
    </li>
  );
}

export default ExpenseItem;
