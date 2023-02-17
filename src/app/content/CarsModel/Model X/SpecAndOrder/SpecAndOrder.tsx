import React from 'react';
import Specs, {SpecsType} from "../../commonComponents/Specs/Specs";
// @ts-ignore
import modelXBlack from "../../../../../common/assets/Model-X-Specs-Hero-Desktop-LHD.jfif";
import Order from "../../commonComponents/Order/Order";
// @ts-ignore
import sideModelX from "../../../../../common/assets/Model-X-Order-Hero-Desktop-Mobile-Global.jfif";


const modelSPlaidSpecsData: SpecsType[] = [
    ['Range (EPA est.)', '333 mi'],
    ['1/4 Mile', '9.9 s'],
    ['Peak Power', '1,020 hp'],
    ['Wheels', '20" or 22"'],
    ['Towing', '5,000 lbs'],
    ['Seating', 'Up to 6'],
    ['*Acceleration', '2.5 s 0-60 mph with rollout subtracted'],
    ['†Top Speed', '163 mph'],
    ['Drag Coefficient', '0.24 Cd'],
    ['Weight', '5,390 lbs'],
    ['Supercharging Max', '250 kW'],
    ['Powertrain', 'Tri Motor'],
]
const modelSSpecsData: SpecsType[] = [
    ['Range (EPA est.)', '348 mi'],
    ['Peak Power', '670 hp'],
    ['Wheels', '20" or 22"'],
    ['Towing', '5,000 lbs'],
    ['Seating', 'Up to 7'],
    ['Acceleration', '3.8 s 0-60 mph'],
    ['Top Speed', '155 mph'],
    ['Drag Coefficient', '0.24 Cd'],
    ['Weight', '5,185 lbs'],
    ['Powertrain', 'Dual Motor'],
    ['Supercharging Max', '250 kW'],
]


const SpecAndOrder = () => {
    return (
        <>
            <Specs title={'Model X'}
                   firstSpecsData={modelSPlaidSpecsData}
                   secondSpecsData={modelSSpecsData}
                   backgroundImage={modelXBlack}
                    fistButtonName={'Model X Plaid'}
                   secondButtonName={'Model X'}
            />
            <Order carName={'Model X'} backgroundImage={sideModelX}/>
        </>
    );
};

export default SpecAndOrder;