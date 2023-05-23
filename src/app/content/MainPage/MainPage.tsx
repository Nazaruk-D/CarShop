import React, {useEffect, useState} from 'react';
import s from './MainPage.module.scss'
import {scroller} from 'react-scroll'
import Header from "../../header/Header";
import Model3 from "./Model3/Model3";
import ModelY from "./ModelY/ModelY";
import ModelS from "./ModelS/ModelS";
import ModelX from "./ModelX/ModelX";
import SolarPanels from "./SolarPanels/SolarPanels";
import SolarRoof from "./SolarRoof/SolarRoof";
import Accessories from "./Accessories/Accessories";
import UpArrow from "../../../common/components/UpArrow/UpArrow";


const cars = ['Model 3', 'Model Y', 'Model S', 'Model X', 'Solar Panels', 'Solar Roof', 'Accessories']

const MainPage = () => {
    const [scroll, setScroll] = useState(0)
    let shouldWait = false

    const scrollUp = () => {
        if (!shouldWait) {
            setScroll((prev: number) => prev + 1)
            shouldWait = true
            setTimeout(function () {
                shouldWait = false
            }, 200)
        }
    }
    const scrollDown = () => {
        if (!shouldWait) {
            setScroll((prev: number) => prev - 1)
            shouldWait = true
            setTimeout(function () {
                shouldWait = false
            }, 200)
        }
    }
    const handleWheelScroll = (e: WheelEvent) => {
        if (e.deltaY > 10) {
            scrollUp()
        } else if (e.deltaY < -10) {
            scrollDown()
        }
    };
    const handleArrowScroll = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            scrollUp()
        }
        if (e.key === "ArrowUp") {
            scrollDown()
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", (e) => handleWheelScroll(e))
        return window.removeEventListener("wheel", (e) => handleWheelScroll(e))
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", (e) => handleArrowScroll(e))
        return window.removeEventListener("keydown", (e) => handleArrowScroll(e))
    }, []);

    useEffect(() => {
        if (scroll > cars.length - 1) {
            setScroll(cars.length - 1)
        }
        if (scroll < 0) {
            setScroll(0)
        }
    }, [scroll, cars])


    useEffect(() => {
        setTimeout(function () {
            scroller.scrollTo(cars[scroll], {
                duration: 200,
                smooth: true,
                offset: 0,
            })
        }, 210)
    }, [scroll])

    return (
        <div className={s.contentContainer}>
            <Header position={'fixed'}/>
            <Model3/>
            <ModelY/>
            <ModelS/>
            <ModelX/>
            <SolarPanels/>
            <SolarRoof/>
            <Accessories/>
        </div>
    );
};

export default MainPage;