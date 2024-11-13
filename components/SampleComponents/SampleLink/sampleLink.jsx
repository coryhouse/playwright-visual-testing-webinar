import { useRouter } from 'next/router';
import {
    sampleLinkContainer,
    sampleLinkIcon,
    sampleLinkLabel
} from './sampleLink.module.css';

export default function SampleLink({title, icon, navUrl}) {

    const router = useRouter();

    return (
        <div className={sampleLinkContainer} onClick={() => router.push(navUrl)}>
            <div className={sampleLinkIcon}>
                {icon}
            </div>
            <div className={sampleLinkLabel}>
                {title}
            </div>
        </div>
    )
} 