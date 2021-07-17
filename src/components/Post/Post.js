import React from 'react'
import './post.scss'

function post() {
    return (
        <div className="post">
            <img className="img_post"
                src="https://www.whizsky.com/wp-content/uploads/2020/06/blog2.png" alt="">
            </img>
            <div className="info">
                <div className="post_cats">
                    <span className="post_cat">Blog</span>
                    <span className="post_cat">Music</span>
                </div>
                <span className="post_title">this is my blog</span>
                <hr></hr>
                <span className="post_time"> 1 hour ago </span>
                <p className="desc">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default post
