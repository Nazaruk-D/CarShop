import React, {useContext, useEffect, useState} from 'react';
import s from "./Gallery.module.scss"
import {IoIosArrowBack, IoIosArrowForward, IoIosArrowUp} from "react-icons/io";
import image from "../../../../../common/assets/orders/modelY/compositorY.jpg"
import blackInterior from "../../../../../common/assets/orders/model3/Model3_Black.jpg"
// @ts-ignore
import video1 from "../../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4"
import VideoPlayer from "../../../../../common/components/VideoPlayer/VideoPlayer";
import {useAppSelector} from "../../../../store/store";
import {Context, ContextType} from "../../Context";

const Fade = require("react-reveal/Fade")

const Gallery = () => {
    const totalPrice = useAppSelector(s => s.order.totalPrice)
    const [isArrowActive, setIsArrowActive] = useState(false)
    const [context, setContext] = useContext<ContextType>(Context);
    const [isActive, setIsActive] = useState(1)

    useEffect(() => {
        if(context === "Title") {
            setIsActive(1)
        } else if (context === "Paint") {
            setIsActive(1)
        } else if (context === "Wheels") {
            setIsActive(1)
        } else if (context === "Interior") {
            setIsActive(2)
        } else if (context === "Autopilot") {
            setIsActive(3)
        } else if (context === "Order") {
            setIsActive(4)
        }
    },[context])

    return (
        <>
            <div className={s.container}></div>
            <div className={s.galleryContainer} onMouseEnter={() => setIsArrowActive(true)}
                 onMouseLeave={() => setIsArrowActive(false)}>
                <div className={s.leftArrowContainer}>
                    {isArrowActive &&
                        <Fade left>
                            <div className={s.leftArrowBlock}>
                                <IoIosArrowBack size={"20px"}/>
                            </div>
                        </Fade>
                    }
                </div>
                <div className={s.imageBlock}>
                    {isActive === 1 &&<div className={s.image} style={{backgroundImage: `url(${image})`}}></div>}
                    {isActive === 2 &&<div className={s.image} style={{backgroundImage: `url(${blackInterior})`}}></div>}
                    {isActive === 3 && <VideoPlayer link={video1}/>}
                    {isActive === 4 &&<div className={s.image} style={{backgroundImage: `url(${image})`}}></div>}
                </div>
                <div className={s.counterContainer}>
                    <div className={s.arrow}><IoIosArrowUp size={"20px"}/></div>
                    <div className={s.price}>${totalPrice} Vehicle Price</div>
                </div>
                <div className={s.rightArrowContainer}>
                    {isArrowActive &&
                        <Fade right>
                            <div className={s.rightArrowBlock}>
                                <IoIosArrowForward size={"20px"}/>
                            </div>
                        </Fade>
                    }
                </div>
            </div>
        </>
    );
};

export default Gallery;