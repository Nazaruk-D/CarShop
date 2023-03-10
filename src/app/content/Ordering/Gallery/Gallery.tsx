import React from 'react';
import s from "./Gallery.module.scss"

const Gallery = () => {
    return (
        <div className={s.galleryContainer}>
            <div className={s.leftArrow}>left</div>
            <div className={s.imageBlock}>image</div>
            <div className={s.rightArrow}>right</div>
        </div>
    );
};

export default Gallery;