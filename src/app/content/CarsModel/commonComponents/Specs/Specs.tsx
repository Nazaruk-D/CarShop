import React, {useState} from 'react';
import s from './Specs.module.scss'
import PrimaryButton from "../../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import SpecsButton from "../../../../../common/components/buttons/SpecsButton/SpecsButton";

const Fade = require("react-reveal/Fade")

export type SpecsPropsType = {
    title: string
    firstSpecsData: SpecsType[]
    secondSpecsData: SpecsType[]
    backgroundImage: string
    fistButtonName?: string
    secondButtonName?: string
}

export type SpecsType = [string, string]

const Specs: React.FC<SpecsPropsType> = ({
                                             title,
                                             firstSpecsData,
                                             secondSpecsData,
                                             backgroundImage,
                                             secondButtonName,
                                             fistButtonName
                                         }) => {
    const [isActive, setIsActive] = useState(true)

    return (
        <div className={s.mainContainer}>
            <div className={s.contentContainer}>
                <Fade>
                    <div className={s.imageBlock} style={{backgroundImage: `url(${backgroundImage})`}}></div>
                </Fade>
                <Fade bottom>
                    <div className={s.specsBlock}>
                        <div className={s.contentBlock}>
                            <div className={s.titleContainer}>
                                <span className={s.title}>{title}</span>
                                <span className={s.subtitle}>Specs</span>
                            </div>
                            <div className={s.buttonsContainer}>
                                {fistButtonName && <SpecsButton title={fistButtonName}
                                                                color={isActive}
                                                                onClick={() => setIsActive(true)}/>
                                }

                                {secondButtonName && <SpecsButton title={secondButtonName}
                                                                  color={!isActive}
                                                                  onClick={() => setIsActive(false)}/>
                                }
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
                </Fade>
            </div>
            {fistButtonName
                ? <div className={s.bottomBlock}>
                    <div className={s.bottomContainer}>
                        <PrimaryButton title={'Owner\'s Manual'} color={'white'} secondColor={'black'} onClick={() => {
                        }}/>
                    </div>
                </div>
                : ''
            }

        </div>
    );
};

export default Specs;