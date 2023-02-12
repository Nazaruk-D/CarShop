import React from 'react';
import Header from "../../../header/Header";
import Car from "../../MainPage/Car/Car";
// @ts-ignore
import model3 from "../../../../common/assets/model3.jfif";
// @ts-ignore
import modelY from "../../../../common/assets/modelY.jfif";


const ModelS = () => {
    return (
        <div>
            <Header/>
            <Car backgroundImage={modelY} model={'Model Y'} firstButtonName={'Custom Order'}
                 secondButtonName={'Demo Drive'}/>
            <Car backgroundImage={model3} model={'Model 3'} conditions={'Leasing starting at $349/mo'}
                 firstButtonName={'Custom Order'} secondButtonName={'Demo Drive'}/>
        </div>
    );
};

export default ModelS;