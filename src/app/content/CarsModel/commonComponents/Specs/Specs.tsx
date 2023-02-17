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
    fistButtonName: string
    secondButtonName: string
}

export type SpecsType = [string, string]

const Specs: React.FC<SpecsPropsType> = ({title,firstSpecsData, secondSpecsData, backgroundImage, secondButtonName,fistButtonName}) => {
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
                            <SpecsButton title={fistButtonName}
                                         color={isActive}
                                         onClick={() => setIsActive(true)}/>
                            <SpecsButton title={secondButtonName}
                                         color={!isActive}
                                         onClick={() => setIsActive(false)}/>
                        </div>
                        <div className={s.specsContainer}>
                            {isActive
                            ? firstSpecsData.map((d, i) =>
                                    <div className={s.spec} key={i}>
                                        <span className={s.specTitle}>{d[0]}</span>
                                        <span className={s.specSubtitle}>{d[1]}</span>
                                    </div>
                                )
                            : secondSpecsData.map((d, i) =>
                                    <div className={s.spec} key={i}>
                                        <span className={s.specTitle}>{d[0]}</span>
                                        <span className={s.specSubtitle}>{d[1]}</span>
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
                </div>
            </div>
        </div>
    );
};

export default Specs;