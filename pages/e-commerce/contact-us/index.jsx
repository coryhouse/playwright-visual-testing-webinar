import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import SampleInput from '../../../components/SampleComponents/SampleInput/sampleInput';
import SampleButton from '../../../components/SampleComponents/SampleButton/sampleButton';
import { useState } from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner';

export default function ContactUsForm({}) {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [contactReason, setContactReason] = useState('');
    const [reasonError, setReasonError] = useState(false);

    const [formSuccess, setFormSuccess] = useState(false);
	const [formError, setFormError] = useState('')

	const [submitId, setSubmitId] = useState(null);
	const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
		setLoading(true);
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
        if (isError) {
			setLoading(false);
			return;
		}

		// Make API call
		try {
			const body = {
				email,
				name,
				contactReason
			}
			const req = await fetch('/api/submit-contact', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'accesskey': 'mysecretkey',
					'Content-Type': 'application/json'
				}
			})
			const res = await req.json();
			if (res.error) {
				throw new Error(res.error);
			}
			setSubmitId(res.id)
			setFormSuccess(true);
			setEmailError(false);
			setEmail('');
			setNameError(false);
			setName('');
			setReasonError(false);
			setContactReason('');
			setFormError('');
			setLoading(false);
		} catch(e) {
			console.log(e);
			setLoading(false);
			setFormError('Error submitting request');
		}
    }

    const labelStyle = {
        color: '#444'
    }

    const inputStyle = {
        border: '1px solid #bbb',
        backgroundColor: 'white'
    }

    const handleClear = () => {
        setEmailError(false);
        setEmail('');
        setNameError(false);
        setName('');
        setReasonError(false);
        setContactReason('');
        setFormSuccess(false);
		setFormError('');
    }

    return (
        <SampleWrapper style={{backgroundImage: 'none', height: 'auto'}}>
            <div style={{margin: '30px', textAlign: 'center', width: '550px', minWidth: '300px', padding: '20px 80px', backgroundColor: '#fbfbfb', borderRadius: '10px', border: '1px solid #e1e1e1', boxShadow: '2px 2px 3px #e1e1e1', minWidth: '300px'}}>
                {!formSuccess && (
                    <>
						<h2 style={{fontSize: '30px', fontWeight: 'bold', marginBottom: '25px', color: '#444', textAlign: 'left'}}>
							Contact Us
						</h2>
                         <SampleInput 
                            type="text" 
                            label="Your Name" 
                            givenValue={name} 
                            labelStyle={labelStyle}
                            inputStyle={inputStyle}
                            showError={nameError}
                            placeholder="Name"
                            errorMessage="Name is required"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <SampleInput 
                            type="text" 
                            label="Email" 
                            givenValue={email} 
                            labelStyle={labelStyle}
                            inputStyle={inputStyle}
                            showError={emailError}
                            placeholder="Email"
                            errorMessage="Email is required"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* <SampleInput 
                            type="text" 
                            label="Contact Reason"
                            givenValue={contactReason}
                            labelStyle={labelStyle}
                            inputStyle={inputStyle}
                            placeholder="Reason"
                            showError={reasonError}
                            errorMessage="Reason is required"
                            onChange={(e) => setContactReason(e.target.value)}
                        /> */}
                        <SampleInput 
                            type="select" 
                            label="Contact Reason" 
                            selectOptions={['Demo Request', 'Technical Assistance', 'Account Help']}
                            givenValue={contactReason}
                            labelStyle={labelStyle}
                            inputStyle={inputStyle}
                            showError={reasonError}
                            errorMessage="Reason is required"
                            onChange={(e) => setContactReason(e.target.value)}
                        />
						{formError && <p style={{color: '#EF8354'}}>{formError}</p>}
						<div style={{display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'center'}}>
							<SampleButton 
								label="Clear"
								style={{backgroundColor: 'transparent', fontWeight: 'bold', padding: '5px 20px', color: '#888'}}
								onClick={handleClear}
							/>
							<SampleButton 
								label="Submit"
								disabled={loading}
								style={{backgroundColor: '#00a399', fontWeight: 'bold', padding: '5px 20px', boxShadow: '2px 2px 3px #e1e1e1'}}
								onClick={handleSubmit}
							/>
							{loading && (
								<LoadingSpinner />
							)}
						</div>
                    </>
                )}
                {formSuccess && (
                    <>
                        <h2 style={{fontSize: '30px', fontWeight: 'bold', color: '#444', textAlign: 'left'}}>Thanks for reaching out!</h2>
						<h4 style={{textAlign: 'left', marginBottom: '25px'}}>Our team is looking into your request and will follow-up as soon as possible.</h4>
						<h4 style={{textAlign: 'left'}}><span>Use this id to track your request: </span><span style={{fontWeight: 'bold'}}>{submitId}</span></h4>
                        <SampleButton 
                            style={{marginTop: "30px", marginBottom: "15px", backgroundColor: '#00a399', fontWeight: 'bold', padding: '5px 20px'}}
                            label="Submit another request"
                            onClick={() => setFormSuccess(false)}
                        />
                    </>
                )}
            </div>
            {/* <ConfigBar
                showConfig={false}
            /> */}
        </SampleWrapper>
    )
}