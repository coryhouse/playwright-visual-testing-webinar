import logo from '../../../img/applitoolsLogo.svg'
import portrait from '../../../img/avatar1.jpg'
import {
    container,
    logoIcon,
    logoText,
    headerArticle,
    headerAbout,
    aboutPortrait,
    headerSearch,
    groupContainer,
} from "./header.module.css"
export default function Header (props) {
  return (
    <div className={container}>
      <div className={groupContainer}>
        <a href="/news"><img src={logo.src} className={logoIcon}/></a>
        <a href="/news"><div className={logoText}>EyeNews</div></a>
      </div>
      <div className={groupContainer}>
        <a href="/news/about"><div className={headerAbout}>About Me</div></a>
        <a href="/news/about"><img src={portrait.src} className={aboutPortrait}/></a>
      </div>
    </div>
  )
}