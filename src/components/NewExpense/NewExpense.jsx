import React,{ useState } from 'react';
import './NewExpense.css'
import ExpenseFrom from './ExpenseForm'

const NewExpense = ({ onSubmit }) =>{
  const [ bool,setBool ] = useState(false);
  const startSetBool = () => {
    setBool(true)
  }

  const stopSetBool = () => {
    setBool(false)
  }
  return(
    <div className='new-expense'>
      { !bool && <button onClick={startSetBool}>Add New Expenses</button>}
      { bool && <ExpenseFrom onSubmit={onSubmit} stopSetBool={stopSetBool}/>}
    </div>
  )
};

export default NewExpense