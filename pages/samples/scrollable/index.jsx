import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import styles from './index.module.css'
import ScrollableContent from './scrollableContent';

export default function ScrollableSample({}) {
    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>
                    Scrollable Region
                </h2>
                <div className={styles.scrollableRegion}>                  
                    <ScrollableContent/>
                </div>
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}