import { useEffect, useState } from 'react'
import ToDo from './components/todoList'

function App() {
  const [count, setCount] = useState(0)
  const [toDoList,setToDoList] = useState([])

  useEffect(()=>{
    console.log(toDoList);
  })

  return (
    <>
      <section id='list' className='w-full p-4 bg-slate-500 flex flex-col justify-center items-center gap-4'>
        <h1>To Do List:</h1>
        <ToDo toDoList={toDoList} count={count} setCount={setCount} setToDoList={setToDoList}></ToDo>
      </section>
      <section className='w-full p-4 bg-black flex flex-col justify-center items-center border-solid border-2 border-red-600 gap-2 text-white sticky bottom-0'>
        <h2>Count: {count}</h2>
        <input id='inputList' type="text" className='text-black'/>
        <button className='bg-lime-600 p-1 border-solid border-2 border-l-blue-400' onClick={()=>{setToDoList([...toDoList,document.getElementById("inputList").value])}}>Add</button>
      </section>
    </>
  )
}

export default App
