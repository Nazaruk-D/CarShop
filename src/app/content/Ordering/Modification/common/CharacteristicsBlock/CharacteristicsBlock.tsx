import React from 'react';
import s from "./CharacteristicsBlock.module.scss";
import Characteristics, {
    CharacteristicsPropsType
} from "../../../../../../common/components/Characteristics/Characteristics";


type CharacteristicsBlockPropsType = {
    data: CharacteristicsPropsType[]
}

const CharacteristicsBlock: React.FC<CharacteristicsBlockPropsType> = ({data}) => {
    return (
        <div className={s.characteristicsBlock}>
            { data.map((d, i) => <Characteristics key={i} topText={d.topText} measurement={d.measurement} bottomText={d.bottomText} color={d.color}/>)}
        </div>
    );
};

export default CharacteristicsBlock;