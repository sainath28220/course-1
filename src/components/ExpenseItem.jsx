import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({expenses}) => {
  const expenseRender = expenses.map(expense=>{
    return(
      <div key={expense.id}  className="expense-item">
        <ExpenseDate date={expense.date}/>
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">{expense.amount} INR</div>
        </div>
      </div>
    )})
  return (
  <div>
    {expenseRender}
  </div>)
};

export default ExpenseItem;