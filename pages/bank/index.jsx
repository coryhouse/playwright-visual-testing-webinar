import LoginForm from "../../Bank/components/LoginForm/loginForm";
import ConfigBar from "../../components/ConfigBar/configBar";

export default function BankHome({config}) {
    return (
        <>
            <LoginForm 
                thm={config.theme} 
                showBanner={config.ignoreDisplacements} 
                restrictSignIn={config.validateForm}
                floatLogo={config.floatRegion}
                selfHealing={config.selfHealing}
                layoutBreakpoints={config.layoutBreakpoints}
                extraInput={config.extraInput}
				rearrange={config.rearrangeForm}
            />
            <ConfigBar config={config} app='bank'/>
        </>
    )
}


export const getServerSideProps= async ({ query }) => {
    let theme = query.theme || null;
    const ab = query.abTest || null;
    const extraInput = query.extraInput || null;
    const igd = query.ignoreDisplacements || null;
    const validateForm = query.validateForm || null;
    const floatRegion = query.floatRegion || null;
    const selfHealing = query.selfHealing || null;
    const layoutBreakpoints = query.layoutBreakpoints || null;
	const rearrangeForm = query.rearrangeForm || null;
    if (ab) {
        const rand = Math.floor(Math.random() * 10);
        if (rand > 5) theme = false;
        else theme = true;
    }
    return {
        props: { config: {
            theme,
            abTest: ab,
            ignoreDisplacements: igd,
            validateForm: validateForm,
            floatRegion,
            selfHealing,
            layoutBreakpoints,
            extraInput,
			rearrangeForm
        } }
    }
}