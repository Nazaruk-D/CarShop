import React, {useState} from 'react';
import s from "./Gallery.module.scss"
import {IoIosArrowBack, IoIosArrowForward, IoIosArrowUp} from "react-icons/io";
import image from "./../../../../common/assets/orders/model3/compositor.jpg"

const Fade = require("react-reveal/Fade")

const Gallery = () => {
    const [isArrowActive, setIsArrowActive] = useState(false)

    return (
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
            <div className={s.imageBlock} style={{backgroundImage: `url(${image})`}}>
                <div className={s.image}></div>
            </div>
            <div className={s.counterContainer}>
                <div className={s.arrow}><IoIosArrowUp size={"20px"}/></div>
                <div className={s.price}>$53,990 Vehicle Price</div>
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
    );
};

export default Gallery;