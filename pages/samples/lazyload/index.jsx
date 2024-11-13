import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import styles from './index.module.css'
import landscape1 from '../../../img/landscape/landscape1.jpg'
import landscape2 from '../../../img/landscape/landscape2.jpg'
import landscape3 from '../../../img/landscape/landscape3.jpg'
import landscape4 from '../../../img/landscape/landscape4.jpg'
import landscape5 from '../../../img/landscape/landscape5.jpg'

export default function LazyLoadSample({}) {
    return (
        <>
            <SampleWrapper>
                <div style={{margin: '100px', textAlign: 'center'}}>
                    <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>
                        Lazy Load
                    </h2>
                    <h2 style={{fontSize: '30px', color: 'white', fontWeight: 'bold'}}>Scroll down to load images.</h2>
                    <div style={{height: '100vh'}}/>
                    <img src={landscape1.src} width={1200} loading="lazy" style={{margin: '200px', textAlign: 'center'}}/>
                    <img src={landscape2.src} width={1200} loading="lazy" style={{margin: '200px', textAlign: 'center'}}/>
                    <img src={landscape3.src} width={1200} loading="lazy" style={{margin: '200px', textAlign: 'center'}}/>
                    <img src={landscape4.src} width={1200} loading="lazy" style={{margin: '200px', textAlign: 'center'}}/>
                    <img src={landscape5.src} width={1200} loading="lazy" style={{margin: '200px', textAlign: 'center'}}/>
                </div>
                <ConfigBar
                    showConfig={false}
                />
            </SampleWrapper>
        </>
    );
}