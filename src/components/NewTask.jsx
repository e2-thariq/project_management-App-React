import { useState } from "react";

export default function NewTask({onAdd}){
    const[enteredTask, setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        setEnteredTask('');
        onAdd(enteredTask);
    }

    return(
        <div>
            <input 
                type="text" 
                onChange={handleChange} 
                value={enteredTask}
            />
            <button onClick={handleClick}>Add Task</button>
        </div>
    );
}