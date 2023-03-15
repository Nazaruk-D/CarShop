import React from 'react';
import s from './Preloader.module.scss'
import VideoPlayer from "../VideoPlayer/VideoPlayer";
// @ts-ignore
import loading from "../../assets/video/loading.mp4";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <VideoPlayer link={loading} style={{width: "53px"}}/>
        </div>
    );
};

export default Preloader;