import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import SampleInput from '../../../components/SampleComponents/SampleInput/sampleInput';
import { AiOutlineInbox } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';

const iconStyle = {
    padding: '10px',
    color: 'white',
    backgroundColor: '#3069C5',
    borderRadius: '5px',
    backgroundImage: "linear-gradient(to top right, #4685EA, #1b3764)",
    boxShadow: "2px 2px 3px #102342"
}

export default function CheckpointsSample({}) {

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold', marginBottom: '50px'}}>
                    Checkpoints
                </h2>
                <div style={{margin: '0px auto', width: '500px', textAlign: 'left'}}>
                    <h4 style={{fontWeight: 'bold', color: 'white', margin: '30px 0px'}}>Create a text checkpoint on me!</h4>
                    <div style={{border: "2px dashed white", borderRadius: "5px", padding: '10px 30px'}}>
                        <h4 style={{fontWeight: 'bold', color: 'white', margin: '15px 0px'}}>Create a visual checkpoint on me</h4>
                        <p>
                            <AiOutlineInbox size={30} style={iconStyle} />
                        </p>
                        <h4 style={{fontWeight: 'bold', color: 'white', margin: '25px 0px 10px 0px'}}>
                            Unlimited inboxes
                        </h4>
                        <p  style={{color: 'white', marginBottom: '20px'}}>
                            Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.
                        </p>
                        <a style={{display: 'flex', alignItems: 'center', color: '#1b3764', cursor: 'pointer'}}>
                            Learn more <BsArrowRightShort  size={20}/>
                        </a>
                    </div>
                    <SampleInput type="text" label="Type a variable and then create a checkpoint on me"></SampleInput>
                    <SampleInput type="date" label="Date Input"></SampleInput>
                    <SampleInput type="check" label="Create a checkbox checkpoint"></SampleInput>
                </div>
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}