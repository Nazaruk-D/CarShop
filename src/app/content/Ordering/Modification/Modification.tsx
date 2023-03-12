import React from 'react';
import s from "./Modification.module.scss"
import Title from "./common/Title/Title";
import Order from "./common/Order/Order";
import CharacteristicsBlock from "./common/CharacteristicsBlock/CharacteristicsBlock";
import Equipment from "./common/Equipment/Equipment";
import Autopilot from "./common/Autopilot/Autopilot";
import OptionWidget from "./common/OptionWidget/OptionWidget";
import white from "../../../../common/assets/orders/common/color/Paint_White.avif";
import silver from "../../../../common/assets/orders/common/color/Paint_Silver.avif";
import blue from "../../../../common/assets/orders/common/color/Paint_Blue.avif";
import black from "../../../../common/assets/orders/common/color/Paint_Black.avif";
import red from "../../../../common/assets/orders/common/color/Paint_Red.avif";
import wheels18aero from "../../../../common/assets/orders/common/wheels/option-wheels-18-aero.avif";
import wheels19sport from "../../../../common/assets/orders/common/wheels/option-wheels-19-sport.avif";
import whiteInterior from "../../../../common/assets/orders/common/interior_color/Interior_White.avif";
import blackInterior from "../../../../common/assets/orders/common/interior_color/Interior_Black.avif";
import SelfDriving from "./common/SelfDriving/SelfDriving";
import Charging from "./common/Charging/Charging";

const charData = [
    {
        topText: "315", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
    },
    {
        topText: "162", measurement: "mph", bottomText: "Top speed", color: "black"
    },
    {
        topText: "3.1", measurement: "sec", bottomText: "0-60 mph", color: "black"
    },
]
const eqData = [
    {
        title: "Rear-Wheel Drive", buttonTitle: "Model 3", buttonPrice: "$42,990"
    },
    {
        title: "Dual Motor All-Wheel Drive", buttonTitle: "Model 3 Performance", buttonPrice: "$53,990"
    }
]

const paintData = [
    {
        colorName: "Pearl White Multi-Coat", img: white, price: "no"
    },
    {
        colorName: "Midnight Silver Metallic", img: silver, price: "1000$"
    },
    {
        colorName: "Deep Blue Metallic", img: blue, price: "1000$"
    },
    {
        colorName: "Solid Black", img: black, price: "1500$"
    },
    {
        colorName: "Red Multi-Coat", img: red, price: "2000$"
    },
]

const wheelsData = [
    {
        colorName: "Pearl White Multi-Coat", img: wheels18aero, price: "no"
    },
    {
        colorName: "Midnight Silver Metallic", img: wheels19sport, price: "1000$"
    },
]

const interiorData = [
    {
        colorName: "All Black", img: blackInterior, price: "Included"
    },
    {
        colorName: "Black and White", img: whiteInterior, price: "$1,000"
    },
]


const Modification = () => {
    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title title={"Model 3"} date={"Mar 2023"}/>
                <CharacteristicsBlock data={charData}/>
                <Equipment data={eqData}/>
                <OptionWidget title={"Paint"} data={paintData}/>
                <OptionWidget title={"Wheels"} data={wheelsData} firstDescr={"All-Season Tires"} secondDescr={"Range (EPA est.) : 272mi"}/>
                <OptionWidget title={"Interior"} data={interiorData}/>
                <Autopilot/>
                <SelfDriving/>
                <Charging/>
                <Order title={"Order Your Model 3"}/>
            </div>
        </div>
    );
};

export default Modification;