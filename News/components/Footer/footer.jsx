import React from 'react'
import {
    footerContainer,
    aboutUsText,
    aboutUsSymbol,
    copyrightText,
} from './footer.module.css';
import applitoolsLogo from '../../../img/applitoolsLogo.svg'

export default function Footer({}) {
    return (
        <div className={footerContainer}>
            <a href='/news/about'><img src={applitoolsLogo.src} className={aboutUsSymbol}/></a>
            <a href='/news/about'><p className={aboutUsText}>About Me</p></a>
            <p className={copyrightText}>Copyright © 2024 · All rights reserved</p>
        </div>
    );
}