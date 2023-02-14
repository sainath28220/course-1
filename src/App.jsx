import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [{
    id: 1,
    title: 'Car Insurance',
    amount: 4500,
    date: new Date(2020,4,12)
  },{
    id: 2,
    title: 'W H',
    amount: 3000,
    date: new Date(2022,1,28)
  },{
    id: 3,
    title: 'S',
    amount: 150,
    date: new Date(2023,2,12)
  },{
    id: 4,
    title: 'T',
    amount: 1000,
    date: new Date(2023,1,27)
  }]
  return (
    <div>
      <ExpenseItem expenses={expenses}></ExpenseItem>
    </div>
  )
}

export default App
