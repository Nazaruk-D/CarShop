import React, {useEffect, useState} from 'react';
import {Context} from "../Context";
import s from "../Ordering.module.scss";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import Gallery from "../common/Gallery/Gallery";
import {modelXData} from "./ModelXData";
//@ts-ignore
import video from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import image from "../../../../common/assets/orders/modelX/compositorX.jpg"
import interior from "../../../../common/assets/orders/modelX/interiorX.jpg"
import Modification from "../common/Modification/Modification";


const ModelXOrder = () => {
    const [context, setContext] = useState("default context value");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery image={image} interior={interior} video={video}/>
                <Modification modelData={modelXData}/>
            </div>
        </Context.Provider>
    );
};

export default ModelXOrder;