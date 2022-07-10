import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './app.css'
import Home from './pages/Home/Home';
import UserList from './pages/userlist/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import Project from './pages/Project/Project'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProjectList from './pages/ProjectList/ProjectList';
import NewProduct from './pages/NewProduct/NewProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/projectList/:projectListId">
            <ProjectList />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
