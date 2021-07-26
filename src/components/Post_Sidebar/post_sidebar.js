import React from 'react'
import './Post_sidebar.scss'
import Header from "../Header/Header";
import Sidebar from '../Sidebar/sidebar';
import Posts from '../Posts/Posts';


function Postsidebar() {
    return (
        <div className="main_post">
            <Header></Header>
            <div className="main">
            <div className="post_side" >
            <Posts></Posts>
            </div>
            <div className="posts_side" >
            <Sidebar></Sidebar>
            </div>

            </div>
           

         
            
        </div>
    )
}

export default Postsidebar
