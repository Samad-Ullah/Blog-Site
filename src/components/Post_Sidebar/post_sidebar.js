import React from 'react'
import './Post_sidebar.scss'
import Sidebar from '../Sidebar/sidebar';
import Posts from '../Posts/Posts';


function Postsidebar() {
    return (
        <div className="post_side">
           <Posts></Posts>
            <Sidebar></Sidebar>
            
        </div>
    )
}

export default Postsidebar
