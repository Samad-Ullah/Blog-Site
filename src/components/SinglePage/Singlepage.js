import React from 'react'
import './singlepage.scss'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Sidebar from '../Sidebar/sidebar';


function Singlepage() {
    return (
        <div className="singlepage">
            <div className="post">
                <img className="post_img"
                    src="https://www.whizsky.com/wp-content/uploads/2020/06/blog2.png"
                    alt="post"
                    height="400"
                    width="1000"
                />
                <div className="post_title">
                    This is my block
                </div>
                <div className="edit_trash">
                    <span className="edit"><EditIcon></EditIcon></span>
                    <span className="trash"><DeleteIcon></DeleteIcon></span>
                </div>
                <div className="author_time">
                    <span className="Author"> Author: <b>Abdul Samad</b></span>
                    <span className="time">1 hour ago</span>
                </div>
                <p className="desc">
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>



            </div>

            {/*post */}
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>


        </div>
    )
}

export default Singlepage
