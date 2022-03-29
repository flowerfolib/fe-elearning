import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css';
import Home from './Pages/Home';

function App() {
  return <>
    <Switch>
      <Route exact path={""}>
        <Home />
      </Route>
    </Switch>
  </>
}

export default App;