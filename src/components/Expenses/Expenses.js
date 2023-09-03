import {useState} from 'react'
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
function Expenses(props1) {

  const [filteredYear,setFilteredYear]= useState('2020');
  // let filterInfoText ='2019,2021 &2022';

  // if(filteredYear === '2019')
  // {
  //   filterInfoText = '2020, 2021 & 2022';
  // }
  // else if(filteredYear === '2021')
  // {
  //   filterInfoText = '2019, 2020 & 2022';
  // }
  // else
  // {
  //   filterInfoText ='2019, 2020 & 2021';
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props1.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
}
export default Expenses;