import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const ProjectContext = createContext();

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([]);   
  
    const fetchProjects = () => {
      axios.get('./data.json')
      .then(res => {
        const projects = res.data
        setProjects(projects)}) 
    }

    useEffect(() => {
        fetchProjects();
          }, []) 

    return (
        <ProjectContext.Provider value={[projects]}>
            {props.children}
        </ProjectContext.Provider>
     );
};
 
