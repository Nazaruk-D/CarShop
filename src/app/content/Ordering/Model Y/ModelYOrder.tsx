import React, {useState} from 'react';
import s from "./../Ordering.module.scss"
import Modification from "./Modification/Modification";
import Gallery from "./Gallery/Gallery";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import {Context} from "../Context";


const ModelYOrder = () => {
    const [context, setContext] = useState("default context value");
    return (
        <Context.Provider value={[context, setContext]}>
            <div className={s.orderingContainer}>
                <HeaderBlock/>
                <Gallery/>
                <Modification/>
            </div>
        </Context.Provider>
    );
};

export default ModelYOrder;