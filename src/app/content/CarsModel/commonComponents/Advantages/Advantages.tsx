import React from 'react';
import s from './Advantages.module.scss'
//@ts-ignore
import modelYRed from '../../../../../common/assets/modelYRed.jfif'
import Characteristics, {
    CharacteristicsPropsType
} from "../../../../../common/components/Characteristics/Characteristics";

type AdvantagesPropsType = {
    backgroundImage: string
    data: CharacteristicsPropsType[]
}

const Advantages: React.FC<AdvantagesPropsType> = ({backgroundImage, data}) => {
    return (
        <div className={s.advantagesContainer} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className={s.characteristicsContainer}>
                {data.map((d, i) => <div style={{marginRight: 20}} key={i}>
                    <Characteristics topText={d.topText}
                                     measurement={d.measurement}
                                     bottomText={d.bottomText}/>
                </div>)}
            </div>
        </div>
    );
};

export default Advantages;