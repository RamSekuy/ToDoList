import { useEffect, useState } from 'react'
import ToDoComponent from '../components/todoList'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/loginSlice';

function ToDoPage() {
const navigate = useNavigate()
const user = useSelector((state)=>state.user)
if(!localStorage.getItem("email")){
    navigate("/login");
} else {
    useDispatch()(login({email:localStorage.getItem("email"),password:"admin"}))
}
const [count, setCount] = useState(0)
const [toDoList,setToDoList] = useState([])


    return(
    <>
    <nav className='flex justify-between text-white'>
        <h1>{user.email}</h1>
        <button className='hover:text-blue-500' onClick={()=>{localStorage.clear();navigate("/login")}}>Logout</button>
    </nav>
    <section id='list' className='w-full p-4 bg-slate-500 flex flex-col justify-center items-center gap-4'>
        <h1>To Do List:</h1>
        <ToDoComponent toDoList={toDoList} count={count} setCount={setCount} setToDoList={setToDoList}/>
    </section>

    <section className='w-full p-4 bg-black flex flex-col justify-center items-center border-solid border-2 border-red-600 gap-2 text-white sticky bottom-0'>
        <h2>Count: {count}</h2>
        <input id='inputList' type="text" className='text-black'/>
        <button className='bg-lime-600 p-1 border-solid border-2 border-l-blue-400' onClick={()=>{setToDoList([...toDoList,document.getElementById("inputList").value])}}>Add</button>
      </section>
    </>
    )
}
export default ToDoPage