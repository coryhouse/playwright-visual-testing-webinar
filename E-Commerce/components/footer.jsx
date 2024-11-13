import * as React from "react"
import Logo from "./Header/logo"
import {
    footerStyle,
    copyright,
    links,
    blurb,
    logos,
    footerNavList,
    footerNavListItem,
} from "./footer.module.css"

export function Footer() {
    return (
        <footer className={footerStyle}>
            <div className={blurb}>
                <div className={logos}>
                    <Logo />
                </div>
            </div>
            <nav className={links} aria-label="footer">
                <ul className={footerNavList}>
                    {/* <li className={footerNavListItem}>
                        <a>Made With Next.js</a>
                    </li> */}
                    <li className={footerNavListItem}>
                        <a href="/e-commerce/contact-us" style={{textDecoration: 'underline'}}>Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div className={copyright}>
                Copyright &copy; {new Date().getFullYear()} · All rights reserved
            </div>
        </footer>
    )
}
    