import {useEffect, useState} from 'react'
import ExpenseForm from './ExpenseForm'
import History from'./History'
// import {v4 as uid} from "uuid"
import BalanceContainer from './BalanceContainer'
import { Link } from 'react-router-dom'
function ExpenseContainer(){
  const [expense,setExpense]=useState([]);
  const [loading,setloading]=useState(true);

  //fetch
  const fetchExpenses=async()=>{
    setloading(true);
    try{
      const response=await fetch('http://localhost:3000/expense');
      const data = await response.json();
      setExpense(data);
    }catch(error){
      console.log('Failed to fetch',error);
    }
    setloading(false);
  }
  console.log(expense);
  
  useEffect(()=>{
    fetchExpenses();
  },[]);
//     const EXPENSE =[{
//        id:uid(),
//        title:"Expense1",
//        amount:100
//     },{
//         id:uid(),
//         title:"Expense2",
//         amount:500
//     }]

// const[expense , setExpense]=useState(EXPENSE)

//     function addExpense(title,amount){
//         setExpense([...expense,{id:uid(),title,amount}])
//     }

const addExpense=async(title,amount)=>{
  try{
    const response=await fetch('http://localhost:3000/expense',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({title,amount}),

    });
    if(response.ok){
      const newItem = await response.json();
      setExpense((prev)=>[...prev,newItem])
    }else{
      console.error('Failed to add expense');
    }
  }
  catch(error){
    console.log('Error adding expenses',error);
  }
};
    // function deleteExpense(_id){
    //   setExpense(expense.filter((exp)=> exp._id != _id))
    // }

    const deleteExpense=async(_id)=>{
      try{
    const response=await fetch(`http://localhost:3000/expense/${_id}`,{
    method:"DELETE",
    });
    if(response.ok){
      setExpense(expense.filter((exp)=>exp._id!==_id));
    }else{
      console.error('Failed to delete expense');
    }
  }catch(error){
    console.error('Error in deleting expense',error);
  }
};
// const editExpense=async(_id,title,amount)=>{
//       try{
//     const response=await fetch(`http://localhost:3000/expense/${_id}`,{
//     method:"PUT",
//     headers:{
//       'Content-type':'application/json',
//     },
//     body:JSON.stringify({title,amount}),
//   });
//   if(response.ok){
//     const updateItem=await response.json();
//     setExpenses(expense.map)
//   }
//     console.log(expense)
  return (
    <>
    <div className='expense-container'>
      <h1>Expense Tracker</h1>
    <BalanceContainer expense={expense}/>
    <ExpenseForm addExpense={addExpense}/>
    <History expense={expense} deleteExpense={deleteExpense}/>
    {loading && <p>Loading...</p>}
    </div>
    <Link to="/"><button>Back To Home</button></Link>
    </>
  )
  
  }
export default ExpenseContainer;
