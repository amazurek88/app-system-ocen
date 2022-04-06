import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeView from "./HomeModule/HomeView";
// @ts-ignore
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import InfoView from "./InfoModule/InfoView";
import OcenyView from "./OcenyModule/OcenyView";
import Page404 from "./ErrorModule/Page404";

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path={"/"}><Redirect to={'/start'}/></Route>
            <Route exact path={"/start"} component={HomeView}/>
            <Route exact path={"/oceny"} component={OcenyView}/>
            <Route exact path={"/info"} component={InfoView}/>
            <Route exact path={"/error"} component={Page404}/>
            <Redirect to={"/error"}/>
        </Switch>
      </Router>
  );
}

export default App;
