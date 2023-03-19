import React, {useEffect} from 'react';
import s from './ChoiceBlock.module.scss'
import modelSSchedule from '../../../../../common/assets/modelSSchedule.jpg'
import model3Schedule from '../../../../../common/assets/model3Schedule.jpg'
import modelXSchedule from '../../../../../common/assets/modelXSchedule.jpg'
import modelYSchedule from '../../../../../common/assets/modelYSchedule.jpg'
import ScheduleButton from "../../../../../common/components/buttons/ScheduleButton/ScheduleButton";
import {ModelType, setActiveModel} from "../../../../../features/profile/profile-reducer";
import {useAppDispatch, useAppSelector} from "../../../../store/store";

const data: ChoiceData[] = [
    {
        title: 'Model S',
        image: modelSSchedule
    },
    {
        title: 'Model 3',
        image: model3Schedule
    },
    {
        title: 'Model X',
        image: modelXSchedule
    },
    {
        title: 'Model Y',
        image: modelYSchedule
    },
]

type ChoiceData = {
    title: ModelType
    image: string
}

const ChoiceBlock = () => {
    const dispatch = useAppDispatch()
    const activeModel = useAppSelector(s => s.profile.activeModel)
    const activeData = data.find( d => d.title === activeModel)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={s.mainContainer}>
            <div className={s.contentContainer}>
                <div className={s.titleBlock}>
                    <h2 className={s.title}>Schedule a Demo Drive</h2>
                    <span className={s.subtitle}>Demo Drive a Tesla at a store near you. Drivers must have a valid U.S. driver's license and be 18 years of age or older.</span>
                </div>
                <div className={s.imageBlock} style={{backgroundImage: `url(${activeData ? activeData.image : modelSSchedule})`}}>
                </div>
                <div className={s.buttonsBlock}>
                    {
                        data.map((c, i) => (
                            <div style={{margin: "10px"}}>
                                <ScheduleButton key={i} title={c.title}
                                                border={activeModel === c.title ? '3px solid rgba(22, 63, 246, 0.85)' : ''}
                                                color={activeModel === c.title ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)'}
                                                onClick={() =>  dispatch(setActiveModel({value: c.title}))}/>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ChoiceBlock;