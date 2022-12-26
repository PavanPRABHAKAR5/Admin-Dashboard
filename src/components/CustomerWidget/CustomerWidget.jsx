import React from 'react'
import "./CustomerWidget.css";

const CustomerWidget = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">Recent Customers</span>
        <ul className='WidgetSmList'>
            <li className='WidgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Jenny Wilson</span>
                <span className="widgetSmUserId">Wilson@gmail.com</span>
                </div>
                <div className="widgetSmInfo">
                <span className="widgetSmPrice">$11,234</span>
                <span className="widgetSmPlace">Austin</span>
                </div>
            </li>

            <li className='WidgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Jenny Wilson</span>
                <span className="widgetSmUserId">Wilson@gmail.com</span>
                </div>
                <div className="widgetSmInfo">
                <span className="widgetSmPrice">$11,234</span>
                <span className="widgetSmPlace">Austin</span>
                </div>
            </li>

            <li className='WidgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Jenny Wilson</span>
                <span className="widgetSmUserId">Wilson@gmail.com</span>
                </div>
                <div className="widgetSmInfo">
                <span className="widgetSmPrice">$11,234</span>
                <span className="widgetSmPlace">Austin</span>
                </div>
            </li>

            <li className='WidgetSmListItem'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Jenny Wilson</span>
                <span className="widgetSmUserId">Wilson@gmail.com</span>
                </div>
                <div className="widgetSmInfo">
                <span className="widgetSmPrice">$11,234</span>
                <span className="widgetSmPlace">Austin</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default CustomerWidget