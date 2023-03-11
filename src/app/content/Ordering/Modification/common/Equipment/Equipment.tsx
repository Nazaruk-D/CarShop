import React from 'react';
import s from "./Equipment.module.scss"
import ScheduleButton from "../../../../../../common/components/buttons/ScheduleButton/ScheduleButton";
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";


type EquipmentPropsType = {
    data: DataType[]
}

type DataType = {
    title: string
    buttonTitle: string
    buttonPrice: string
}

const Equipment: React.FC<EquipmentPropsType> = ({data}) => {
    return (
        <div className={s.equipmentBlock}>
            {data.map((d, i) => <>
                <p className={s.title}>{d.title}</p>
                <div className={s.chooseBlock}><ScheduleButton title={d.buttonTitle}
                                                               price={d.buttonPrice}
                                                               width={"100%"}
                                                               justifyContent={"space-between"}
                                                               border={'3px solid rgba(22, 63, 246, 0.85)'}
                                                               color={'rgba(0, 0, 0, 0.8)'}
                                                               onClick={() => {
                                                               }}/>
                </div>
            </>)}
            <div className={s.button}>
                <DetailsButton title={"Feature Details"}/>
            </div>
        </div>
    );
};

export default Equipment;