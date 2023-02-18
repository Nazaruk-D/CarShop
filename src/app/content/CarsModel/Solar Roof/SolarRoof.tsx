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
import Features, {DataPropsType} from "../commonComponents/Features/Features";
//@ts-ignore
import video1 from "../../../../common/assets/video/Carousel_Design.mp4";
//@ts-ignore
import video2 from "../../../../common/assets/video/Carousel_Installation2.mp4";
//@ts-ignore
import video3 from "../../../../common/assets/video/Carousel_PowerOn.mp4";
import InverterSolar from "../../../../common/assets/InverterSolar.jpg";
//@ts-ignore
import SPteslaAppD from "../../../../common/assets/SPteslaAppD.jfif";
import PanelMeasure from "../../../../common/assets/PanelMeasure.png";
import Specs, {SpecsType} from "../commonComponents/Specs/Specs";

const featuresData: DataPropsType = {
    title: 'Trusted Expertise',
    subtitle: 'Installation',
    description: 'Our in-house team of energy professionals has installed nearly 4.0 GW of solar across approximately 480,000 roofs—cumulatively generating over 25.0 TWhs of clean energy. From design to power on, we take care of everything. Chat with a Tesla Advisor to ask any questions about Solar Roof.',
    infoBlock: [
        {
            title: 'Design',
            description: 'Aerial imagery and 3D modeling determine your custom design',
            image: video1,
            interval: 9000
        },
        {
            title: 'Installation',
            description: 'Our integrated design enables quick tile and Powerwall installation',
            image: video2,
            interval: 7000
        },
        {
            title: 'Power On',
            description: 'Final cleanup is completed before system activation',
            image: video3,
            interval: 8000
        },
    ]
}

const solarRoofSpecsData: SpecsType[] = [
    ['Tile and Power Warranty', '25 years'],
    ['Fire Rating', 'Class A (highest rating)'],
    ['Solar Glass Tiles', '72 W'],
    ['Hail Rating', 'Class 3'],
    ['Steel Tiles', 'Corrosion and weather resistant'],
    ['Roof Pitch', '≥ 2:12'],
    ['Wind Rating', 'Class F (highest rating)'],
]


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
            <Safety backgroundImage={hammerVideo}
                    subtitle={"Durability"}
                    title={"Take on the Elements"}
                    characteristicsData={[]}
                    flexDirection={"row"}
                    backgroundSize={"cover"}
                    description={"Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come."}/>
            <Features data={featuresData}/>
            <Safety backgroundImage={InverterSolar}
                    subtitle={"Efficiency"}
                    title={"Maximum Solar Production"}
                    characteristicsData={[]}
                    flexDirection={"row-reverse"}
                    backgroundSize={"cover"}
                    description={"Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures Tesla Solar Inverter continues to improve with each over-the-air software update."}/>
            <Advantages data={[]}
                        backgroundImage={SPteslaAppD}
                        title={'Monitor and Optimize'}
                        subtitle={'Control'}
                        description={'With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.'}/>
            <Specs title={'Solar Roof'}
                   firstSpecsData={solarRoofSpecsData}
                   secondSpecsData={[]}
                   backgroundImage={PanelMeasure}/>
        </div>
    );
};

export default SolarRoof;