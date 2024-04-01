export function ToDo(prop) {
    const {toDoList,count,setCount,setToDoList} = prop;
    return(
    <>
    {toDoList.map((e,i)=>{
        return(
            <div className="flex justify-between p-4 m4 w-full bg-white border-solid border-black border-2">
          <div className='flex gap-4'>
            <input type="checkbox" id={"check"+i} onClick={()=>document.getElementById("check"+i).checked?setCount(count+1):setCount(count-1)}/>
            <h2>{e}</h2>
          </div>
          <div className="flex gap-4">
          <button onClick={()=>{setToDoList(toDoList.map((e,idx)=>idx==i?prompt("edit to do list"):e));}}>Edit</button>
          <button onClick={()=>setToDoList(toDoList.filter((e,idx)=>idx!==i))}>Delete</button>
          </div>
        </div>
        )
    })}
    </>
)}


export default ToDo