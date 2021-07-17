import React from "react"
import Topbar from "./components/topbar/Topbar"
import Header from "./components/Header/Header";
import Postsidebar from "./components/Post_Sidebar/post_sidebar";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Header></Header>
      <Postsidebar></Postsidebar>
    </div>
  );
}

export default App;
