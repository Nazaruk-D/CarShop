import React, {useEffect, useState} from 'react';
import s from "./Ordering.module.scss"
import Gallery from "./Gallery/Gallery";
import Modification from "./Modification/Modification";
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import {scroller} from "react-scroll";

const Ordering = () => {

    // useEffect(() => {
    //     setTimeout(function () {
    //         scroller.scrollTo("", {
    //             duration: 200,
    //             smooth: true,
    //             offset: 0,
    //         })
    //     }, 210)
    // }, [scroll])

    const [xxx, setXXX] = useState("")
    const onClickHandler = () => {}


    return (
        <div className={s.orderingContainer}>
            <HeaderBlock/>
            <Gallery/>
            <Modification/>
        </div>
    );
};

export default Ordering;