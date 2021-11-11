import React from 'react'
import "./sidebar.css"
import {SupervisorAccount, Textsms, Home, Equalizer} from '@material-ui/icons';

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                       <li className="sidebarListItem">
                        <Home />&nbsp;
                        Overview
                       </li>
                       <li className="sidebarListItem">
                        <Equalizer />&nbsp;
                        Risk insights
                       </li>
                       <li className="sidebarListItem">
                        <SupervisorAccount />&nbsp;
                        Policyholders
                       </li>
                       <li className="sidebarListItem">
                        <Textsms  />&nbsp;
                        Support
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}