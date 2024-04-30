import React, {useEffect, useState} from 'react';
import s from "./../Ordering.module.scss"
import Gallery from "../common/Gallery/Gallery";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import {Context} from "../Context";
import {modelYData} from "./ModelYData";
//@ts-ignore
import video from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import modelYGray from "../../../../common/assets/orders/modelY/modelYGray.png"
import modelYWhite from "../../../../common/assets/orders/modelY/modelYWhite.png"
import modelYBlue from "../../../../common/assets/orders/modelY/modelYBlue.png"
import modelYBlack from "../../../../common/assets/orders/modelY/modelYBlack.png"
import modelYRed from "../../../../common/assets/orders/modelY/modelYRed.png"
import interior from "../../../../common/assets/orders/modelY/interior_modely.jpg"
import Modification from "../common/Modification/Modification";
import {ModelImages} from "../../../../types/DataType";

const modelYImages: ModelImages = {
    red: modelYRed,
    blue: modelYBlue,
    white: modelYWhite,
    gray: modelYGray,
    black: modelYBlack
}

const ModelYOrder = () => {
    const [context, setContext] = useState("default context value");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery images={modelYImages} video={video} interior={interior}/>
                <Modification modelData={modelYData}/>
            </div>
        </Context.Provider>
    );
};

export default ModelYOrder;