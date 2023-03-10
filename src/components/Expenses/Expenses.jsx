import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css';

const Expenses = (props) => {
  const [ filteredYear,setFilteredYear ] = useState('2021');
  const [ bool,setBool ] = useState(true)
  const filterChangeHandler = (inputYear) =>{
    setFilteredYear(inputYear);
  }
  
  const itemsRender = props.items.filter((item) => item.date.getFullYear().toString() === filteredYear )

  return (
    <div>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={itemsRender}/>
      <ExpenseList items={itemsRender} />
      </Card>
    </div>
    );
  }
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}

export default Expenses;

