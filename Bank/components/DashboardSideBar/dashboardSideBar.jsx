import {
    dbSideNavContainer,
    dbSideNavHeader,
    dbSideNavUser,
    dbSideNavUserPhoto,
    dbSideNavUserInfo,
    dbSideNavUserName,
    dbSideNavUserRole,
    toggleArrow,
    chevronDownIcon,
    dbSideNavMenuContainer,
    dbSideNavSubHeader,
    dbSideNavExpandableOption,
    dbSideNavOptionIcon,
    layoutIcon,
    layersIcon,
    packageIcon
} from "./dashboardSideBar.module.css";

import avatar1 from '../../../img/avatar1.jpg';
import { useEffect, useState } from "react";
const theme1 = {
    dbSideNavOptionIcon: {
        color: '#0073ff',
    },
    dbSideNavSubHeader: {
        color: '#448eef'
    }
}

const theme2 = {
    dbSideNavOptionIcon: {
        color: "#1a847b"
    },
    logoIcon: {
        backgroundColor: 'white',
        padding: '10px',
        marginRight: '0px',
    },
    dbSideNavSubHeader: {
        fontWeight: 'bold'
    }
}

export default function DashboardSideBar(
    {
        thm
    }
) {

    const [theme, setTheme] = useState(thm);
    useEffect(() => {
        setTheme(thm);
    }, [thm])

    return (
        <div className={dbSideNavContainer}>
            <div className={dbSideNavHeader}>
                <div className={dbSideNavUser}>
                    <div className={dbSideNavUserPhoto}>
                        <img alt="" src={avatar1.src} />
                    </div>
                    <div className={dbSideNavUserInfo}>
                        <div className={dbSideNavUserName}>
                            Jack Gomez
                        </div>
                        <div className={dbSideNavUserRole}>
                            Customer
                        </div>
                    </div>
                    <div className={toggleArrow}>
                        <div className={["osIcon", chevronDownIcon].join(" ")}></div>
                    </div>
                </div>
            </div>
            <ul className={dbSideNavMenuContainer}>
                <li className={dbSideNavSubHeader} style={!theme ? theme2.dbSideNavSubHeader : theme1.dbSideNavSubHeader}>
                    <span>Card types</span>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon} style={!theme ? theme2.dbSideNavOptionIcon : theme1.dbSideNavOptionIcon}>
                            <div className={["osIcon", layoutIcon].join(" ")}></div>
                        </div>
                        <span>Credit cards</span>
                    </a>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon} style={!theme ? theme2.dbSideNavOptionIcon : theme1.dbSideNavOptionIcon}>
                            <div className={["osIcon", layersIcon].join(" ")}></div>
                        </div>
                        <span>Debit cards</span>
                    </a>
                </li>
                <li className={dbSideNavSubHeader} style={!theme ? theme2.dbSideNavSubHeader : theme1.dbSideNavSubHeader}>
                    <span>Lending</span>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon} style={!theme ? theme2.dbSideNavOptionIcon : theme1.dbSideNavOptionIcon}>
                            <div className={["osIcon", packageIcon].join(" ")}></div>
                        </div>
                        <span>Loans</span>
                    </a>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon} style={!theme ? theme2.dbSideNavOptionIcon : theme1.dbSideNavOptionIcon}>
                            <div className={["osIcon", packageIcon].join(" ")}></div>
                        </div>
                        <span>Mortgages</span>
                    </a>
                </li>
            </ul>
        </div>     
    )
}