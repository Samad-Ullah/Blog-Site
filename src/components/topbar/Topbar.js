import React from 'react'
import { Link } from "react-router-dom";
import './topbar.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import { color } from '@material-ui/system';

function Topbar() {
    return (
        <div className="topbar">
            
            <div className="center">
                <LanguageIcon className="top_icons"></LanguageIcon>
                <FacebookIcon className="top_icons"></FacebookIcon>
                <InstagramIcon className="top_icons"></InstagramIcon>
                <TwitterIcon className="top_icons"></TwitterIcon>
            </div>

            <div className="left">
                <ul className="top_menu_list">
                    <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                    <li>Home</li>
                    </Link>
                    <Link to="/about" style={{textDecoration:"none" , color:"inherit"}}>
                    <li>About</li>
                    </Link>
                    <Link to="/contact" style={{textDecoration:"none" , color:"inherit"}}>
                    <li>contact</li>
                    </Link>
                    <Link to="write" style={{textDecoration:"none" , color:"inherit"}} >
                    <li>Write</li>
                    </Link>
                    <Link to="/login" style={{textDecoration:"none", color:"inherit"}}>
                    <li>Login</li>
                    </Link>

                    
                </ul>
            </div>
            <div className="right">
            <SearchIcon className="top_Search_icon"></SearchIcon>
                <img className="top_img" src="https://5.imimg.com/data5/DB/JO/GLADMIN-70100492/admin-login-portal-500x500.png" alt=""></img>
                
            </div>

        </div>
    )
}

export default Topbar
