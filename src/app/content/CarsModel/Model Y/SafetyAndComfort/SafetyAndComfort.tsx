import React from 'react';
import Safety from "../../commonComponents/Safety/Safety";
import Comfort from "./Comfort/Comfort";
import safetyImage from "../../../../../common/assets/safetyImage.png";

const SafetyAndComfort = () => {
    return (
        <>
            <Safety backgroundImage={safetyImage}
                    subtitle={'Safety'}
                    title={'Designed for Safety'}
                    description={'Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards. 5-Star Rating Model Y achieved NHTSA 5-star safety ratings in every category and subcategory. Top Safety Pick Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.'}/>
            <Comfort/>
        </>
    );
};

export default SafetyAndComfort;