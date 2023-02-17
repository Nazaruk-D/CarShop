import React from 'react';
import TopBlock from "./TopBlock/TopBlock";
import Advantages from "../commonComponents/Advantages/Advantages";
//@ts-ignore
import SolarRoofDesign from "../../../../common/assets/SolarRoofDesign.jfif";
import Safety from "../commonComponents/Safety/Safety";
//@ts-ignore
import SolarRoofNightHouse from "../../../../common/assets/SolarRoofNightHouse.jfif";
//@ts-ignore
import hammerVideo from "../../../../common/assets/video/hammerVideo.mp4";

const SolarRoof = () => {
    return (
        <div>
            <TopBlock/>
            <Advantages data={[]}
                        backgroundImage={SolarRoofDesign}
                        title={'Complement Your Home’s Aesthetic'}
                        subtitle={'Design'}
                        description={'Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home’s natural styling. Schedule a virtual consultation with a Tesla Advisor to learn more.'}/>
            <Safety backgroundImage={SolarRoofNightHouse}
                    subtitle={"Energy Storage"}
                    characteristicsData={[]}
                    title={"Protection Against Outages"}
                    flexDirection={"row-reverse"}
                    backgroundSize={"cover"}
                    description={"Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage."}/>
         </div>
    );
};

export default SolarRoof;