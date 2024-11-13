import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import SampleInput from '../../../components/SampleComponents/SampleInput/sampleInput';
import SampleButton from '../../../components/SampleComponents/SampleButton/sampleButton';
import { useState } from 'react';

export default function FormSample({}) {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [contactReason, setContactReason] = useState('');
    const [reasonError, setReasonError] = useState(false);

    const [formSuccess, setFormSuccess] = useState(false);

    const handleSubmit = () => {
        let isError = false;
        if (!email) {
            isError = true;
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if (!name) {
            isError = true;
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (!contactReason) {
            isError = true;
            setReasonError(true);
        } else {
            setReasonError(false);
        }
        if (isError) return;

        setEmailError(false);
        setEmail('');
        setNameError(false);
        setName('');
        setReasonError(false);
        setContactReason('');
        setFormSuccess(true);
    }

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center', width: '400px'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold', marginBottom: '50px'}}>
                    Contact Us
                </h2>
                {!formSuccess && (
                    <>
                         <SampleInput 
                            type="text" 
                            label="Your Name" 
                            givenValue={name} 
                            showError={nameError}
                            errorMessage="Name is required"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <SampleInput 
                            type="text" 
                            label="Email" 
                            givenValue={email} 
                            showError={emailError}
                            errorMessage="Email is required"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <SampleInput 
                            type="select" 
                            label="Contact Reason" 
                            selectOptions={['Demo Request', 'Technical Assistance', 'Account Help']}
                            givenValue={contactReason}
                            showError={reasonError}
                            errorMessage="Reason is required"
                            onChange={(e) => setContactReason(e.target.value)}
                        />
                        <SampleButton 
                            label="Submit"
                            style={{margin: "0px"}}
                            onClick={handleSubmit}
                        />
                    </>
                )}
                {formSuccess && (
                    <>
                        <h2 style={{fontSize: '20px', color: 'white', fontWeight: 'bold', marginBottom: '50px'}}>Thank you, we'll be in touch soon!</h2>
                        <SampleButton 
                            style={{margin: "10px"}}
                            label="Submit another request"
                            onClick={() => setFormSuccess(false)}
                        />
                    </>
                    
                )}
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}