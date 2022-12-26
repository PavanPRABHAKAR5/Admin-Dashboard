import React from 'react';
import "./TopNav.css";
import {MailOutline, NotificationsNone} from '@mui/icons-material';


const TopNav = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Acme Inc</span>
            </div>
            <div className="topRight">
                <div className="iconContainer">
                  <MailOutline/>
                  <span className='messages'>2</span>
                </div>
                <div className="iconContainer">
                  <NotificationsNone/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" className="profileImg" />
            </div>
        </div>
    </div>
  )
}

export default TopNav