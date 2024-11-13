import {
    sampleContainer
} from './sampleWrapper.module.css';

export default function SampleWrapper({children, style}) {
    return (
        <div className={sampleContainer} style={style}>
            {children}
        </div>
    )
}