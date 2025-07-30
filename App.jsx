import React from 'react'
import ExpenseContainer from './Components/ExpenseContainer'
import Home from './Home'
 import Post from './Post.jsx'
import {BrowserRouter , Routes , Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
    <Link to="/expense">Expense</Link>  <br></br>
   <Link to="/">Home</Link>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/expense' element={<ExpenseContainer/>}/>
     <Route path='/user/:id' element={<Post/>}/>
     </Routes>
     
     
     </BrowserRouter>
    </>
  )
}

export default App
