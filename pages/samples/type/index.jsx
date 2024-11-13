import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import SampleInput from '../../../components/SampleComponents/SampleInput/sampleInput';

export default function TypeSample({}) {

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold', marginBottom: '50px'}}>
                    Type Action
                </h2>
                <SampleInput type="text" label="Text Input"></SampleInput>
                <SampleInput type="password" label="Password Input"></SampleInput>
                <SampleInput type="date" label="Date Input"></SampleInput>
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}