import { useEffect, useState } from 'react';
import {
    configBarContainer,
    configBarHeader,
    configBarContent,
    configBarBody,
    collapsedIcon,
    closeIcon,
    goButton,
    collapsedOptions
} from './configBar.module.css';

import { AiOutlineHome, AiOutlineSetting, AiOutlineFullscreenExit } from "react-icons/ai";

import { useRouter } from 'next/router';
import ConfigCheckbox from '../ConfigCheckbox/configCheckbox';

const labelConfigMap = {
    theme: "Theme",
    abTest: "A/B Testing",
    ignoreDisplacements: "Ignore Displacements",
    validateForm: "Validate Form",
    floatRegion: "Float Region",
    selfHealing: "Self-Healing",
    layoutBreakpoints: "Layout Breakpoints",
    layoutAlgo: "Layout Match Level",
    extraInput: "Extra Form Input",
	extraRow: 'Extra Table Row',
	rearrangeForm: 'Rearrange Form',
    randomizeArticles: 'Randomize Articles',
    randomDate: 'Random Date',
    breakingNews: 'Breaking News',
}

export default function ConfigBar({config, app, showConfig = true}) {

    const [isShown, setIsShown] = useState(false);
    const [currConfig, setCurrConfig] = useState({...config});
    const [urlBuilder, setUrlBuilder] = useState('');
    const router = useRouter();

    const onConfigToggle = (key) => {
        const copy = {...currConfig};
        copy[key] = !copy[key];
        setCurrConfig(copy);
    }

    useEffect(() => {
		console.log(config);
        let baseUrl = `/${app}`;
        let addedFirst = false;
        Object.keys(currConfig).forEach((key, index) => {
            if (currConfig[key]) {
                if (!addedFirst) {
                    baseUrl+= '?';
                    addedFirst = true;
                }
                else baseUrl += '&';
                baseUrl += `${key}=${currConfig[key]}`
            }
        })
        setUrlBuilder(baseUrl);
    }, [currConfig, app])

    const onGo = () => {
        router.push(urlBuilder);
    }

    const handleClear = () => {
        const copy = {...currConfig};
        Object.keys(copy).forEach((key) => {
            copy[key] = false;
        })
        setCurrConfig(copy);
    }   

    const handleHome = () => {
        router.push('/');
    }

    return (
        <div className={configBarContainer}>
            {isShown ? (
                <div className={configBarContent}>
                    <div className={configBarHeader}>
                        <p onClick={() => setIsShown(false)} >
                            <AiOutlineFullscreenExit 
                                size={30}
                                color='#999'
                                className={closeIcon}
                            />Configure App
                        </p>
                    </div>
                    <div className={configBarBody}>
                        {/* <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
                            <label>Select App</label>
                            <select onChange={(e) => setApp(e.target.value)}>
                                <option value="bank">Bank</option>
                                <option value="e-commerce">E-Commerce</option>
                            </select>
                        </div> */}
                        {Object.keys(currConfig).map((key) => {
                            return (
                                <ConfigCheckbox 
                                    trackedValue={currConfig[key]}
                                    label={labelConfigMap[key]}
                                    onChange={() => onConfigToggle(key)}
                                />
                            )
                        })}
                        {/* <p>Your URL: {urlBuilder}</p> */}
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <button className={goButton} style={{backgroundColor: '#ddd', color: '#444'}} onClick={handleClear}>Clear</button>
                            <button className={goButton} onClick={onGo}>Apply Config Changes</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={collapsedOptions}>
                    {showConfig && (
                        <p 
                            onClick={() => setIsShown(true)} 
                            className={collapsedIcon}
                        >
                            <AiOutlineSetting size={35} color='#999'/>
                        </p>
                    )}
                    <p onClick={() => handleHome()} >
                        <AiOutlineHome 
                            size={35}
                            color='#999'
                            className={collapsedIcon}
                        />
                    </p>
                </div>
            )}
        </div>
    )
}