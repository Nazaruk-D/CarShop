import React from 'react';
import s from './CarDesign.module.scss'
import Advantages from "../../commonComponents/Advantages/Advantages";
// @ts-ignore
import ModelXExteriorHeroDesktopGlobal from "../../../../../common/assets/Model-X-Exterior-Hero-Desktop-Global.jfif";
// @ts-ignore
import ModelXExteriorGridADesktopGlobal from "../../../../../common/assets/Model-X-Exterior-Grid-A-Desktop-Global.jfif";
// @ts-ignore
import ModelXExteriorGridBDesktopGlobal from "../../../../../common/assets/Model-X-Exterior-Grid-B-Desktop-Global.jfif";
// @ts-ignore
import ModelXExteriorGridCDesktopGlobal from "../../../../../common/assets/Model-X-Exterior-Grid-C-Desktop-Global.jfif";

import CollageBlock, {DataProps} from "../../commonComponents/CollageBlock/CollageBlock";



const data: DataProps[] = [
    {
        backgroundImage: ModelXExteriorGridADesktopGlobal,
        title: 'Relentless Performance',
        description: 'Performance wheels and tires keep the SUV planted, transferring even more power down to the road.',
        imagePosition: "row-reverse",
        flex: "flex-start"
    },
    {
        backgroundImage: ModelXExteriorGridBDesktopGlobal,
        title: 'Optimized Aerodynamics',
        description: 'Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.',
        imagePosition: "row",
        flex: "flex-end"
    },
    {
        backgroundImage: ModelXExteriorGridCDesktopGlobal,
        title: 'Refined Styling',
        description: 'Exterior design combines an iconic look with elegant details.',
        imagePosition: "row-reverse",
        flex: "flex-start"
    },
]

const CarDesign = () => {
    return (
        <div className={s.carDesignContainer}>
          <Advantages data={[]}
                        backgroundImage={ModelXExteriorHeroDesktopGlobal}
                        title={'Designed for Efficiency'}
                        subtitle={'Exterior'}
                        textColor={'white'}
                        secondColor={'black'}
                        description={'Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.'}/>
            <CollageBlock data={data}/>
        </div>
    );
};

export default CarDesign;