import React from 'react';
import './NewExpense.css'
import ExpenseFrom from './ExpenseForm'

const NewExpense = ({ onSubmit }) =>{
  return(
    <div className='new-expense'>
      <ExpenseFrom onSubmit={onSubmit}/>
    </div>
  )
};

export default NewExpense