import React from 'react';
import s from './Advantages.module.scss'
//@ts-ignore
import modelYRed from '../../../../../common/assets/modelYRed.jfif'
import Characteristics, {
    CharacteristicsPropsType
} from "../../../../../common/components/Characteristics/Characteristics";
import TitleBlock from "../../../../../common/components/TitleBlock/TitleBlock";
import VideoPlayer from "../../../../../common/components/VideoPlayer/VideoPlayer";

type AdvantagesPropsType = {
    backgroundImage: string
    data: CharacteristicsPropsType[]
    title: string
    subtitle: string
    description: string
    textColor?: 'white' | 'black'
    secondColor?: 'white' | 'black'
}

const Advantages: React.FC<AdvantagesPropsType> = ({backgroundImage, data,title,subtitle, description, textColor, secondColor}) => {
    return (
        <div className={s.mainBlock} style={{color: textColor}}>
            <div className={s.advantagesContainer} style={{backgroundImage: `url(${backgroundImage})`}}>
                <VideoPlayer link={backgroundImage} style={{width: "100%", height: "79%", objectFit: "cover"}}/>
                <div className={s.characteristicsContainer}>
                    {data.map((d, i) => <div style={{marginRight: 20}} key={i}>
                        <Characteristics topText={d.topText}
                                         measurement={d.measurement}
                                         bottomText={d.bottomText}/>
                    </div>)}
                </div>
            </div>
            <TitleBlock title={title} subtitle={subtitle} description={description} color={textColor} secondColor={secondColor}/>
        </div>
    );
};

export default Advantages;