import { useState, useRef, useEffect } from "react"
import {
    inputLabel,
    inputText,
    inputContainer,
    inputSelect,
    inputCheck,
    fileInput,
    subMessage
} from './sampleInput.module.css';
import SampleButton from "../SampleButton/sampleButton";
import { AiOutlineCloudUpload } from 'react-icons/ai';

export default function SampleInput(
    {
        type, 
        label, 
        selectOptions = null, 
        givenValue, 
        onChange, 
        showError, 
        errorMessage,
        labelStyle,
        inputStyle,
        placeholder
    }) {

    const [value, setValue] = useState(givenValue ?? '');
    const hiddenFileInput = useRef(null);

    const handleFileUpload = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = onChange ?? ((e) => {
        setValue(e.target.value);
    })

    useEffect(() => {
        setValue(givenValue);
    }, [givenValue])

    return (
        <div className={inputContainer}>
            <label className={inputLabel} style={labelStyle}>{label}</label>
            {type == 'text' && (
                <input className={inputText} placeholder={placeholder} style={inputStyle} type="text" value={value} onChange={handleChange}/>
            )}
            {type == 'password' && (
                <input className={inputText} placeholder={placeholder} style={inputStyle} type="password" value={value} onChange={handleChange}/>
            )}
            {type == 'date' && (
                <input className={inputText} style={inputStyle} type="date" value={value} onChange={handleChange}/>
            )}
            {type == 'select' && (
                <select className={inputSelect} style={inputStyle} value={value} onChange={handleChange}>
                    <option value=""></option>
                    {selectOptions?.map((option) => {
                        return <option value={option}>{option}</option>
                    })}
                </select>
            )}
            {type == 'check' && (
                <input className={inputCheck} type="checkbox" />
            )}
            {type == 'file' && (
                <>
                    <SampleButton
                        label="SELECT A FILE"
                        onClick={handleFileUpload}
                        style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px 50px'}}
                    >
                        <AiOutlineCloudUpload size={30} />
                    </SampleButton>
                    <input className={fileInput} ref={hiddenFileInput} type='file' onChange={(e) => setValue(e.target.files[0].name)} />
                    {value && (
                        <>
                            <p style={{color: 'white', margin: '30px 0px 10px 0px', fontWeight: 'bold'}}>
                                Selected File: {value}
                            </p>
                            <SampleButton onClick={() => setValue('')} label="Clear" style={{margin: '0px'}}/>
                        </>
                        
                    )}
                </>
            )}
            {showError && (
                <p className={subMessage}>*{errorMessage}</p>
            )}
        </div>
    )
}