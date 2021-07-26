import React from "react"
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar"
import Postsidebar from "./components/Post_Sidebar/post_sidebar";
import Singlepage from "./components/SinglePage/Singlepage";
import Write from "./components/Write/Write";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
     <Router>
     <Topbar></Topbar>
       <Switch>
         <Route path="/" exact component={ Postsidebar}></Route>
         <Route path="/write" component={Write}></Route>
         <Route path="/login" component={Login}></Route>
         <Route path="/register" component={Register}></Route>
         <Route path="/singlepage" component={Singlepage}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
