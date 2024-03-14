import NewTask from "./NewTask";

export default function Tasks({tasks, onAdd, onDelete}){
    return(
        <section>
            <h2>Tasks</h2>
            <NewTask onAdd={onAdd}/>
            {tasks.length === 0 && 
              <p>This project does not have any tasks yet...!</p>
            }
            {tasks.length > 0 &&
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span>{task.text}</span>
                            <button onClick={() => onDelete(task.id)}>clear</button>
                        </li>
                        
                    ))}
                </ul>
            }
        </section>
    );
}