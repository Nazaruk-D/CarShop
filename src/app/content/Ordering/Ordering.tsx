import React from 'react';
import s from "./Ordering.module.scss"
import Gallery from "./Gallery/Gallery";
import Modification from "./Modification/Modification";
import HeaderBlock from "./HeaderBlock/HeaderBlock";

const Ordering = () => {
    return (
        <div className={s.orderingContainer}>
            <HeaderBlock/>
            <Gallery/>
            <Modification/>
        </div>
    );
};

export default Ordering;