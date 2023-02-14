import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home'
import Landing from './components/Landing'
import Activity from './components/Activity'
import Detail from './components/Detail'
//import SearchBar from './components/SearchBar';

function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={Landing}/>
      {/* <Route path={'/'} component={SearchBar}/> */}
      <Route exact path={'/home'} component={Home}/>
      <Route path={'/createActivity'} component={Activity}/>
      <Route path={'/detail/:id'} component={Detail}/>
    </React.Fragment>
  );
}

export default App;
