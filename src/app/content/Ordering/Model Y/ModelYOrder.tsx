import React, {useEffect, useState} from 'react';
import s from "./../Ordering.module.scss"
import Gallery from "../common/Gallery/Gallery";
import HeaderBlock from "../common/HeaderBlock/HeaderBlock";
import {Context} from "../Context";
import {modelYData} from "./ModelYData";
//@ts-ignore
import video from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import image from "../../../../common/assets/orders/modelY/compositorY.jpg"
import interior from "../../../../common/assets/orders/modelY/interior_modely.jpg"
import Modification from "../common/Modification/Modification";

const ModelYOrder = () => {
    const [context, setContext] = useState("default context value");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery image={image} video={video} interior={interior}/>
                <Modification modelData={modelYData}/>
            </div>
        </Context.Provider>
    );
};

export default ModelYOrder;