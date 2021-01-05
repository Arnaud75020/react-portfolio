import React, {useEffect, useState} from 'react';
import GlobalStyle from './components/GlobalStyle';
import HomePage from './Pages/HomePage';
import Nav from './components/Nav';
import ContactMe from './Pages/ContactMe';
import MyWork from './Pages/MyWork';
import ProjectDetail from './Pages/ProjectDetail';
import { Switch, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';


const App = () => {

  const location = useLocation();

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
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/work" exact>
          <MyWork fetchProjects={fetchProjects} projects={projects}/> 
        </Route> 
        <Route path="/contact">
          <ContactMe />
        </Route> 
        <Route path="/work/:url">
          <ProjectDetail fetchProjects={fetchProjects} projects={projects}/>
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
