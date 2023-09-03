import {useState} from 'react'
import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props2) {

  //first parameter- variable
  //second parameter- function
  const [title,setTitle]=useState(props2.title);

  const clickHandler=()=>{
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props2.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props2.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;