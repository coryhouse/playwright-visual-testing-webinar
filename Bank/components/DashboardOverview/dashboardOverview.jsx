import {
    dbOverviewContainer,
    elementActions,
    primaryButton,
    successButton,
    plusIcon,
    gridIcon,
    warning,
    dbOverviewHeader,
    accountBalancesContainer,
    accountBalances,
    balance,
    balanceTitle,
    balanceValue,
    trendingDown,
    arrowDownIcon,
    balanceLink,
    arrowRightIcon,
	hideMobile,
	hideSmall
} from "./dashboardOverview.module.css";
import { useEffect, useState } from 'react';

const theme1 = {
    primaryButton: {
        backgroundColor: "#047bf8",
        color: "#fff",
        borderColor: "#047bf8",
    },
    successButton: {
        backgroundColor: "#24b314",
        color: "#fff",
        borderColor: "#24b314",
    },
    borderAccent: {
        backgroundColor: '#047bf8',
        width: '25px',
        height: '4px',
        borderRadius: '0px',
        display: 'block',
        position: 'absolute',
        bottom: '-3px',
        left: '0px'
    },
    warning: {
        color: 'red',
    },
    balanceLink: {
        color: '#047bf8',
    },
    balanceLinkText: {
        borderBottom: "2px solid #047bf8"
    }
}

const theme2 = {
    primaryButton: {
        backgroundColor: "#1a847b",
        color: "#fff",
        borderColor: "#1a847b",
    },
    successButton: {
        backgroundColor: "#2A4494",
        color: "#fff",
        borderColor: "#2A4494",
    },
    borderAccent: {
        backgroundColor: '#1a847b',
        width: '25px',
        height: '4px',
        borderRadius: '0px',
        display: 'block',
        position: 'absolute',
        bottom: '-3px',
        left: '0px'
    },
    warning: {
        color: '#ea572e',
    },
    balanceLink: {
        color: '#1a847b',
    },
    balanceLinkText: {
        borderBottom: "2px solid #1a847b"
    }
}

export default function DashboardOverview(
    {
        thm,
        scrambleData
    }
) {
    
    const [theme, setTheme] = useState(thm);
    const [balances, setBalances] = useState(null);
    useEffect(() => {
        setTheme(thm);
    }, [thm])

    useEffect(() => {
        generateBalances();
    }, [scrambleData])

    const generateBalances = () => {
        if (scrambleData) {
            const balances = [];
            for (let i = 0; i < 3; i++) {
                const balance = `${genRand(50000)}`
                balances.push(balance);
            }
            setBalances(balances);
        } else {
            setBalances(null);
        }
    }

    const genRand = (limit) => {
        return Math.floor(Math.random() * limit);
    }

    return (
        <div className={dbOverviewContainer}>
            <div className={elementActions}>
                <a style={!theme ? theme2.primaryButton : theme1.primaryButton} href="#">
                    <i className={["osIcon", plusIcon].join(' ')}></i>
                    <span>Add Account</span>
                </a>
                <a style={!theme ? theme2.successButton : theme1.successButton} href="#">
                    <i className={["osIcon", gridIcon].join(' ')}></i>
                    <span>Make Payment</span>
                </a>
            </div>
            <h6 id="time" className={warning} style={!theme ? theme2.warning : theme1.warning} >
				<span>Your nearest branch closes in: 30m 5s</span>
			</h6>
            <h6 className={dbOverviewHeader}>
                Financial Overview
                <div style={!theme ? theme2.borderAccent : theme1.borderAccent}></div>
            </h6>
            <div className={accountBalancesContainer}>
                <div className={accountBalances}>
                    <div className={[hideMobile, balance].join(' ')}>
                        <div className={balanceTitle}>
                            Total Balance
                        </div>
                        <div className={balanceValue}>
                            <span>${(scrambleData && balances?.length) ? balances[0] : "350"}</span>
                            <span className={trendingDown}>
                                <span>%7</span>
                                <i className={["osIcon", arrowDownIcon].join(' ')}></i>
                            </span>
                        </div>
                        <div className={balanceLink}>
                            <a href="#"  style={!theme ? theme2.balanceLink : theme1.balanceLink}>
                                <span  style={!theme ? theme2.balanceLinkText : theme1.balanceLinkText}>View Statement</span>
                                <i className={["osIcon", arrowRightIcon].join(' ')}></i>
                            </a>
                        </div>
                    </div>
                    <div className={[hideSmall, balance].join(' ')}>
                        <div className={balanceTitle}>
                            Credit Available
                        </div>
                        <div className={balanceValue}>
                            ${(scrambleData && balances?.length) ? balances[1] : "17,800"}
                        </div>
                        <div className={balanceLink}>
                            <a href="#" style={!theme ? theme2.balanceLink : theme1.balanceLink}>
                                <span style={!theme ? theme2.balanceLinkText : theme1.balanceLinkText}>Request Increase</span>
                                <i className={["osIcon", arrowRightIcon].join(' ')}></i>
                            </a>
                        </div>
                    </div>
                    <div className={balance}>
                        <div className={balanceTitle}>
                            Due Today
                        </div>
                        <div className={balanceValue} style={{color: '#b71b1b'}}>
                            ${(scrambleData && balances?.length) ? balances[2] : "180"}
                        </div>
                        <div className={balanceLink}>
                            <a href="#" style={{color: "#926a15"}}>
                                <span style={{borderBottom: "2px solid #926a15"}} >Pay Now</span>
                                <i className={["osIcon", arrowRightIcon].join(' ')}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}