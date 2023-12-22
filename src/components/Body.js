import React, { useState } from 'react'

const Body = () => {

    const titleStyle = {text: 'bold',fontSize: '20px',padding: '10px',};

    const [newTask, setnewTask] = useState('')
    const [taskArray, settaskArray] = useState([])
    const [token, settoken] = useState(null)

    const AddTask = ()=> {

        if (newTask.trim() !== '' && token==null)
            settaskArray([...taskArray, newTask])
        else if (newTask.trim() !== '' && token!==null)
            taskArray[token] = newTask
        setnewTask('')
        settoken(null)
    }

    const handleInput = (e) => setnewTask(e.target.value)

    const updateTask =(index)=>{  
        setnewTask(taskArray[index])
        settoken(index)
    }

    const removeTask = (index) =>{
        const updateArray = [...taskArray]
        updateArray.splice(index, 1)
        settaskArray(updateArray)
    }


  return (
    <div className="mt-8 flex flex-col gap-10">
        <p className="text-xl font-bold underline">Add a Task</p>
        <input 
            type='text' 
            value={newTask} 
            onChange={handleInput}
            className="border border-gray-300 focus:outline-none focus:border-indigo-500 p-3 rounded-md"
            placeholder="Write a new task here"
            />
        <button onClick={AddTask} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline-green w-56 self-center">
            {token!=null?'update' : 'Add'}
        </button>

        <p className="text-xl font-bold underline">List of Tasks</p>

        <ul className="m-10">
            {taskArray.map((data, index)=>(
                    <li key={index} className="flex items-center justify-between bg-white p-4 border rounded-md shadow-md">
                    <span className="text-lg">{data}</span>
                    <div className="flex space-x-2">
                        <button 
                            onClick={()=>updateTask(index)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mx-2 focus:outline-none focus:shadow-outline-blue"
                        >Update</button>
                        <button 
                            onClick={()=>removeTask(index)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline-red"
                        >Remove</button>
                    </div>
                    </li>))
            }
        </ul>   

    </div>
  )
}

export default Body
