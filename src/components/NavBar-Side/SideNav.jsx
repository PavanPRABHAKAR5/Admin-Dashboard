import React from 'react';
import "./SideNav.css";
import {HomeOutlined, SignalCellularAlt, Whatshot, PersonOutline, PeopleOutline, FolderOpen, NotificationsNone, InsertChartOutlinedOutlined, SettingsOutlined, LogoutOutlined} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import UserAccount from '../UserAccount/UserAccount';
const SideNav = () => {
    const navigate = useNavigate()
  return (
    <div className="sidebar">
        <div className="sidebarContainer">
            <div className="sidebarMenue">
                <UserAccount/>
                <ul className="sidebarList">
                    <li className="sidebarListItem active"  onClick={()=> navigate("/")}>
                        <HomeOutlined className='sidebarIcon'/>
                        Dashboard
                    </li>
                </ul>

                <h3 className="sidebarTitile">ANALYTICS</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem" onClick={()=> navigate("/products")}>
                        <SignalCellularAlt className='sidebarIcon' />
                        Performance
                    </li>
                    <li className="sidebarListItem">
                        <Whatshot className='sidebarIcon'/>
                        Hotjar
                    </li>
                </ul>

                <h3 className="sidebarTitile">SUPPORT</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <SignalCellularAlt className='sidebarIcon'/>
                    Tickets
                    </li>
                    <li className="sidebarListItem">
                    <PersonOutline className='sidebarIcon'/>
                    Agents
                    </li>
                    <li className="sidebarListItem">
                    <PeopleOutline className='sidebarIcon'/>
                    Customers
                    </li>
                </ul>

                <h3 className="sidebarTitile">SHOP</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <FolderOpen  className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <NotificationsNone className='sidebarIcon'/>
                        Orders
                    </li>
                    <li className="sidebarListItem">
                        <InsertChartOutlinedOutlined className='sidebarIcon'/>
                        Reports
                    </li>
                    <li className="sidebarListItem last">
                        <SettingsOutlined className='sidebarIcon'/>
                        Settings
                    </li>
                    <li className="sidebarListItem">
                        <LogoutOutlined className='sidebarIcon'/>
                        Logout
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default SideNav