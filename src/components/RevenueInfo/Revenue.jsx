import React from 'react';
import "./Revenue.css";
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from "@mui/icons-material"

const Revenue = () => {
  return (
    <div className='featured'>
        <div className="featureItem">
            <span className="featureTitle">TODAY'S SALE</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$12,426</span>
                <span className="featureMoneyRate featureIcon positive">+36%<ArrowUpwardOutlined /> </span>
            </div>
            
        </div>

        <div className="featureItem">
            <span className="featureTitle">TOTAL SALES</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">$2,38,485</span>
                <span className="featureMoneyRate">-14%<ArrowDownwardOutlined className='featureIcon'/> </span>
            </div>
           
        </div>

        <div className="featureItem">
            <span className="featureTitle">TOTAL ORDERS</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">84,382</span>
                <span className="featureMoneyRate">+36%<ArrowUpwardOutlined className='featureIcon positive'/> </span>
            </div>
            
        </div>

        <div className="featureItem">
            <span className="featureTitle">TOTAL CUSTOMERS</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">33,493</span>
                <span className="featureMoneyRate">+36%<ArrowUpwardOutlined className='featureIcon positive'/> </span>
            </div>
        </div>
    </div>
  )
}

export default Revenue