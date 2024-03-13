import './ProjectSideBar.css'

export default function ProjectSideBar({
    onStartAddProject, 
    projects, 
    onSelectProject}){
    return(
        <>
            <aside className="project-sidebar">
                <h3>Your Projects</h3>
                <button onClick={onStartAddProject}>+ Add Projects</button>

                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)}>{project.title}</button>
                        </li>
                    ))}
                </ul>

            </aside>
        </>


    );
}