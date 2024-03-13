import Tasks from "../Tasks";

export default function SelectedProjects({project, onDelete}){
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year:'numeric',
        month:'short',
        day:'numeric'
    })
    return(
        <div>
            <header>
                <div>
                    <h2>{project.title}</h2>
                    <button onClick={onDelete}>Delete</button>
                </div>

                <p>{formattedDate}</p>
                <p>{project.description}</p>

            </header>
            <Tasks />
        </div>
    );
}