import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import SampleInput from '../../../components/SampleComponents/SampleInput/sampleInput';

const iconStyle = {
    padding: '10px',
    color: 'white',
    backgroundColor: '#3069C5',
    borderRadius: '5px',
    backgroundImage: "linear-gradient(to top right, #4685EA, #1b3764)",
    boxShadow: "2px 2px 3px #102342"
}

export default function PressKeysSample({}) {

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold', marginBottom: '50px'}}>
                    Press Keys Action
                </h2>
                <SampleInput type="text" label="Press Keys"></SampleInput>
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}