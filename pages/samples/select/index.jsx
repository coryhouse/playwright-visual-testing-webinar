import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import SampleInput from '../../../components/SampleComponents/SampleInput/sampleInput';

export default function SelectSample({}) {

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold', marginBottom: '50px'}}>
                    Select Action
                </h2>
                <SampleInput 
                    type="select" 
                    label="Location"
                    selectOptions={['United States', 'Canada', 'Mexico']}
                ></SampleInput>
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}