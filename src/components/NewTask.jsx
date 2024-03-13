import { useState } from "react";

export default function NewTask(){
    const[enteredTask, setEnteredTask] = useState();

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    return(
        <div>
            <input 
                type="text" 
                onChange={handleChange} 
                value={enteredTask}
            />
            <button>Add Task</button>
        </div>
    );
}