import React, {useState} from 'react';
import s from "./Modification.module.scss"
import Title from "./common/Title/Title";
import Order from "./common/Order/Order";
import CharacteristicsBlock from "./common/CharacteristicsBlock/CharacteristicsBlock";
import Equipment from "./common/Equipment/Equipment";
import Autopilot from "./common/Autopilot/Autopilot";
import OptionWidget from "./common/OptionWidget/OptionWidget";
import SelfDriving from "./common/SelfDriving/SelfDriving";
import Charging from "./common/Charging/Charging";
import {model3Data} from "../Model3Data";


export type ActiveType = {
    model: string
    color: string
    wheels: string
    interiorColor: string
    autopilot: boolean
    selfDriving: boolean
    wallConnector: boolean
    mobileConnector: boolean
    totalPrice: number
}

const Modification = () => {

    const [active, setActive] = useState<ActiveType>({
        model: "Model 3",
        color: "Pearl White Multi-Coat",
        wheels: "18’’ Aero Wheels",
        interiorColor: "All Black",
        autopilot: false,
        selfDriving: false,
        wallConnector: false,
        mobileConnector: false,
        totalPrice: 0
    })

    const data = model3Data.find(m => m.model === active.model)!

    const changeEquipment = (value: string) => {
        setActive({...active, model: value})
    }

    const changeWidget = (value: string, title: string) => {
        if (title === "Paint") {
            setActive({...active, color: value})
        } else if (title === "Wheels") {
            setActive({...active, wheels: value})
        } else {
            setActive({...active, interiorColor: value})
        }
    }

    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title title={data.model} date={data.delivery}/>
                <CharacteristicsBlock data={data.characteristics}/>
                <Equipment data={model3Data} changeEquipment={changeEquipment} active={active}/>
                <OptionWidget type={"color"} title={"Paint"} data={data.color} active={active} changeWidget={changeWidget}/>
                <OptionWidget type={"wheels"} title={"Wheels"} data={data.wheels} active={active} changeWidget={changeWidget} firstDescr={"All-Season Tires"} secondDescr={"Range (EPA est.) : 272mi"}/>
                <OptionWidget type={"interiorColor"} title={"Interior"} data={data.interiorColor} active={active} changeWidget={changeWidget}/>
                <Autopilot/>
                <SelfDriving/>
                <Charging/>
                <Order title={"Model 3"}/>
            </div>
        </div>
    );
};

export default Modification;