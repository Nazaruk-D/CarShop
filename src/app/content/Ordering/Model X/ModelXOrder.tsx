import React, {useEffect, useState} from 'react';
import {Context} from "../Context";
import s from "../Ordering.module.scss";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import Gallery from "../common/Gallery/Gallery";
import {modelXData} from "./ModelXData";
//@ts-ignore
import video from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import interior from "../../../../common/assets/orders/modelX/interiorX.jpg"
import Modification from "../common/Modification/Modification";
import modelXRed from "../../../../common/assets/orders/modelX/modelXRed.png";
import modelXBlue from "../../../../common/assets/orders/modelX/modelXBlue.png";
import modelXWhite from "../../../../common/assets/orders/modelX/modelXWhite.png";
import modelXGray from "../../../../common/assets/orders/modelX/modelXGray.png";
import modelXBlack from "../../../../common/assets/orders/modelX/modelXBlack.png";
import {ModelImages} from "../../../../types/DataType";

const modelXImages: ModelImages = {
    red: modelXRed,
    blue: modelXBlue,
    white: modelXWhite,
    gray: modelXGray,
    black: modelXBlack
}

const ModelXOrder = () => {
    const [context, setContext] = useState("default context value");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery images={modelXImages} interior={interior} video={video}/>
                <Modification modelData={modelXData}/>
            </div>
        </Context.Provider>
    );
};

export default ModelXOrder;