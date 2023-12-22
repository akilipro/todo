import React, { useState } from 'react'

const Body = () => {

    const titleStyle = {text: 'bold',fontSize: '20px',padding: '10px',};

    const [newTask, setnewTask] = useState('')
    const [taskArray, settaskArray] = useState([])
    const [token, settoken] = useState(null)

    const AddTask = (e)=> {

        e.preventDefault();

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
    <div className="mt-3 flex flex-col gap-2">
        <form onSubmit={AddTask} className='flex justify-between items-center gap-4'>
            <input 
                type='text' 
                value={newTask} 
                onChange={handleInput}
                className="w-5/6 border border-gray-300 focus:outline-none focus:border-indigo-500 p-3 rounded-md"
                placeholder="Write a new task here"
                />
            <button onClick={AddTask} className="p-2 w-1/6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline-green self-center">
                {token!=null?'update' : 'Add'}
            </button>

        </form>
        

        <p className="text-xl font-bold underline">List of Tasks</p>

        <ul className="m-3">
            {taskArray.map((data, index)=>(
                    <li key={index} className="flex items-center justify-between bg-white p-4 border rounded-md shadow-md">
                    <span className="text-lg">{index + 1}. {data}</span>
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
