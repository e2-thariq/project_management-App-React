import './App.css';
import ProjectSideBar from './components/ProjectSideBar/ProjectSideBar';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import { useState } from 'react';
import SelectedProjects from './components/SelectedProjects/SelectedProjects';

function App() {
  const[projectState, setProjectState] = useState({
    selectedProjectID : undefined,
    projects : [],
    tasks : []
  });

  function handleStartAddProject(){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectID:null
      };
    })
  }

  function handleCancelAddProject(){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectID:undefined
      };
    })
  }

  function handleAddProject(projectData){
    setProjectState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID
      }

      return{
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectID : undefined,
      };
    });
  }

  function handleDeleteProject(){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectID:undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectID)
      };
    })
  }

  function handleSelectProject(id){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectID: id
      };
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectID)
  let content = <SelectedProjects project={selectedProject} onDelete={handleDeleteProject} />

  if(projectState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <div className="App">

      <ProjectSideBar 
        onStartAddProject={handleStartAddProject} 
        projects={projectState.projects} 
        onSelectProject={handleSelectProject}
      />

      {content}

    </div>
  );
}

export default App;
