import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { DataProvider } from './Context/Context';
import './Index.css';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import CoursesPage from './Pages/CoursesPage/CoursesPage';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz';
import Support from './Pages/Support/Support.js';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/khoa-hoc"} component={CoursesPage} />
          <Route exact path={"/khoa-hoc/:name"} component={CoursesPage} />
          <Route path={"/ky-thi"} component={Quiz} />
          <Route exact path={"/khoa-hoc/chi-tiet/:name"} component={Detail} />
          <Route path={"/khoa-hoc/chi-tiet/:name/lab"} component={CourseDetail} />
          <Route exact path={"/ho-tro"} component={Support} />
        </Switch>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
