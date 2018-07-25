import React from "react";
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import ToDoList from './ToDoList';
import Congratulations from './Congratulations';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/list' component={ToDoList}/>
      <Route path='/congratulations' component={Congratulations}/>
    </Switch>
  </main>
)
export default Main;