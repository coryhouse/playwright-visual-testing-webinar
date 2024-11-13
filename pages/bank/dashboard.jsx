import DashboardNav from "../../Bank/components/DashboardNav/dashboardNav";
import SuggestionSearch from "../../Bank/components/SuggestionSearch/suggestionSearch";
import DashboardSideBar from "../../Bank/components/DashboardSideBar/dashboardSideBar";
import DashboardOverview from "../../Bank/components/DashboardOverview/dashboardOverview";
import DashboardTable from "../../Bank/components/DashboardTable/dashboardTable";
import {
    dashboardContainer,
    dashboardContent
} from './dashboard.module.css';
import ConfigBar from "../../components/ConfigBar/configBar";
import { useEffect } from "react";

export default function Dashboard({config}) {

	useEffect(() => {
		document.querySelector('body').style.backgroundColor = '#f2f4f8';
		return () => {
			document.querySelector('body').style.backgroundColor = 'initial';
		}
	}, [])

    return (
        <>
            <div className="all-wrapper solid-bg-all">
                <DashboardNav thm={config.theme} jsLayout={config.layoutBreakpoints}/>
                <SuggestionSearch shouldShow={false} />
                <div className={dashboardContainer}>
                    <DashboardSideBar thm={config.theme}/>
                    <div className={dashboardContent}>
                        <DashboardOverview thm={config.theme} scrambleData={config.layoutAlgo} />
                        <DashboardTable thm={config.theme} scrambleData={config.layoutAlgo} floatHeaders={config.floatRegion} extraRow={config.extraRow} />
                    </div>
                </div>
            </div>
            <ConfigBar config={config} app='bank/dashboard'/>
        </>
    )
}

export const getServerSideProps= async ({ query }) => {
    let theme = query.theme || null;
    let layoutAlgo = query.layoutAlgo || null;
    let layoutBreakpoints = query.layoutBreakpoints || null;
    let abTest = query.abTest || null;
	let floatRegion = query.floatRegion || null;
	let extraRow = query.extraRow || null;
    if (abTest) {
        const rand = Math.floor(Math.random() * 10);
        if (rand > 5) theme = false;
        else theme = true;
    }
    return {
        props: { config: {
            theme,
			floatRegion,
            abTest,
            layoutAlgo,
            layoutBreakpoints,
			extraRow
        } }
    }
}