import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { DataProvider } from './Context/Context';
import './Index.css';
import CoursesPage from './Pages/CoursesPage/CoursesPage';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz';
import Support from './Pages/Support/Support.js';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/khoa-hoc"} component={CoursesPage} />
          <Route path={"/ky-thi"} component={Quiz} />
          <Route path={"/chi-tiet"} component={Detail} />
        </Switch>
      </BrowserRouter>
    </DataProvider>
=======
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/khoa-hoc"} component={CoursesPage} />
        <Route path={"/ky-thi"} component={Quiz} />
        <Route path={"/ho-tro"} component={Support} />
      </Switch>
    </BrowserRouter>
>>>>>>> 0a04726f7e11813697bf5da0a75cbe3ec1c3d579
  </React.StrictMode>,
  document.getElementById('root')
);
