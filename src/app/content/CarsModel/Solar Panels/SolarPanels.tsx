import React from 'react';
import InverterV8D from "../../../../common/assets/InverterV8D.jpg"
import TopBlock from "./TopBlock/TopBlock";
import Safety from "../commonComponents/Safety/Safety";
import Advantages from "../commonComponents/Advantages/Advantages";
// @ts-ignore
import PWInverterHeroD from "../../../../common/assets/PWInverterHeroD.jfif";
// @ts-ignore
import SPteslaAppD from "../../../../common/assets/SPteslaAppD.jfif";
// @ts-ignore
import solarAssessmentDesktop from "../../../../common/assets/video/solarAssessmentDesktop.mp4";
// @ts-ignore
import DesignD from "../../../../common/assets/DesignD.jfif"
import Specs, {SpecsType} from "../commonComponents/Specs/Specs";
// @ts-ignore
import SpecsD from "../../../../common/assets/SpecsD.jfif";
import SolarOrder from "../commonComponents/SolarOrder/SolarOrder";
import Footer from "../commonComponents/Footer/Footer";

const solarPanelSpecsData: SpecsType[] = [
    ['Wattage', '400 W'],
    ['Operating Temperature', '-40°F up to +185°F'],
    ['Dimensions', '74.4" x 41.2" x 1.57(including frame)'],
    ['Design', 'Black anodized aluminum alloy frame Black solar cells and backsheet'],
    ['Warranty', '25-year performance guarantee'],
    ['Certifications', 'IEC / UL 61730, CEC Listed, IEC 61215'],
    ['Inverter Power', '3.8kW / 7.6kW 97.5% efficiency'],
    ['Inverter Dimensions', '26" x 16" x 6"'],
    ['Inverter Warranty', '12.5 years'],
]

const SolarPanels = () => {
    return (
        <div>
            <TopBlock/>
            <Safety backgroundImage={DesignD}
                    subtitle={"Design"}
                    title={"Sleek and Durable"}
                    flexDirection={"row-reverse"}
                    backgroundSize={"cover"}
                    characteristicsData={[]}
                    description={"Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Schedule a virtual consultation with a Tesla Advisor to learn more."}/>
            <Advantages data={[]}
                        backgroundImage={PWInverterHeroD}
                        title={'Powerwall'}
                        subtitle={'Home Battery Backup'}
                        description={'Your Powerwall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage.'}/>
            <Advantages data={[]}
                        backgroundImage={solarAssessmentDesktop}
                        title={'Order and Installation'}
                        subtitle={'Power On'}
                        description={'From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with a Tesla Advisor or request a call to learn more.'}/>
            <Safety backgroundImage={InverterV8D}
                    subtitle={"Efficiency"}
                    title={"Maximum Solar Production"}
                    flexDirection={"row-reverse"}
                    characteristicsData={[]}
                    backgroundSize={"cover"}
                    description={"Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable."}/>
            <Advantages data={[]}
                        backgroundImage={SPteslaAppD}
                        title={'24/7 Monitoring'}
                        subtitle={'Experience'}
                        description={'Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.'}/>
            <Specs title={'Solar Panel'}
                   firstSpecsData={solarPanelSpecsData}
                   secondSpecsData={[]}
                   backgroundImage={SpecsD}
            />
            <SolarOrder title={"Power Your Home"}/>
            <Footer description={false} backgroundColor={"black"}/>
        </div>
    );
};

export default SolarPanels;