import  React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function Todo() {
    const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([]);
    const [showfinished,setShowFinished]=useState(true);
    
    useEffect(()=>{
        let isString=JSON.parse(localStorage.getItem("todo"))
        if(isString){
        // localStorage.clear()
            let todos=JSON.parse(localStorage.getItem("todo"))
            setTodos(todos);
        }    
    },[])

    const savetodos=()=>{
        localStorage.setItem("todo",JSON.stringify(todos));   
    }

    const enterTodo=(e)=>{
        setTodo(e.target.value);
    }
    const addTodo=()=>{
        setTodos([...todos,{todo,isFinished:false,id:uuidv4()}]);
        setTodo("");
        savetodos();
    }

    const handleCheckDone=(e)=>{
       let id=e.target.id; 
       for(let data of todos){
        if(data.id==id){
            data.isFinished=!data.isFinished;
        }
       }
       let newtodo=todos.map((value)=>value);
       setTodos(newtodo);
    }

    const handleFinished=()=>{
        setShowFinished((prev)=>!prev)
    }

    const handleEdit=(e)=>{
        let id=e.target.id;
       for(let value of todos){
            if(value.id==id){
                setTodo(value.todo);
            }
       }
       handleDelete(e.target.id);
       savetodos();
    }
    
    const handleDelete=(id)=>{
        let newtodo=todos.filter((value)=>value.id!==id)
        console.log(newtodo);
        setTodos(newtodo);
        savetodos();
    }
        return (
            <div className="main bg-purple-200 sm:w-1/2  min-h-[70vh] m-auto p-2 my-[20px] rounded-lg leading-10">
                  <h2 className='text-center'>iTask - Your todo at one place</h2>
                  <div className="class">
                    <h3>Add a Todo</h3>
                    <div className='!searchbox flex w-auto h-8 m-3 !rounded-lg !border-black !border-2'>
                    <input type="text" name="" id="" value={todo} onChange={enterTodo} className='!border-0  w-3/4 p-2 '/>
                    <button className='bg-purple-800 hover:bg-purple-200 text-white !border-0 cursor-pointer p-2 w-1/4 ' onClick={addTodo} disabled={todo.length<=3}>Add</button>
                    </div>
                    <div>
                        <input type="checkbox" defaultChecked={showfinished} onChange={handleFinished} />
                        <span className='m-3'>Show finished</span>
                    </div>
                    <hr className="border-b-2 m-3"/>
                    <h3>Your Todos</h3>
                    {todos.length===0 && <div>Your Todos is here</div>}
                    {
                        todos.map((value,index)=>{
                            return (showfinished || !value.isFinished) && <div key={index} className='flex justify-between'>
                            <div>
                                <input type="checkbox"  id={value.id} defaultChecked={value.isFinished} onChange={handleCheckDone} />
                                <span className={value.isFinished?"line-through m-3":"m-3"}>{value.todo}</span>
                            </div>
                            <div className='flex h-full'>
                                <button className='bg-purple-800 hover:bg-purple-200 text-white border-0 m-3 p-2 rounded-lg ' id={value.id} onClick={handleEdit}><FaEdit /></button>
                                <button className='bg-purple-800 hover:bg-purple-200 text-white border-0 m-3 p-2 rounded-lg' id={value.id} onClick={(e)=>handleDelete(e.target.id)}><MdDeleteForever /></button>
                            </div>
                            </div>    
                        })
                    }
                  </div>
            </div>
          )
}

export default Todo