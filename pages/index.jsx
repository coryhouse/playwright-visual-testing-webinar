import { BiMoney, BiShoppingBag } from 'react-icons/bi';
import bg from '../img/green-bg.svg'
import {
    demoAppsContainer,
    appBubblesContainer,
    appBubble,
    appImage,
    appDesc
} from './index.module.css';
import bank from '../img/bank.png';
import eComm from '../img/eComm.png';
import news from '../img/news.jpg';
import SampleLink from '../components/SampleComponents/SampleLink/sampleLink';
import { CgBrowser } from "react-icons/cg";
import { HiCursorClick, HiOutlineHandRaised } from "react-icons/hi";
import { FiType } from "react-icons/fi";
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFlag, BsHash, BsInputCursorText } from 'react-icons/bs'; 
import { TbFileUpload } from 'react-icons/tb';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { CgPlayButtonR } from 'react-icons/cg';
import { FaScroll } from 'react-icons/fa';
import { TbLoader2 } from "react-icons/tb";
import { FaRegNewspaper } from "react-icons/fa";

const linkIconStyle = {
    padding: '10px',
    color: 'white',
    backgroundColor: '#3069C5',
    borderRadius: '5px',
    backgroundImage: "linear-gradient(to top right, #4685EA, #1b3764)",
    boxShadow: "2px 2px 3px #102342"
}

export default function DemoAppsHome() {
    return (
        <div className={demoAppsContainer} style={{backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',}
        }>
            {/*<nav style={{display: 'flex', gap: '10px', padding: '10px', justifyContent: 'center'}}>
                <p>Home</p>
                <p>How to use</p>
                <p>Use case repository</p>
                <p>Test builder</p>
                <p>Request use case</p>
    </nav>*/}
            <h2 style={{color:'#fff', fontWeight: '900', fontSize: '3rem', padding: '1rem'}}>Applitools App Sandbox</h2>
            <div className={appBubblesContainer}>
                <div className={appBubble}>
                    <a href='/bank'>
                        <div className={appImage}>
                            <img src={bank.src}/>
                        </div>
                        <div className={appDesc}>
                            <BiMoney 
                                style={{ color: '#49A078', padding: '10px', borderRadius: '10px'}}
                                size={50}
                            />
                            <p>Bank App</p>
                        </div>
                    </a>
                </div>
                <div className={appBubble}>
                    <a href='/e-commerce'>
                        <div className={appImage}>
                            <img src={eComm.src}/>
                        </div>
                        <div className={appDesc}>
                            <BiShoppingBag 
                                style={{ color: '#058ED9', padding: '10px', borderRadius: '10px'}}
                                size={50}
                            />
                            <p>E-Commerce App</p>
                        </div>
                    </a>
                </div>
                <div className={appBubble}>
                    <a href='/news'>
                        <div className={appImage}>
                            <img src={news.src}/>
                        </div>
                        <div className={appDesc}>
                            <FaRegNewspaper
                                style={{ color: '#000000', padding: '10px', borderRadius: '10px'}}
                                size={50}
                            />
                            <p>News App</p>
                        </div>
                    </a>
                </div>
            </div>
            <h3 style={{color:'#fff', fontWeight: '900', fontSize: '2rem', padding: '1rem'}}>Sample Components</h3>
            <div className={appBubblesContainer} style={{marginTop: '50px', gap: '20px', width: '800px', flexWrap: 'wrap', rowGap: '70px'}}>
                <SampleLink
                    title="Navigate"
                    icon={<CgBrowser style={linkIconStyle} size={20} />}
                    navUrl="/samples/navigate"
                />
                <SampleLink
                    title="Form"
                    icon={<BsInputCursorText style={linkIconStyle} size={20} />}
                    navUrl="/samples/form"
                />
                <SampleLink
                    title="Click"
                    icon={<HiCursorClick style={linkIconStyle} size={20} />}
                    navUrl="/samples/click"
                />
                <SampleLink
                    title="Type"
                    icon={<FiType style={linkIconStyle} size={20} />}
                    navUrl="/samples/type"
                />
                <SampleLink
                    title="Select"
                    icon={<AiOutlineUnorderedList style={linkIconStyle} size={20} />}
                    navUrl="/samples/select"
                />
                <SampleLink
                    title="Checkpoints"
                    icon={<BsFlag style={linkIconStyle} size={20} />}
                    navUrl="/samples/checkpoints"
                />
                <SampleLink
                    title="File Upload"
                    icon={<TbFileUpload style={linkIconStyle} size={20} />}
                    navUrl="/samples/file-upload"
                />
                <SampleLink
                    title="Press Keys"
                    icon={<BsHash style={linkIconStyle} size={20} />}
                    navUrl="/samples/press-keys"
                />
                <SampleLink
                    title="Drag & Drop"
                    icon={<RxDragHandleDots2 style={linkIconStyle} size={20} />}
                    navUrl="/samples/drag-and-drop"
                />
                <SampleLink
                    title="Animation"
                    icon={<CgPlayButtonR style={linkIconStyle} size={20} />}
                    navUrl="/samples/animation"
                />
                <SampleLink
                    title="Scrollable"
                    icon={<FaScroll style={linkIconStyle} size={20} />}
                    navUrl="/samples/scrollable"
                />
                <SampleLink
                    title="Lazy Load"
                    icon={<TbLoader2 style={linkIconStyle} size={20} />}
                    navUrl="/samples/lazyload"
                />
            </div>
            {/* <div>
                <h2>Configure Your Test</h2>
                <div>
                    <div>
                        <label>Select App</label>
                        <select>
                            <option>Bank</option>
                            <option>E-Commerce</option>
                        </select>
                    </div>
                    <div>
                        <label>Select SDK</label>
                        <select>
                            <option>Selenium JavaScript</option>
                            <option>Cypress</option>
                            <option>Selenium Java</option>
                            <option>PlayWright JavaScript</option>
                        </select>
                    </div>
                    <div>
                        <label>Select Use Case</label>
                        <select>
                            <option>Functional Testing With Eyes</option>
                            <option>Functional Testing Non-Eyes</option>
                            <option>Self-Healing</option>
                            <option>Ignore Displacements</option>
                            <option>Layout Breakpoints</option>
                        </select>
                    </div>
                </div>
                
            </div>
            <div>
                <h2>Your Test Code</h2>
                <div>
                    <p>
                        ...
                    </p>
                </div>
            </div> */}
        </div>
    )
}