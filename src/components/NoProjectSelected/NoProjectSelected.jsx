export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="no-projects-selected">
            <h2>No Projects Selected</h2>
            <p>click below button to add a new project</p>
            <button onClick={onStartAddProject}>create new project</button>
        </div>
    );
}