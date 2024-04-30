import React, {useEffect, useState} from 'react';
import {Context} from "../Context";
import s from "../Ordering.module.scss";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import Gallery from "../common/Gallery/Gallery";
import {modelSData} from "./ModelSData";
//@ts-ignore
import video from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import interior from "../../../../common/assets/orders/modelS/interior_models.jpg"
import Modification from "../common/Modification/Modification";
import modelSRed from "../../../../common/assets/orders/modelS/modelSRed.png";
import modelSBlue from "../../../../common/assets/orders/modelS/modelSBlue.png";
import modelSWhite from "../../../../common/assets/orders/modelS/modelSWhite.png";
import modelSGray from "../../../../common/assets/orders/modelS/modelSGray.png";
import modelSBlack from "../../../../common/assets/orders/modelS/modelSBlack.png";
import {ModelImages} from "../../../../types/DataType";

const modelSImages: ModelImages = {
    red: modelSRed,
    blue: modelSBlue,
    white: modelSWhite,
    gray: modelSGray,
    black: modelSBlack
}

const ModelSOrder = () => {
    const [context, setContext] = useState("default context value");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery images={modelSImages} interior={interior} video={video}/>
                <Modification modelData={modelSData}/>
            </div>
        </Context.Provider>
    );
};

export default ModelSOrder;