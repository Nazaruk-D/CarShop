import React from 'react';
import s from './Displays.module.scss'
// @ts-ignore
import video from '../../../../../common/assets/video/ModelSDisplay.mp4'

const Displays = () => {
    return (
        <div className={s.displaysContainer}>
            <div className={s.videoBlock}>
                <div className={s.video}>
                    <video
                        autoPlay
                        id="my-player"
                        className={s.videoJs}
                        preload="auto"
                        muted
                        playsInline
                        controls={false}
                        data-autoplay-desktop={true}
                        data-autoplay-portrait={true}
                        data-autoplay-mobile={true}
                        data-play-on-hover={false}
                        loop
                        data-setup='{}'>
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.fullDescription}>
                    <div className={s.title}>Cinematic Experience</div>
                    <div className={s.description}>A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution,
                        true colors and exceptional responsiveness for gaming, movies and more.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Displays;