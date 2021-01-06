import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import HomePage from './Pages/HomePage';
import Nav from './components/Nav';
import ContactMe from './Pages/ContactMe';
import MyWork from './Pages/MyWork';
import ProjectDetail from './Pages/ProjectDetail';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {ProjectProvider} from './ProjectContext';


const App = () => {

  const location = useLocation();

  return (
    <ProjectProvider>
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/work" exact>
          <MyWork /> 
        </Route>
        <Route path="/work/:url">
          <ProjectDetail />
        </Route> 
        <Route path="/contact">
          <ContactMe />
        </Route> 
      </Switch>
      </AnimatePresence>
    </div>
    </ProjectProvider>
  );
}

export default App;
