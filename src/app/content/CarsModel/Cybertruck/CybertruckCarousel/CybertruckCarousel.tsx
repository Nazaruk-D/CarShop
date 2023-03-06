import React, {useEffect, useState} from 'react';
import s from "./CybertruckCarousel.module.scss"
import cybertruckFirstSet from '../../../../../common/assets/cybertruckFirstSet.jpg'
import cybertruckSecondSet from '../../../../../common/assets/cybertruckSecondSet.jpg'
import cybertruckThirdSet from '../../../../../common/assets/cybertruckThirdSet.jpg'
import cybertruckFourthSet from '../../../../../common/assets/cybertruckFourthSet.jpg'
import cybertruckFifthSet from '../../../../../common/assets/cybertruckFifthSet.jpg'
import cybertruckSixthSet from '../../../../../common/assets/cybertruckSixthSet.jpg'

const carouselData = [
    {id: 1, img: cybertruckFirstSet, subtitle: 'VAULT-LIKE STORAGE', description: 'With up to 3,500 pounds of payload capacity and adjustable air suspension, Cybertruck is the most powerful tool we have ever built, engineered with 100 cubic feet of exterior, lockable storage — including a magic tonneau cover that is strong enough to stand on.'},
    {id: 2, img: cybertruckSecondSet, subtitle: 'VAULT-LIKE STORAGE', description: 'Space for your toolbox, tire and Cyberquad, with room to spare. Utilize 100 cubic feet of exterior, lockable storage — including the under-bed, frunk and sail pillars.'},
    {id: 3, img: cybertruckThirdSet, subtitle: 'RUGGED STRENGTH', description: 'With the ability to pull near infinite mass and a towing capability of over 14,000 pounds, Cybertruck can perform in almost any extreme situation with ease.'},
    {id: 4, img: cybertruckFourthSet, subtitle: 'ADAPTIVE AIR SUSPENSION', description: 'Raise and lower suspension four inches in either direction for easy access to Cybertruck or the vault, while self-leveling capabilities adapt to any occasion and assist with every job.'},
    {id: 5, img: cybertruckFifthSet, subtitle: 'FLEXIBLE INTERIOR', description: 'Seat six comfortably with additional storage under the second-row seats. Complete with an advanced 17” touchscreen with an all-new customized user interface.'},
    {id: 6, img: cybertruckSixthSet, subtitle: 'AWESOME ADAPTABILITY', description: 'From rugged to refined, Cybertruck is completely adaptable for your needs. Prepare for every experience with a versatile utilitarian design — including on-board power and compressed air.'},
]


const CybertruckCarousel = () => {
    const [item, setItem] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            if (item === carouselData.length - 1) {
                setItem(0)
            } else {
                setItem(item + 1)
            }
        }, 6000)
        return () => clearTimeout(timer);
    }, [item])

    return (
        <div className={s.mainContainer}>
            <div className={s.imageContainer} style={{backgroundImage: `url(${carouselData[item].img})`}}></div>
            <div className={s.descriptionBlock}>
                <div className={s.descriptionContainer}>

                    <div className={s.buttonsContainer}>
                        {carouselData.map((c, i) => <div key={i} className={s.circleButton} onClick={() => setItem(i)} style={{
                            opacity: item === i ? 1 : 0.5,
                        }}></div>)}
                    </div>
                    <h1 className={s.title}>VERSATILE UTILITY</h1>
                    <span className={s.subtitle}>{carouselData[item].subtitle}</span>
                    <span className={s.description}>{carouselData[item].description}</span>
                </div>
            </div>
        </div>

    );
};

export default CybertruckCarousel;