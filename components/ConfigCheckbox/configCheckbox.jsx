import {

} from './configCheckbox.module.css';

export default function ConfigCheckbox({trackedValue, label, onChange}) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '3px 10px'}}>
            <label>{label}</label>
            <input type='checkbox' checked={trackedValue} onChange={onChange}/>
        </div>
    )
}