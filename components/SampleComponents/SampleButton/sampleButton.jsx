import {
    button
} from './sampleButton.module.css';

export default function SampleButton({children, disabled, label, onClick, style = null}) {
    return (
        <button className={button} onClick={onClick} style={style} disabled={disabled}>
            {children} {label}
        </button>
    )
}