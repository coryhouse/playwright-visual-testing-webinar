import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import applitools_logo from '../../../img/applitools.svg'
import styles from './index.module.css'

export default function AnimationSample({}) {
    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>
                    Animation
                </h2>
                <img src={applitools_logo.src} className={styles.animatedLogo}/>
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}