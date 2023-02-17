import React from 'react';
import VideoPlayer from "../../../../common/components/VideoPlayer/VideoPlayer";
// @ts-ignore
import loading from "../../../../common/assets/video/loading.mp4"
// @ts-ignore
import DesignD from "../../../../common/assets/DesignD.jfif"
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
import Specs, {SpecsType} from "../commonComponents/Specs/Specs";
// @ts-ignore
import modelSBlack from "../../../../common/assets/Model-S-Specs-Hero-Desktop-LHD.jfif";
// @ts-ignore
import SpecsD from "../../../../common/assets/SpecsD.jfif";

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
const modelSSpecsData: SpecsType[] = [
    ['Range (EPA est.)', '405 mi'],
    ['Peak Power', '670 hp'],
    ['Wheels', '19" or 21"'],
    ['Cargo', '28 cu ft'],
    ['Acceleration', '3.1 s 0-60 mph'],
    ['Top Speed', '149 mph'],
    ['Drag Coefficient', '0.208 Cd'],
    ['Weight', '4,561 lbs'],
    ['Powertrain', 'Dual Motor'],
    ['Supercharging Max', '250 kW'],
]


const SolarPanels = () => {

    if (false) {
        return <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
        }}>
            <VideoPlayer link={loading} style={{width: "80px"}}/>
        </div>
    }

    return (
        <div>
            <TopBlock/>
            <Safety backgroundImage={DesignD}
                    subtitle={"Design"}
                    title={"Sleek and Durable"}
                    flexDirection={"row-reverse"}
                    backgroundSize={"cover"}
                    description={"Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Schedule a virtual consultation with a Tesla Advisor to learn more."}/>
            <Advantages data={[]}
                        backgroundImage={PWInverterHeroD}
                        title={'Powerwall'}
                        subtitle={'Home Battery Backup'}
                        description={'Your Powerwall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage.'}/>
            <Advantages data={[]}
                        backgroundImage={solarAssessmentDesktop}
                        title={'Power On'}
                        subtitle={'Order and Installation'}
                        description={'From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with a Tesla Advisor or request a call to learn more.'}/>
            <Safety backgroundImage={InverterV8D}
                    subtitle={"Efficiency"}
                    title={"Maximum Solar Production"}
                    flexDirection={"row-reverse"}
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
                   fistButtonName={'Model S Plaid'}
                   secondButtonName={'Model S'}
            />
        </div>
    );
};

export default SolarPanels;