import React from 'react';
import s from './CarDesign.module.scss'
import Advantages from "../../commonComponents/Advantages/Advantages";
// @ts-ignore
import ModelSPerformanceHero from "../../../../../common/assets/ModelSExteriorHeroDesktopGlobal.jfif";
// @ts-ignore
import ModelSExteriorGridADesktopGlobal from "../../../../../common/assets/ModelSExteriorGridADesktopGlobal.jfif";
// @ts-ignore
import ModelSExteriorGridBDesktopGlobal from "../../../../../common/assets/ModelSExteriorGridBDesktopGlobal.jfif";
// @ts-ignore
import ModelSExteriorGridCDesktopGlobal from "../../../../../common/assets/ModelSExteriorGridCDesktopGlobal.jfif";
import CollageBlock, {DataProps} from "../../commonComponents/CollageBlock/CollageBlock";


const data: DataProps[] = [
    {
        backgroundImage: ModelSExteriorGridADesktopGlobal,
        title: 'Relentless Performance',
        description: 'Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.',
        imagePosition: "row-reverse",
        flex: "flex-start"
    },
    {
        backgroundImage: ModelSExteriorGridBDesktopGlobal,
        title: 'Optimized Aerodynamics',
        description: 'Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.',
        imagePosition: "row",
        flex: "flex-end"
    },
    {
        backgroundImage: ModelSExteriorGridCDesktopGlobal,
        title: 'Refined Styling',
        description: 'An iconic silhouette meets refreshed, elegant proportions.',
        imagePosition: "row-reverse",
        flex: "flex-start"
    },
]

const CarDesign = () => {
    return (
        <div className={s.carDesignContainer}>
            <Advantages
                data={[]}
                backgroundImage={ModelSPerformanceHero}
                title={'Exterior'}
                subtitle={'Designed for Efficiency'}
                textColor={'white'}
                secondColor={'black'}
                description={'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.'}/>
            <CollageBlock data={data}/>
        </div>
    );
};

export default CarDesign;