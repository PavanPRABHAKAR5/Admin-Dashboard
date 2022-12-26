import React from 'react'
import "./TransactionsWidget.css";
import {MoreHorizOutlined} from '@mui/icons-material';

const TransactionsWidget = () => {

    const Button = ({type})=>{
        return <button className={'widgetLgButton '+ type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Transactions</h3>
            <table className="widgetLgTabel">
                <tr className="widgetLgTr">
                    <td className="widgetLgtr">
                        <div className="widgetLgStatus">
                            <Button type="Completed"/>
                        </div>
                    </td>

                    <td className="widgetLgCardDetails">
                        <div className="widgetLgcardName">Visa card **** 4831</div>
                        <span className="widgetLgPaymentMode">Card Payment</span>
                    </td>

                    <td className="widgetLgAmount">
                        <div className="widgetLgAmountInfo">$182.94</div>
                        <span className="widgetLgAmountDate">Jan 17, 2022</span>
                    </td>

                    <td className="widgetLgSocialmedia">
                        <div className="widgetLgSocialMediatd">Amazon</div>
                    </td>

                    <td className="widgetLgIcon">
                        <div className="widgetLgIcontd">
                            <MoreHorizOutlined/>
                        </div>
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgtr">
                        <div className="widgetLgStatus">
                            <Button type="Completed"/>
                        </div>
                    </td>

                    <td className="widgetLgCardDetails">
                    <div className="widgetLgcardName">Visa card **** 4831</div>
                        <span className="widgetLgPaymentMode">Card Payment</span>
                    </td>

                    <td className="widgetLgAmount">
                    <div className="widgetLgAmountInfo">$182.94</div>
                        <span className="widgetLgAmountDate">Jan 17, 2022</span>
                    </td>

                    <td className="widgetLgSocialmedia">
                        <div className="widgetLgSocialMediatd">Amazon</div>
                    </td>

                    <td className="widgetLgIcon">
                        <div className="widgetLgIcontd">
                            <MoreHorizOutlined/>
                        </div>
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgtr">
                        <div className="widgetLgStatus">
                            <Button type="Pending"/>
                        </div>
                    </td>

                    <td className="widgetLgCardDetails">
                    <div className="widgetLgcardName">Visa card **** 4831</div>
                        <span className="widgetLgPaymentMode">Card Payment</span>
                    </td>

                    <td className="widgetLgAmount">
                    <div className="widgetLgAmountInfo">$182.94</div>
                        <span className="widgetLgAmountDate">Jan 17, 2022</span>
                    </td>

                    <td className="widgetLgSocialmedia">
                        <div className="widgetLgSocialMediatd">Amazon</div>
                    </td>

                    <td className="widgetLgIcon">
                        <div className="widgetLgIcontd">
                            <MoreHorizOutlined/>
                        </div>
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgtr">
                        <div className="widgetLgStatus">
                            <Button type="Canceled"/>
                        </div>
                    </td>

                    <td className="widgetLgCardDetails">
                    <div className="widgetLgcardName">Visa card **** 4831</div>
                        <span className="widgetLgPaymentMode">Card Payment</span>
                    </td>

                    <td className="widgetLgAmount">
                    <div className="widgetLgAmountInfo">$182.94</div>
                        <span className="widgetLgAmountDate">Jan 17, 2022</span>
                    </td>

                    <td className="widgetLgSocialmedia">
                        <div className="widgetLgSocialMediatd">Amazon</div>
                    </td>

                    <td className="widgetLgIcon">
                        <div className="widgetLgIcontd">
                            <MoreHorizOutlined/>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default TransactionsWidget