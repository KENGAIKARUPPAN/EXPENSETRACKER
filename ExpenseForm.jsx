// import React from 'react'
import '../indexx.css'
import { useState } from "react"
function ExpenseForm(props) {
    const[title , setTitle]=useState("");
    const[amount , setAmount]=useState("");
    function handleTitleChange(e){
        setTitle(e.target.value)
    }
    function handleAmountChange(e){
        setAmount(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        props.addExpense(title,amount)
        setAmount("")
        setTitle("")
    }
  return (
    <>
    <div className='expense-form'>
    <h3>Add Expense/income</h3>
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
    <label className='form-label'>Title</label>
     <input
     type="text"
     id='title'
     value={title}
     onChange={handleTitleChange}
     className="form-input"
     />
    </div>

    <div className='form-group'>
    <label className='form-label'>Amount</label>
     <input
     type="number"
     id='amount'
     value={amount}
     onChange={handleAmountChange}
     className="form-input"
     />
    </div>
  <button type="submit">Add Expense</button>

    </form>



    </div>
    </>
  )
}

export default ExpenseForm