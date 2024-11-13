import SampleButton from '../../../components/SampleComponents/SampleButton/sampleButton';
import SampleWrapper from '../../../components/SampleComponents/SampleWrapper/sampleWrapper';
import ConfigBar from '../../../components/ConfigBar/configBar';
import { useState } from 'react';

export default function ClickSample({}) {

    const [count, setCount] = useState(0);

    return (
        <SampleWrapper>
            <div style={{margin: '100px', textAlign: 'center'}}>
                <h2 style={{fontSize: '50px', color: 'white', fontWeight: 'bold'}}>
                    Click Action
                </h2>
                <SampleButton
                    label={count > 0 ? `Click me (${count})` : 'Click me'}
                    onClick={() => setCount(count + 1)}
                />
            </div>
            <ConfigBar
                showConfig={false}
            />
        </SampleWrapper>
    )
}

// export const getServerSideProps= async ({ query }) => {
//     const increment = query.increment || null;
//     const decrement = query.decrement || null;

//     let theme = query.theme || null;
//     const ab = query.abTest || null;
//     const extraInput = query.extraInput || null;
//     const igd = query.ignoreDisplacements || null;
//     const validateForm = query.validateForm || null;
//     const floatRegion = query.floatRegion || null;
//     const selfHealing = query.selfHealing || null;
//     const layoutBreakpoints = query.layoutBreakpoints || null;
//     if (ab) {
//         const rand = Math.floor(Math.random() * 10);
//         if (rand > 5) theme = false;
//         else theme = true;
//     }
//     return {
//         props: { config: {
//             increment,
//             decrement
//         } }
//     }
// }