import React from 'react';
import "./HomePage.css";
import Revenue from '../../components/RevenueInfo/Revenue';
import CustomerWidget from '../../components/CustomerWidget/CustomerWidget';
import TransactionsWidget from '../../components/TransactionsWidget/TransactionsWidget';
import SalesReport from '../../components/SalesReport/SalesReport';
import TrafficSource from '../../components/TrafficSource/TrafficSource';
const HomePage = () => {
  return (
    <div className='home'>
        <Revenue />

        <div className='chartWidget'>
          <SalesReport />
          <TrafficSource />
        </div>
        <div className='homeWidget'>
          <TransactionsWidget/>
          <CustomerWidget/>
        </div>
    </div>
  )
}

export default HomePage