import React from 'react';
import s from "./Equipment.module.scss"
import ScheduleButton from "../../../../../../../common/components/buttons/ScheduleButton/ScheduleButton";
import DetailsButton from "../../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {ActiveType} from "../../Modification";


type EquipmentPropsType = {
    data: any[]
    changeEquipment: (value: string) => void
    active: ActiveType
}

type DataType = {
    title: string
    buttonTitle: string
    buttonPrice: string
}

const Equipment: React.FC<EquipmentPropsType> = ({data, changeEquipment, active}) => {
    return (
        <div className={s.equipmentBlock}>
            {data.map((d, i) => <div key={i}>
                <p className={s.title}>{d.title}</p>
                <div className={s.chooseBlock}><ScheduleButton title={d.model}
                                                               price={d.price}
                                                               width={"100%"}
                                                               justifyContent={"space-between"}
                                                               border={active.model === d.model ? '3px solid rgba(22, 63, 246, 0.85)' : ''}
                                                               color={active.model === d.model ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)'}
                                                               onClick={() => changeEquipment(d.model)}/>
                </div>
            </div>)}
            <div className={s.button}>
                <DetailsButton title={"Feature Details"}/>
            </div>
        </div>
    );
};

export default Equipment;