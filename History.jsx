import ExpenseItem from "./ExpenseItem"

function History(props){
const expenses = props.expense
return(
<>
<div className="history">
    <h3>History</h3>
     {
        expenses.map((expense)=>(
            <ExpenseItem key={expense._id} expense={expense} deleteExpense={props.deleteExpense}/>
        ))
     }


</div>
</>
)
}

export default History