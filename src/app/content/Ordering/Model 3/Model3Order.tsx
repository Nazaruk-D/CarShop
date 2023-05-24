import React, {useState} from 'react';
import s from "./../Ordering.module.scss"
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import {Context} from "../Context";
import Gallery from "../common/Gallery/Gallery";
import {model3Data} from "./Model3Data";
//@ts-ignore
import video from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import image from "../../../../common/assets/orders/model3/compositor.jpg"
import interior from "../../../../common/assets/orders/model3/Model3_Black.jpg"
import Modification from "../common/Modification/Modification";

const Model3Order = () => {
    const [context, setContext] = useState("default context value");
    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery interior={interior} video={video} image={image}/>
                <Modification modelData={model3Data}/>
            </div>
        </Context.Provider>
    );
};

export default Model3Order;