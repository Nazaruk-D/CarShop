import React, {useState} from 'react';
import s from "./../Ordering.module.scss"
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import {Context} from "../Context";
import Gallery from "../common/Gallery/Gallery";
import {model3Data} from "./Model3Data";
//@ts-ignore
import video from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import interior from "../../../../common/assets/orders/model3/Model3_Black.jpg"
import Modification from "../common/Modification/Modification";
import model3Red from "../../../../common/assets/orders/model3/model3Red.jpg";
import model3Blue from "../../../../common/assets/orders/model3/model3Blue.jpg";
import model3White from "../../../../common/assets/orders/model3/model3White.jpg";
import model3Gray from "../../../../common/assets/orders/model3/model3Gray.jpg";
import model3Black from "../../../../common/assets/orders/model3/model3Black.jpg";
import {ModelImages} from "../../../../types/DataType";

const model3Images: ModelImages = {
    red: model3Red,
    blue: model3Blue,
    white: model3White,
    gray: model3Gray,
    black: model3Black
}

const Model3Order = () => {
    const [context, setContext] = useState("default context value");
    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery interior={interior} video={video} images={model3Images}/>
                <Modification modelData={model3Data}/>
            </div>
        </Context.Provider>
    );
};

export default Model3Order;