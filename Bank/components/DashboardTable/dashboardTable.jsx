import {
    dbTableContainer,
    dbTableHeader,
    dbTableData,
    dbTable,
    statusIndicator,
    tdStatus,
    tdTime,
    tdImg,
    tdColoredLabel,
    tdAmount,
	hideMobile,
	hideTablet
} from "./dashboardTable.module.css";
import { useEffect, useState } from 'react';
import company1 from '../../../img/company1.png';
import company2 from '../../../img/company2.png';
import company3 from '../../../img/company3.png';
import company6 from '../../../img/company6.png';
import company7 from '../../../img/company7.png';
import company4 from '../../../img/company4.png';

const theme1 = {
    borderAccent: {
        backgroundColor: '#047bf8',
        width: '25px',
        height: '4px',
        borderRadius: '0px',
        display: 'block',
        position: 'absolute',
        bottom: '-3px',
        left: '0px'
    }
}

const theme2 = {
    borderAccent: {
        backgroundColor: '#1a847b',
        width: '25px',
        height: '4px',
        borderRadius: '0px',
        display: 'block',
        position: 'absolute',
        bottom: '-3px',
        left: '0px'
    }
}

export default function DashboardTable(
    {
        thm,
        scrambleData,
		floatHeaders,
		extraRow
    }
) {

    const [theme, setTheme] = useState(thm);
    const [times, setTimes] = useState(null);
    const [amounts, setAmounts] = useState(null);
    useEffect(() => {
        setTheme(thm);
    }, [thm])

    useEffect(() => {
        generateTimes();
        generateAmounts();
    }, [scrambleData])

    const generateTimes = () => {
        if (scrambleData) {
            const times = [];
            for (let i = 0; i < 6; i++) {
                const time = `${genRand(12)}:${genRand(60)}`
                times.push(time);
            }
            setTimes(times);
        } else {
            setTimes(null);
        }
    }

    const generateAmounts = () => {
        if (scrambleData) {
            const amounts = [];
            for (let i = 0; i < 6; i++) {
                const amt = `${genRand(1000)}`
                amounts.push(amt);
            }
            setAmounts(amounts);

        } else {
            setAmounts(null);
        }
    }

    const genRand = (limit) => {
        return Math.floor(Math.random() * limit);
    }

    return (
        <div className={dbTableContainer}>
			{console.log(floatHeaders)}
            <h6 className={dbTableHeader}>
                Recent Transactions
                <div style={!theme ? theme2.borderAccent : theme1.borderAccent}></div>
            </h6>
            <div className={dbTableData}>
                <table className={dbTable}>
                    <thead>
                        <tr>
                            <th style={floatHeaders ? {textAlign: 'center'} : {}}>
                                <span>Status</span>
                            </th>
                            <th style={floatHeaders ? {textAlign: 'center'} : {}} className={hideMobile}>
                                <span>Date</span>
                            </th>
                            <th style={floatHeaders ? {textAlign: 'center'} : {}} className={hideTablet}>
                                <span>Description</span>
                            </th>
                            <th style={floatHeaders ? {textAlign: 'center'} : {}} className={hideTablet}>
                                <span>Category</span>
                            </th>
                            <th style={floatHeaders ? {textAlign: 'center'} : {}}>
                                <span>Amount</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
						{extraRow && (
							<tr>
								<td>
									<span className={statusIndicator} style={{backgroundColor: "#71c21a"}}></span><span className={tdStatus}>Complete</span>
								</td>
								<td className={hideMobile}>
									<span>Feb 10th</span><span className={tdTime}>{(scrambleData && times?.length) ? times[0] : "8:05"}am</span>
								</td>
								<td className={hideTablet}>
									<img alt="" src={company1.src} style={{height: "25px"}} className={tdImg} /><span className={tdStatus}>Starbucks Coffee Grande Iced Caramel</span>
								</td>
								<td className={hideTablet}>
									<a className={tdColoredLabel} style={{backgroundColor: "#24b314", color: "#fff"}} href="">Restaurant / Cafe</a>
								</td>
								<td>
									<span className={tdAmount} style={{color: "#24b314"}}>+ {(scrambleData && amounts?.length) ? amounts[0] : "700"} USD</span>
								</td>
							</tr>
						)}
                        <tr>
                            <td>
                                <span className={statusIndicator} style={{backgroundColor: "#71c21a"}}></span><span className={tdStatus}>Complete</span>
                            </td>
                            <td className={hideMobile}>
                                <span>Today</span><span className={tdTime}>{(scrambleData && times?.length) ? times[0] : "1:52"}am</span>
                            </td>
                            <td className={hideTablet}>
                                <img alt="" src={company1.src} style={{height: "25px"}} className={tdImg} /><span className={tdStatus}>Starbucks coffee</span>
                            </td>
                            <td className={hideTablet}>
                                <a className={tdColoredLabel} style={{backgroundColor: "#24b314", color: "#fff"}} href="">Restaurant / Cafe</a>
                            </td>
                            <td>
                                <span className={tdAmount} style={{color: "#24b314"}}>+ {(scrambleData && amounts?.length) ? amounts[0] : "250"} USD</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={statusIndicator} style={{backgroundColor: "#c21a1a"}}></span><span className={tdStatus}>Declined</span>
                            </td>
                            <td className={hideMobile}>
                                <span>Jan 19th</span><span className={tdTime}>{(scrambleData && times?.length) ? times[1] : "3:22"}pm</span>
                            </td>
                            <td className={hideTablet}>
                                <img alt=""  src={company2.src} style={{height: "25px"}} className={tdImg}/><span className={tdStatus}>Stripe Payment Processing</span>
                            </td>
                            <td className={hideTablet}>
                                <a className={tdColoredLabel} style={{backgroundColor: "#e02525", color: "#fff"}} href="">Finance</a>
                            </td>
                            <td>
                                <span className={tdAmount} style={{color: "#24b314"}}>+ {(scrambleData && amounts?.length) ? amounts[1] : "952.23"} USD</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={statusIndicator} style={{backgroundColor: "#f8bc34"}}></span><span className={tdStatus}>Pending</span>
                            </td>
                            <td className={hideMobile}>
                                <span>Yesterday</span><span className={tdTime}>{(scrambleData && times?.length) ? times[2] : "7:45"}am</span>
                            </td>
                            <td className={hideTablet}>
                                <img alt=""  src={company3.src} style={{height: "25px"}} className={tdImg}/><span className={tdStatus}>MailChimp Services</span>
                            </td>
                            <td className={hideTablet}>
                                <a className={tdColoredLabel} style={{backgroundColor: "#f9d66f", color: "#292b2c"}} href="">Finance</a>
                            </td>
                            <td>
                                <span className={tdAmount} style={{color: "#e65252"}}>- {(scrambleData && amounts?.length) ? amounts[2] : "320"}  USD</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={statusIndicator} style={{backgroundColor: "#f8bc34"}}></span><span className={tdStatus}>Pending</span>
                            </td>
                            <td className={hideMobile}>
                                <span>Jan 23rd</span><span className={tdTime}>{(scrambleData && times?.length) ? times[3] : "2:07"}pm</span>
                            </td>
                            <td className={hideTablet}>
                                <img alt=""  src={company6.src} style={{height: "25px"}} className={tdImg}/><span className={tdStatus}>Shopify Product</span>
                            </td>
                            <td className={hideTablet}>
                                <a className={tdColoredLabel} style={{backgroundColor: "#0362c6", color: "#fff"}} href="">Shopping</a>
                            </td>
                            <td>
                                <span className={tdAmount} style={{color: "#24b314"}}>+ {(scrambleData && amounts?.length) ? amounts[3] : "17.99"} USD</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={statusIndicator} style={{backgroundColor: "#71c21a"}}></span><span className={tdStatus}>Complete</span>
                            </td>
                            <td className={hideMobile}>
                                <span>Jan 7th</span><span className={tdTime}>{(scrambleData && times?.length) ? times[4] : "9:51"}am</span>
                            </td>
                            <td className={hideTablet}>
                                <img alt="" src={company4.src} style={{height: "25px"}} className={tdImg} /><span className={tdStatus}>Ebay Marketplace</span>
                            </td>
                            <td className={hideTablet}>
                                <a className={tdColoredLabel} style={{backgroundColor: "#e02525", color: "#fff"}} href="">Ecommerce</a>
                            </td>
                            <td>
                                <span className={tdAmount} style={{color: "#e65252"}}>- {(scrambleData && amounts?.length) ? amounts[4] : "244"} USD</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <span className={statusIndicator} style={{backgroundColor: "#f8bc34"}}></span><span className={tdStatus}>Pending</span>
                            </td>
                            <td className={hideMobile}>
                                <span>Jan 9th</span><span className={tdTime}>{(scrambleData && times?.length) ? times[3] : "7:45"}7:45</span>
                            </td>
                            <td className={hideTablet}>
                                <img alt=""  src={company7.src} style={{height: "25px"}} className={tdImg}/><span className={tdStatus}>Templates Inc</span>
                            </td>
                            <td className={hideTablet}>
                                <a className={tdColoredLabel} style={{backgroundColor: "#0362c6", color: "#fff"}} href="">Business</a>
                            </td>
                            <td>
                                <span className={tdAmount} style={{color: "#24b314"}}>+ {(scrambleData && amounts?.length) ? amounts[5] : "340"} USD</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>   
    )
}