import React, {useState} from 'react';
import s from './ChoiceBlock.module.scss'
import modelSSchedule from '../../../../../common/assets/modelSSchedule.jpg'
import model3Schedule from '../../../../../common/assets/model3Schedule.jpg'
import modelXSchedule from '../../../../../common/assets/modelXSchedule.jpg'
import modelYSchedule from '../../../../../common/assets/modelYSchedule.jpg'
import ScheduleButton from "../../../../../common/components/ScheduleButton/ScheduleButton";

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
    title: string
    image: string
}

const ChoiceBlock = () => {
    const [item, setItem] = useState(modelSSchedule)

    return (
        <div className={s.mainContainer}>
            <div className={s.contentContainer}>
                <div className={s.titleBlock}>
                    <h2 className={s.title}>Schedule a Demo Drive</h2>
                    <span className={s.subtitle}>Demo Drive a Tesla at a store near you. Drivers must have a valid U.S. driver's license and be 18 years of age or older.</span>
                </div>
                <div className={s.imageBlock} style={{backgroundImage: `url(${item})`}}>
                </div>
                <div className={s.buttonsBlock}>
                    {
                        data.map((c, i) => (
                            <ScheduleButton key={i} title={c.title}
                                            border={item === c.image ? '3px solid rgba(22, 63, 246, 0.85)' : ''}
                                            color={item === c.image ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)'}
                                            onClick={() => {setItem(c.image)}}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ChoiceBlock;