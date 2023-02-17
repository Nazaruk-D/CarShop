import React from 'react';
import Specs, {SpecsType} from "../../commonComponents/Specs/Specs";
import Order from "../../commonComponents/Order/Order";
//@ts-ignore
import model3Black from "../../../../../common/assets/model3Black.jfif";
//@ts-ignore
import sideModel3 from "../../../../../common/assets/sideModel3.jfif";

const performanceSpecsData: SpecsType[] = [
    ['Battery', 'Long Range'],
    ['Weight', '4,048 lbs'],
    ['*Acceleration', '3.1 s 0-60 mph with rollout subtracted'],
    ['Max Cargo Volume', '23 cu ft'],
    ['Range', '315 miles (EPA est.)'],
    ['Drive', 'Dual Motor All-Wheel Drive'],
    ['Displays', '15" Center Touchscreen'],
    ['Seating', '5 Adults'],
    ['Onboard Charger Max', '11.5 kW max (48A)'],
    ['Supercharging Max/Payment Type', '250 kW Max; Pay Per Use'],
    ['Wheels', '20"'],
    ['Warranty', 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'],
]
const longRangeSpecsData: SpecsType[] = [
    ['Battery', 'Long Range'],
    ['Weight', '4,034 lbs'],
    ['Acceleration', '4.2 s 0-60 mph'],
    ['Max Cargo Volume', '23 cu ft'],
    ['Range', '358 miles (EPA est.)'],
    ['Drive', 'Dual Motor All-Wheel Drive'],
    ['Displays', '15" Center Touchscreen'],
    ['Seating', '5 Adults'],
    ['Onboard Charger Max', '11.5 kW max (48A)'],
    ['Supercharging Max/Payment Type', '250 kW Max; Pay Per Use'],
    ['Wheels', '18" or 19"'],
    ['Warranty', 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'],
]

const SpecsAndOrder = () => {
    return (
        <>
            <Specs title={'Model 3'}
                   firstSpecsData={performanceSpecsData}
                   secondSpecsData={longRangeSpecsData}
                   backgroundImage={model3Black}
                   fistButtonName={'Performance'}
                   secondButtonName={'Long Range AWD'}
            />
            <Order carName={'Model 3'} backgroundImage={sideModel3}/>
        </>
    );
};

export default SpecsAndOrder;