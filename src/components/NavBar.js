import React from 'react';
import side_bar from "../img/side_bar.png";
import top_bar_profile from "../img/top_bar_profile.png"
import top_bar_len from "../img/top_bar_len.png"
import top_bar_len_short from "../img/top_bar_len_short.png"
import top_bar_choose from "../img/top_bar_choose.png"

import {Ul, Li} from './Styles/StyledNavBar'

const NavBar = () => {
    return (
        <Ul>
            <Li><img src={side_bar} className="side-bar-img" alt="SideBar" /></Li>
            <Li><img src={top_bar_choose} className="top-bar-img" alt="TopBar" /></Li>
            <Li><img src={top_bar_len} className="top-bar-img" alt="TopBar" /></Li>
            <Li><img src={top_bar_len} className="top-bar-img" alt="TopBar" /></Li>
            <Li><img src={top_bar_len_short} className="top-bar-img" alt="TopBar" /></Li>
            <Li><img src={top_bar_len_short} className="top-bar-img" alt="TopBar" /></Li>
            <Li><img src={top_bar_len_short} className="top-bar-img" alt="TopBar" /></Li>

            <Li><img src={top_bar_profile} className="top-bar-img" alt="TopBar" /></Li>
        </Ul>
    );
};

export default NavBar