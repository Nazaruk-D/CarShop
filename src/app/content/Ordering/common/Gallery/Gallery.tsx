import React, {FC, useContext, useEffect, useState} from 'react';
import s from "./Gallery.module.scss"
import {IoIosArrowBack, IoIosArrowForward, IoIosArrowUp} from "react-icons/io";
import VideoPlayer from "../../../../../common/components/VideoPlayer/VideoPlayer";
import {useAppSelector} from "../../../../store/store";
import {Context, ContextType} from "../../Context";
import OrderConfirmation from "../../OrderСonfirmation/OrderСonfirmation";
import {useModal} from "../../../../../hooks/useModal";
import {ModelImages} from "../../../../../types/DataType";

const Fade = require("react-reveal/Fade")

type GalleryPropsType = {
    images: ModelImages
    interior: string
    video: string
}

const Gallery: FC<GalleryPropsType> = ({images, interior, video}) => {
    const totalPrice = useAppSelector(s => s.order.totalPrice)
    const [isArrowActive, setIsArrowActive] = useState(false)
    const [context, setContext] = useContext<ContextType>(Context);
    const [isActive, setIsActive] = useState(1)
    const {orderConfirmationModal, toggleOrderConfirmationModal} = useModal()

    const [currentImage, setCurrentImage] = useState(images.gray)
    const modelOrderColor = useAppSelector(s => s.order?.order?.color?.title);

    useEffect(() => {
        if (modelOrderColor === 'Pearl White Multi-Coat') {
            setCurrentImage(images.white);
        }
        if (modelOrderColor === 'Midnight Silver Metallic') {
            setCurrentImage(images.gray);
        }
        if (modelOrderColor === 'Deep Blue Metallic') {
            setCurrentImage(images.blue);
        }
        if (modelOrderColor === 'Solid Black') {
            setCurrentImage(images.black);
        }
        if (modelOrderColor === 'Red Multi-Coat') {
            setCurrentImage(images.red);
        }
    }, [modelOrderColor]);

    useEffect(() => {
        if (context === "Title") {
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
    }, [context])

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
                    {isActive === 1 && <div className={s.image} style={{backgroundImage: `url(${currentImage})`}}></div>}
                    {isActive === 2 && <div className={s.image} style={{backgroundImage: `url(${interior})`}}></div>}
                    {isActive === 3 && <VideoPlayer link={video}/>}
                    {isActive === 4 && <div className={s.image} style={{backgroundImage: `url(${currentImage})`}}></div>}
                </div>
                <div className={s.counterContainer}>
                    <div className={s.arrow} onClick={() => toggleOrderConfirmationModal()}>
                        <IoIosArrowUp size={"20px"}/>
                    </div>
                    <div className={s.price}>
                        ${totalPrice} Vehicle Price
                    </div>
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
            {orderConfirmationModal && <OrderConfirmation setSecondModalActive={()=>{}} setModalActive={toggleOrderConfirmationModal} hide={toggleOrderConfirmationModal}/>}
        </>
    );
};

export default Gallery;