import React from 'react'
import './sidebar.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';

function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_item">
                <span className="sidebar_title">ABOUT ME</span>
                <img src="data:image/jpeg;base64,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" alt="" width="400" height="200">   
                </img>
                <p> simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s
                </p>
            </div>
            <div className="sidebar_item">
                <span className="sidebar_title">CATEGORY</span>
                <ul className="sidebar_List">
                    <li className="sidebaritem">Political Issues</li>
                    <li className="sidebaritem">Current Affairs</li>
                    <li className="sidebaritem">Health</li>
                    <li className="sidebaritem">Technology</li>
                    <li className="sidebaritem">Sports</li>
                    <li className="sidebaritem">Fashion</li>
                    <li className="sidebaritem">Kids</li>
                </ul>
            </div>
            <div className="sidebar_item">
                <span className="sidebar_title">FOLLOW US</span>
                <div className="sidebar_social">
                <LanguageIcon className="top_icons"></LanguageIcon>
                <FacebookIcon className="top_icons"></FacebookIcon>
                <InstagramIcon className="top_icons"></InstagramIcon>
                <TwitterIcon className="top_icons"></TwitterIcon>
                </div>
            </div>
        </div>
    )
}

export default sidebar
