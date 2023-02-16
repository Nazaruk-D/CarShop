import React from 'react';
import Specs, {SpecsType} from "../../commonComponents/Specs/Specs";
import Order from "../../commonComponents/Order/Order";
//@ts-ignore
import modelYBlack from "../../../../../common/assets/modelYBlack.jfif";
//@ts-ignore
import sideModelY from "../../../../../common/assets/sideModelY.jfif";

const performanceSpecsData: SpecsType[] = [
    ['Battery', 'Long Range'],
    ['Weight', '4,398 lbs'],
    ['*Acceleration', '3.5 s 0-60 mph with rollout subtracted'],
    ['Max Cargo Volume', '76 cu ft'],
    ['Range', '303 miles (EPA est.)'],
    ['Top Speed', '155 mph'],
    ['Drive', 'Dual Motor All-Wheel Drive'],
    ['Displays', '15" Center Touchscreen'],
    ['Seating', 'Up to 5'],
    ['Supercharging Max/Payment Type', '250 kW Max; Pay Per Use'],
    ['Wheels', '21"'],
    ['Warranty', 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'],
]
const longRangeSpecsData: SpecsType[] = [
    ['Battery', 'Long Range'],
    ['Weight', '4,363 lbs'],
    ['*Acceleration', '4.8 s 0-60 mph'],
    ['Max Cargo Volume', '76 cu ft'],
    ['Range', '330 miles (EPA est.)'],
    ['Top Speed', '135 mph'],
    ['Drive', 'Dual Motor All-Wheel Drive'],
    ['Displays', '15" Center Touchscreen'],
    ['Seating', 'Up to 7'],
    ['Supercharging Max/Payment Type', '250 kW Max; Pay Per Use'],
    ['Wheels', '19" or 20"'],
    ['Warranty', 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'],
]

const SpecsAndOrder = () => {
    return (
        <>
            <Specs title={'Model Y'}
                   firstSpecsData={performanceSpecsData}
                   secondSpecsData={longRangeSpecsData}
                   backgroundImage={modelYBlack}
                   fistButtonName={'Performance'}
                   secondButtonName={'Long Range AWD'}
            />
            <Order carName={'Model Y'} backgroundImage={sideModelY}/>
        </>
    );
};

export default SpecsAndOrder;