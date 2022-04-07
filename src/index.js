import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './Index.css';
import CoursesPage from './Pages/CoursesPage/CoursesPage';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz';
import Support from './Pages/Support/Support.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/khoa-hoc"} component={CoursesPage} />
        <Route path={"/ky-thi"} component={Quiz} />
        <Route path={"/ho-tro"} component={Support} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
