import React from 'react'
import './topbar.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';

function Topbar() {
    return (
        <div className="topbar">
            <div className="left">
                <ul className="top_menu_list">
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                    <li>Write</li>
                    <li>Logout</li>
                </ul>
            </div>
            <div className="center">
                <LanguageIcon className="top_icons"></LanguageIcon>
                <FacebookIcon className="top_icons"></FacebookIcon>
                <InstagramIcon className="top_icons"></InstagramIcon>
                <TwitterIcon className="top_icons"></TwitterIcon>
            </div>
            <div className="right">
            <SearchIcon className="top_Search_icon"></SearchIcon>
                <img className="top_img" src="https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png" alt=""></img>
                
            </div>

        </div>
    )
}

export default Topbar
