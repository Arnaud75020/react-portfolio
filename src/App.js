import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './Pages/AboutUs';
import Nav from './components/Nav';
import ContactMe from './Pages/ContactMe';
import MyWork from './Pages/MyWork';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <MyWork />
        </Route> 
        <Route path="/contact">
          <ContactMe />
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
