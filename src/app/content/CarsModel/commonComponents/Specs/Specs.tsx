import React, {useState} from 'react';
import s from './Specs.module.scss'
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/Button/Button";
import SpecsButton from "../../../../../common/components/SpecsButton/SpecsButton";

export type SpecsPropsType = {
    title: string
    firstSpecsData: SpecsType[]
    secondSpecsData: SpecsType[]
    backgroundImage: string
}

export type SpecsType = {
    topText: string
    bottomText: string
}

const Specs: React.FC<SpecsPropsType> = ({title,firstSpecsData, secondSpecsData, backgroundImage}) => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className={s.mainContainer}>
            <div className={s.contentContainer}>
                <div className={s.imageBlock} style={{backgroundImage: `url(${backgroundImage})`}}></div>
                <div className={s.specsBlock}>
                    <div className={s.contentBlock}>
                        <div className={s.titleContainer}>
                            <span className={s.title}>{title}</span>
                            <span className={s.subtitle}>Specs</span>
                        </div>
                        <div className={s.buttonsContainer}>
                            <SpecsButton title={'Performance'}
                                         color={isActive}
                                         onClick={() => setIsActive(true)}/>
                            <SpecsButton title={'Long Range AWD'}
                                         color={!isActive}
                                         onClick={() => setIsActive(false)}/>
                        </div>
                        <div className={s.specsContainer}>
                            {isActive
                            ? firstSpecsData.map((d, i) =>
                                        <div className={s.spec} key={i}>
                                            <span className={s.specTitle}>{d.topText}</span>
                                            <span className={s.specSubtitle}>{d.bottomText}</span>
                                        </div>)
                            : secondSpecsData.map((d, i) =>
                                    <div className={s.spec} key={i}>
                                        <span className={s.specTitle}>{d.topText}</span>
                                        <span className={s.specSubtitle}>{d.bottomText}</span>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.bottomBlock}>
                <div className={s.bottomContainer}>
                    <PrimaryButton title={'Owner\'s Manual'} color={'white'} secondColor={'black'} onClick={() => {
                    }}/>
                    <Button title={'Compare'} backgroundColor={'rgba(244, 244, 244, 0.15)'}
                            color={'rgba(255,255,255,0.8)'} onClick={() => {
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Specs;