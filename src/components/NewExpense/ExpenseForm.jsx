import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSubmit,stopSetBool }) =>{
  const [ title,setTitle ] = useState('');
  const [ amount,setAmount ] = useState('');
  const [ date,setDate ] = useState('');
  

  //multipleStates
  // const [ userInput,setUserInput ] = useState({ title: '',amount: 0,date: '' })

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(userInput);
    onSubmit({ title,amount: Number(amount),date: new Date(date) });
    setTitle('');
    setAmount('');
    setDate('')
    stopSetBool();
  };
  const changeBool = () =>{
    setBool(prevBool=> !prevBool)
  }
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({ ...userInput,title: event.target.value })
    // setUserInput((prevState)=>{
    //   return { ...prevState,title: event.target.value }
    // })
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({ ...userInput,amount: event.target.value })
    // setUserInput((prevState)=>{
    //   return { ...prevState,amount: event.target.value }
    // })
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({ ...userInput,date: event.target.value })
    // setUserInput((prevState)=>{
    //   return { ...prevState,date: event.target.value }
    // })
  };

  return <form  onSubmit={handleSubmit}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleChangeHandler} value={title} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={amount}/>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={date}/>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={stopSetBool}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </div>
  </form>
}

export default ExpenseForm;