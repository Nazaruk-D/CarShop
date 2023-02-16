import React from 'react';
import TopBlock from "./TopBlock/TopBlock";
import Safety from "../commonComponents/Safety/Safety";
//@ts-ignore
import model3Safety from "../../../../common/assets/model3Safety.jfif";

const Model3 = () => {
    return (
        <div>
            <TopBlock/>
            <Safety backgroundImage={model3Safety}
                    backgroundColor={'white'}
                    subtitle={'Safety'}
                    title={'Built for Safety'}
                    description={'Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards. 5-Star Rating Model Y achieved NHTSA 5-star safety ratings in every category and subcategory. Top Safety Pick Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.'}/>
        </div>
    );
};

export default Model3;