import React, { useEffect, useState } from 'react';

export default function Countodwn({start}) {
    
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        const initial = Math.round(Math.random() * (600 - 200) + 200);
        setSeconds(initial);
        const countdown = setInterval(() => {
            setSeconds(seconds => {
                if (seconds > 0) {
                    return seconds - 1;
                } 
                clearInterval(countdown);
                return 0;
            });
        }, 1000);
        
        return () => clearInterval(countdown);
        
    }, []);
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return(
        <div class="supplyCountdownWrapper">
            <p style={{marginBottom: '20px', color: 'red', fontWeight: 'bold', display: 'inline-flex'}}><span>Limited supply, buy within:&nbsp;</span><span>{("0" + minutes).slice(-2)}:{("0" + remainingSeconds).slice(-2)}</span></p>
        </div>
    )
}