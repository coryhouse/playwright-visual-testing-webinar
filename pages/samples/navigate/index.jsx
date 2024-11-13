import { useRouter } from 'next/router';
import SampleButton from '../../../components/SampleComponents/SampleButton/sampleButton';
import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';

export default function NavigateSample({}) {

    const router = useRouter();

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>
                    Navigate Action
                </h2>
                <SampleButton
                    label="Click to navigate"
                    onClick={() => router.push('https://applitools.com')}
                />
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}