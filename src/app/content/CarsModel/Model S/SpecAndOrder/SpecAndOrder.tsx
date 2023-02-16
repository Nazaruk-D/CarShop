import React from 'react';
import Specs, {SpecsType} from "../../commonComponents/Specs/Specs";
// @ts-ignore
import modelSBlack from "../../../../../common/assets/Model-S-Specs-Hero-Desktop-LHD.jfif";
import Order from "../../commonComponents/Order/Order";
// @ts-ignore
import sideModelS from "../../../../../common/assets/Model-S-Order-Hero-Desktop-Mobile-Global.jfif";


const modelSPlaidSpecsData: SpecsType[] = [
    ['Range (EPA est.)', '396 mi'],
    ['1/4 Mile', '9.23@155 mph trap speed'],
    ['Peak Power', '1,020 hp'],
    ['Wheels', '19" or 21"'],
    ['Cargo', '28 cu ft'],
    ['Weight', '4,766 lbs'],
    ['*Acceleration', '1.99 s 0-60 mph with rollout subtracted'],
    ['†Top Speed', '200 mph when equipped with paid hardware upgrades'],
    ['Drag Coefficient', '0.208 Cd'],
    ['Powertrain', 'Tri Motor'],
    ['Supercharging Max', '250 kW'],
    ['Warranty', 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first'],
]
const modelSSpecsData: SpecsType[] = [
    ['Range (EPA est.)', '405 mi'],
    ['Peak Power', '670 hp'],
    ['Wheels', '19" or 21"'],
    ['Cargo', '28 cu ft'],
    ['Acceleration', '3.1 s 0-60 mph'],
    ['Top Speed', '149 mph'],
    ['Drag Coefficient', '0.208 Cd'],
    ['Weight', '4,561 lbs'],
    ['Powertrain', 'Dual Motor'],
    ['Supercharging Max', '250 kW'],
]


const SpecAndOrder = () => {
    return (
        <>
            <Specs title={'Model S'}
                   firstSpecsData={modelSPlaidSpecsData}
                   secondSpecsData={modelSSpecsData}
                   backgroundImage={modelSBlack}
                    fistButtonName={'Model S Plaid'}
                   secondButtonName={'Model S'}
            />
            <Order carName={'Model S'} backgroundImage={sideModelS}/>
        </>
    );
};

export default SpecAndOrder;